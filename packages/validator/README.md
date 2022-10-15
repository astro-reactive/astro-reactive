<p align="center">
  <img src="https://raw.githubusercontent.com/ayoayco/astro-reactive-library/main/.github/assets/logo/min-banner.png" alt="Astro Reactive Library Logo">
  <strong>Astro Reactive Validator</strong>
  <br />
  Set up validators for your forms easily.
  <br />
  <br />
  <img src="https://img.shields.io/npm/v/@astro-reactive/validator" />
  <img src="https://img.shields.io/npm/l/@astro-reactive/validator" />
  <img src="https://img.shields.io/npm/dt/@astro-reactive/validator" />
  <img src="https://img.shields.io/librariesio/release/npm/@astro-reactive/validator" />
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

<!-- 
  the `formGroups` attribute can take a single FormGroup
  or an array of FormGroup for multiple fieldsets;
  we do a single for now in this example
-->
<Form showValidationHints={true} formGroups={form} />
```

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
