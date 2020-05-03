import Component from "./component";
export default class Svc extends Component {
    constructor(id: string);
    GetType(): string;
    Stop(): void;
    private _Send;
    private _SendImg;
    SendMessage(message: string): void;
    SetOnMessage(callback: Function): Svc;
    SetInForeground(title?: string, text?: string, largeIcon?: string, smallIcon?: string, importance?: string): void;
    SetInBackground(): void;
}
