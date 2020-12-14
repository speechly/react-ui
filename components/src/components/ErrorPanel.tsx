import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PubSub from 'pubsub-js'
import { SpeechState } from "@speechly/react-client";
import { SpeechlyUiEvents } from '../types';

const ErrorDiv = styled.div`
  box-sizing: border-box;
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: white;
  z-index: 51;
  user-select: none;
  pointer-events: all;
  color: black;
  display: flex;
  flex-direction: row;
`;

const ErrorLeft = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 2rem;
  background-color: red;
  padding: 0.2rem 0.2rem;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  font-size: 1.5rem;
`;

const ErrorRight = styled.div`
  background-color: white;
  padding: 1rem 3rem 1rem 1rem;
  overflow: auto;
`;

const H1 = styled.h1`
  font-size: 1.5rem;
  margin: 0;
  padding: 0 0 0.5rem 0;
`;

const P = styled.p`
  margin: 0;
  padding: 0 0 0.5rem 0;
  color: #999;
`;

const HttpsRequired = "HttpsRequired";

export const ErrorPanel: React.FC = props => {
  const [ visible, setVisible ] = useState<string | null>(null);

  useEffect(() => {
    const subTangentClick = PubSub.subscribe(SpeechlyUiEvents.TangentClick, (message: string, payload: {state: SpeechState}) => {
      switch (payload.state) {
        case SpeechState.NoAudioConsent:
        case SpeechState.NoBrowserSupport:
          if (window?.location?.protocol === "http:") {
            setVisible(HttpsRequired);
            break;
          }
          setVisible(payload.state);
          break;
        default:
          break;
      }
    })
    return () => {
      PubSub.unsubscribe(subTangentClick);
    }
  }, [])

  if (!visible) return null;

  return (
    <ErrorDiv>
      <ErrorLeft onClick={()=>setVisible(null)}>&times;</ErrorLeft>
        {visible === SpeechState.NoAudioConsent && 
          <ErrorRight>
            <H1>No Mic Permission</H1>
            <P>
              To use the voice interface, please allow your web browser access the microphone.
            </P>
            <P>
              <a href="https://docs.speechly.com/faq/#why-do-i-get-mic-consent-denied-error-in-the-playground-why-doesnt-my-microphone-work-in-the-playground">Troubleshooting</a>
            </P>
          </ErrorRight>
        }
        {visible === SpeechState.NoBrowserSupport && 
          <ErrorRight>
            <H1>Unsupported Browser</H1>
            <P>
              To use the voice interface, please visit this site using a supported browser.
            </P>
            <P>
              <a href="https://docs.speechly.com/faq/#the-microphone-doesnt-work-on-ios-and-mobile-safari">Troubleshooting</a>
            </P>
          </ErrorRight>
        }
        {visible === HttpsRequired && 
          <ErrorRight>
            <H1>HTTPS Required</H1>
            <P>
              To use the voice interface, please visit this site using the secure https:// protocol.
            </P>
            <P>
              <a href="https://docs.speechly.com/faq/#http-unsupported">Troubleshooting</a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href={window.location.href.replace(/^http(?!s)/, "https")}>Try with HTTPS</a>
            </P>
          </ErrorRight>
        }
    </ErrorDiv>
  )
};