class RsFlipFlop1 {
    constructor() {

        /** @member {NorGate} */
        this.norGate1= new NorGate()

        /** @member {NorGate} */
        this.norGate2= new NorGate()

        /** @member {Input} */
        this.inputS= this.norGate1.inputs[0]

        /** @member {Input} */
        this.inputR= this.norGate2.inputs[1]

        /** @member {Output} */
        this.outputQ1= this.norGate2.outputs[0]

        /** @member {Output} */
        this.outputQ2= this.norGate1.outputs[0]

        this.norGate1.outputs[0].addInput( this.norGate2.inputs[0])
        this.norGate2.outputs[0].addInput( this.norGate1.inputs[1])
        this.inputS.value= false
        this.inputR.value= false
        Gate.refreshAllGates();
    }
}