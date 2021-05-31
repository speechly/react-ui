**[@speechly/react-ui](../README.md)**

> [Globals](../README.md) / "components/TranscriptDrawer.d"

# Module: "components/TranscriptDrawer.d"

## Index

### Type aliases

* [TranscriptDrawerProps](_components_transcriptdrawer_d_.md#transcriptdrawerprops)

### Variables

* [TranscriptDrawer](_components_transcriptdrawer_d_.md#transcriptdrawer)

## Type aliases

### TranscriptDrawerProps

Ƭ  **TranscriptDrawerProps**: [BigTranscriptProps](_components_bigtranscript_d_.md#bigtranscriptprops) & { height?: undefined \| string ; hint?: string \| string[] ; hintFontSize?: undefined \| string ; smallTextColor?: undefined \| string  }

*Defined in components/TranscriptDrawer.d.ts:16*

Properties for BigTranscript component.

## Variables

### TranscriptDrawer

• `Const` **TranscriptDrawer**: React.FC\<[TranscriptDrawerProps](_components_transcriptdrawer_d_.md#transcriptdrawerprops)>

*Defined in components/TranscriptDrawer.d.ts:41*

A React component that renders the transcript and entities received from Speechly SLU API.

The component is intended to be used for providing visual feedback to the speaker.
