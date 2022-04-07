class NorGate extends Gate {
    constructor() {
        super()
        this.inputs.push( new Input())
        this.inputs[0].gate= this
        this.inputs.push( new Input())
        this.inputs[1].gate= this
        this.outputs.push( new Output())
        this.refresh()
    }

    refresh() {
        if( this.dirty) {
            var a= this.inputs[0].value
            var b= this.inputs[1].value
            var x= !(a||b)
            this.outputs[0].value = x
            this.dirty= false
        }
    }
}