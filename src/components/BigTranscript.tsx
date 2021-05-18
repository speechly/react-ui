import React, { useEffect } from 'react'
import { useSpeechContext } from '@speechly/react-client'
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
 * A React component that renders the transcript and entities received from Speechly SLU API.
 *
 * The component is intended to be used for providing visual feedback to the speaker.
 *
 * @public
 */
export const BigTranscript: React.FC = props => {
  const { segment } = useSpeechContext()

  useEffect(() => {
    window.postMessage({ type: 'speechsegment', segment: segment }, '*')
  }, [segment])

  return (
    <big-transcript></big-transcript>
  )
}
