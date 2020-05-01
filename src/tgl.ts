import View from "./view";
export default class Tgl extends View {
  constructor(id: string) {
    super(id);
  }

  getChecked(): boolean {
    return prompt(this.id, "Tgl.GetChecked(") === "true";
  }

  getText(): string {
    return prompt(this.id, "Tgl.GetText(");
  }

  getTextSize(mode?: string): number {
    return parseFloat(prompt(this.id, `Tgl.GetTextSize(\f${mode}`));
  }

  getType(): string {
    return "Toggle";
  }

  setChecked(checked: boolean): Tgl {
    prompt(this.id, `Tgl.SetChecked(${checked}`);
    return this;
  }

  setOnTouch(callback: Function): Tgl {
    prompt(this.id, `Tgl.SetOnClick(${_Cbm(callback)}`);
    return this;
  }

  setStyle(
    color1: string,
    color2: string,
    radius: number,
    strokeClr: string,
    strokeWidth: number,
    shadow: boolean,
    checkColor: string
  ): Tgl {
    prompt(
      this.id,
      `Tgl.SetStyle(\f${color1}\f${color2}\f${radius}\f${strokeClr}\f${strokeWidth}\f${shadow}\f${checkColor}`
    );
    return this;
  }

  setText(text: string): Tgl {
    prompt(this.id, `Tgl.SetText(${text}`);
    return this;
  }

  setTextColor(color: string): Tgl {
    prompt(this.id, `Tgl.SetTextColor(${color}`);
    return this;
  }

  setTextSize(size: number, mode?: string): Tgl {
    prompt(this.id, `Tgl.SetTextSize(\f${size}\f${mode}`);
    return this;
  }
}
