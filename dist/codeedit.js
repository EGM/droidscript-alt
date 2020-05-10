import View from "./view";
export default class CodeEdit extends View {
    constructor(id) {
        super(id);
    }
    clearHistory() {
        prompt(this.id, "Cde.ClearHistory(");
    }
    copy() {
        prompt(this.id, "Cde.Copy(");
    }
    cut() {
        prompt(this.id, "Cde.Cut(");
    }
    getCursorLine() {
        return parseInt(prompt(this.id, "Cde.GetCursorLine("));
    }
    getCursorPos() {
        return parseInt(prompt(this.id, "Cde.GetCursorPos("));
    }
    getLineStart(line) {
        return parseInt(prompt(this.id, `Cde.GetLineStart(${line}`));
    }
    getSelectedText() {
        return prompt(this.id, "Cde.GetSelectedText(");
    }
    getSelectMode() {
        return prompt(this.id, "Cde.GetSelectMode(") === "true";
    }
    getText() {
        return prompt(this.id, "Cde.GetText(");
    }
    getType() {
        return "CodeEdit";
    }
    highlightLine(line) {
        prompt(this.id, `Cde.HighlightLine(\f${line}`);
    }
    insertText(text, start) {
        prompt(this.id, `Cde.InsertText(\f${text}\f${start}`);
    }
    paste() {
        prompt(this.id, "Cde.Paste(");
    }
    redo() {
        prompt(this.id, "Cde.Redo(");
    }
    replace(text) {
        prompt(this.id, `Cde.Replace(\f${text}`);
    }
    replaceAll(text, newText, matchCase, wholeWord) {
        prompt(this.id, `Cde.ReplaceAll(\f${text}\f${newText}\f${matchCase}\f${wholeWord}`);
    }
    replaceText(text, start, end) {
        prompt(this.id, `Cde.ReplaceText(\f${text}\f${start}\f${end}`);
    }
    search(text, direction, matchCase, wholeWord) {
        prompt(this.id, `Cde.Search(\f${text}\f${direction}\f${matchCase}\f${wholeWord}`);
    }
    selectAll() {
        prompt(this.id, "Cde.SelectAll(");
    }
    setColorScheme(scheme) {
        prompt(this.id, `Cde.SetColorScheme(\f${scheme}`);
        return this;
    }
    setCursorPos(position) {
        prompt(this.id, `Cde.SetCursorPos(${position}`);
        return this;
    }
    setHtml(html) {
        prompt(this.id, `Cde.SetText(\f${html}`);
        return this;
    }
    setLanguage(ext) {
        prompt(this.id, `Cde.SetLanguage(\f${ext}`);
        return this;
    }
    setOnChange(callback) {
        prompt(this.id, `Cde.SetOnChange(\f${_Cbm(callback)}`);
        return this;
    }
    setOnDoubleTap(callback) {
        prompt(this.id, `Cde.SetOnDoubleTap(\f${_Cbm(callback)}`);
        return this;
    }
    setOnKey(callback) {
        prompt(this.id, `Cde.SetOnKey(\f${_Cbm(callback)}`);
        return this;
    }
    setNavigationMethod(method) {
        prompt(this.id, `Cde.SetNavigationMethod(\f${method}`);
        return this;
    }
    setSelection(start, stop) {
        prompt(this.id, `Cde.SetSelection(\f${start}\f${stop}`);
        return this;
    }
    setText(text) {
        prompt(this.id, `Cde.SetText(\f${text}`);
        return this;
    }
    setTextColor(color) {
        prompt(this.id, `Cde.SetTextColor(\f${color}`);
        return this;
    }
    setTextSize(size, mode) {
        prompt(this.id, `Cde.SetTextSize(\f${size}\f${mode}`);
        return this;
    }
    setUseKeyboard(onOff) {
        prompt(this.id, `Cde.SetUseKeyboard(\f${onOff}`);
        return this;
    }
    undo() {
        prompt(this.id, "Cde.Undo(");
    }
}
