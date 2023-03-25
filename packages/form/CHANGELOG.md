# @astro-reactive/form

## 0.8.1

### Patch Changes

- 334a4c5: - Update documentation links to release notes
- Updated dependencies [334a4c5]
  - @astro-reactive/validator@0.3.4

## 0.8.0

### Minor Changes

- 30de516: Change the default of `validateOnLoad` property to true, making server-side rendering validation the default behavior for the `Form` component.
  Update the demo `index.astro` page by removing the `validateOnLoad` property/directive on the example which should still result to server-side rendered validation results.

### Patch Changes

- fb11b73: Initial `create-astro-reactive` package
  Update packages' meta information (author, homepage)
  Upadte LICENSE owner info to `astro-reactive` organization
- Updated dependencies [fb11b73]
  - @astro-reactive/validator@0.3.3
  - @astro-reactive/common@0.1.9

## 0.7.2

### Patch Changes

- 414a0bd: Fix dependencies for Astro v2+ support
- Updated dependencies [414a0bd]
  - @astro-reactive/validator@0.3.2
  - @astro-reactive/common@0.1.8

## v0.7.0

- project chores: updates on how the packages share common files, initial codecov set up
- documentation updates: Readme examples and API docs update
- support for Astro v2

## v0.6.7

- fix form method type to accept: 'get', 'post', 'dialog'

## v0.6.6

- implement validation hooks with form's `triggerValidationOn` prop
- types and intellisense improvements
- validation support for RadioGroup
- form's `action` and `method` props

## v0.6.5

- fix deps

## v0.6.4

- Form component's new `validateOnLoad` property
- FormGroup.setValue() method to set values for the whole form
- fix for Radio Group's inputs not having unique IDs

## v0.6.3

- make `Checkbox.checked` optional

## v0.6.2

- fix broken `ControlConfig`

## v0.6.1

- fix wrong dependency version

## v0.6.0

- deprecate `labelPosition` prop
- implement TextArea control
- add method `setValidators` to FormControl
- implement `readOnly` flag
- implement Dropdown control

## v0.5.1 - v0.5.2

- use @astro-reactive/common

## v0.5.1

- fix for dynamic import of validator causing errors (breaks independence)

## v0.5.0

- server-rendered validation errors (when control was set with invalid value)
- radio control accepts array of value or RadioOption
- added tests for form components

## v0.4.5

- update project documentations

## v0.4.4

- `validators` property in ControlConfig to set validators for a control

## v0.4.1

- set `showValidationHints` to true to show validation hints

## v0.3.0

- new control configuration type `ControlConfig`

## v0.2.7

- updated project logo

## v0.2.6

- support single `FormGroup` as input to the `Form` component
- implement `Form` component input prop `theme`
- add initial implementation of `FormControl` `isPristine` and `isValid` states
- filter out control with type 'submit' from the FormGroup.controls
- implement the submitControl Form input prop
- implement the FormControl placeholder attribute

## v0.2.4 to v0.2.5

- update package README
- update dependencies

## v0.2.2

- initial light and dark mode scaffold
- update package README

## v0.2.1

- FormGroup.get(name) - returns the FormControl with matching name
- FormControl.setValue(value) - sets the FormControl value
