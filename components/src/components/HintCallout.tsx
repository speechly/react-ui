import { SpeechState } from '@speechly/react-client'
import React, { useEffect, useRef, useState } from 'react'
import { SpeechlyUiEvents } from '../types'
import { Callout } from './Callout'

export const HintCallout: React.FC = props => {
  const [visible, setVisible] = useState<boolean>(false)
  const timeout = useRef<number | null>(null);

  useEffect(() => {
    const subTangentPress = PubSub.subscribe(
      SpeechlyUiEvents.TangentPress,
      (message: string, payload: { state: SpeechState }) => {
        console.log("Clear pending")
        hideHints();
      },
    )
    const subTangentClick = PubSub.subscribe(
      SpeechlyUiEvents.TangentRelease,
      (message: string, payload: { state: SpeechState, timeMs: number }) => {
        if (payload.state === SpeechState.Recording && payload.timeMs < 350) {
          console.log("Set pending")
          if (timeout.current === null) {
              timeout.current = setTimeout(() => {
              setVisible(true);
              timeout.current = setTimeout(() => {
                setVisible(false);
                timeout.current = null;
              }, 3000);
            }, 500);
          }
        }
      }
    );
    return () => {
      PubSub.unsubscribe(subTangentPress)
      PubSub.unsubscribe(subTangentClick)
    }
  }, [])

  function hideHints() {
    setVisible(false);
    if (timeout.current !== null) {
      clearTimeout(timeout.current)
      timeout.current = null;
    }
  }

  return <Callout sourceAnchors={["50%","6%"]} visible={visible} onClick={() => hideHints()}>Hold to talk</Callout>
}
