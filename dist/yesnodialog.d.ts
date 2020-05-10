import Component from "./component";
export default class YesNoDialog extends Component {
    constructor(id: string);
    dismiss(): void;
    getType(): string;
    setButtonText(yes: string, no: string): YesNoDialog;
    setOnTouch(callback: Function): YesNoDialog;
}
