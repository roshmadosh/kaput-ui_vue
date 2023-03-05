/**
 *  A class that encapsulates a form input value with whether or not it's valid. 
 */
export class FormInput {
    label
    value
    isValid
    isTouched
		validators

    constructor(label, validators) {
        this.label = label;
        this.value = "";
        this.isValid = false;
        this.isTouched = false;
				this.validators = validators;
    }

		validate(value) {
			this.isValid = this.validators.map(validator => validator(this.value)).every(bool => bool);	
		}

}
