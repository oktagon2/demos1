describe( "NorGate", function() {
    it( "create", function(){
        var norGate= new NorGate();
        expect(norGate).toBeDefined();
    });

    it( "work", function() {
        var norGate= new NorGate();
        var inputA= norGate.inputs[0]
        var inputB= norGate.inputs[1]
        var outputX= norGate.outputs[0]

        expect(inputA.value).toBe(false);
        expect(inputB.value).toBe(false);
        expect(outputX.value).toBe(true);

        inputA.value= true;
        Gate.refreshAllGates();
        expect(inputA.value).toBe(true);
        expect(inputB.value).toBe(false);
        expect(outputX.value).toBe(false);

        inputB.value= true;
        Gate.refreshAllGates();
        expect(inputA.value).toBe(true);
        expect(inputB.value).toBe(true);
        expect(outputX.value).toBe(false);

        inputA.value= false;
        Gate.refreshAllGates();
        expect(inputA.value).toBe(false);
        expect(inputB.value).toBe(true);
        expect(outputX.value).toBe(false);
    });

    it( "chaining", function() {
        Gate.clearAllGates();
        var norGate1= new NorGate();
        var norGate2= new NorGate();
        var input1A= norGate1.inputs[0];
        var input1B= norGate1.inputs[1];
        var output1X= norGate1.outputs[0];
        var input2A= norGate2.inputs[0];
        var input2B= norGate2.inputs[1];
        var output2X= norGate2.outputs[0];

        output1X.addInput( input2A);
        output1X.addInput( input2B);
        
        Gate.refreshAllGates();
        expect(output2X.value).toBe(false);

        input1A.value= true;
        Gate.refreshAllGates();
        Gate.refreshAllGates();
        Gate.refreshAllGates();
        expect(output2X.value).toBe(true);

    });
});