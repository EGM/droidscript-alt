import Component from "./component";
export default class Service extends Component {
    constructor(id) {
        super(id);
    }
    getType() {
        return "Service";
    }
    stop() {
        prompt(this.id, "Svc.Stop(");
    }
    _Send(cmd, p1, p2, p3, p4, p5, p6, p7) {
        prompt(this.id, `Svc.Send(\f${cmd}\f${typeof p1}\f${p1}\f${typeof p2}\f${p2}\f${typeof p3}\f${p3}\f${typeof p4}\f${p4}\f${typeof p5}\f${p5}\f${typeof p6}\f${p6}\f${typeof p7}\f${p7}`);
    }
    _SendImg(cmd, img) {
        prompt(this.id, `Svc.SendImg(\f${cmd}\f${img ? img.id : null}`);
    }
    sendMessage(message) {
        prompt(this.id, `Svc.SendMsg(\f${message}`);
    }
    setOnMessage(callback) {
        prompt(this.id, `Svc.SetOnMessage(\f${_Cbm(callback)}`);
        return this;
    }
    setInForeground(title, text, largeIcon, smallIcon, importance) {
        prompt(this.id, `Svc.SetInForeground(\f${title}\f${text}\f${largeIcon}\f${smallIcon}\f${importance}`);
    }
    setInBackground() {
        prompt(this.id, "Svc.SendMsg(\f_background");
    }
}
