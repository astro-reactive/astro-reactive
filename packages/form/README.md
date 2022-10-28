<p align="center">
  <img src="https://raw.githubusercontent.com/ayoayco/astro-reactive-library/main/.github/assets/logo/min-banner.png" alt="Astro Reactive Library Logo">
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

// set the name optionally
form.name = "Simple Form";

// you can insert a control at any point
form.controls.push(
  new FormControl({
    type: "checkbox",
    name: "is-awesome",
    label: "is Awesome?",
    labelPosition: "right",
  })
);

// you can get a FormControl object
const userNameControl = form.get("username");

// you can set values dynamically
userNameControl?.setValue("RAMOOOON");
form.get('is-awesome')?.setValue("checked");
---

<Form
  formGroups={form}
  submitControl={{
    type: "submit",
    name: "submit",
  }}
/>
<!-- 
  The `formGroups` attribute can take a single FormGroup
  or an array of FormGroup for multiple fieldset blocks;
  we are using a single FormGroup for now in this example.
-->
```

# Screenshots
Result of example above:

![Screen Shot 2022-10-08 at 10 38 04 PM](https://user-images.githubusercontent.com/4262489/194726969-bdddefdf-d582-4201-a40e-3798383f03a0.png)

Example of multiple form groups:

![Screen Shot 2022-09-27 at 10 44 03 PM](https://user-images.githubusercontent.com/4262489/192631524-3139ac60-8d84-4c12-9231-fe2d49962756.png)

# Validation

This Form component is designed to work with [Astro Reactive Validator](https://www.npmjs.com/package/@astro-reactive/validator), our package for setting up validators easily.

# We are opensource!


👉 _All [contributions](https://github.com/ayoayco/astro-reactive-library/blob/main/CONTRIBUTING.md) are welcome. Let's make the fastest web forms powered by Astro._

👉 _This package is under rigorous development. See the [change log](https://github.com/ayoayco/astro-reactive-library/blob/main/packages/form/RELEASE.md)._
