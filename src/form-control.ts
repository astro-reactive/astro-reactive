export class FormControl {
	name: string;
  type?: 'text' | 'checkbox' | 'radio' = 'text'; // add more
  value?: string | number | null | string[];
	label?: string;
}
