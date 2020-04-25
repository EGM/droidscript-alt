import View from "./view";
export default class Chk extends View {
    constructor(id) {
        super(id);
    }
    getChecked() {
        return prompt(this.id, `Chk.GetChecked(`) === "true";
    }
    getText() {
        return prompt(this.id, `Chk.GetText(`);
    }
    getTextSize(mode) {
        return parseFloat(prompt(this.id, `Chk.GetTextSize(\f${mode}`));
    }
    getType() {
        return "CheckBox";
    }
    setChecked(checked) {
        prompt(this.id, `Chk.SetChecked(${checked}`);
        return this;
    }
    setOnTouch(callback) {
        prompt(this.id, `Chk.SetOnClick(${_Cbm(callback)}`);
        return this;
    }
    setText(text) {
        prompt(this.id, `Chk.SetText(${text}`);
        return this;
    }
    setTextColor(clr) {
        prompt(this.id, `Chk.SetTextColor(${clr}`);
        return this;
    }
    setTextSize(size, mode) {
        prompt(this.id, `Chk.SetTextSize(\f${size}\f${mode}`);
        return this;
    }
}
