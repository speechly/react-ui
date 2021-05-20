import React, { useEffect, useRef } from 'react'
import { useSpeechContext } from '@speechly/react-client'
import { mapSpeechStateToClientState } from '../types'
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
 * A React component that renders the transcript and entities received from Speechly SLU API.
 *
 * The component is intended to be used for providing visual feedback to the speaker.
 *
 * @public
 */
export const TranscriptDrawer: React.FC = props => {
  const { segment, speechState } = useSpeechContext()
  const refElement = useRef<any>()

  useEffect(() => {
    if (refElement?.current) {
      refElement.current.speechstate(mapSpeechStateToClientState(speechState));
    }
  }, [speechState])

  
  useEffect(() => {
    if (refElement?.current) {
      refElement.current.speechsegment(segment)
    }
  }, [segment])

  return (
    <transcript-drawer ref={refElement} hint='Try: "Eat your shorts"'></transcript-drawer>
  )
}
