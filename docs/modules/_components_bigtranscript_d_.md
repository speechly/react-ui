**[@speechly/react-ui](../README.md)**

> [Globals](../README.md) / "components/BigTranscript.d"

# Module: "components/BigTranscript.d"

## Index

### Type aliases

* [BigTranscriptProps](_components_bigtranscript_d_.md#bigtranscriptprops)

### Variables

* [BigTranscript](_components_bigtranscript_d_.md#bigtranscript)

## Type aliases

### BigTranscriptProps

Ƭ  **BigTranscriptProps**: { backgroundColor?: undefined \| string ; color?: undefined \| string ; fontSize?: undefined \| string ; highlightColor?: undefined \| string ; marginBottom?: undefined \| string  }

*Defined in components/BigTranscript.d.ts:15*

Properties for BigTranscript component.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`backgroundColor?` | undefined \| string | Optional string (CSS color) for hint text background. Default: "#202020" |
`color?` | undefined \| string | Optional string (CSS color) for text. Default: "#ffffff" |
`fontSize?` | undefined \| string | Optional CSS string for text size. Default: "1.5rem" |
`highlightColor?` | undefined \| string | Optional string (CSS color) for entity highlighting, vu meter and acknowledged icon. Default: "#15e8b5" |
`marginBottom?` | undefined \| string | Optional string (CSS dimension). Dynamic margin added when element is visible. Default: "0rem" |

## Variables

### BigTranscript

• `Const` **BigTranscript**: React.FC\<[BigTranscriptProps](_components_bigtranscript_d_.md#bigtranscriptprops)>

*Defined in components/BigTranscript.d.ts:44*

A React component that renders the transcript and entities received from Speechly SLU API.

The component is intended to be used for providing visual feedback to the speaker.
