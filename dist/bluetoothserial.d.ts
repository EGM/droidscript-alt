import Component from "./component";
export default class BluetoothSerial extends Component {
    constructor(id: string);
    Clear(): void;
    Connect(name: string, channel: string): boolean;
    Disconnect(): void;
    GetType(): string;
    IsBluetoothEnabled(): boolean;
    IsConnected(): boolean;
    IsPaired(name: string): boolean;
    Listen(enabled: boolean): void;
    RequestEnable(): void;
    SetDataMode(mode: string): BluetoothSerial;
    SetOnConnect(callback: Function): BluetoothSerial;
    SetOnDisconnect(callback: Function): BluetoothSerial;
    SetOnReceive(callback: Function): BluetoothSerial;
    SetSplitMode(mode: string, p2?: string, p3?: string): BluetoothSerial;
    SetTimeout(ms: number): BluetoothSerial;
    Write(data: string): void;
}
