import View from "./view";
export default class Button extends View {
    constructor(id) {
        super(id);
    }
    getText() {
        return prompt(this.id, `Btn.GetText(`);
    }
    getTextSize(mode) {
        return parseFloat(prompt(this.id, `Btn.GetTextSize(\f${mode}`));
    }
    getType() {
        return "Button";
    }
    setEllipsize(mode) {
        prompt(this.id, `Btn.SetEllipsize(\f${mode}`);
        return this;
    }
    setFontFile(file) {
        prompt(this.id, `Btn.SetFontFile(\f${file}`);
        return this;
    }
    setHtml(html) {
        prompt(this.id, `Btn.SetHtml(${html}`);
        return this;
    }
    setOnLongTouch(callback) {
        prompt(this.id, `Btn.SetOnLongTouch(\f${_Cbm(callback)}`);
        return this;
    }
    setOnTouch(callback) {
        prompt(this.id, `Btn.SetOnTouch(\f${_Cbm(callback)}`);
        return this;
    }
    setStyle(clr1, clr2, radius, strokeClr, strokeWidth, shadow) {
        prompt(this.id, `Btn.SetStyle(\f${clr1}\f${clr2}\f${radius}\f${strokeClr}\f${strokeWidth}\f${shadow}`);
        return this;
    }
    setText(text) {
        prompt(this.id, `Btn.SetText(${text}`);
        return this;
    }
    setTextColor(clr) {
        prompt(this.id, `Btn.SetTextColor(${clr}`);
        return this;
    }
    setTextShadow(radius, dx, dy, color) {
        prompt(this.id, `Btn.SetTextShadow(\f${radius}\f${dx}\f${dy}\f${color}`);
        return this;
    }
    setTextSize(size, mode) {
        prompt(this.id, `Btn.SetTextSize(\f${size}\f${mode}`);
        return this;
    }
}
