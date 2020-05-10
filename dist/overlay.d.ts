import Component from "./component";
import Layout from "./layout";
export default class Overlay extends Component {
    constructor(id: string);
    getType(): string;
    addLayout(layout: Layout, left?: number, top?: number, options?: string): Overlay;
    removeLayout(layout: Layout): void;
    setPosition(layout: Layout, left?: number, top?: number, options?: string): Overlay;
}
