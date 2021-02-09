import React, { useEffect } from 'react'
import { SpeechState, useSpeechContext } from '@speechly/react-client'
import { useSpring, animated, config } from 'react-spring'
import styled from 'styled-components'
import { SpeechlyUiEvents } from '../types'

type InfoProps = {
  visible: boolean;
}

export const Info: React.FC<InfoProps> = props => {
  const [springProps, setSpringProps] = useSpring(() => ({
    to: {
      opacity: 0,
      maxHeight: "0rem",
      marginTop: "0rem",
    }
  }))

  useEffect(() => {
    if (props.visible) {
      setSpringProps({
        to: async (next: any, cancel: any) => {
          await next({
            maxHeight: "10rem",
            marginTop: "1.5rem",
            opacity: 1,
          });
        },
        config: config.stiff,
      })
    } else {
      setSpringProps({
        to: async (next: any, cancel: any) => {
          await next({
            opacity: 0,
          });
          await next({
            maxHeight: "0rem",
            marginTop: "0rem",
          });
        },
        config: config.stiff,
      })
    }
  }, [props.visible])

  return (
    <InfoDiv onClick={() => PubSub.publish(SpeechlyUiEvents.DismissNotification)}
      className="Warning"
      style={springProps}
    >
      <InfoItem>{props.children}</InfoItem>
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
