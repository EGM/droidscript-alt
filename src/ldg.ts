import Component from "./component";
export default class Ldg extends Component {
  constructor(id: string) {
    super(id);
  }

  dismiss(): void {
    prompt(this.id, `Ldg.Dismiss("}`);
  }

  getType(): string {
    return "ListDialog";
  }

  setOnTouch(callback: Function): Ldg {
    prompt(this.id, `Ldg.SetOnClick(${_Cbm(callback)}`);
    return this;
  }

  setTextColor(color: string): Ldg {
    prompt(this.id, `Ldg.SetTextColor(\f${color}`);
    return this;
  }

  setTitle(title: string): Ldg {
    prompt(this.id, `Ldg.SetTitle(\f${title}`);
    return this;
  }

  setTitleColor(color: string): Ldg {
    prompt(this.id, `Ldg.SetTitleColor(\f${color}`);
    return this;
  }

  setTitleHeight(height: number, options?: string): Ldg {
    prompt(this.id, `Ldg.SetTitleHeight(\f${height}\f${options}`);
    return this;
  }
}
