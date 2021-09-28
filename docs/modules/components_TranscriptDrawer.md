[@speechly/react-ui](../README.md) / components/TranscriptDrawer

# Module: components/TranscriptDrawer

## Table of contents

### Type aliases

- [TranscriptDrawerProps](components_TranscriptDrawer.md#transcriptdrawerprops)

### Variables

- [TranscriptDrawer](components_TranscriptDrawer.md#transcriptdrawer)

## Type aliases

### TranscriptDrawerProps

Ƭ **TranscriptDrawerProps**: [`BigTranscriptProps`](components_BigTranscript.md#bigtranscriptprops) & { `height?`: `string` ; `hint?`: `string` \| `string`[] ; `hintFontSize?`: `string` ; `mockSegment?`: `SpeechSegment` ; `smallTextColor?`: `string`  }

Properties for BigTranscript component.

#### Defined in

[components/TranscriptDrawer.tsx:21](https://github.com/speechly/react-ui/blob/bb575c3/src/components/TranscriptDrawer.tsx#L21)

## Variables

### TranscriptDrawer

• **TranscriptDrawer**: `React.FC`<[`TranscriptDrawerProps`](components_TranscriptDrawer.md#transcriptdrawerprops)\>

A React component that renders the transcript and entities received from Speechly SLU API.

The component is intended to be used for providing visual feedback to the speaker.

#### Defined in

[components/TranscriptDrawer.tsx:51](https://github.com/speechly/react-ui/blob/bb575c3/src/components/TranscriptDrawer.tsx#L51)
