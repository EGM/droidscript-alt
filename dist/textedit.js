import View from "./view";
export default class TextEdit extends View {
    constructor(id) {
        super(id);
    }
    clearHistory() {
        prompt(this.id, "Txe.ClearHistory(");
    }
    getCursorLine() {
        return parseInt(prompt(this.id, "Txe.GetCursorLine("));
    }
    getCursorPos() {
        return parseInt(prompt(this.id, "Txe.GetCursorPos("));
    }
    getHtml() {
        return prompt(this.id, "Txe.GetHtml(");
    }
    getLineCount() {
        return parseInt(prompt(this.id, "Txe.GetLineCount("));
    }
    getLineStart(line) {
        return parseInt(prompt(this.id, `Txe.GetLineStart(${line}`));
    }
    getLineTop(line) {
        return parseFloat(prompt(this.id, `Txe.GetLineTop(${line}`));
    }
    getMaxLines() {
        return parseInt(prompt(this.id, "Txe.GetMaxLines("));
    }
    getSelectedText() {
        return prompt(this.id, "Txe.GetSelectedText(");
    }
    getSelectionEnd() {
        return parseInt(prompt(this.id, "Txe.GetSelectionEnd("));
    }
    getSelectionStart() {
        return parseInt(prompt(this.id, "Txe.GetSelectionStart("));
    }
    getText() {
        return prompt(this.id, "Txe.GetText(");
    }
    getTextSize(mode) {
        return parseFloat(prompt(this.id, `Txe.GetTextSize(\f${mode}`));
    }
    getType() {
        return "TextEdit";
    }
    insertText(text, start) {
        prompt(this.id, `Txe.InsertText(\f${text}\f${start}`);
    }
    redo() {
        prompt(this.id, "Txe.Redo(");
    }
    replaceText(text, start, end) {
        prompt(this.id, `Txe.ReplaceText(\f${text}\f${start}\f${end}`);
    }
    setCursorColor(color) {
        prompt(this.id, `Txe.SetCursorColor(\f${color}`);
        return this;
    }
    setCursorPos(position) {
        prompt(this.id, `Txe.SetCursorPos(${position}`);
        return this;
    }
    setHint(text) {
        prompt(this.id, `Txe.SetHint(${text}`);
        return this;
    }
    setHtml(html) {
        prompt(this.id, `Txe.SetHtml(${html}`);
        return this;
    }
    setOnChange(callback) {
        prompt(this.id, `Txe.SetOnChange(\f${_Cbm(callback)}`);
        return this;
    }
    setOnEnter(callback) {
        prompt(this.id, `Txe.SetOnEnter(\f${_Cbm(callback)}`);
        return this;
    }
    setOnFocus(callback) {
        prompt(this.id, `Txe.SetOnFocus(\f${_Cbm(callback)}`);
        return this;
    }
    setOnTouch(callback) {
        prompt(this.id, `Txe.SetOnTouch(\f${_Cbm(callback)}`);
        return this;
    }
    setSelection(start, stop) {
        prompt(this.id, `Txe.SetSelection(\f${start}\f${stop}`);
        return this;
    }
    setText(txt) {
        prompt(this.id, `Txe.SetText(${txt}`);
        return this;
    }
    setTextColor(color) {
        prompt(this.id, `Txe.SetTextColor(${color}`);
        return this;
    }
    setTextSize(size, mode) {
        prompt(this.id, `Txe.SetTextSize(\f${size}\f${mode}`);
        return this;
    }
    undo() {
        prompt(this.id, "Txe.Undo(");
    }
}
