import Component from "./component";
export default class BluetoothSerial extends Component {
    constructor(id) {
        super(id);
    }
    Clear() {
        prompt(this.id, "Bts.Clear(");
    }
    Connect(name, channel) {
        return prompt(this.id, `Bts.Connect(${name}\f${channel}`) === "true";
    }
    Disconnect() {
        prompt(this.id, "Bts.Disconnect(");
    }
    GetType() {
        return "BluetoothSerial";
    }
    IsBluetoothEnabled() {
        return prompt(this.id, "Bts.IsEnabled(") === "true";
    }
    IsConnected() {
        return prompt(this.id, "Bts.IsConnected(") === "true";
    }
    IsPaired(name) {
        return prompt(this.id, `Bts.IsPaired(${name}`) === "true";
    }
    Listen(enabled) {
        prompt(this.id, `Bts.Listen(\f${enabled}`);
    }
    RequestEnable() {
        prompt(this.id, "Bts.RequestEnable(");
    }
    SetDataMode(mode) {
        prompt(this.id, `Bts.SetDataMode(\f${mode}`);
        return this;
    }
    SetOnConnect(callback) {
        prompt(this.id, `Bts.SetOnConnect(${_Cbm(callback)}`);
        return this;
    }
    SetOnDisconnect(callback) {
        prompt(this.id, `Bts.SetOnDisconnect(\f${_Cbm(callback)}`);
        return this;
    }
    SetOnReceive(callback) {
        prompt(this.id, `Bts.SetOnReceive(${_Cbm(callback)}`);
        return this;
    }
    SetSplitMode(mode, p2, p3) {
        prompt(this.id, `Bts.SetSplitMode(${mode}\f${p2}\f${p3}`);
        return this;
    }
    SetTimeout(ms) {
        prompt(this.id, `Bts.SetTimeout(${ms}`);
        return this;
    }
    Write(data) {
        prompt(this.id, `Bts.Write(${data}`);
    }
}
