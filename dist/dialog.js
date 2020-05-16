import View from "./view";
export default class Dialog extends View {
    constructor(id) {
        super(id);
        this._tm = null;
    }
    addLayout(layout) {
        prompt(this.id, `Dlg.AddLayout(${layout.id}`);
        return this;
    }
    dismiss() {
        prompt(this.id, "Dlg.Dismiss(");
    }
    enableBackKey(enable) {
        prompt(this.id, `Dlg.EnableBackKey(\f${enable}`);
    }
    getType() {
        return "Dialog";
    }
    removeLayout(layout) {
        prompt(this.id, `Dlg.RemoveLayout(${layout.id}`);
    }
    setOnBack(callback) {
        prompt(this.id, `Dlg.SetOnBack(\f${_Cbm(callback)}`);
        return this;
    }
    setOnCancel(callback) {
        prompt(this.id, `Dlg.SetOnCancel(\f${_Cbm(callback)}`);
        return this;
    }
    setOnTouch(callback) {
        prompt(this.id, `Dlg.SetOnClick(${_Cbm(callback)}`);
        return this;
    }
    setTitle(title, options) {
        prompt(this.id, `Dlg.SetTitle(\f${title}\f${options}`);
        return this;
    }
    setTitleColor(color) {
        prompt(this.id, `Dlg.SetTitleColor(\f${color}`);
        return this;
    }
    setTitleDividerColor(color) {
        prompt(this.id, `Dlg.SetTitleDividerColor(\f${color}`);
        return this;
    }
    setTitleDividerHeight(height, options) {
        prompt(this.id, `Dlg.SetTitleDividerHeight(\f${height}\f${options}`);
        return this;
    }
    setTitleHeight(height, options) {
        prompt(this.id, `Dlg.SetTitleHeight(\f${height}\f${options}`);
        return this;
    }
    setTitleTextSize(height, options) {
        prompt(this.id, `Dlg.SetTitleTextSize(\f${height}\f${options}`);
        return this;
    }
}
