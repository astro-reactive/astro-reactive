---
title: Form
type: component
package: "@astro-reactive/form"
description: The Reactive Form component for Astro
layout: ../../../../layouts/MainLayout.astro
---

The `Form` component renders a form element and various control components (e.g., `Input`, `TextArea`, `Select`) depending on the data that you provide.

> **❗ Note:** This component is unstyled by itself. The docs will be updated later to show how you can style it yourself or use our theme package.

## Installation

```
npm i @astro-reactive/form
```

## Usage

Setting up the `Form` component is mainly done by providing it your configuration via the `formGroups` property which takes either a `FormGroup` or an array `FormGroup[]`.

See the documentation for the [FormGroup](/en/api/form/form-group) class.

### Setting up a form

Giving the component a `FormGroup` object like in the following example will set up a form with three controls. The resulting form will contain a text field `username`, a textarea `comment`, and a `size` dropdown.

```astro
---
import Form, { FormGroup } from "@astro-reactive/form";

const form = new FormGroup([
  {
    name: "username",
    label: "Username",
  },
  {
    name: "comment",
    label: "Feedback",
    type: "textarea",
    value: "Nice!"
  },
  {
    name: "size",
    label: "Size",
    type: "dropdown",
    options: ["S", "M", "L", "XL", "XXL"],
    placeholder: "-- Please choose an option --",
  },
]);
---

<Form formGroups={form} />
```


### Setting up multiple form groups


## Properties

The following are input properties a `Form` component can take.

| Property | Type | |
|---|---|---|
| [formGroups](#formgroups) |  `FormGroup \| FormGroup[]` | required |
| [readOnly](#readonly) |  `boolean` | optional |
| [showValidationHints](#showvalidationhints) |  `boolean` | optional |
| [submitControl](#submitcontrol) |  `Submit` | optional |
| [theme](#theme) |  `'light' \| 'dark'` | optional |

### `formGroups`
Type: `FormGroup | FormGroup[]`

Determines how the form is are rendered


### `readOnly`

#### `boolean`

Sets the whole form as read-only.

### `showValidationHints`

When used with our `validator` package, the `Form` component is able to render validation hints when `showValidationHints` is set to true:
1. asterisks on required controls' labels
2. controls with validation errors are colored red

### `submitControl`

### `theme`