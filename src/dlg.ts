import View from "./view";
import Lay from "./lay";

export default class Dlg extends View {
  constructor(id: string) {
    super(id);
  }

  addLayout(layout: Lay): void {
    prompt(this.id, `Dlg.AddLayout(${layout.id}`);
  }

  dismiss(): void {
    prompt(this.id, "Dlg.Dismiss(");
  }

  enableBackKey(enable: boolean): void {
    prompt(this.id, `Dlg.EnableBackKey(\f${enable}`);
  }

  getType(): string {
    return "Dialog";
  }

  removeLayout(layout: Lay): void {
    prompt(this.id, `Dlg.RemoveLayout(${layout.id}`);
  }

  setOnBack(callback: Function): Dlg {
    prompt(this.id, `Dlg.SetOnBack(\f${_Cbm(callback)}`);
    return this;
  }

  setOnCancel(callback: Function): Dlg {
    prompt(this.id, `Dlg.SetOnCancel(\f${_Cbm(callback)}`);
    return this;
  }

  setOnTouch(callback: Function): Dlg {
    prompt(this.id, `Dlg.SetOnClick(${_Cbm(callback)}`);
    return this;
  }

  setTitle(title: string, options?: string): Dlg {
    prompt(this.id, `Dlg.SetTitle(\f${title}\f${options}`);
    return this;
  }

  setTitleColor(color: string): Dlg {
    prompt(this.id, `Dlg.SetTitleColor(\f${color}`);
    return this;
  }

  setTitleDividerColor(color: string): Dlg {
    prompt(this.id, `Dlg.SetTitleDividerColor(\f${color}`);
    return this;
  }

  setTitleDividerHeight(height: number, options?: string): Dlg {
    prompt(this.id, `Dlg.SetTitleDividerHeight(\f${height}\f${options}`);
    return this;
  }

  setTitleHeight(height: number, options?: string): Dlg {
    prompt(this.id, `Dlg.SetTitleHeight(\f${height}\f${options}`);
    return this;
  }

  setTitleTextSize(height: number, options?: string): Dlg {
    prompt(this.id, `Dlg.SetTitleTextSize(\f${height}\f${options}`);
    return this;
  }
}
