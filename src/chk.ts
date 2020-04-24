import View from "./view";
export default class Chk extends View {
  constructor(id: string) {
    super(id);
  }
  getChecked(): boolean {
    return prompt(this.id, `Chk.GetChecked(`) === "true";
  }

  getText(): string {
    return prompt(this.id, `Chk.GetText(`);
  }

  getTextSize(mode?: string): number {
    return parseFloat(prompt(this.id, `Chk.GetTextSize(\f${mode}`));
  }

  getType(): string {
    return "CheckBox";
  }

  setChecked(checked: boolean): Chk {
    prompt(this.id, `Chk.SetChecked(${checked}`);
    return this;
  }

  setOnTouch(callback: Function): Chk {
    prompt(this.id, `Chk.SetOnClick(${_Cbm(callback)}`);
    return this;
  }

  setText(text: string): Chk {
    prompt(this.id, `Chk.SetText(${text}`);
    return this;
  }

  setTextColor(clr: string): Chk {
    prompt(this.id, `Chk.SetTextColor(${clr}`);
    return this;
  }

  setTextSize(size: string, mode?: string): Chk {
    prompt(this.id, `Chk.SetTextSize(\f${size}\f${mode}`);
    return this;
  }
}
