describe( "CalculatorContext", function() {
    it( "should be able to be created", function(){
        var calculatorContext= new CalculatorContext();
        expect(calculatorContext).toBeDefined();
    });

    it( "should display a value", function(){
        var guiAdapter= new GuiAdapter();
        var calculatorContext= new CalculatorContext();
        calculatorContext.guiAdapter= guiAdapter;
        calculatorContext.setDisplayValue( "12+34=46");
        expect(guiAdapter.displayValue.innerText).toEqual( "12+34=46");
        expect(calculatorContext.getDisplayValue()).toEqual( "12+34=46");
    });

})