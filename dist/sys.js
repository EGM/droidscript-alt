import Component from "./component";
export default class Sys extends Component {
    constructor(id) {
        super(id);
    }
    Destroy() {
        prompt(this.id, "Sys.Destroy(");
        _map[this.id] = null;
    }
    Err(maxLines, options) {
        return prompt(this.id, `Sys.Err(\f${maxLines}\f${options}`);
    }
    GetType() {
        return "SysProc";
    }
    In(maxLines, options) {
        return prompt(this.id, `Sys.In(\f${maxLines}\f${options}`);
    }
    Out(cmd) {
        prompt(this.id, `Sys.Out(\f${cmd}`);
    }
    ReadFileAsByte(file) {
        return parseInt(prompt(this.id, `Sys.ReadFileAsByte(\f${file}`));
    }
    SetOnError(callback) {
        prompt(this.id, `Sys.SetOnError(\f${_Cbm(callback)}`);
        return this;
    }
    SetOnInput(callback) {
        prompt(this.id, `Sys.SetOnInput(\f${_Cbm(callback)}`);
        return this;
    }
    WriteToFile(file, data) {
        prompt(this.id, `Sys.WriteToFile(\f${file}\f${data}`);
    }
}
