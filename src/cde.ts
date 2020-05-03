import View from "./view";
export default class Cde extends View {
  constructor(id: string) {
    super(id);
  }

  ClearHistory(): void {
    prompt(this.id, "Cde.ClearHistory(");
  }
  Copy(): void {
    prompt(this.id, "Cde.Copy(");
  }
  Cut(): void {
    prompt(this.id, "Cde.Cut(");
  }
  GetCursorLine(): number {
    return parseInt(prompt(this.id, "Cde.GetCursorLine("));
  }
  GetCursorPos(): number {
    return parseInt(prompt(this.id, "Cde.GetCursorPos("));
  }
  GetLineStart(line): number {
    return parseInt(prompt(this.id, `Cde.GetLineStart(${line}`));
  }
  GetSelectedText(): string {
    return prompt(this.id, "Cde.GetSelectedText(");
  }
  GetSelectMode(): boolean {
    return prompt(this.id, "Cde.GetSelectMode(") === "true";
  }
  GetText(): string {
    return prompt(this.id, "Cde.GetText(");
  }
  GetType(): string {
    return "CodeEdit";
  }
  HighlightLine(line): void {
    prompt(this.id, `Cde.HighlightLine(\f${line}`);
  }
  InsertText(text, start): void {
    prompt(this.id, `Cde.InsertText(\f${text}\f${start}`);
  }
  Paste(): void {
    prompt(this.id, "Cde.Paste(");
  }
  Redo(): void {
    prompt(this.id, "Cde.Redo(");
  }
  Replace(text: string): void {
    prompt(this.id, `Cde.Replace(\f${text}`);
  }
  ReplaceAll(
    text: string,
    newText: string,
    matchCase?: boolean,
    wholeWord?: boolean
  ): void {
    prompt(
      this.id,
      `Cde.ReplaceAll(\f${text}\f${newText}\f${matchCase}\f${wholeWord}`
    );
  }
  ReplaceText(text: string, start: number, end: number): void {
    prompt(this.id, `Cde.ReplaceText(\f${text}\f${start}\f${end}`);
  }
  Search(
    text: string,
    direction?: string,
    matchCase?: boolean,
    wholeWord?: boolean
  ): void {
    prompt(
      this.id,
      `Cde.Search(\f${text}\f${direction}\f${matchCase}\f${wholeWord}`
    );
  }
  SelectAll(): void {
    prompt(this.id, "Cde.SelectAll(");
  }
  SetColorScheme(scheme: string): Cde {
    prompt(this.id, `Cde.SetColorScheme(\f${scheme}`);
    return this;
  }
  SetCursorPos(position: number): Cde {
    prompt(this.id, `Cde.SetCursorPos(${position}`);
    return this;
  }
  SetHtml(html: string): Cde {
    prompt(this.id, `Cde.SetText(\f${html}`);
    return this;
  }
  SetLanguage(ext: string): Cde {
    prompt(this.id, `Cde.SetLanguage(\f${ext}`);
    return this;
  }
  SetOnChange(callback: Function): Cde {
    prompt(this.id, `Cde.SetOnChange(\f${_Cbm(callback)}`);
    return this;
  }
  SetOnDoubleTap(callback: Function): Cde {
    prompt(this.id, `Cde.SetOnDoubleTap(\f${_Cbm(callback)}`);
    return this;
  }
  SetOnKey(callback: Function): Cde {
    prompt(this.id, `Cde.SetOnKey(\f${_Cbm(callback)}`);
    return this;
  }
  SetNavigationMethod(method: string): Cde {
    prompt(this.id, `Cde.SetNavigationMethod(\f${method}`);
    return this;
  }
  SetSelection(start: number, stop: number): Cde {
    prompt(this.id, `Cde.SetSelection(\f${start}\f${stop}`);
    return this;
  }
  SetText(text: string): Cde {
    prompt(this.id, `Cde.SetText(\f${text}`);
    return this;
  }
  SetTextColor(color: string): Cde {
    prompt(this.id, `Cde.SetTextColor(\f${color}`);
    return this;
  }
  SetTextSize(size: number, mode?: string): Cde {
    prompt(this.id, `Cde.SetTextSize(\f${size}\f${mode}`);
    return this;
  }
  SetUseKeyboard(onOff: boolean): Cde {
    prompt(this.id, `Cde.SetUseKeyboard(\f${onOff}`);
    return this;
  }
  Undo(): void {
    prompt(this.id, "Cde.Undo(");
  }
}
