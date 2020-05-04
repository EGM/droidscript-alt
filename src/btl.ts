import Component from "./component";
export default class Btl extends Component {
  constructor(id: string) {
    super(id);
  }

  getType(): string {
    return "BluetoothList";
  }

  setOnTouch(callback: Function): Btl {
    prompt(this.id, `Btl.SetOnClick(${_Cbm(callback)}`);
    return this;
  }

  setOnTouchEx(callback: Function): Btl {
    prompt(this.id, `Btl.SetOnClick(${callback}`);
    return this;
  }
}
