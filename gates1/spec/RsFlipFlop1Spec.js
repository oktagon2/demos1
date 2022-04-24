describe( "RsFlipFlop1", function() {
    it( "create", function() {
        var flipFlop= new RsFlipFlop1()
        expect( flipFlop).toBeDefined()
    })

    it( "flip and flop", function() {
        Gate.clearAllGates()
        var flipFlop= new RsFlipFlop1()
        
        flipFlop.inputS.value= true
        Gate.refreshAllGates()
        expect( flipFlop.outputQ1.value).toBe( true)
        expect( flipFlop.outputQ2.value).toBe( false)

        flipFlop.inputS.value= false
        Gate.refreshAllGates()
        expect( flipFlop.outputQ1.value).toBe( true)
        expect( flipFlop.outputQ2.value).toBe( false)

        flipFlop.inputR.value= true
        Gate.refreshAllGates()
        expect( flipFlop.outputQ1.value).toBe( false)
        expect( flipFlop.outputQ2.value).toBe( true)

        flipFlop.inputR.value= false
        Gate.refreshAllGates()
        expect( flipFlop.outputQ1.value).toBe( false)
        expect( flipFlop.outputQ2.value).toBe( true)
    })
})