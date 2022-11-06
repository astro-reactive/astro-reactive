---
title: Form
description: The Reactive Form component for Astro
layout: ../../../../layouts/MainLayout.astro
---

`Form` component renders a form on an Astro page depending on the data that you provide.

## Inputs

The following are the input properties a `Form` component can take.

| Property | Type |
|---|---|
| [formGroups](#formgroups) |  `FormGroup \| FormGroup[]` |
| [showValidationHints](#showvalidationhints) |  `boolean` |

### `formGroups`

Determines how the form element and various control components (e.g., `Input`, `TextArea`, `Select`) are rendered.

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

given a `formGroups` input that can take a single `FormGroup` or an array `FormGroup[]`

### `showValidationHints`