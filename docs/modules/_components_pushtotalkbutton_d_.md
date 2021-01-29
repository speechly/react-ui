**[@speechly/react-ui](../README.md)**

> [Globals](../README.md) / "components/PushToTalkButton.d"

# Module: "components/PushToTalkButton.d"

## Index

### Type aliases

* [PushToTalkButtonProps](_components_pushtotalkbutton_d_.md#pushtotalkbuttonprops)

### Variables

* [PushToTalkButton](_components_pushtotalkbutton_d_.md#pushtotalkbutton)

## Type aliases

### PushToTalkButtonProps

Ƭ  **PushToTalkButtonProps**: { captureKey?: undefined \| string ; gradientStops?: string[] ; size?: undefined \| string  }

*Defined in components/PushToTalkButton.d.ts:7*

Properties for PushToTalkButton component.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`captureKey?` | undefined \| string | Keyboard key to use for controlling the button. Passing e.g. ` ` (a spacebar) will mean that holding down the spacebar key will key the button pressed. |
`gradientStops?` | string[] | Colours of the gradient around the button. Valid input is an array of two hex colour codes, e.g. `['#fff', '#000']`. |
`size?` | undefined \| string | The size of the button, as CSS (e.g. `5rem`). |

## Variables

### PushToTalkButton

• `Const` **PushToTalkButton**: React.FC\<[PushToTalkButtonProps](_components_pushtotalkbutton_d_.md#pushtotalkbuttonprops)>

*Defined in components/PushToTalkButton.d.ts:30*

A React component that renders a push-to-talk microphone button.

Make sure to place this component inside your `SpeechProvider` component imported from `@speechly/react-client`.
