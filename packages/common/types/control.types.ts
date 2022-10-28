/**
 * `ControlType` determines the type of form control
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
 */
export type ControlType =
  | "text"
  | "checkbox"
  | "radio"
  | "password"
  | "button"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "range"
  | "search"
  | "submit"
  | "tel"
  | "time"
  | "url"
  | "week"
  | "dropdown";

export interface ControlBase {
  name: string;
  id?: string;
  type?: ControlType;
  value?: string | number | string[];
  label?: string;
  labelPosition?: "right" | "left";
  placeholder?: string;
  validators?: string[]; // TODO: implement validator type
  options?: string[] | RadioOption[]; // prevent build failed
}

export interface Checkbox extends ControlBase {
  type: "checkbox";
  checked: boolean;
}

export interface Radio extends Omit<ControlBase, "value"> {
  type: "radio";
  value?: string;
  options: string[] | RadioOption[];
}

export interface RadioOption {
  label: string;
  value: string;
}

export interface Dropdown extends Omit<ControlBase, "value"> {
  type: "dropdown";
  value?: string;
  options: string[] | DropdownOption[];
}

export interface DropdownOption {
  label: string;
  value: string;
}

export interface Submit extends ControlBase {
  type: "submit";
  callBack?: () => void;
}

export interface Button extends ControlBase {
  type: "button";
  callBack?: () => void;
}
