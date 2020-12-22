import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PubSub from 'pubsub-js'
import { SpeechlyUiEvents } from '../types'
import { animated, useSpring } from 'react-spring'

const CalloutContainerDiv = styled(animated.div)<{ax: string, ay: string, halign: string, valign: string, arrowPad: string}>`
  position: absolute;
  left: ${props => `${props.ax}`};
  top: ${props => `${props.ay}`};
  transform: ${props => `translate(calc(-1 * ${props.halign}), calc(-1 * ${props.valign}));`};
  padding: ${props => `${props.arrowPad}`};
  z-index: 10;
  pointer-events: auto;
`

const CalloutDiv = styled.div`
  position: relative;
  box-sizing: border-box;
  min-width: 8rem;
  // border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: #000;
  // box-shadow: 0 0.2rem 0.5rem #00000040;

  text-align: center;
  user-select: none;
  color:#fff;
  z-index: 10;
`

const ArrowDiv = styled.div<{size: string, ax: string, ay: string, offsetX: string, offsetY: string}>`
  position: absolute;
  left: ${props => `calc(${props.ax} - ${props.offsetX})`};
  top: ${props => `calc(${props.ay} - ${props.offsetY})`};

  transform: translate(-50%, -50%) rotate(45deg);
  width: ${props => `${props.size}`};
  height: ${props => `${props.size}`};
  background-color: #000;
  z-index: 10;
`

/*
const ArrowShadowDiv = styled.div<{size: string, ax: string, ay: string, offsetX: string, offsetY: string}>`
  position: absolute;
  left: ${props => `calc(${props.ax} - ${props.offsetX})`};
  top: ${props => `calc(${props.ay} - ${props.offsetY})`};

  transform: translate(-50%, -50%) rotate(45deg);
  width: ${props => `${props.size}`};
  height: ${props => `${props.size}`};
  background-color: #00000000;
  box-shadow: 0 0.2rem 0.5rem #00000040;
  z-index: 9;
`
*/

type CalloutProps = {
  visible?: boolean,
  onClick?: () => void,
  sourceAnchors?: string[],
  destAnchors?: string[],
  cssUnit?: string,
  arrowSize?: number,
}

export const Callout: React.FC<CalloutProps> = ({
  children,
  onClick = () => {},
  sourceAnchors = ["50%", "5%"],
  destAnchors = ["50%", "100%"],
  visible = true,
  cssUnit = "rem",
  arrowSize = 0.5
}) => {
  const springProps = useSpring({
    v: visible ? 1 : 0,
    config: { tension: 200 },
  });

  return (
    <CalloutContainerDiv ax={sourceAnchors[0]} ay={sourceAnchors[1]} halign={destAnchors[0]} valign={destAnchors[1]} arrowPad={`${arrowSize}${cssUnit}`} onClick={() => onClick()} style={{
      display: springProps.v.getValue() as number > 0 ? "block" : "hidden",
      clipPath: springProps.v.interpolate(x => `circle(${x as number * 100}% at center)`)
    }}>
      <CalloutDiv>{children}</CalloutDiv>
      <ArrowDiv size={`${arrowSize * Math.sqrt(2)}${cssUnit}`} ax="50%" ay="100%" offsetX="0rem" offsetY={`${arrowSize}${cssUnit}`}/>
    </CalloutContainerDiv>
  )
}
