import Component from "./component";
export default class Service extends Component {
    constructor(id: string);
    getType(): string;
    stop(): void;
    private _Send;
    private _SendImg;
    sendMessage(message: string): void;
    setOnMessage(callback: Function): Service;
    setInForeground(title?: string, text?: string, largeIcon?: string, smallIcon?: string, importance?: string): void;
    setInBackground(): void;
}
