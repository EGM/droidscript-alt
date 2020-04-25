import View from "./view";
export default class Txt extends View {
    constructor(id) {
        super(id);
    }
    getHtml() {
        return prompt(this.id, "Txt.GetHtml(");
    }
    getLineCount() {
        return parseInt(prompt(this.id, "Txt.GetLineCount("));
    }
    getLineStart(line) {
        return parseInt(prompt(this.id, `Txt.GetLineStart(${line}`));
    }
    getLineTop(line) {
        return parseFloat(prompt(this.id, `Txt.GetLineTop(${line}`));
    }
    getMaxLines() {
        return parseInt(prompt(this.id, "Txt.GetMaxLines("));
    }
    getText() {
        return prompt(this.id, "Txt.GetText(");
    }
    getTextSize(mode) {
        return parseFloat(prompt(this.id, `Txt.GetTextSize(\f${mode}`));
    }
    getType() {
        return "Text";
    }
    log(message, options) {
        prompt(this.id, `Txt.Log(\f${message}\f${options}`);
        return this;
    }
    setEllipsize(mode) {
        prompt(this.id, `Txt.SetEllipsize(\f${mode}`);
        return this;
    }
    setFontFile(file) {
        prompt(this.id, `Txt.SetFontFile(\f${file}`);
        return this;
    }
    setHtml(html) {
        prompt(this.id, `Txt.SetHtml(${html}`);
        return this;
    }
    setLog(maxLines) {
        prompt(this.id, `Txt.SetLog(\f${maxLines}`);
        return this;
    }
    setOnLongTouch(callback) {
        prompt(this.id, `Txt.SetOnLongTouch(${_Cbm(callback)}`);
        return this;
    }
    setOnTouch(callback) {
        prompt(this.id, `Txt.SetOnTouch(${_Cbm(callback)}`);
        return this;
    }
    setOnTouchDown(callback) {
        prompt(this.id, `Txt.SetOnTouchDown(${_Cbm(callback)}`);
        return this;
    }
    setOnTouchMove(callback) {
        prompt(this.id, `Txt.SetOnTouchMove(${_Cbm(callback)}`);
        return this;
    }
    setOnTouchUp(callback) {
        prompt(this.id, `Txt.SetOnTouchUp(${_Cbm(callback)}`);
        return this;
    }
    setText(text) {
        prompt(this.id, `Txt.SetText(${text}`);
        return this;
    }
    setTextColor(color) {
        prompt(this.id, `Txt.SetTextColor(${color}`);
        return this;
    }
    setTextShadow(radius, dx, dy, color) {
        prompt(this.id, `Txt.SetTextShadow(\f${radius}\f${dx}\f${dy}\f${color}`);
        return this;
    }
    setTextSize(size, mode) {
        prompt(this.id, `Txt.SetTextSize(\f${size}\f${mode}`);
        return this;
    }
    setTouchable(touchable) {
        prompt(this.id, `Txt.SetTouchable(${touchable}`);
        return this;
    }
}
