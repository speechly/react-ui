import React from "react";
import { SpeechProvider, useSpeechContext } from "@speechly/react-client";
import {
  BigTranscript,
  BigTranscriptContainer,
  PushToTalkButton,
  PushToTalkButtonContainer,
} from "@speechly/react-ui";
// Run `sh initialize.sh` in the parent directory and uncomment this import to use local linked code.
// } from "./@speechly/react-ui";

export default function App() {
  const appId = process.env.REACT_APP_APP_ID ?? "define-your-app-id-here";
  console.log("Using appId:", appId);

  return (
    <div className="App">
      <SpeechProvider appId={appId} language="en-US">
        <BigTranscriptContainer>
          <BigTranscript />
        </BigTranscriptContainer>
        <SpeechlyApp />
        <PushToTalkButtonContainer>
          <PushToTalkButton captureKey=" " />
        </PushToTalkButtonContainer>
      </SpeechProvider>
    </div>
  );
}

function SpeechlyApp() {
  const { speechState, segment, toggleRecording } = useSpeechContext();

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
    </div>
  );
}
