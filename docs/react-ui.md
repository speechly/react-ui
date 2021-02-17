## Introduction

`@speechly/react-ui` package is an optional component library for speeding up voice-enabled web app development using React and Speechly.

## Contents

- [Installation](installation)
- [Usage](usage)
- [PushToTalkButton component](push-to-talk-button-component)
- [BigTranscript component](bigtranscript-component)
- [ErrorPanel component](errorpanel-component)

## Installation

```sh
# Create a new React app
create-react-app .

# Install react-ui and react-client dependency
npm install --save @speechly/react-client
npm install --save @speechly/react-ui
```

### Usage

Import the files for required components:

```tsx
import { SpeechProvider } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel, BigTranscript, BigTranscriptContainer } from "@speechly/react-ui";
```

Place the components inside your `<SpeechProvider>` block since they depend on the context hook it provides.

```tsx
function App() {
  return (
    <SpeechProvider appId="speechly-app-id" language="en-US">
      <BigTranscriptContainer>
        <BigTranscript />
      </BigTranscriptContainer>

      <PushToTalkButtonContainer>
        <PushToTalkButton captureKey=" " />
        <ErrorPanel/>
      </PushToTalkButtonContainer>
    </SpeechProvider>
  );
}
```

Replace the `speechly-app-id` with the one for your trained speech model from [Speechly Dashboard](https://speechly.com/dashboard).

## Push-to-Talk Button component

`<PushToTalkButton/>` is a holdable button to control listening for voice input. The icon on the button shows the voice system state.

The Push-to-Talk button is intended to be placed as a floating button at the lower part of the screen using `<PushToTalkButtonContainer/>` so mobile users can react it with ease.

Desktop users can control it with an optional keyboard hotkey. Our hotkey recommendation is the spacebar.

The placement, size and colors of the button can be customised.

### States

1. Initial state (Power-on icon): Pressing the button initialises the Speechly API and may trigger the browser microphone permission prompt.

2. Ready (Mic icon). Waiting for user to press and hold the button to start listening.

3. Listening (Highlighted mic). This state is displayed when the component is being held down and Speechly listens for audio input.

4. Receiving transcript (Pulsating mic). This state may be briefly displayed when the button is released and Speechly finalizes the stream of results.

5. Error (Broken mic icon). In case of an error (usually during initialisation), the button turns into a broken mic symbol. If you have the optional `<ErrorPanel/>` component in your hierarchy, a description of the problem is displayed. Otherwise, you'll need to look into the browser console to discover the reason for the error.

### Customisation

- `<PushToTalkButtonContainer>` is a convenience container that places the button at the lower part of the screen. You may replace it with your own `<div>` or similar.

- The widget size is defined by the `size` property. Parameters are in css, e.g. `6rem`.

```tsx
<PushToTalkButton size="6rem" />
```

- Colors are defined by `gradientStops` property. Parameter is an array of 2 colors, e.g. ["#aaa","#ddd"].

```tsx
<PushToTalkButton gradientStops={["#aaa", "#ddd"]} />
```

## BigTranscript component

`<BigTranscript/>` is an overlay-style component for displaying real-time speech-to-text transcript.

It is intended to be placed as an overlay near top-left corner of the screen with `<BigTranscriptContainer>`. It is momentarily displayed and automatically hidden after the end of voice input.

The placement, typography and colors of the button can be customised. Recognized entities are tagged with css classes so they can be styled individually.

### Customisation

Styling like colors can be assigned to `.BigTranscript` container class and to different entity types by using `.Entity.<EntityName>` selector. Replace `<EntityName>` with the exact entity name defined in your SAL.

```css
.BigTranscript {
  color: #fff;
  font-family: "Organetto";
  font-size: 1.4rem;
  line-height: 1.15;
}

.BigTranscript .Entity {
  color: #909090;
}

.BigTranscript .Entity.room {
  color: #1fd3f3;
}

.BigTranscript .Entity.device {
  color: #1fd3f3;
}
```

## ErrorPanel component

`<ErrorPanel/>` is a normally hidden panel for voice-related error messages and recovery instructions when there is a problem with voice functions, e.g. when accessing site via http or if microphone permission is denied or unsupported in browser.

`<ErrorPanel/>` is intended to be placed inside `<PushToTalkButtonContainer>` block. You may, however, place it anywhere in the component hierarchy.

It automatically shows if there is problem detected upon pressing the `<PushToTalkButton/>`. Internally, it uses `pubsub-js` for component to component communication.
