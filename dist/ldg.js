import Component from "./component";
export default class Ldg extends Component {
    constructor(id) {
        super(id);
    }
    dismiss() {
        prompt(this.id, `Ldg.Dismiss("}`);
    }
    getType() {
        return "ListDialog";
    }
    setOnTouch(callback) {
        prompt(this.id, `Ldg.SetOnClick(${_Cbm(callback)}`);
        return this;
    }
    setTextColor(color) {
        prompt(this.id, `Ldg.SetTextColor(\f${color}`);
        return this;
    }
    setTitle(title) {
        prompt(this.id, `Ldg.SetTitle(\f${title}`);
        return this;
    }
    setTitleColor(color) {
        prompt(this.id, `Ldg.SetTitleColor(\f${color}`);
        return this;
    }
    setTitleHeight(height, options) {
        prompt(this.id, `Ldg.SetTitleHeight(\f${height}\f${options}`);
        return this;
    }
}
