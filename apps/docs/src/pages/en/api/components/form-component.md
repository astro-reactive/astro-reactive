---
title: Form
package: "@astro-reactive/form"
description: The Reactive Form component for Astro
layout: ../../../../layouts/MainLayout.astro
---

Renders a form element and control components on an Astro page depending on the data that you provide

## Inputs

The following are input properties a `Form` component can take.

| Property | Type | |
|---|---|---|
| [formGroups](#formgroups) |  `FormGroup \| FormGroup[]` | required |
| [showValidationHints](#showvalidationhints) |  `boolean` | optional |

### `formGroups`

Determines how the form element and various control components (e.g., `Input`, `TextArea`, `Select`) are rendered

#### Type: `FormGroup | FormGroup[]`

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

### `showValidationHints`

When used with our `validator` package, the `Form` component is able to render validation hints when `showValidationHints` is set to true:
1. asterisks on required controls' labels
2. controls with validation errors are colored red
