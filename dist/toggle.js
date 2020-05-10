import View from "./view";
export default class Toggle extends View {
    constructor(id) {
        super(id);
    }
    getChecked() {
        return prompt(this.id, "Tgl.GetChecked(") === "true";
    }
    getText() {
        return prompt(this.id, "Tgl.GetText(");
    }
    getTextSize(mode) {
        return parseFloat(prompt(this.id, `Tgl.GetTextSize(\f${mode}`));
    }
    getType() {
        return "Toggle";
    }
    setChecked(checked) {
        prompt(this.id, `Tgl.SetChecked(${checked}`);
        return this;
    }
    setOnTouch(callback) {
        prompt(this.id, `Tgl.SetOnClick(${_Cbm(callback)}`);
        return this;
    }
    setStyle(color1, color2, radius, strokeClr, strokeWidth, shadow, checkColor) {
        prompt(this.id, `Tgl.SetStyle(\f${color1}\f${color2}\f${radius}\f${strokeClr}\f${strokeWidth}\f${shadow}\f${checkColor}`);
        return this;
    }
    setText(text) {
        prompt(this.id, `Tgl.SetText(${text}`);
        return this;
    }
    setTextColor(color) {
        prompt(this.id, `Tgl.SetTextColor(${color}`);
        return this;
    }
    setTextSize(size, mode) {
        prompt(this.id, `Tgl.SetTextSize(\f${size}\f${mode}`);
        return this;
    }
}
