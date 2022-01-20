class CalculatorContext {
    setDisplayValue( value) {
        this.guiAdapter.displayValue.innerText= value;
    }

    getDisplayValue() {
        return this.guiAdapter.displayValue.innerText;
    }
}