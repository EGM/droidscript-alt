import Component from "./component";
export default class Wpr extends Component {
    constructor(id) {
        super(id);
    }
    GetType() {
        return "Wallpaper";
    }
    IsVisible() {
        return prompt(this.id, "Wpr.IsVisible\f") === "true";
    }
}
