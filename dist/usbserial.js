import Component from "./component";
export default class USBSerial extends Component {
    constructor(id) {
        super(id);
    }
    getType() {
        return "USBSerial";
    }
    isConnected() {
        return prompt(this.id, "Usb.IsConnected(") === "true";
    }
    start() {
        prompt(this.id, "Usb.Start(");
    }
    stop() {
        prompt(this.id, "Usb.Stop(");
    }
    setOnReceive(callback) {
        prompt(this.id, `Usb.SetOnReceive(${_Cbm(callback)}`);
        return this;
    }
    setDTR(onOff) {
        prompt(this.id, `Usb.SetDTR(\f${onOff}`);
        return this;
    }
    setRTS(onOff) {
        prompt(this.id, `Usb.SetRTS(\f${onOff}`);
        return this;
    }
    setMaxRead(bytes) {
        prompt(this.id, `Usb.SetMaxRead(\f${bytes}`);
        return this;
    }
    setMaxWrite(bytes) {
        prompt(this.id, `Usb.SetMaxWrite(\f${bytes}`);
        return this;
    }
    setTimeout(ms) {
        prompt(this.id, `Usb.SetTimeout(\f${ms}`);
        return this;
    }
    setDataMode(mode) {
        prompt(this.id, `Usb.SetDataMode(\f${mode}`);
        return this;
    }
    setSplitMode(mode, p2, p3) {
        prompt(this.id, `Usb.SetSplitMode(\f${mode}\f${p2}\f${p3}`);
        return this;
    }
    write(text, encoding) {
        prompt(this.id, `Usb.Write(\f${text}\f${encoding}`);
    }
}
