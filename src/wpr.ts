import Component from "./component";
export default class Wpr extends Component {
  constructor(id: string) {
    super(id);
  }

  getType(): string {
    return "Wallpaper";
  }

  isVisible(): boolean {
    return prompt(this.id, "Wpr.IsVisible\f") === "true";
  }
}
