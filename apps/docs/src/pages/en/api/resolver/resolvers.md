---
title: Resolvers
type:
package: '@astro-reactive/resolvers'
description: 3rd party schema builder library resolver
layout: ../../../../layouts/MainLayout.astro
---

The `resolvers` package helps to resolve 3rd party schema builder's (e.g. zod, yup, joi .etc) schema into our library built-in validators.

> **❗ Note:** This documentation is incomplete.

## Installation

```
npm i @astro-reactive/resolvers
```

## Usage

Import your resolver of choice from `@astro-reactive/resolvers` and pass it your custom schema, then provide the resolved validators to `FormGroup`'s `validationSchema` property.

### Zod

```astro
---
import Form, { FormGroup } from '@astro-reactive/form';
import { zodResolver } from '@astro-reactive/resolvers';
import { z } from 'zod';

// define your zod schema
const zodSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  age: z.number().optional(),
});

type FieldValues = z.infer<typeof zodSchema>;

// optionally provide types to get autocompletion when building form.
const formGroup = new FormGroup<FieldValues>(
  [
    { name: 'name', label: 'Name' },
    { name: 'email', label: 'Email', placeholder: 'Please type your email' },
    { name: 'age', label: 'Age' },
  ],
  { validationSchema: zodResolver(zodSchema) }
);
---

<Form formGroups={[formGroup]} />
```
