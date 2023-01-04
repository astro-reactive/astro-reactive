import type { ValidationHooks, ValidatorRules } from "./validator.types";

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

export type HTTPSubmitMethod = "get" | "post" | "dialog";

export type ControlType = InputType | "dropdown" | "textarea";

export interface ControlBase {
  name: string;
  id?: string;
  type?: ControlType;
  value?: string | number | string[];
  label?: string;
  placeholder?: string;
  validators?: ValidatorRules;
  triggerValidationOn?: ValidationHooks;
}

export interface Checkbox extends ControlBase {
  type: "checkbox";
  checked?: boolean;
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

export interface TextArea extends ControlBase {
  type: "textarea";
  value?: string;
  rows?: number;
  cols?: number;
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
