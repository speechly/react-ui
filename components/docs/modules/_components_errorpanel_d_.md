**[@speechly/react-ui](../README.md)**

> [Globals](../README.md) / "components/ErrorPanel.d"

# Module: "components/ErrorPanel.d"

## Index

### Variables

* [ErrorPanel](_components_errorpanel_d_.md#errorpanel)

## Variables

### ErrorPanel

• `Const` **ErrorPanel**: React.FC

*Defined in components/ErrorPanel.d.ts:12*

An optional dismissable React component that renders an error message if something
prevents Speechly SDK from functioning. It also provides recovery instructions.
<ErrorPanel> responds to <PushToTalkButton> presses so it needs to exist somewhere in the component hierarchy.

It is intented to be displayed at the lower part of the screen like so:
<PushToTalkButtonContainer><ErrorPanel/><PushToTalkButton/><PushToTalkButtonContainer>.
