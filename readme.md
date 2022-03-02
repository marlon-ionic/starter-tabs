# Starter App - Autofocus

A simple starter project to showcase an approach for handling `autofocus` inputs

## Table of Contents

- [Starter App - Autofocus](#starter-app---autofocus)
  - [Table of Contents](#table-of-contents)
  - [Description](#description)
  - [Warning](#warning)
  - [Installation](#installation)

## Description

Per [caniuse.com](https://caniuse.com/?search=autofocus), mobile Safari does not support the [autofocus](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/autofocus) attribute for inputs. This project is an example of a potential workaround.

## Warning

Please note: There are serious implications to the UX when using autofocus on a mobile device. Most obivous is that it will trigger the keyboard input to display, which can obscure page content and limit what a user can see on the screen effectlively to only the focused element. Doing this before the user has an ability to make a decision on what to focus on in a view is very jarring - and should only be entertained in a small number of cases.

## Installation

Download to your project directory,then fun:

```sh
npm i
ionic build
ionic cap run android
ionic cap run ios
```
