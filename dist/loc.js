import Component from "./component";
export default class Loc extends Component {
    constructor(id) {
        super(id);
    }
    getBearingTo(lat, lng) {
        return parseFloat(prompt(this.id, `Loc.GetBearingTo(${lat}\f${lng}`));
    }
    getDistanceTo(lat, lng) {
        return parseFloat(prompt(this.id, `Loc.GetDistanceTo(${lat}\f${lng}`));
    }
    getType() {
        return "Locator";
    }
    setOnChange(callback) {
        prompt(this.id, `Loc.SetOnChange(${_Cbm(callback)}`);
        return this;
    }
    setRate(rate) {
        prompt(this.id, `Loc.SetRate(${rate}`);
        return this;
    }
    start() {
        prompt(this.id, "Loc.Start(");
    }
    stop() {
        prompt(this.id, "Loc.Stop(");
    }
}
