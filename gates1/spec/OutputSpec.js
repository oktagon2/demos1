describe( "Output", function() {
    it("create", function() {
        var output= new Output()
        expect( output).toBeDefined()
    })

    it( "set and get value", function() {
        var output= new Output();
        var input= new Input();
        output.inputs.push( input)
        expect(output.value).toBe(false);
        output.value= true;
        expect(output.value).toBe(true)
        expect(input.value).toBe(true);
        output.value= false;
        expect(output.value).toBe(false);
        expect(input.value).toBe(false);
    })

})