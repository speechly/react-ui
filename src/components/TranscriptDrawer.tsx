import React, { useEffect, useRef, useState } from 'react'
import { SpeechSegment, useSpeechContext } from '@speechly/react-client'
import { mapSpeechStateToClientState } from '../types'
import { BigTranscriptProps } from './BigTranscript'
import '@speechly/browser-ui/transcript-drawer'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'transcript-drawer': any
    }
  }
}

/**
 * Properties for BigTranscript component.
 *
 * @public
 */
export type TranscriptDrawerProps = BigTranscriptProps & {
  /**
   * Optional hint text or array
   */
  hint?: string | string[]
  /**
   * Optional minimum height as CSS string. Default: "8rem"
   */
  height?: string
  /**
   * Optional string (CSS color) for hint text. Default: "#ffffff70"
   */
  smallTextColor?: string
  /**
   * Optional CSS string for hint text size. Default: "0.9rem"
   */
  hintFontSize?: string
  /**
   * Optional SpeechSegment to be displayed instead of actual transcription from API
   */
  mockSegment?: SpeechSegment | undefined
}

/**
 * A React component that renders the transcript and entities received from Speechly SLU API.
 *
 * The component is intended to be used for providing visual feedback to the speaker.
 *
 * @public
 */
export const TranscriptDrawer: React.FC<TranscriptDrawerProps> = props => {
  const { segment, speechState } = useSpeechContext()
  const refElement = useRef<any>()
  const [demoMode, setDemoMode] = useState(false)

  useEffect(() => {
    if (refElement?.current !== undefined) {
      refElement.current.speechstate(mapSpeechStateToClientState(speechState))
    }
  }, [speechState])

  useEffect(() => {
    if (refElement?.current !== undefined && segment !== undefined) {
      setDemoMode(false)
      refElement.current.speechsegment(segment)
    }
  }, [segment])

  useEffect(() => {
    if (refElement?.current !== undefined && props.mockSegment !== undefined) {
      setDemoMode(true)
      refElement.current.speechsegment(props.mockSegment)
    }
  }, [props.mockSegment])

  return (
    <transcript-drawer ref={refElement} demomode={demoMode ? 'true' : 'false'} formattext={props.formatText === false ? 'false' : 'true'} fontsize={props.fontSize} color={props.color} smalltextcolor={props.smallTextColor} highlightcolor={props.highlightColor} backgroundcolor={props.backgroundColor} marginbottom={props.marginBottom} hint={JSON.stringify(props.hint)} height={props.height} hintfontsize={props.hintFontSize}></transcript-drawer>
  )
}
