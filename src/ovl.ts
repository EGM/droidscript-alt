import Component from "./component";
import Lay from "./lay";
export default class Ovl extends Component {
  constructor(id: string) {
    super(id);
  }

  GetType(): string {
    return "Overlay";
  }
  AddLayout(layout: Lay, left?: number, top?: number, options?: string): Ovl {
    prompt(
      this.id,
      `Ovl.AddLayout(\f${
        layout ? layout.id : null
      }\f${left}\f${top}\f${options}`
    );
    return this;
  }
  RemoveLayout(layout: Lay): void {
    prompt(this.id, `Ovl.RemoveLayout(\f${layout ? layout.id : null}`);
  }
  SetPosition(layout: Lay, left?: number, top?: number, options?: string): Ovl {
    prompt(
      this.id,
      `Ovl.SetPosition(\f${
        layout ? layout.id : null
      }\f${left}\f${top}\f${options}`
    );
    return this;
  }
}
