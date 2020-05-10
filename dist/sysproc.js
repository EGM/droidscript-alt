import Component from "./component";
export default class SysProc extends Component {
    constructor(id) {
        super(id);
    }
    destroy() {
        prompt(this.id, "Sys.Destroy(");
        _map[this.id] = null;
    }
    err(maxLines, options) {
        return prompt(this.id, `Sys.Err(\f${maxLines}\f${options}`);
    }
    getType() {
        return "SysProc";
    }
    in(maxLines, options) {
        return prompt(this.id, `Sys.In(\f${maxLines}\f${options}`);
    }
    out(cmd) {
        prompt(this.id, `Sys.Out(\f${cmd}`);
    }
    readFileAsByte(file) {
        return parseInt(prompt(this.id, `Sys.ReadFileAsByte(\f${file}`));
    }
    setOnError(callback) {
        prompt(this.id, `Sys.SetOnError(\f${_Cbm(callback)}`);
        return this;
    }
    setOnInput(callback) {
        prompt(this.id, `Sys.SetOnInput(\f${_Cbm(callback)}`);
        return this;
    }
    writeToFile(file, data) {
        prompt(this.id, `Sys.WriteToFile(\f${file}\f${data}`);
    }
}
