import View from "./view";
export default class Skb extends View {
  constructor(id: string) {
    super(id);
  }

  getType(): string {
    return "SeekBar";
  }

  getValue(): number {
    return parseFloat(prompt(this.id, "Skb.GetValue("));
  }

  setMaxRate(rate: number): Skb {
    prompt(this.id, `Skb.SetMaxRate(${rate}`);
    return this;
  }

  setOnChange(callback: Function): Skb {
    prompt(this.id, `Skb.SetOnClick(${_Cbm(callback)}`);
    return this;
  }

  setOnTouch(callback: Function): Skb {
    prompt(this.id, `Skb.SetOnClick(${_Cbm(callback)}`);
    return this;
  }

  setRange(range: number): Skb {
    prompt(this.id, `Skb.SetRange(${range}`);
    return this;
  }

  setValue(val: number): Skb {
    prompt(this.id, `Skb.SetValue(${val}`);
    return this;
  }
}
