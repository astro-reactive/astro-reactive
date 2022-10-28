/**
 * `ControlType` determines the type of form control
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#input_types
 */
export type InputType =
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
  | "week";

export type ControlType = InputType | "dropdown";

export interface ControlBase {
  name: string;
  id?: string;
  type?: ControlType;
  value?: string | number | string[];
  label?: string;
  labelPosition?: "right" | "left";
  placeholder?: string;
  validators?: string[]; // TODO: implement validator type
  options?: string[] | ControlOption[];
}

export interface Checkbox extends ControlBase {
  type: "checkbox";
  checked: boolean;
}

export interface Radio extends Omit<ControlBase, "value"> {
  type: "radio";
  value?: string;
  options: string[] | ControlOption[];
}

export interface Dropdown extends Omit<ControlBase, "value"> {
  type: "dropdown";
  value?: string;
  options: string[] | ControlOption[];
}

export interface ControlOption {
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
