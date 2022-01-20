describe( "GuiAdapter", function() {
    it( "should be able to be created", function(){
        var guiAdapter= new GuiAdapter();
        expect(guiAdapter).toBeDefined();
    });

    it( "should have some HTMLElements", function() {
        var guiAdapter= new GuiAdapter();
        expect(guiAdapter.key1).toBeInstanceOf(HTMLElement);
        expect(guiAdapter.keyC).toBeInstanceOf(HTMLElement);
        expect(guiAdapter.displayValue).toBeInstanceOf(HTMLElement);
    });
});