import Component from "./component";
export default class ListDialog extends Component {
    constructor(id: string);
    dismiss(): void;
    getType(): string;
    setOnTouch(callback: Function): ListDialog;
    setTextColor(color: string): ListDialog;
    setTitle(title: string): ListDialog;
    setTitleColor(color: string): ListDialog;
    setTitleHeight(height: number, options?: string): ListDialog;
}
