import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PubSub from 'pubsub-js'
import { SpeechState } from '@speechly/react-client'
import { SpeechlyUiEvents } from '../types'

/*
const CalloutContainerDiv = styled.div<{ax: string, ay: string, halign: string, valign: string, offsetX: string, offsetY: string}>`
  position: absolute;
  left: ${props => `calc(${props.ax} - ${props.offsetX})`};
  top: ${props => `calc(${props.ay} - ${props.offsetY})`};
  transform: ${props => `translate(calc(-1 * ${props.halign}), calc(-1 * ${props.valign} - 0.5rem));`};
`
*/
const CalloutDiv = styled.div<{ax: string, ay: string, halign: string, valign: string}>`
  position: absolute;
  left: ${props => props.ax};
  top: ${props => props.ay};
  transform: ${props => `translate(calc(-1 * ${props.halign}), calc(-1 * ${props.valign} - 0.5rem));`};
  box-sizing: border-box;
  min-width: 8rem;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: #ffffff;
  box-shadow: 0 0.2rem 0.5rem #00000040;
  z-index: 10;

  text-align: center;
  user-select: none;
  color:#000;
`

const PointerDiv = styled.div<{ax: string, ay: string, offsetX: string, offsetY: string}>`
  position: absolute;
  left: ${props => `calc(${props.ax} - ${props.offsetX})`};
  top: ${props => `calc(${props.ay} - ${props.offsetY})`};

  transform: translate(-50%, -50%) rotate(45deg);
  width: 0.75rem;
  height: 0.75rem;
  background-color: #ffffff;
  z-index: 10;
`

const PointerShadowDiv = styled.div<{ax: string, ay: string, offsetX: string, offsetY: string}>`
  position: absolute;
  left: ${props => `calc(${props.ax} - ${props.offsetX})`};
  top: ${props => `calc(${props.ay} - ${props.offsetY})`};

  transform: translate(-50%, -50%) rotate(45deg);
  width: 0.75rem;
  height: 0.75rem;
  background-color: #00000000;
  box-shadow: 0 0.2rem 0.5rem #00000040;
  z-index: 9;
`

export const Callout: React.FC = props => {
  const [visible, setVisible] = useState<boolean>(true)

  if (!visible) return null

  return (
    <>
      <CalloutDiv ax="50%" ay="4%" halign="50%" valign="100%">Hold to talk</CalloutDiv>
      <PointerDiv ax="50%" ay="4%" offsetX="0rem" offsetY="0.5rem"/>
      <PointerShadowDiv ax="50%" ay="4%" offsetX="0rem" offsetY="0.5rem"/>
    </>
  )
}
