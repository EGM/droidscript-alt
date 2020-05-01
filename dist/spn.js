import View from "./view";
export default class Spn extends View {
    constructor(id) {
        super(id);
    }
    getText() {
        return prompt(this.id, "Spn.GetText(");
    }
    getTextSize(mode) {
        return parseFloat(prompt(this.id, `Spn.GetTextSize(\f${mode}`));
    }
    getType() {
        return "Spinner";
    }
    selectItem(item) {
        prompt(this.id, `Spn.SetText(${item}`);
    }
    setList(list, delim) {
        prompt(this.id, `Spn.SetList(\f${list}\f${delim}`);
        return this;
    }
    setOnChange(callback) {
        prompt(this.id, `Spn.SetOnClick(${_Cbm(callback)}`);
        return this;
    }
    setOnTouch(callback) {
        prompt(this.id, `Spn.SetOnClick(${_Cbm(callback)}`);
        return this;
    }
    setText(text) {
        prompt(this.id, `Spn.SetText(${text}`);
        return this;
    }
    setTextColor(color) {
        prompt(this.id, `Spn.SetTextColor(${color}`);
        return this;
    }
    setTextSize(size, mode) {
        prompt(this.id, `Spn.SetTextSize(\f${size}\f${mode}`);
        return this;
    }
}
