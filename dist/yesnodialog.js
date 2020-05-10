import Component from "./component";
export default class YesNoDialog extends Component {
    constructor(id) {
        super(id);
    }
    dismiss() {
        prompt(this.id, "Ynd.Dismiss(");
    }
    getType() {
        return "YesNoDialog";
    }
    setButtonText(yes, no) {
        prompt(this.id, `Ynd.SetButtonText(\f${yes}\f${no}`);
        return this;
    }
    setOnTouch(callback) {
        prompt(this.id, `Ynd.SetOnClick(${_Cbm(callback)}`);
        return this;
    }
}
