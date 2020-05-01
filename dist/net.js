import Component from "./component";
export default class Net extends Component {
    constructor(id) {
        super(id);
    }
    autoReceive(server, port, mode) {
        return prompt(this.id, `Net.AutoReceive(${server}\f${port}\f${mode}`);
    }
    clear() {
        prompt(this.id, "Net.Clear(");
    }
    close() {
        prompt(this.id, "Net.Disconnect(");
    }
    connect(address, port) {
        return prompt(this.id, `Net.Connect(${address}\f${port}`) === "true";
    }
    disconnect() {
        prompt(this.id, "Net.Disconnect(");
    }
    downloadFile(file) {
        return prompt(this.id, `Net.DownloadFile(${file}`);
    }
    getBroadcastAddress() {
        return prompt(this.id, "Net.GetBroadcastAddress(");
    }
    getType() {
        return "NetClient";
    }
    isConnected() {
        return prompt(this.id, "Net.IsConnected(") === "true";
    }
    receiveBytes(mode) {
        return JSON.parse(prompt(this.id, `Net.ReceiveBytes(\f${mode}`));
    }
    receiveDatagram(mode, port, timeout) {
        return prompt(this.id, `Net.ReceiveDatagram(${mode}\f${port}\f${timeout}`);
    }
    receiveDatagrams(port, mode) {
        prompt(this.id, `Net.ReceiveDatagrams(\f${port}\f${mode}`);
    }
    receiveFile(file, wait) {
        return prompt(this.id, `Net.ReceiveFile(${file}\f${wait}`);
    }
    receiveText(mode) {
        return prompt(this.id, `Net.ReceiveText(${mode}`);
    }
    receiveVideoStream(port, img) {
        prompt(this.id, `Net.ReceiveVideoStream(\f${port}\f${img ? img.id : null}`);
    }
    sendBytes(data, mode) {
        prompt(this.id, `Net.SendBytes(\f${data}\f${mode}`);
    }
    sendData(text, encoding) {
        prompt(this.id, `Net.SendData(\f${text}\f${encoding}`);
    }
    sendDatagram(data, mode, address, port, options) {
        prompt(this.id, `Net.SendDatagram(\f${data}\f${mode}\f${address}\f${port}\f${options}`);
    }
    sendText(text, mode) {
        prompt(this.id, `Net.SendText(${text}\f${mode}`);
    }
    setDataMode(mode) {
        prompt(this.id, `Net.SetDataMode(\f${mode}`);
        return this;
    }
    setOnConnect(callback) {
        prompt(this.id, `Net.SetOnConnect(${_Cbm(callback)}`);
        return this;
    }
    setOnDownload(callback) {
        prompt(this.id, `Net.SetOnDownload(${_Cbm(callback)}`);
        return this;
    }
    setOnReceive(callback) {
        prompt(this.id, `Net.SetOnReceive(${_Cbm(callback)}`);
        return this;
    }
    setSplitMode(mode, p2, p3) {
        prompt(this.id, `Net.SetSplitMode(\f${mode}\f${p2}\f${p3}`);
        return this;
    }
    setTimeout(secs) {
        prompt(this.id, `Net.SetTimeout(${secs}`);
        return this;
    }
    wakeOnLan(ip, mac) {
        prompt(this.id, `Net.WakeOnLan(\f${ip}\f${mac}`);
    }
}
