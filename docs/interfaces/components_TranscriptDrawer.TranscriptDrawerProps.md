[@speechly/react-ui](../README.md) / [components/TranscriptDrawer](../modules/components_TranscriptDrawer.md) / TranscriptDrawerProps

# Interface: TranscriptDrawerProps

[components/TranscriptDrawer](../modules/components_TranscriptDrawer.md).TranscriptDrawerProps

Properties for BigTranscript component.

## Hierarchy

- [`BigTranscriptProps`](components_BigTranscript.BigTranscriptProps.md)

  ↳ **`TranscriptDrawerProps`**

## Table of contents

### Properties

- [backgroundColor](components_TranscriptDrawer.TranscriptDrawerProps.md#backgroundcolor)
- [color](components_TranscriptDrawer.TranscriptDrawerProps.md#color)
- [fontSize](components_TranscriptDrawer.TranscriptDrawerProps.md#fontsize)
- [formatText](components_TranscriptDrawer.TranscriptDrawerProps.md#formattext)
- [height](components_TranscriptDrawer.TranscriptDrawerProps.md#height)
- [highlightColor](components_TranscriptDrawer.TranscriptDrawerProps.md#highlightcolor)
- [hint](components_TranscriptDrawer.TranscriptDrawerProps.md#hint)
- [hintFontSize](components_TranscriptDrawer.TranscriptDrawerProps.md#hintfontsize)
- [marginBottom](components_TranscriptDrawer.TranscriptDrawerProps.md#marginbottom)
- [mockSegment](components_TranscriptDrawer.TranscriptDrawerProps.md#mocksegment)
- [placement](components_TranscriptDrawer.TranscriptDrawerProps.md#placement)
- [smallTextColor](components_TranscriptDrawer.TranscriptDrawerProps.md#smalltextcolor)

## Properties

### backgroundColor

• `Optional` **backgroundColor**: `string`

Optional string (CSS color) for hint text background. Default: "#202020"

#### Inherited from

[BigTranscriptProps](components_BigTranscript.BigTranscriptProps.md).[backgroundColor](components_BigTranscript.BigTranscriptProps.md#backgroundcolor)

#### Defined in

[components/BigTranscript.tsx:44](https://github.com/speechly/react-ui/blob/b0ff445/src/components/BigTranscript.tsx#L44)

___

### color

• `Optional` **color**: `string`

Optional string (CSS color) for text. Default: "#ffffff"

#### Inherited from

[BigTranscriptProps](components_BigTranscript.BigTranscriptProps.md).[color](components_BigTranscript.BigTranscriptProps.md#color)

#### Defined in

[components/BigTranscript.tsx:36](https://github.com/speechly/react-ui/blob/b0ff445/src/components/BigTranscript.tsx#L36)

___

### fontSize

• `Optional` **fontSize**: `string`

Optional CSS string for text size. Default: "1.5rem"

#### Inherited from

[BigTranscriptProps](components_BigTranscript.BigTranscriptProps.md).[fontSize](components_BigTranscript.BigTranscriptProps.md#fontsize)

#### Defined in

[components/BigTranscript.tsx:32](https://github.com/speechly/react-ui/blob/b0ff445/src/components/BigTranscript.tsx#L32)

___

### formatText

• `Optional` **formatText**: `boolean`

Optional boolean. If true, transcript is formatted with detected entities, e.g. numbers. Default: true

#### Inherited from

[BigTranscriptProps](components_BigTranscript.BigTranscriptProps.md).[formatText](components_BigTranscript.BigTranscriptProps.md#formattext)

#### Defined in

[components/BigTranscript.tsx:28](https://github.com/speechly/react-ui/blob/b0ff445/src/components/BigTranscript.tsx#L28)

___

### height

• `Optional` **height**: `string`

Optional minimum height as CSS string. Default: "8rem"

#### Defined in

[components/TranscriptDrawer.tsx:29](https://github.com/speechly/react-ui/blob/b0ff445/src/components/TranscriptDrawer.tsx#L29)

___

### highlightColor

• `Optional` **highlightColor**: `string`

Optional string (CSS color) for entity highlighting, vu meter and acknowledged icon. Default: "#15e8b5"

#### Inherited from

[BigTranscriptProps](components_BigTranscript.BigTranscriptProps.md).[highlightColor](components_BigTranscript.BigTranscriptProps.md#highlightcolor)

#### Defined in

[components/BigTranscript.tsx:40](https://github.com/speechly/react-ui/blob/b0ff445/src/components/BigTranscript.tsx#L40)

___

### hint

• `Optional` **hint**: `string` \| `string`[]

Optional hint text or array

#### Defined in

[components/TranscriptDrawer.tsx:25](https://github.com/speechly/react-ui/blob/b0ff445/src/components/TranscriptDrawer.tsx#L25)

___

### hintFontSize

• `Optional` **hintFontSize**: `string`

Optional CSS string for hint text size. Default: "0.9rem"

#### Defined in

[components/TranscriptDrawer.tsx:37](https://github.com/speechly/react-ui/blob/b0ff445/src/components/TranscriptDrawer.tsx#L37)

___

### marginBottom

• `Optional` **marginBottom**: `string`

Optional string (CSS dimension). Dynamic margin added when element is visible. Default: "0rem"

#### Inherited from

[BigTranscriptProps](components_BigTranscript.BigTranscriptProps.md).[marginBottom](components_BigTranscript.BigTranscriptProps.md#marginbottom)

#### Defined in

[components/BigTranscript.tsx:48](https://github.com/speechly/react-ui/blob/b0ff445/src/components/BigTranscript.tsx#L48)

___

### mockSegment

• `Optional` **mockSegment**: `Segment`

Optional SpeechSegment to be displayed instead of actual transcription from API

#### Overrides

[BigTranscriptProps](components_BigTranscript.BigTranscriptProps.md).[mockSegment](components_BigTranscript.BigTranscriptProps.md#mocksegment)

#### Defined in

[components/TranscriptDrawer.tsx:41](https://github.com/speechly/react-ui/blob/b0ff445/src/components/TranscriptDrawer.tsx#L41)

___

### placement

• `Optional` **placement**: `string`

Optional "top" string turns on internal placement without any CSS positioning.

#### Inherited from

[BigTranscriptProps](components_BigTranscript.BigTranscriptProps.md).[placement](components_BigTranscript.BigTranscriptProps.md#placement)

#### Defined in

[components/BigTranscript.tsx:24](https://github.com/speechly/react-ui/blob/b0ff445/src/components/BigTranscript.tsx#L24)

___

### smallTextColor

• `Optional` **smallTextColor**: `string`

Optional string (CSS color) for hint text. Default: "#ffffff70"

#### Defined in

[components/TranscriptDrawer.tsx:33](https://github.com/speechly/react-ui/blob/b0ff445/src/components/TranscriptDrawer.tsx#L33)
