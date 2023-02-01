<p align="center">
  <img src="https://raw.githubusercontent.com/astro-reactive/astro-reactive/main/.github/assets/logo/min-banner.png" alt="Astro Reactive Library Logo">
  <br />
  <strong>Astro Reactive Form</strong>
  <br />
  Generate a dynamic form based on your data, and modify programmatically.
  <br />
  <br />
  <a href="https://www.npmjs.com/package/@astro-reactive/form">
    <img src="https://img.shields.io/npm/v/@astro-reactive/form" alt="Package information: NPM version" />
  </a>
  <a href="https://www.npmjs.com/package/@astro-reactive/form">
    <img src="https://img.shields.io/npm/l/@astro-reactive/form" alt="Package information: NPM license" />
  </a>
  <a href="https://www.npmjs.com/package/@astro-reactive/form">
    <img src="https://img.shields.io/npm/dt/@astro-reactive/form" alt="Package information: NPM downloads" />
  </a>
  <a href="https://www.npmjs.com/package/@astro-reactive/form">
    <img src="https://img.shields.io/librariesio/release/npm/@astro-reactive/form" alt="Package information: NPM dependencies status" />
  </a>
  <br />
  <br />
</p>

## Installation
In your [Astro](https://astro.build) project:

```
npm i @astro-reactive/form
```

## Usage
Use in an Astro page:

```astro
---
import Form, { FormControl, FormGroup } from "@astro-reactive/form";

// create a form group
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

// you can insert a control at any point
form.controls.push(
  new FormControl({
    type: "checkbox",
    name: "isAwesome",
    label: "is Awesome?",
  })
);

// set the value of multiple controls
form.setValue({
	username: 'DEFAULT',
	isAwesome: 'checked',
});

// you can get a FormControl object
const userNameControl = form.get("username");

// you can set value of specific control
userNameControl?.setValue("RAMOOOON");

---

<Form
  formGroups={form}
  validateOnLoad
  showValidationHints
  action="/submission"
  method="post"
  submitControl={{
    name: 'submit',
    type: 'submit',
  }}
/>
```

👉 For more examples and explanations of the component properties, see the [Form API Docs](https://docs.astro-reactive.dev/en/api/form/form-component/).

# Screenshots
Result of example above:

![Screen Shot 2022-10-08 at 10 38 04 PM](https://user-images.githubusercontent.com/4262489/194726969-bdddefdf-d582-4201-a40e-3798383f03a0.png)

Example of multiple form groups:

![Screen Shot 2022-09-27 at 10 44 03 PM](https://user-images.githubusercontent.com/4262489/192631524-3139ac60-8d84-4c12-9231-fe2d49962756.png)

# Validation

This Form component is designed to work with [Astro Reactive Validator](https://www.npmjs.com/package/@astro-reactive/validator), our package for setting up validators easily.

# We are opensource!


👉 _All [contributions](https://github.com/astro-reactive/astro-reactive/blob/main/CONTRIBUTING.md) are welcome. Let's make the fastest web forms powered by Astro._

👉 _This package is under rigorous development. See the [change log](https://github.com/astro-reactive/astro-reactive/blob/main/packages/form/RELEASE.md)._

