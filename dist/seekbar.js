import View from "./view";
export default class Seekbar extends View {
    constructor(id) {
        super(id);
    }
    getType() {
        return "SeekBar";
    }
    getValue() {
        return parseFloat(prompt(this.id, "Skb.GetValue("));
    }
    setMaxRate(rate) {
        prompt(this.id, `Skb.SetMaxRate(${rate}`);
        return this;
    }
    setOnChange(callback) {
        prompt(this.id, `Skb.SetOnClick(${_Cbm(callback)}`);
        return this;
    }
    setOnTouch(callback) {
        prompt(this.id, `Skb.SetOnClick(${_Cbm(callback)}`);
        return this;
    }
    setRange(range) {
        prompt(this.id, `Skb.SetRange(${range}`);
        return this;
    }
    setValue(val) {
        prompt(this.id, `Skb.SetValue(${val}`);
        return this;
    }
}
