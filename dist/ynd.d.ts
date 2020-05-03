import Component from "./component";
export default class Ynd extends Component {
    constructor(id: string);
    dismiss(): void;
    getType(): string;
    setButtonText(yes: string, no: string): Ynd;
    setOnTouch(callback: Function): Ynd;
}
