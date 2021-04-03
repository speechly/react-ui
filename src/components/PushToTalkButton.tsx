import React, {useCallback, useEffect, useRef, useState} from 'react'
import { SpeechState, useSpeechContext } from '@speechly/react-client'
import PubSub from 'pubsub-js'
import { SpeechlyUiEvents } from '../types'
import { HintCallout } from './HintCallout'
import 'browser-ui/holdable-button'

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

type IHoldableButton = React.HTMLAttributes<HTMLElement> & {
  capturekey?: string, icon?: string, size?: string, gradientstop1?: string, gradientstop2?: string
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "holdable-button": React.DetailedHTMLProps<IHoldableButton, HTMLElement>;
    }
  }
}
export const PushToTalkButton: React.FC<PushToTalkButtonProps> = ({
  captureKey,
  size = '6.0rem',
  gradientStops = ['#15e8b5', '#4fa1f9'],
}) => {
  const { speechState, toggleRecording, initialise } = useSpeechContext()
  const [ icon, setIcon ] = useState<string>("poweron")
  const buttonRef = useRef<any>()

  useEffect(() => {
    if (buttonRef && buttonRef.current) {
      const button = buttonRef.current;
      button.addEventListener("holdstart", tangentPressAction)
      button.addEventListener("holdend", tangentReleaseAction)

      return () => {
        button.removeEventListener("holdstart", tangentPressAction)
        button.removeEventListener("holdend", tangentReleaseAction)
      }
    }
  })

  // Change button face according to Speechly states
  useEffect(() => {
    switch (speechState) {
      case SpeechState.Idle:
        setIcon("poweron");
        break
      case SpeechState.Connecting:
        setIcon("connecting");
        break
      case SpeechState.Ready:
        setIcon("mic");
        break
      case SpeechState.Loading:
        setIcon("loading");
        break
      default:
        break
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speechState])

  const tangentPressAction = useCallback(() => {
    PubSub.publish(SpeechlyUiEvents.TangentPress, { state: speechState })

    switch (speechState) {
      case SpeechState.Ready:
        toggleRecording().catch(err => console.error('Error while starting to record', err))
        break
      default:
        break
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speechState])

  const tangentReleaseAction = useCallback((e) => {
    const timeMs = 0; // TODO, get from event
    PubSub.publish(SpeechlyUiEvents.TangentRelease, { state: speechState, timeMs })

    switch (speechState) {
      case SpeechState.Idle:
      case SpeechState.Failed:
        // Speechly & Mic initialise needs to be in a function triggered by event handler
        // otherwise it won't work reliably on Safari iOS as of 11/2020
        initialise().catch(err => console.error('Error initiasing Speechly', err))
        break
      case SpeechState.Recording:
        toggleRecording().catch(err => console.error('Error while stopping recording', err))
        break
      default:
        break
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [speechState])

  return (
    <div>
      <holdable-button ref={buttonRef} capturekey={captureKey} icon={icon} size={size} gradientstop1={gradientStops[0]} gradientstop2={gradientStops[1]}></holdable-button>
      <HintCallout/>
    </div>
  )
}
