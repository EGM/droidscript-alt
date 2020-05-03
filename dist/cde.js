import View from "./view";
export default class Cde extends View {
    constructor(id) {
        super(id);
    }
    ClearHistory() {
        prompt(this.id, "Cde.ClearHistory(");
    }
    Copy() {
        prompt(this.id, "Cde.Copy(");
    }
    Cut() {
        prompt(this.id, "Cde.Cut(");
    }
    GetCursorLine() {
        return parseInt(prompt(this.id, "Cde.GetCursorLine("));
    }
    GetCursorPos() {
        return parseInt(prompt(this.id, "Cde.GetCursorPos("));
    }
    GetLineStart(line) {
        return parseInt(prompt(this.id, `Cde.GetLineStart(${line}`));
    }
    GetSelectedText() {
        return prompt(this.id, "Cde.GetSelectedText(");
    }
    GetSelectMode() {
        return prompt(this.id, "Cde.GetSelectMode(") === "true";
    }
    GetText() {
        return prompt(this.id, "Cde.GetText(");
    }
    GetType() {
        return "CodeEdit";
    }
    HighlightLine(line) {
        prompt(this.id, `Cde.HighlightLine(\f${line}`);
    }
    InsertText(text, start) {
        prompt(this.id, `Cde.InsertText(\f${text}\f${start}`);
    }
    Paste() {
        prompt(this.id, "Cde.Paste(");
    }
    Redo() {
        prompt(this.id, "Cde.Redo(");
    }
    Replace(text) {
        prompt(this.id, `Cde.Replace(\f${text}`);
    }
    ReplaceAll(text, newText, matchCase, wholeWord) {
        prompt(this.id, `Cde.ReplaceAll(\f${text}\f${newText}\f${matchCase}\f${wholeWord}`);
    }
    ReplaceText(text, start, end) {
        prompt(this.id, `Cde.ReplaceText(\f${text}\f${start}\f${end}`);
    }
    Search(text, direction, matchCase, wholeWord) {
        prompt(this.id, `Cde.Search(\f${text}\f${direction}\f${matchCase}\f${wholeWord}`);
    }
    SelectAll() {
        prompt(this.id, "Cde.SelectAll(");
    }
    SetColorScheme(scheme) {
        prompt(this.id, `Cde.SetColorScheme(\f${scheme}`);
        return this;
    }
    SetCursorPos(position) {
        prompt(this.id, `Cde.SetCursorPos(${position}`);
        return this;
    }
    SetHtml(html) {
        prompt(this.id, `Cde.SetText(\f${html}`);
        return this;
    }
    SetLanguage(ext) {
        prompt(this.id, `Cde.SetLanguage(\f${ext}`);
        return this;
    }
    SetOnChange(callback) {
        prompt(this.id, `Cde.SetOnChange(\f${_Cbm(callback)}`);
        return this;
    }
    SetOnDoubleTap(callback) {
        prompt(this.id, `Cde.SetOnDoubleTap(\f${_Cbm(callback)}`);
        return this;
    }
    SetOnKey(callback) {
        prompt(this.id, `Cde.SetOnKey(\f${_Cbm(callback)}`);
        return this;
    }
    SetNavigationMethod(method) {
        prompt(this.id, `Cde.SetNavigationMethod(\f${method}`);
        return this;
    }
    SetSelection(start, stop) {
        prompt(this.id, `Cde.SetSelection(\f${start}\f${stop}`);
        return this;
    }
    SetText(text) {
        prompt(this.id, `Cde.SetText(\f${text}`);
        return this;
    }
    SetTextColor(color) {
        prompt(this.id, `Cde.SetTextColor(\f${color}`);
        return this;
    }
    SetTextSize(size, mode) {
        prompt(this.id, `Cde.SetTextSize(\f${size}\f${mode}`);
        return this;
    }
    SetUseKeyboard(onOff) {
        prompt(this.id, `Cde.SetUseKeyboard(\f${onOff}`);
        return this;
    }
    Undo() {
        prompt(this.id, "Cde.Undo(");
    }
}
