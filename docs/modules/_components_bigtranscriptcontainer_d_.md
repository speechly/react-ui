**[@speechly/react-ui](../README.md)**

> [Globals](../README.md) / "components/BigTranscriptContainer.d"

# Module: "components/BigTranscriptContainer.d"

## Index

### Type aliases

* [BigTranscriptContainerProps](_components_bigtranscriptcontainer_d_.md#bigtranscriptcontainerprops)

### Variables

* [BigTranscriptContainer](_components_bigtranscriptcontainer_d_.md#bigtranscriptcontainer)

## Type aliases

### BigTranscriptContainerProps

Ƭ  **BigTranscriptContainerProps**: { margin?: undefined \| string ; position?: undefined \| string  }

*Defined in components/BigTranscriptContainer.d.ts:7*

Properties for BigTranscriptContainer component.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`margin?` | undefined \| string | The override value for CSS margin(default: `"3rem 2rem 0 2rem"`). |
`position?` | undefined \| string | The override value for CSS position (default: `"fixed"`). |

## Variables

### BigTranscriptContainer

• `Const` **BigTranscriptContainer**: React.FC\<[BigTranscriptContainerProps](_components_bigtranscriptcontainer_d_.md#bigtranscriptcontainerprops)>

*Defined in components/BigTranscriptContainer.d.ts:30*

A React component that can be used for wrapping and positioning BigTranscript components.

The intended usage is as follows:

<BigTranscriptContainer>
  <BigTranscript />
</BigTranscriptContainer>

And then you can use CSS for styling the layout.
