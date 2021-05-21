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

Ƭ  **PushToTalkButtonProps**: { backgroundColor?: undefined \| string ; captureKey?: undefined \| string ; fontSize?: undefined \| string ; gradientStops?: string[] ; hide?: undefined \| false \| true ; hint?: undefined \| string ; intro?: undefined \| string ; powerOn?: undefined \| false \| true ; showTime?: undefined \| number ; size?: undefined \| string  }

*Defined in components/PushToTalkButton.d.ts:19*

Properties for PushToTalkButton component.

#### Type declaration:

Name | Type | Description |
------ | ------ | ------ |
`backgroundColor?` | undefined \| string | Optional string (CSS color) for hint text background. Default: "#202020" |
`captureKey?` | undefined \| string | Keyboard key to use for controlling the button. Passing e.g. ` ` (a spacebar) will mean that holding down the spacebar key will key the button pressed. |
`fontSize?` | undefined \| string | Optional CSS string for hint text. Default: "1.2rem" |
`gradientStops?` | string[] | Colours of the gradient around the button. Valid input is an array of two hex colour codes, e.g. `['#fff', '#000']`. |
`hide?` | undefined \| false \| true | Optional boolean. Default: false |
`hint?` | undefined \| string | Optional string containing a short usage hint. Displayed on a short tap. Default: "Push to talk". Set to "" to disable. |
`intro?` | undefined \| string | Optional string containing a short usage introduction. Displayed when the component is first displayed. Default: "Push to talk". Set to "" to disable. |
`powerOn?` | undefined \| false \| true | Optional boolean. Shows poweron state. If false, recording can immediately start but will first press will cause a system permission prompt. Default: false |
`showTime?` | undefined \| number | Optional number in ms. Visibility duration for intro and hint callouts. Default: "5000" (ms) |
`size?` | undefined \| string | The size of the button, as CSS (e.g. `5rem`). |

## Variables

### PushToTalkButton

• `Const` **PushToTalkButton**: React.FC\<[PushToTalkButtonProps](_components_pushtotalkbutton_d_.md#pushtotalkbuttonprops)>

*Defined in components/PushToTalkButton.d.ts:70*

A React component that renders a push-to-talk microphone button.

Make sure to place this component inside your `SpeechProvider` component imported from `@speechly/react-client`.
