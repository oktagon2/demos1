/**
 * Use Cases:
 * - Wert des Outputs setzen
 *   Aktion                    Reaktion
 *   output.value= <boolean>   Wert wird gespeichert
 *                             Wert wird an alle Inputs weitergegeben
 */
 class Output {
    constructor() {
        /** @member {Array.Input} */
        this.inputs= []

        /** @member {?Gate} */
        this.gate= null

        /** @member {boolean} */
        this._value= false
    }

    /**
     * @param {boolean} value
     */
    set value( value) {
        if( this._value!= value) {
            this._value= value;
            this.inputs.forEach( element => element.value= value)
        }
    }

    /**
     * @returns {boolean}
     */
    get value() {
        return this._value
    }

    /**
     * @param {Input} input
     */
    addInput( input) {
        this.inputs.push( input);
        input.value= this.value;
    }
}