describe( "Input", function() {
    it( "create", function() {
        var input= new Input();
        expect(input).toBeDefined();
    })

    it( "set and get value", function() {
        var input= new Input()
        input.gate= new Gate()
        input.gate.dirty= false
        input.value= true;
        expect(input.value).toBe(true);
        expect(input.gate.dirty).toBe(true);
        input.value= false;
        expect(input.value).toBe(false);
        expect(input.gate.dirty).toBe(true);
    })

})