import React, { useEffect } from 'react'
import { SpeechState, useSpeechContext } from '@speechly/react-client'
import styled from 'styled-components'
import { Info } from './Info'

export const Notifications: React.FC = props => {
  const { speechState } = useSpeechContext()

  return (
    <>
      <Info visible={speechState === SpeechState.Idle}>
        <WarningIcon/>Bad audio. Please say again.
      </Info>
      <Info visible={true}>
        <WarningIcon/>Sorry, all we hear is silence.
      </Info>
      <Info visible={true}>
        <WarningIcon/><div>Please say again<br/><small>Try: "Sneakers"</small></div>
      </Info>
      <Info visible={true}>
        <WarningIcon/><div>Could not find 'Good vibes pants'<br/><small>Try: "Sneakers"</small></div>
      </Info>
    </>
  )
}

const WarningIcon: React.FC = (props) => {
  return (
    <WarningIconSvg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.738.743a1.5 1.5 0 01.568.567l10.429 18.452A1.5 1.5 0 0122.429 22H1.571a1.5 1.5 0 01-1.306-2.238L10.695 1.31a1.5 1.5 0 012.043-.567zM8.5 13H7v1a5.001 5.001 0 004.25 4.944V21h1.5v-2.056A5.001 5.001 0 0017 14v-1h-1.5v1l-.005.192A3.5 3.5 0 0112 17.5l-.192-.005A3.5 3.5 0 018.5 14v-1zM12 6a2 2 0 00-2 2v6a2 2 0 104 0V8a2 2 0 00-2-2z" fill="#000" fillRule="evenodd"/></WarningIconSvg>
  )
}

const WarningIconSvg = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  margin-right: 0.5rem;
  margin-bottom: auto;
`
