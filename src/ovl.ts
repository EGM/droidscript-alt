import Component from "./component";
import Lay from "./lay";
export default class Ovl extends Component {
  constructor(id: string) {
    super(id);
  }

  getType(): string {
    return "Overlay";
  }
  addLayout(layout: Lay, left?: number, top?: number, options?: string): Ovl {
    prompt(
      this.id,
      `Ovl.AddLayout(\f${
        layout ? layout.id : null
      }\f${left}\f${top}\f${options}`
    );
    return this;
  }
  removeLayout(layout: Lay): void {
    prompt(this.id, `Ovl.RemoveLayout(\f${layout ? layout.id : null}`);
  }
  setPosition(layout: Lay, left?: number, top?: number, options?: string): Ovl {
    prompt(
      this.id,
      `Ovl.SetPosition(\f${
        layout ? layout.id : null
      }\f${left}\f${top}\f${options}`
    );
    return this;
  }
}
