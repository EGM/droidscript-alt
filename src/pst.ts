import Component from "./component";
export default class Pst extends Component {
  constructor(id: string) {
    super(id);
  }

  getType(): string {
    return "PhoneState";
  }

  setOnChange(callback: Function): void {
    prompt(this.id, `Pst.SetOnChange(${_Cbm(callback)}`);
  }

  start(): void {
    prompt(this.id, "Pst.Start(");
  }

  stop(): void {
    prompt(this.id, "Pst.Stop(");
  }
}
