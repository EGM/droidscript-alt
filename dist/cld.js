import Component from "./component";
export default class Cld extends Component {
    constructor(id) {
        super(id);
    }
    Delete(file, callback) {
        prompt(this.id, `Cld.Delete(\f${file}\f${_Cbm(callback)}`);
    }
    GetType() {
        return "CloudStore";
    }
    List(filter, callback) {
        prompt(this.id, `Cld.List(\f${filter}\f${_Cbm(callback)}`);
    }
    Load(file, callback, options) {
        prompt(this.id, `Cld.Load(\f${file}\f${_Cbm(callback)}\f${options}`);
    }
    Merge(file, data, callback) {
        prompt(this.id, `Cld.Merge(\f${file}\f${JSON.stringify(data)}\f${_Cbm(callback)}`);
    }
    Save(file, data, callback, options) {
        prompt(this.id, `Cld.Save(\f${file}\f${JSON.stringify(data)}\f${_Cbm(callback)}\f${options}`);
    }
}
