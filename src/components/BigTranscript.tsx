import React, { useEffect, useRef } from 'react'
import { useSpeechContext } from '@speechly/react-client'
import { mapSpeechStateToClientState } from '../types'
import '@speechly/browser-ui/big-transcript'

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      'big-transcript': any
    }
  }
}

/**
 * Properties for BigTranscript component.
 *
 * @public
 */
export type BigTranscriptProps = {
  /**
   * Optional boolean. If true, transcript is formatted with detected entities, e.g. numbers. Default: true
   */
  formatText?: boolean
  /**
   * Optional CSS string for text size. Default: "1.5rem"
   */
  fontSize?: string
  /**
   * Optional string (CSS color) for text. Default: "#ffffff"
   */
  color?: string
  /**
   * Optional string (CSS color) for entity highlighting, vu meter and acknowledged icon. Default: "#15e8b5"
   */
  highlightColor?: string
  /**
   * Optional string (CSS color) for hint text background. Default: "#202020"
   */
  backgroundColor?: string
  /**
   * Optional string (CSS dimension). Dynamic margin added when element is visible. Default: "0rem"
   */
  marginBottom?: string
}

/**
 * A React component that renders the transcript and entities received from Speechly SLU API.
 *
 * The component is intended to be used for providing visual feedback to the speaker.
 *
 * @public
 */
export const BigTranscript: React.FC<BigTranscriptProps> = ({
  formatText,
  fontSize,
  color,
  highlightColor,
  backgroundColor,
  marginBottom = '2rem',
}) => {
  const { segment, speechState } = useSpeechContext()
  const refElement = useRef<any>()

  // Change button face according to Speechly states
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
    <big-transcript ref={refElement} formattext={(formatText !== null && formatText === false) ? 'true' : 'false'} fontsize={fontSize} color={color} highlightcolor={highlightColor} backgroundcolor={backgroundColor} marginbottom={marginBottom}></big-transcript>
  )
}
