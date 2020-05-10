import Component from "./component";
export default class SMS extends Component {
    constructor(id) {
        super(id);
    }
    getType() {
        return "SMS";
    }
    send(number, msg, options) {
        prompt(this.id, `SMS.Send(\f${number}\f${msg}\f${options}`);
    }
    setOnStatus(callback) {
        prompt(this.id, `SMS.SetOnStatus(${_Cbm(callback)}`);
        return this;
    }
    setOnMessage(callback) {
        prompt(this.id, `SMS.SetOnMessage(${_Cbm(callback)}`);
        return this;
    }
}
