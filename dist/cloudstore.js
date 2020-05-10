import Component from "./component";
export default class CloudStore extends Component {
    constructor(id) {
        super(id);
    }
    delete(file, callback) {
        prompt(this.id, `Cld.Delete(\f${file}\f${_Cbm(callback)}`);
    }
    getType() {
        return "CloudStore";
    }
    list(filter, callback) {
        prompt(this.id, `Cld.List(\f${filter}\f${_Cbm(callback)}`);
    }
    load(file, callback, options) {
        prompt(this.id, `Cld.Load(\f${file}\f${_Cbm(callback)}\f${options}`);
    }
    merge(file, data, callback) {
        prompt(this.id, `Cld.Merge(\f${file}\f${JSON.stringify(data)}\f${_Cbm(callback)}`);
    }
    save(file, data, callback, options) {
        prompt(this.id, `Cld.Save(\f${file}\f${JSON.stringify(data)}\f${_Cbm(callback)}\f${options}`);
    }
}
