# Astro Reactive Form 🔥

[![npm](https://img.shields.io/npm/v/astro-reactive-form)](https://www.npmjs.com/package/astro-reactive-form)
[![npm](https://img.shields.io/npm/l/astro-reactive-form)](https://www.npmjs.com/package/astro-reactive-form)
[![npm](https://img.shields.io/npm/dt/astro-reactive-form)](https://www.npmjs.com/package/astro-reactive-form)
[![github](https://img.shields.io/github/last-commit/ayoayco/astro-reactive-form)](https://github.com/ayoayco/astro-reactive-form)

The Reactive Form component for [Astro](https://astro.build) 🔥

_[All contributions are welcome.](https://github.com/ayoayco/astro-reactive-form/issues)_

## Installation

```
npm i astro-reactive-form
```

## Usage

```astro
---
import Form, { FormControl, FormGroup } from 'astro-reactive-form';

// example of a form control
const radio: FormControl = {
  name: 'is-good-looking',
  type: 'radio',
  label: 'Is Good Looking?',
  value: 'checked',
  labelPosition: 'right',
};

const form = new FormGroup([
  // this is just an array of FormControl
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
  {
    name: 'is-awesome',
    type: 'checkbox',
    label: 'Is Awesome?',
    value: 'checked',
    labelPosition: 'right',
  },
  radio, // the form control we declared earlier
]);
---

<Form formGroups={[form]} />
```

# Screenshots

Result of example above:

![Screen Shot 2022-09-27 at 5 41 46 PM](https://user-images.githubusercontent.com/4262489/192572310-f83af2cc-53b9-4024-9ada-e64b34b66a15.png)

Example of multiple form groups:

![Screen Shot 2022-09-27 at 10 44 03 PM](https://user-images.githubusercontent.com/4262489/192631524-3139ac60-8d84-4c12-9231-fe2d49962756.png)

# Future Plans

Currently this only supports very basic form creation, but the goal of the project is ambitious:

1. Validator library for common validation scenarios
   1. Client-side validation
   1. Server-side validation
   1. validation hooks - onFocus, onBlur, onSubmit
1. Themes - unstyled, light mode, dark mode, compact, large
1. FormGroup class
   1. `get(controlName: string)` - returns the FormControl with matching name
   1. `statusChanges` - observable that emits the form status when it changes
   1. `valueChanges` - observable that emits the values of all controls when they change
1. FormControl class
   1. `setValue(value)` - set the value of the control programmatically
   1. `statusChanges` - observable that emits the control status when it changes
   1. `valueChanges` - observable that emits the control value when it changes
   1. `value` - property that reflects the control value

... and so much more

_All contributions are welcome. Let's make the fastest web form component powered by Astro_
