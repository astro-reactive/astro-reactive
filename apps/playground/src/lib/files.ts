import type { FileSystemTree } from '@webcontainer/api';

export const files: FileSystemTree = {
	src: {
		directory: {
			pages: {
				directory: {
					'index.astro': {
						file: {
							contents: `
                ---
          import Form, { ControlConfig, FormGroup, FormControl } from '@astro-reactive/form';
          import { Validators } from '@astro-reactive/validator';
          
          const form = new FormGroup([
            {
              name: 'username',
              label: 'Username',
              validators: [
                {
                  validator: Validators.required,
                  category: 'info',
                },
              ],
            },
            {
              name: 'email',
              label: 'Email',
              validators: [
                { validator: Validators.required },
                { validator: Validators.email, category: 'warn' },
              ],
            },
            {
              name: 'password',
              label: 'Password',
              type: 'password',
              validators: [Validators.required, Validators.minLength(8)],
            },
            {
              name: 'rating',
              label: 'Rating',
              type: 'radio',
              options: ['1', '2', '3', '4', '5'],
            },
            {
              name: 'agreement',
              label: 'Agreement',
              type: 'radio',
              value: 'yes',
              options: [
                { label: 'Agree', value: 'yes' },
                { label: 'Disagree', value: 'no' },
              ],
            },
            {
              name: 'size',
              label: 'Size',
              type: 'dropdown',
              options: ['S', 'M', 'L', 'XL', 'XXL'],
              placeholder: '-- Please choose an option --',
            },
            {
              name: 'comment',
              label: 'Feedback',
              type: 'textarea',
              value: 'Nice!',
            },
            {
              name: 'terms',
              label: 'Terms and Conditions',
              type: 'checkbox',
              validators: [Validators.requiredChecked],
            },
          ]);
          
          form.name = 'Simple Form';
          
          const config: ControlConfig = {
            type: 'checkbox',
            name: 'isAwesome',
            label: 'is Awesome?',
          };
          
          form.controls.push(new FormControl(config));
          
          form.setValue({
            username: 'RAMOOOON',
            isAwesome: 'checked',
          });
          
          const ratingControl = form.get('rating');
          ratingControl?.setValue('5');
          
          form.get('email')?.setValue('invalid-email');
          
          const title = 'Form Demo';
          const theme = 'dark';
          
          const submit = {
            name: 'submit',
            type: 'submit',
            value: "Let's go!",
          };
          ---
            <Form
              validateOnLoad
              showValidationHints
              formGroups={form}
              theme={theme}
              submitControl={submit}
            />
              `
						}
					}
				}
			}
		}
	},
	'package.json': {
		file: {
			contents: `
      {
        "name": "@example/basics",
        "type": "module",
        "version": "0.0.1",
        "private": true,
        "scripts": {
          "dev": "astro dev",
          "start": "astro dev",
          "build": "astro build",
          "preview": "astro preview",
          "astro": "astro"
        },
        "dependencies": {
          "astro": "^2.1.3",
          "@astro-reactive/form" : "latest",
          "@astro-reactive/validator" : "latest"
        }
      }`
		}
	},
	'astro.config.mjs': {
		file: {
			contents: `
      import { defineConfig } from 'astro/config';
      export default defineConfig({});
      `
		}
	}
};
