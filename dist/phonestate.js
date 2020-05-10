import Component from "./component";
export default class PhoneState extends Component {
    constructor(id) {
        super(id);
    }
    getType() {
        return "PhoneState";
    }
    setOnChange(callback) {
        prompt(this.id, `Pst.SetOnChange(${_Cbm(callback)}`);
        return this;
    }
    start() {
        prompt(this.id, "Pst.Start(");
    }
    stop() {
        prompt(this.id, "Pst.Stop(");
    }
}
