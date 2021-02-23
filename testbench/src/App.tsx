import React, { useEffect } from "react";
import { SpeechProvider, SpeechState, useSpeechContext } from "@speechly/react-client";
import {
  BigTranscript,
  BigTranscriptContainer,
  PushToTalkButton,
  PushToTalkButtonContainer,
  ErrorPanel,
  Notifications,
//} from "@speechly/react-ui";
// Run `sh initialize.sh` in the parent directory and uncomment this import to use local linked code.
} from "./@speechly/react-ui";
import {
  useSpring,
  animated,
  config,
} from 'react-spring'

export default function App() {
  const appId = process.env.REACT_APP_APP_ID ?? "define-your-app-id-here";
  console.log("Using appId:", appId);

  return (
    <div className="App">
      <SpeechProvider appId={appId} language="en-US">
        <BigTranscriptContainer>
          <BigTranscript />
          <Notifications/>
        </BigTranscriptContainer>
        <SpeechlyApp />
        <PushToTalkButtonContainer>
          <PushToTalkButton captureKey=" "/>
          <ErrorPanel/>
        </PushToTalkButtonContainer>
      </SpeechProvider>
    </div>
  );
}

function SpeechlyApp() {
  const { speechState, segment, toggleRecording } = useSpeechContext();
  const [springProps, setSpringProps] = useSpring(() => ({
    vuMeter: 0,
    to: {
      vuMeter: 0
    },
    onChange: ({vuMeter}: {vuMeter: number}) => {console.log(vuMeter as number)}
  }));

  useEffect(() => {
    if (segment) {
      setSpringProps({
        reset: true,
        from: {
          vuMeter: 1
        },
        to: {
          vuMeter: 0
        },
        onChange: ({vuMeter}: {vuMeter: number}) => {console.log(vuMeter as number)}
      });
    }
  }, [segment]);

  useEffect(() => {
    if (speechState === SpeechState.Recording) {
      setSpringProps({
        to: async (next: any, cancel: any) => {
          await next({
            vuMeter: 1,
            config: config.wobbly
          })
          await next({
            vuMeter: 0,
            config: config.stiff
          })
        }
      });
    }
  }, [speechState]);

  return (
    <div>
      <div className="status">{speechState}</div>
      {segment ? (
        <div className="segment">
          {segment.words.map((w) => w.value).join(" ")}
        </div>
      ) : null}
      <div className="mic-button">
        <button onClick={toggleRecording}>Record</button>
      </div>
      <animated.div style={{height:"20px", backgroundColor:"red", width: springProps.vuMeter.interpolate(x => `${(x as number)*120}px`)}}/>
    </div>
  );
}
