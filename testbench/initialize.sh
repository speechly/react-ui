#!/bin/sh

mkdir -p src/@speechly/react-ui
mkdir -p src/@speechly/react-ui/hooks
mkdir -p src/@speechly/react-ui/components

ln ../components/src/*.ts src/@speechly/react-ui/
ln ../components/src/hooks/* src/@speechly/react-ui/hooks
ln ../components/src/components/* src/@speechly/react-ui/components

