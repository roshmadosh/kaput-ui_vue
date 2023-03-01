/**
*	A class that holds static methods for input validation. 
*/
export class FormValidators {
	static validEmail(email) {
		return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)	
	}

	static validPassword(password) {
		return true;
	}
}

