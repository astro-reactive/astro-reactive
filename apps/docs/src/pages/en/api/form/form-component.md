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

## Installation

```
npm i @astro-reactive/form
```


## Usage

Setting up the `Form` component is mainly done by providing it your configuration via the `formGroups` property which takes either a `FormGroup` or an array `FormGroup[]`.

*See the documentation for the [FormGroup](/en/api/form/form-group) class.*

### Setting up a form

Assigning a `FormGroup` object to the `formGroup` property will set up a form.

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

The example above will result in a form containing three controls: a text field `username`, a textarea `comment`, and a `size` dropdown.

![single-form](https://user-images.githubusercontent.com/4262489/200187918-95052561-e02c-453d-9a9b-940303a80046.png)

The `FormGroup` constructor takes an array `ControlConfig[]`.

> **📝 Note:** The `ControlConfig` type will be defined in the [FormControl](/en/api/form/form-control) class documentation.


### Setting up multiple field sets

To render a form with multiple field sets, assign an array `FormGroup[]` to the `formGroups` property.

```astro
---
import Form, { FormGroup } from "@astro-reactive/form";

const nameForm = new FormGroup(
  [
    {
      name: "firstName",
      label: "First Name",
      value: "John",
    },
    {
      name: "lastName",
      label: "Last Name",
      value: "Doe",
    },
  ],
  "Name"
);

const skills = new FormGroup(
  [
    {
      name: "JavaScript",
      type: "checkbox",
      label: "JavaScript",
    },
    {
      name: "TypeScript",
      type: "checkbox",
      label: "TypeScript",
    },
    {
      name: "React",
      type: "checkbox",
      label: "React",
    },
    {
      name: "Vue",
      type: "checkbox",
      label: "Vue",
    },
  ],
  "Skills"
);
---
<Form formGroups={[nameForm, skills]} />
```

The example above renders a form with two field sets with legend `Name` and `Skills`.

![multiple form groups](https://user-images.githubusercontent.com/4262489/200191529-ff5fed93-2cd4-4337-9eb2-f47e64259206.png)

The `FormGroup` constructor optionally takes a name property to set the legend for the field set.

### Setting up the Submit button

The `Form` component takes an optional `submitControl` property. This property is of type `Submit` which is a special type for the submit button.

This implementation is to distinguish the submit button from other buttons and limit the form to only have one of it.

```astro
---
import Form, { FormGroup } from "@astro-reactive/form";

const form = new FormGroup([]);

const submitControl: Submit = {
  name: "submit",
  type: "submit",
};
---
<Form formGroups={form} submitControl={submitControl} />
```

This is a very crude solution to prevent having multiple submit buttons. For suggestions to improve this, join our [discussions](https://github.com/ayoayco/astro-reactive-library/discussions).

-----

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
Type: `boolean`

Sets the whole form as read-only.

### `showValidationHints`
Type: `boolean`

When used with our `validator` package, the `Form` component is able to render validation hints when `showValidationHints` is set to true:
- asterisks on required controls' labels
- controls with validation errors are colored red

### `submitControl`
Type: `Submit`

### `theme`
Type: `'light' | 'dark'`
