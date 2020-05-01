import Component from "./component";
export default class Ldg extends Component {
    constructor(id: string);
    dismiss(): void;
    getType(): string;
    setOnTouch(callback: Function): Ldg;
    setTextColor(color: string): Ldg;
    setTitle(title: string): Ldg;
    setTitleColor(color: string): Ldg;
    setTitleHeight(height: number, options?: string): Ldg;
}
