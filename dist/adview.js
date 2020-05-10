import View from "./view";
export default class AdView extends View {
    constructor(id) {
        super(id);
    }
    GetType() {
        return "AdView";
    }
    Load() {
        prompt(this.id, "Adv.Load(");
    }
    SetOnStatus(callback) {
        prompt(this.id, `Adv.SetOnStatus(\f${_Cbm(callback)}`);
        return this;
    }
}
