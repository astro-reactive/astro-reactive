# Astro Reactive Form 🔥
[![npm](https://img.shields.io/npm/v/astro-reactive-form)](https://www.npmjs.com/package/astro-reactive-form)
[![npm](https://img.shields.io/npm/l/astro-reactive-form)](https://www.npmjs.com/package/astro-reactive-form)
[![npm](https://img.shields.io/npm/dt/astro-reactive-form)](https://www.npmjs.com/package/astro-reactive-form)
[![github](https://img.shields.io/github/last-commit/ayoayco/astro-reactive-form)](https://github.com/ayoayco/astro-reactive-form)

The Reactive Form component for [Astro](https://astro.build) 🔥

*[All contributions are welcome. Let's make the fastest web form component powered by Astro](https://github.com/ayoayco/astro-reactive-form/issues)*

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

# Future Plans
Currently this only supports very basic form creation, but the goal of the project is ambitious:
1. FormGroup class
    1. get(controlName: string) - returns the FormControl with matching name
    1. statusChanges - observable that emits the form status when it changes
    1. valueChanges - observable that emits the values of all controls when they change
1. FormControl class
    1. setValue(value) - set the value of the control programmatically
    1. statusChanges - observable that emits the control status when it changes
    1. valueChanges - observable that emits the control value when it changes
    1. value - property that reflects the control value

... and so much more

*All contributions are welcome. Let's make the fastest web form component powered by Astro*

