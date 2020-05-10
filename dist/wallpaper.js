import Component from "./component";
export default class Wallpaper extends Component {
    constructor(id) {
        super(id);
    }
    getType() {
        return "Wallpaper";
    }
    isVisible() {
        return prompt(this.id, "Wpr.IsVisible\f") === "true";
    }
}
