# Astro Reactive Form 🔥

The Reactive Form component for [Astro](https://astro.build) 🔥

## Installation

```
npm i astro-reactive-form
```

## Usage

```astro
---
import Form, { FormGroup } from "astro-reactive-form";

const form = new FormGroup([
  {
    name: 'first-name',
    value: 'Ayo',
    label: 'First Name',
  },
  {
    name: 'last-name',
    value: 'Ayco',
    label: 'Last Name',
  },
]);
---
<Form formGroup={form} />
```
