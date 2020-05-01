import Component from "./component";
export default class Spr extends Component {
    constructor(id) {
        super(id);
    }
    cancel() {
        prompt(this.id, "Spr.Cancel(");
    }
    getRMS() {
        return parseFloat(prompt(this.id, "Spr.GetRMS("));
    }
    getType() {
        return "SpeechRec";
    }
    isListening() {
        return prompt(this.id, "Spr.IsListening(") === "true";
    }
    recognize() {
        return prompt(this.id, "Spr.Recognize(\f");
    }
    setOnError(callback) {
        prompt(this.id, `Spr.SetOnError(\f${_Cbm(callback)}`);
        return this;
    }
    setOnReady(callback) {
        prompt(this.id, `Spr.SetOnReady(\f${_Cbm(callback)}`);
        return this;
    }
    setOnResult(callback) {
        prompt(this.id, `Spr.SetOnResult(\f${_Cbm(callback)}`);
        return this;
    }
    stop() {
        prompt(this.id, "Spr.Stop(");
    }
}
