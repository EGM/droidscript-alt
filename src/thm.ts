import Component from "./component";
export default class Thm extends Component {
  constructor(id: string) {
    super(id);
  }

  adjustColor(
    hue: number,
    saturation: number,
    brightness: number,
    contrast: number
  ): Thm {
    prompt(
      this.id,
      `Thm.AdjustColor(\f${hue}\f${saturation}\f${brightness}\f${contrast}`
    );
    return this;
  }
  getType(): string {
    return "Theme";
  }
  setBackColor(color: string): Thm {
    prompt(this.id, `Thm.SetBackColor(\f${color}`);
    return this;
  }
  setBackground(file: string, options?: string): Thm {
    prompt(this.id, `Thm.SetBackground(\f${file}\f${options}`);
    return this;
  }
  setButtonOptions(options: string): Thm {
    prompt(this.id, `Thm.SetButtonOptions(\f${options}`);
    return this;
  }
  setButtonStyle(
    color1: string,
    color2: string,
    radius: number,
    strokeColor: string,
    strokeWidth: number,
    shadow: string,
    checkColor: string
  ): Thm {
    prompt(
      this.id,
      `Thm.SetButtonStyle(\f${color1}\f${color2}\f${radius}\f${strokeColor}\f${strokeWidth}\f${shadow}\f${checkColor}`
    );
    return this;
  }
  setButtonTextColor(color: string): Thm {
    prompt(this.id, `Thm.SetBtnTextColor(\f${color}`);
    return this;
  }
  setCheckBoxOptions(options: string): Thm {
    prompt(this.id, `Thm.SetCheckBoxOptions(\f${options}`);
    return this;
  }
  setDialogColor(color: string): Thm {
    prompt(this.id, `Thm.SetDialogColor(\f${color}`);
    return this;
  }
  setDialogCornerRadius(radius: number): Thm {
    prompt(this.id, `Thm.SetDialogCornerRadius(\f${radius}`);
    return this;
  }
  setDialogButtonColor(color: string): Thm {
    prompt(this.id, `Thm.SetDialogBtnColor(\f${color}`);
    return this;
  }
  setDialogButtonTextColor(color: string): Thm {
    prompt(this.id, `Thm.SetDialogBtnTxtColor(\f${color}`);
    return this;
  }
  setDimBehind(dim: boolean): Thm {
    prompt(this.id, `Thm.SetDimBehind(\f${dim}`);
    return this;
  }
  setProgressBarOptions(options: string): Thm {
    prompt(this.id, `Thm.SetProgressBarOptions(\f${options}`);
    return this;
  }
  setProgressBackColor(color: string): Thm {
    prompt(this.id, `Thm.SetProgressBackColor(\f${color}`);
    return this;
  }
  setProgressTextColor(color: string): Thm {
    prompt(this.id, `Thm.SetProgressTextColor(\f${color}`);
    return this;
  }
  setTextColor(color: string): Thm {
    prompt(this.id, `Thm.SetTextColor(\f${color}`);
    return this;
  }
  setTextEditOptions(options: string): Thm {
    prompt(this.id, `Thm.SetTextEditOptions(\f${options}`);
    return this;
  }
  setTitleHeight(height: number, options?: string): Thm {
    prompt(this.id, `Thm.SetTitleHeight(\f${height}\f${options}`);
    return this;
  }
  setTitleColor(color: string): Thm {
    prompt(this.id, `Thm.SetTitleColor(\f${color}`);
    return this;
  }
  setTitleDividerColor(color: string): Thm {
    prompt(this.id, `Thm.SetTitleDividerColor(\f${color}`);
    return this;
  }
  setTitleDividerHeight(height: number, options?: string): Thm {
    prompt(this.id, `Thm.SetTitleDividerHeight(\f${height}\f${options}`);
    return this;
  }
}
