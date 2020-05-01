import Component from "./component";
export default class Sns extends Component {
    constructor(id) {
        super(id);
    }
    getAzimuth() {
        return parseFloat(prompt(this.id, "Sns.GetAzimuth("));
    }
    getNames() {
        return prompt(this.id, "Sns.GetNames(");
    }
    getPitch() {
        return parseFloat(prompt(this.id, "Sns.GetPitch("));
    }
    getRoll() {
        return parseFloat(prompt(this.id, "Sns.GetRoll("));
    }
    getType() {
        return "Sensor";
    }
    getValues() {
        return JSON.parse(prompt(this.id, "Sns.GetValues("));
    }
    setMaxRate(rate) {
        prompt(this.id, `Sns.SetMaxRate(\f${rate}`);
        return this;
    }
    setMinChange(min) {
        prompt(this.id, `Sns.SetMinChange(${min}`);
        return this;
    }
    setOnChange(callback) {
        prompt(this.id, `Sns.SetOnChange(${_Cbm(callback)}`);
        return this;
    }
    start() {
        prompt(this.id, "Sns.Start(");
    }
    stop() {
        prompt(this.id, "Sns.Stop(");
    }
}
