### v0.5.1
- fix for dynamic import of validator causing errors (breaks independence)

## v0.5.0
- server-rendered validation errors (when control was set with invalid value)
- radio control accepts array of value or RadioOption
- added tests for form components

### v0.4.5
- update project documentations

### v0.4.4
- `validators` property in ControlConfig to set validators for a control

### v0.4.1
- set `showValidationHints` to true to show validation hints

## v0.3.0
- new control configuration type `ControlConfig`

### v0.2.7
- updated project logo

### v0.2.6
- support single `FormGroup` as input to the `Form` component
- implement `Form` component input prop `theme`
- add initial implementation of `FormControl` `isPristine` and `isValid` states
- filter out control with type 'submit' from the FormGroup.controls
- implement the submitControl Form input prop
- implement the FormControl placeholder attribute

### v0.2.4 to v0.2.5
- update package README
- update dependencies

### v0.2.2
- initial light and dark mode scaffold
- update package README

### v0.2.1
- FormGroup.get(name) - returns the FormControl with matching name
- FormControl.setValue(value) - sets the FormControl value
