/**
*	A class that holds static methods for input validation. 
*/
export class FormValidators {
	static validEmail(email) {
		return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)	
	}

	static notEmpty(value) {
		return value.length > 0;
	}

	static validForm(formInputs) {
		return formInputs.map(field => field.isValid).every(bool => bool);
	}

}

