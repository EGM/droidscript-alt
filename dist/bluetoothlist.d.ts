import Component from "./component";
export default class BluetoothList extends Component {
    constructor(id: string);
    getType(): string;
    setOnTouch(callback: Function): BluetoothList;
    setOnTouchEx(callback: Function): BluetoothList;
}
