<h1 align="center">
<a href="https://www.speechly.com/?utm_source=github&utm_medium=react-ui&utm_campaign=header"><img src="https://www.speechly.com/images/logo.png" height="100" alt="Speechly"></a>
</h1>
<h2 align="center">
Complete your touch user interface with voice
</h2>

[Speechly website](https://www.speechly.com/?utm_source=github&utm_medium=react-ui&utm_campaign=header)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Docs](https://www.speechly.com/docs/?utm_source=github&utm_medium=react-client&utm_campaign=header)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[Blog](https://www.speechly.com/blog/?utm_source=github&utm_medium=react-client&utm_campaign=header)

# Speechly React UI components

![Release build](https://github.com/speechly/react-ui/workflows/Release%20build/badge.svg)
[![npm version](https://badge.fury.io/js/%40speechly%2Freact-ui.svg)](https://badge.fury.io/js/%40speechly%2Freact-ui)
[![License](http://img.shields.io/:license-mit-blue.svg)](LICENSE)

## Introduction

`@speechly/react-ui` package is an optional UI component library for speeding up voice-enabled web app development using React and Speechly.

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [PushToTalkButton component](#push-to-talk-button-component)
- [BigTranscript component](#bigtranscript-component)
- [ErrorPanel component](#errorpanel-component)
- [Notifications](#notifications)

## Installation

Create a React app (if starting from scratch), then install the required packages:

```sh
# Create a new React app in current folder
create-react-app .

# Install react-ui and react-client dependency
npm i @speechly/react-client
npm i @speechly/react-ui
```

## Usage

Import the required components (e.g. in `App.jsx`):

```tsx
import {
  SpeechProvider
} from "@speechly/react-client";

import {
  PushToTalkButton,
  PushToTalkButtonContainer,
  BigTranscript,
  BigTranscriptContainer,
  ErrorPanel
} from "@speechly/react-ui";
```

Place the components inside your `<SpeechProvider>` block since they depend on the context hook it provides.

```tsx
function App() {
  return (
    <SpeechProvider appId="014ce3a6-9bbf-4605-976f-087a8f3ec178" language="en-US">
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

To test it, run the app with `npm start`. If you used the default `appId` (Home Automation Demo), hold the push-to-talk button and try saying "Turn off the lights in the kitchen".

If you have already trained your own custom speech model, replace the `appId` with your own acquired from [Speechly Dashboard](https://speechly.com/dashboard).

### Further reading

- [Handling Speech Input in a React App in Speechly Blog](https://www.speechly.com/blog/handling-speech-input-in-a-react-app/)

## Push-to-Talk Button component

`<PushToTalkButton/>` is a holdable button to control listening for voice input.

The Push-to-Talk button is intended to be placed as a floating button at the lower part of the screen using `<PushToTalkButtonContainer/>` so mobile users can reach it with ease.

Desktop users can control it with an optional keyboard hotkey. Our hotkey recommendation is the spacebar.

The placement, size and colors of the button can be customised.

  > 
  > Use `<PushToTalkButton/>` to let users turn listening for voice input on and off
  > 

### States

The icon on the button displays the Speechly system state:

1. **Offline** (Power-on icon): Pressing the button initialises the Speechly API and may trigger the browser's microphone permission prompt. Shown during `SpeechlyState.Idle`

2. **Ready** (Mic icon). Waiting for user to press and hold the button to start listening. Shown during `SpeechlyState.Ready`

3. **Listening** (Highlighted mic). This state is displayed when the component is being held down and Speechly listens for audio input. Shown during `SpeechlyState.Recording`

4. **Receiving transcript** (Pulsating mic). This state may be briefly displayed when the button is released and Speechly finalizes the stream of results. Shown during `SpeechlyState.Loading`

5. **Error** (Broken mic icon). In case of an error (usually during initialisation), the button turns into a broken mic symbol. If you have the optional `<ErrorPanel/>` component in your hierarchy, a description of the problem is displayed. Otherwise, you'll need to look into the browser console to discover the reason for the error. Shown in case of `SpeechlyState.Failed`, `SpeechlyState.NoAudioConsent`, `SpeechlyState.NoBrowserSupport`

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

  > 
  > Use `<BigTranscript/>` to display real-time speech-to-text transcript for better feedback
  > 

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

  > 
  > Use `<ErrorPanel/>` to help users diagnose and recover from voice-related issues
  > 

## Notifications

Notifications are small messages that are intended to be momentarily displayed.

They are shown inside `<BigTranscriptContainer/>` at the top-left of the screen so it needs to be a part of your DOM.

Notifications can be cleared either programmatically or by tapping on them.

  >
  > Use Notifications to provide utterance examples and feedback, especially when the app is unable to respond to the user's utterance
  >

### Installation

`pubsub-js` package is used to communicate with the notification manager.

```
npm install --save pubsub-js
```

### Usage

Add the following lines to your header:

```
import PubSub from "pubsub-js";
import { SpeechlyUiEvents } from "@speechly/react-ui/types";
```

### Publishing a notification

```
PubSub.publish(SpeechlyUiEvents.Notification, {
  message: `Please say again`,
  footnote: `Try: "Blue jeans"`
});
```

The notification consists of a short main message (displayed in big typeface) and an optional footnote (displayed in smaller typeface).

One notification can be displayed at a time. A successive call will instantly replace the previous notification.

### Clearing all notifications

```
PubSub.publish(SpeechlyUiEvents.DismissNotification);
````

## Documentation

You can find the detailed API documentation in [GitHub repository](https://github.com/speechly/react-ui/blob/master/docs/modules/_index_d_.md).

## About Speechly

Speechly is a developer tool for building real-time multimodal voice user interfaces. It enables developers and designers to enhance their current touch user interface with voice functionalities for better user experience. Speechly key features:

#### Speechly key features

- Fully streaming API
- Multi modal from the ground up
- Easy to configure for any use case
- Fast to integrate to any touch screen application
- Supports natural corrections such as "Show me red – i mean blue t-shirts"
- Real time visual feedback encourages users to go on with their voice

|                  Example application                  | Description                                                                                                                                                                                                                                                                                                                               |
| :---------------------------------------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| <img src="https://i.imgur.com/v9o1JHf.gif" width=50%> | Instead of using buttons, input fields and dropdowns, Speechly enables users to interact with the application by using voice. <br />User gets real-time visual feedback on the form as they speak and are encouraged to go on. If there's an error, the user can either correct it by using traditional touch user interface or by voice. |
