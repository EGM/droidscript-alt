import Component from "./component";
export default class Overlay extends Component {
    constructor(id) {
        super(id);
    }
    getType() {
        return "Overlay";
    }
    addLayout(layout, left, top, options) {
        prompt(this.id, `Ovl.AddLayout(\f${layout ? layout.id : null}\f${left}\f${top}\f${options}`);
        return this;
    }
    removeLayout(layout) {
        prompt(this.id, `Ovl.RemoveLayout(\f${layout ? layout.id : null}`);
    }
    setPosition(layout, left, top, options) {
        prompt(this.id, `Ovl.SetPosition(\f${layout ? layout.id : null}\f${left}\f${top}\f${options}`);
        return this;
    }
}
