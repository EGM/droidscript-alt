import Component from "./component";
export default class Loc extends Component {
  constructor(id: string) {
    super(id);
  }

  getBearingTo(lat: number, lng: number): number {
    return parseFloat(prompt(this.id, `Loc.GetBearingTo(${lat}\f${lng}`));
  }

  getDistanceTo(lat: number, lng: number): number {
    return parseFloat(prompt(this.id, `Loc.GetDistanceTo(${lat}\f${lng}`));
  }

  getType(): string {
    return "Locator";
  }

  setOnChange(callback: Function): Loc {
    prompt(this.id, `Loc.SetOnChange(${_Cbm(callback)}`);
    return this;
  }

  setRate(rate: number): Loc {
    prompt(this.id, `Loc.SetRate(${rate}`);
    return this;
  }

  start(): void {
    prompt(this.id, "Loc.Start(");
  }

  stop(): void {
    prompt(this.id, "Loc.Stop(");
  }
}
