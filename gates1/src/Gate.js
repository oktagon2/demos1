/**
 * Use Cases:
 * - Auffrischen
 *   Aktion                    Reaktion
 *   gate.refresh()            Output wird neu berechnet
 *                             aber nur, falls Gate verschmutzt ist
 *                             HINWEIS: Die Funktion wird in den von Gate
 *                             abgeleiteten implementiert.
 */
class Gate {
    /** @static @member {Array.Gate} */
    static dirtyGateFound= false
    static allGates= []
    static refreshAllGates() {
        Gate.dirtyGateFound= true
        while( Gate.dirtyGateFound) {
            Gate.dirtyGateFound= false
            Gate.allGates.forEach( element => element.refresh())
        }
    }
    static clearAllGates() {
        Gate.allGates= []
    }
    constructor() {
        Gate.allGates.push( this)

        /** @member {Array.Input} */
        this.inputs= []

        /** @member {Array.Output} */
        this.outputs= []

        /** @member {boolean} */
        this.dirty= true
    }
}