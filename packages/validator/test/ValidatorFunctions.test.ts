import { describe, it } from 'mocha';
import { expect } from 'chai';
import { validateRequired } from '../core/validator-functions';

describe('ValidatorFunctions test', () => {
	describe('validateRequired', () => {
		it('should return null for valid value', () => {
			expect(validateRequired('test')).to.be.null;
		});

		it('should return ValidationError for invalid value', () => {
			expect(validateRequired('')).to.be.deep.equal({
				error: 'required',
				value: '',
			});
		});
	});
});
