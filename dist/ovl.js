import Component from "./component";
export default class Ovl extends Component {
    constructor(id) {
        super(id);
    }
    GetType() {
        return "Overlay";
    }
    AddLayout(layout, left, top, options) {
        prompt(this.id, `Ovl.AddLayout(\f${layout ? layout.id : null}\f${left}\f${top}\f${options}`);
        return this;
    }
    RemoveLayout(layout) {
        prompt(this.id, `Ovl.RemoveLayout(\f${layout ? layout.id : null}`);
    }
    SetPosition(layout, left, top, options) {
        prompt(this.id, `Ovl.SetPosition(\f${layout ? layout.id : null}\f${left}\f${top}\f${options}`);
        return this;
    }
}
