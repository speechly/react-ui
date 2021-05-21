import React, { useEffect, useRef } from 'react'
import { useSpeechContext } from '@speechly/react-client'
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
   * Optional hint text
   */
  hint?: string
  /**
   * Optional minimum height as CSS string. Default: "8rem"
   */
  height?: string
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

  useEffect(() => {
    if (refElement?.current !== undefined) {
      refElement.current.speechstate(mapSpeechStateToClientState(speechState))
    }
  }, [speechState])

  useEffect(() => {
    if (refElement?.current !== undefined) {
      refElement.current.speechsegment(segment)
    }
  }, [segment])

  return (
    <transcript-drawer ref={refElement} formattext={props.formatText === false ? 'false' : 'true'} fontsize={props.fontSize} color={props.color} highlightcolor={props.highlightColor} backgroundcolor={props.backgroundColor} marginbottom={props.marginBottom} hint={props.hint} height={props.height}></transcript-drawer>
  )
}
