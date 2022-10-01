# Astro Reactive Form 🔥

[![npm](https://img.shields.io/npm/v/astro-reactive-form)](https://www.npmjs.com/package/astro-reactive-form)
[![npm](https://img.shields.io/npm/l/astro-reactive-form)](https://www.npmjs.com/package/astro-reactive-form)
[![npm](https://img.shields.io/npm/dt/astro-reactive-form)](https://www.npmjs.com/package/astro-reactive-form)
[![github](https://img.shields.io/github/last-commit/ayoayco/astro-reactive-library)](https://github.com/ayoayco/astro-reactive-library)

The Reactive Form component for [Astro](https://astro.build) 🔥

_[All contributions are welcome.](https://github.com/ayoayco/astro-reactive-library/issues)_

## Installation

```
npm i astro-reactive-form
```

## Usage

```astro
---
import { FormControl, FormGroup } from "astro-reactive-form/core";
import Form from "astro-reactive-form";

// create a form group (rendered as <fieldset>)
const form = new FormGroup([
  {
    name: "username",
    label: "Username",
  },
  {
    name: "password",
    label: "Password",
    type: "password",
  },
]);

// set the name (rendered as <legend>)
form.name = "Simple Form";

// insert a control
form.controls.push(
  new FormControl({
    type: "checkbox",
    name: "is-awesome",
    label: "is Awesome?",
    labelPosition: "right",
  })
);

// get a FormControl object
const userNameControl = form.get("username");

// set values dynamically
userNameControl?.setValue("RAMOOOON");
form.get('is-awesome')?.setValue("checked");
---
```

# Screenshots

Result of example above:

<img width="535" alt="Screen Shot 2022-10-01 at 7 29 00 PM" src="https://user-images.githubusercontent.com/4262489/193421174-5c604aca-7d16-4cd6-a7b1-f5b8752c838e.png">

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
