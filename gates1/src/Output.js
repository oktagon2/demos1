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

        /** @member {boolean} */
        this.sentValue= false
    }

    /**
     * @param {boolean} value
     */
    set value( value) {
        if( this._value!= value) {
            this._value= value;
        }
    }

    sendValue() {
        if( this.sentValue!= this._value) {
            this.inputs.forEach( element => element.value= this._value)
            this.sentValue= this.value
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
        input.connect( this.value);
    }
}