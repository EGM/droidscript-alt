import Component from "./component";
export default class Wpr extends Component {
  constructor(id: string) {
    super(id);
  }

  GetType(): string {
    return "Wallpaper";
  }

  IsVisible(): boolean {
    return prompt(this.id, "Wpr.IsVisible\f") === "true";
  }
}
