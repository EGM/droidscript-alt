import Component from "./component";
import Lay from "./lay";
export default class Ovl extends Component {
    constructor(id: string);
    GetType(): string;
    AddLayout(layout: Lay, left?: number, top?: number, options?: string): Ovl;
    RemoveLayout(layout: Lay): void;
    SetPosition(layout: Lay, left?: number, top?: number, options?: string): Ovl;
}
