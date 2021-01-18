import React, { useEffect } from 'react'
import { SpeechState, useSpeechContext } from '@speechly/react-client'
import { useSpring, animated } from 'react-spring'
import styled from 'styled-components'

export const Info: React.FC = props => {
  const { speechState } = useSpeechContext()
  const [springProps, setSpringProps] = useSpring(() => ({
    opacity: speechState === SpeechState.Idle ? 1 : 0,
  }))

  useEffect(() => {
    if (speechState === SpeechState.Idle) {
      setSpringProps({
        opacity: 1,
        config: { tension: 500 },
      })
    } else {
      setSpringProps({
        opacity: 0,
        delay: 0,
        config: { tension: 500 },
      })
    }
  }, [speechState])

  // Sorry, all we hear is silence
  return (
    <InfoDiv
      className="Warning"
      style={springProps}
    >
      <InfoItem><WarningIcon/>Bad audio. Please say again.</InfoItem>
    </InfoDiv>
  )
}

const InfoItem: React.FC = props => {
  const [springProps] = useSpring(() => ({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: { tension: 500 },
  }))

  return (
    <InfoItemDiv>
      <InfoItemBgDiv style={springProps} />
      <InfoItemContent
        style={{
          ...springProps,
        }}
      >
        {props.children}
      </InfoItemContent>
    </InfoItemDiv>
  )
}

const InfoDiv = styled(animated.div)`
  margin-top: 1.5rem;
  user-select: none;
`

const InfoItemDiv = styled(animated.div)`
  position: relative;
  display: inline-block;
`

const InfoItemContent = styled(animated.div)`
  z-index: 1;
  font-size: 1.2rem;
  color: #000;
  display: flex;
  flex-direction: row;
  align-items: center;
`

const InfoItemBgDiv = styled(animated.div)`
  position: absolute;
  box-sizing: content-box;
  width: 100%;
  height: 100%;
  margin: -0.5rem;
  padding: 0.5rem;
  background-color: #fc0;
  z-index: -1;
`

type ITaggedWord = {
  word: string
  serialNumber: number
  entityType: string | null
  isFinal: boolean
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
