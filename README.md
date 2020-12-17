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

## Installation

```sh
# Create a new React app
create-react-app .

# Install the package
npm install --save @speechly/react-ui
```

## Usage

## Push-to-Talk Button Component

Push-to-Talk Button is a React component that enables users to use Speechly voice input while holding the button down.

The Push-to-Talk button is intended to be placed as a floating button at the lower part of the screen so mobile users can react it with ease. Desktop users can control it with an optional keyboard hotkey. Our hotkey recommendation is the spacebar.

Upon launching the app, the component initially displays a "power on" state. Pressing the button in "power on" state initialises Speechly API and may trigger browser microphone permission prompt.

The component has been tested with Chrome on desktop (version 86), Chrome on Android (version 86) and Safari (12) on iOS.

### Including PushToTalkButton into your app

```tsx
import { SpeechProvider } from "@speechly/react-client";
import { PushToTalkButton, PushToTalkButtonContainer, ErrorPanel } from "@speechly/react-ui";

function AppView() {
  return (
    <SpeechProvider appId="speechly-app-id" language="speechly-app-language">
      <PushToTalkButtonContainer>
        <PushToTalkButton captureKey=" " />
        <ErrorPanel/>
      </PushToTalkButtonContainer>
    </SpeechProvider>
  );
}
```

### Customizing PushToTalkButton

- Mic widget size is defined by `size` property. Parameters are in css, e.g. `6rem`.
- Colors are defined by `gradientStops` property. Parameter is an array of 2 colors, e.g. ["#","#"].
- If you created the app skeleton using the react-client tutorial, you may wish to remove the following lines containing the default button for toggling speech recording:
- `<ErrorPanel/>` is an optional component that is intended to be placed inside `<PushToTalkButtonContainer/>`. You may, however, place it anywhere in the component hierarchy. It automatically shows if there is problem detected upon pressing the `<PushToTalkButton/>`.

```tsx
<div className="mic-button">
  <button onClick={toggleRecording}>Record</button>
</div>
```

## BigTranscript Component

BigTranscript is a React component that displays the transcribed voice input of a user to provide them with feedback from your Speechly app.

### Including BigTranscript into your app

```tsx
import { SpeechProvider } from "@speechly/react-client";
import { BigTranscript, BigTranscriptContainer } from "@speechly/react-ui";

function AppView() {
  return (
    <SpeechProvider appId="speechly-app-id" language="speechly-app-language">
      <BigTranscriptContainer>
        <BigTranscript />
      </BigTranscriptContainer>
    </SpeechProvider>
  );
}
```

### Customizing BigTranscript

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

## Documentation

You can find the detailed API documentation in [GitHub repository](https://github.com/speechly/react-ui/blob/master/components/docs/modules/_index_d_.md).

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
