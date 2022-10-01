export class FormControl {
	name: string;
	type?: 'text' | 'checkbox' | 'radio' | 'password' = 'text'; // add more
	value?: string | number | null | string[];
	label?: string;
	labelPosition?: 'right' | 'left' = 'left';
}

/**
 * TODO: Create classes for each control type
 */

export class Checkbox extends FormControl {
	type: 'checkbox';
	checked: boolean;
}

export class Radio extends FormControl {
	type: 'checkbox';
	checked: boolean;
}
