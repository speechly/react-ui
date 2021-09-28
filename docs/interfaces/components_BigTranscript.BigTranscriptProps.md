[@speechly/react-ui](../README.md) / [components/BigTranscript](../modules/components_BigTranscript.md) / BigTranscriptProps

# Interface: BigTranscriptProps

[components/BigTranscript](../modules/components_BigTranscript.md).BigTranscriptProps

Properties for BigTranscript component.

## Hierarchy

- **`BigTranscriptProps`**

  ↳ [`TranscriptDrawerProps`](components_TranscriptDrawer.TranscriptDrawerProps.md)

## Table of contents

### Properties

- [backgroundColor](components_BigTranscript.BigTranscriptProps.md#backgroundcolor)
- [color](components_BigTranscript.BigTranscriptProps.md#color)
- [fontSize](components_BigTranscript.BigTranscriptProps.md#fontsize)
- [formatText](components_BigTranscript.BigTranscriptProps.md#formattext)
- [highlightColor](components_BigTranscript.BigTranscriptProps.md#highlightcolor)
- [marginBottom](components_BigTranscript.BigTranscriptProps.md#marginbottom)
- [mockSegment](components_BigTranscript.BigTranscriptProps.md#mocksegment)
- [placement](components_BigTranscript.BigTranscriptProps.md#placement)

## Properties

### backgroundColor

• `Optional` **backgroundColor**: `string`

Optional string (CSS color) for hint text background. Default: "#202020"

#### Defined in

[components/BigTranscript.tsx:44](https://github.com/speechly/react-ui/blob/b0ff445/src/components/BigTranscript.tsx#L44)

___

### color

• `Optional` **color**: `string`

Optional string (CSS color) for text. Default: "#ffffff"

#### Defined in

[components/BigTranscript.tsx:36](https://github.com/speechly/react-ui/blob/b0ff445/src/components/BigTranscript.tsx#L36)

___

### fontSize

• `Optional` **fontSize**: `string`

Optional CSS string for text size. Default: "1.5rem"

#### Defined in

[components/BigTranscript.tsx:32](https://github.com/speechly/react-ui/blob/b0ff445/src/components/BigTranscript.tsx#L32)

___

### formatText

• `Optional` **formatText**: `boolean`

Optional boolean. If true, transcript is formatted with detected entities, e.g. numbers. Default: true

#### Defined in

[components/BigTranscript.tsx:28](https://github.com/speechly/react-ui/blob/b0ff445/src/components/BigTranscript.tsx#L28)

___

### highlightColor

• `Optional` **highlightColor**: `string`

Optional string (CSS color) for entity highlighting, vu meter and acknowledged icon. Default: "#15e8b5"

#### Defined in

[components/BigTranscript.tsx:40](https://github.com/speechly/react-ui/blob/b0ff445/src/components/BigTranscript.tsx#L40)

___

### marginBottom

• `Optional` **marginBottom**: `string`

Optional string (CSS dimension). Dynamic margin added when element is visible. Default: "0rem"

#### Defined in

[components/BigTranscript.tsx:48](https://github.com/speechly/react-ui/blob/b0ff445/src/components/BigTranscript.tsx#L48)

___

### mockSegment

• `Optional` **mockSegment**: `Segment`

Optional SpeechSegment to be displayed instead of actual transcription from API

#### Defined in

[components/BigTranscript.tsx:52](https://github.com/speechly/react-ui/blob/b0ff445/src/components/BigTranscript.tsx#L52)

___

### placement

• `Optional` **placement**: `string`

Optional "top" string turns on internal placement without any CSS positioning.

#### Defined in

[components/BigTranscript.tsx:24](https://github.com/speechly/react-ui/blob/b0ff445/src/components/BigTranscript.tsx#L24)
