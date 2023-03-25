<p align="center">
  <img src="https://raw.githubusercontent.com/astro-reactive/astro-reactive/main/.github/assets/logo/min-banner.png" alt="Astro Reactive Library Logo">
  <br />
  <strong>Astro Reactive Validator</strong>
  <br />
  Set up validators for your forms easily.
  <br />
  <br />
  <a href="https://www.npmjs.com/package/@astro-reactive/validator">
    <img src="https://img.shields.io/npm/v/@astro-reactive/validator" alt="Package information: NPM version" />
  </a>
  <a href="https://www.npmjs.com/package/@astro-reactive/validator">
    <img src="https://img.shields.io/npm/l/@astro-reactive/validator" alt="Package information: NPM license" />
  </a>
  <a href="https://www.npmjs.com/package/@astro-reactive/validator">
    <img src="https://img.shields.io/npm/dt/@astro-reactive/validator" alt="Package information: NPM downloads" />
  </a>
  <a href="https://www.npmjs.com/package/@astro-reactive/validator">
    <img src="https://img.shields.io/librariesio/release/npm/@astro-reactive/validator" alt="Package information: NPM dependencies status" />
  </a>
  <br />
  <br />
</p>

## Installation
In your [Astro](https://astro.build) project:

```
npm i @astro-reactive/validator @astro-reactive/form
```

## Usage
Use in an Astro page:

```astro
---
import Form, { FormControl, FormGroup } from "@astro-reactive/form";
import { Validators } from "@astro-reactive/validator";

const form = new FormGroup([
  {
    name: "username",
    label: "Username",
    validators: [Validators.required],
  },
  {
    name: "email",
    label: "Email",
    validators: [Validators.email, Validators.required],
  },
  {
    name: "password",
    label: "Password",
    type: "password",
    validators: [Validators.required, Validators.minLength(8)],
  },
]);

// you can insert a control at any point
form.controls.push(
  new FormControl({
    type: "checkbox",
    name: "is-awesome",
    label: "is Awesome?",
  })
);

---

<Form showValidationHints formGroups={form} />
<!-- 
  The `showValidationHints` attribute tells the Form component
  that you want to render validation hints. So far, these are:
    1. asterisks on required controls' labels
    2. controls with errors will become color red

  This property is optional and set to false by default,
  which keeps the Form component unstyled,
  and gives you have the freedom to style it yourself.
-->
```

👉 For more examples and explanations of the component properties, see the [Validators API Docs](https://docs.astro-reactive.dev/en/api/validator/validators/).

# Screenshots

![Screen Shot 2022-10-15 at 1 31 11 PM](https://user-images.githubusercontent.com/4262489/195984173-c19e8cf0-bc55-41d5-8267-e3de44c6bf64.png)

# Validators available
1. `Validators.min(limit)` - checks if number value is greater than or equal to limit
1. `Validators.max(limit)` - checks if number value is less than or equal to limit
1. `Validators.required` - checks if value is empty
1. `Validators.requiredChecked` - checks if value is "checked"
1. `Validators.email` - checks if value is a valid email
1. `Validators.minLength(limit)` - checks if value length is greater than or equal to limit
1. `Validators.maxLength(limit)` - checks if value length is less than or equal to limit

# Form component

This validation library is designed to work with [Astro Reactive Form](https://www.npmjs.com/package/@astro-reactive/form), our package for generating dynamic forms.

# We are opensource!

👉 _All [contributions](https://github.com/astro-reactive/astro-reactive/blob/main/CONTRIBUTING.md) are welcome. Let's make the validation library for Astro._

👉 _This package is a work in progress. See the [change log](https://github.com/astro-reactive/astro-reactive/blob/main/packages/validator/CHANGELOG.md)_.

