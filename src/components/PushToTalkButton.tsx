import React, { useEffect, useRef, useState } from 'react'
import { SpeechState, useSpeechContext } from '@speechly/react-client'
import PubSub from 'pubsub-js'
import { SpeechlyUiEvents } from '../types'
import { HintCallout } from './HintCallout'
import '@speechly/browser-ui/holdable-button'

/**
 * Properties for PushToTalkButton component.
 *
 * @public
 */
export type PushToTalkButtonProps = {
  /**
   * Keyboard key to use for controlling the button.
   * Passing e.g. ` ` (a spacebar) will mean that holding down the spacebar key will key the button pressed.
   */
  captureKey?: string

  /**
   * The size of the button, as CSS (e.g. `5rem`).
   */
  size?: string

  /**
   * Colours of the gradient around the button.
   * Valid input is an array of two hex colour codes, e.g. `['#fff', '#000']`.
   */
  gradientStops?: string[]
}

/**
 * A React component that renders a push-to-talk microphone button.
 *
 * Make sure to place this component inside your `SpeechProvider` component imported from `@speechly/react-client`.
 *
 * @public
 */

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'holdable-button': any
    }
  }
}
export const PushToTalkButton: React.FC<PushToTalkButtonProps> = ({
  captureKey,
  size = '6.0rem',
  gradientStops = ['#15e8b5', '#4fa1f9'],
}) => {
  const { speechState, toggleRecording, initialise } = useSpeechContext()
  const [icon, setIcon] = useState<string>(SpeechState.Idle as string)
  const buttonRef = useRef<any>()
  const speechStateRef = useRef<SpeechState>()

  // make stateRef always have the current count
  // your "fixed" callbacks can refer to this object whenever
  // they need the current value.  Note: the callbacks will not
  // be reactive - they will not re-run the instant state changes,
  // but they *will* see the current value whenever they do run
  speechStateRef.current = speechState

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (buttonRef?.current) {
      const button = buttonRef.current
      button.onholdstart = tangentPressAction
      button.onholdend = tangentReleaseAction
    }
  })

  // Change button face according to Speechly states
  useEffect(() => {
    console.log("Speechstate", speechState)
    window.postMessage({ type: "speechstate", state: speechState }, "*");
    setIcon(speechState as string)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speechState])

  const tangentPressAction = (): void => {
    PubSub.publish(SpeechlyUiEvents.TangentPress, { state: speechStateRef.current })
    window.postMessage({ type: 'holdstart' }, '*')
    switch (speechStateRef.current) {
      case SpeechState.Idle:
      case SpeechState.Failed:
        // Speechly & Mic initialise needs to be in a function triggered by event handler
        // otherwise it won't work reliably on Safari iOS as of 11/2020
        initialise().catch(err => console.error('Error initiasing Speechly', err))
        break
      case SpeechState.Ready:
        toggleRecording().catch(err => console.error('Error while starting to record', err))
        break
      default:
        break
    }
  }

  const tangentReleaseAction = (e: any): void => {
    PubSub.publish(SpeechlyUiEvents.TangentRelease, { state: speechStateRef.current, timeMs: e.timeMs })
    window.postMessage({ type: 'holdend' }, '*')

    switch (speechStateRef.current) {
      case SpeechState.Recording:
        toggleRecording().catch(err => console.error('Error while stopping recording', err))
        break
      default:
        break
    }
  }

  return (
    <div>
      <holdable-button ref={buttonRef} capturekey={captureKey} icon={icon} size={size} gradientstop1={gradientStops[0]} gradientstop2={gradientStops[1]}></holdable-button>
      <HintCallout/>
    </div>
  )
}
