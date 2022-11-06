---
title: Form
type: component
package: "@astro-reactive/form"
description: The Reactive Form component for Astro
layout: ../../../../layouts/MainLayout.astro
---

The `Form` component renders a form element and various control components (e.g., `Input`, `TextArea`, `Select`) depending on the data that you provide through its `formGroups` property.

```astro
---
import Form, { FormGroup } from "@astro-reactive/form";
const form = new FormGroup(
  // your controls configuration data
);
---
<Form formGroups={form} />
```

## Usage

Setting up the `Form` component is mainly done by providing it your configuration via the `formGroups` property which takes either a `FormGroup` or an array `FormGroup[]`.

*See the documentation for the [FormGroup](/en/api/form/form-group) class.*

### Setting up a form

Giving the component a `FormGroup` object will set up a form. 

```astro
---
import Form, { FormGroup } from "@astro-reactive/form";

const form = new FormGroup([
  {
    name: "username",
    label: "Username",
    value: "awesome_dev",
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

The `FormGroup` constructor takes an array `ControlConfig[]`.

*See the `ControlConfig` type in the [FormControl](/en/api/form/form-group) class documentation.*

The example above will result in a form containing three controls: a text field `username`, a textarea `comment`, and a `size` dropdown.

![single-form](https://user-images.githubusercontent.com/4262489/200187918-95052561-e02c-453d-9a9b-940303a80046.png)

### Setting up multiple field sets

To render a form with multiple field sets, give the component an array `FormGroup[]`

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