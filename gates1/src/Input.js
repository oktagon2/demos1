/**
 * Use Cases:
 * - Wert des Inputs setzen
 *   Aktion                   Reaktion
 *   input.value= <boolean>   Wert wird gespeichert
 *                            Gate wird verschmutzt
 */
class Input {
    constructor() {
        /** @member {?Output} */
        this.output= null

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
            if( this.gate!= null) {
                this.gate.dirty= true
            }
        } 
    }

    /**
     * @returns {boolean}
     */
    get value() {
        return this._value
    }
}
