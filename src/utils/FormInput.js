/**
 *  A class that encapsulates a form input value with whether or not it's valid. 
 */
export class FormInput {
    label
    value
    isValid
    isTouched

    constructor(label) {
        this.label = label;
        this.value = "";
        this.isValid = false;
        this.isTouched = false;
    }

}