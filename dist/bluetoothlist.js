import Component from "./component";
export default class BluetoothList extends Component {
    constructor(id) {
        super(id);
    }
    getType() {
        return "BluetoothList";
    }
    setOnTouch(callback) {
        prompt(this.id, `Btl.SetOnClick(${_Cbm(callback)}`);
        return this;
    }
    setOnTouchEx(callback) {
        prompt(this.id, `Btl.SetOnClick(${callback}`);
        return this;
    }
}
