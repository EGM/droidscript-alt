import Component from "./component";
export default class Email extends Component {
    constructor(id: string);
    getType(): string;
    receive(folder: string, maxCount: number, filter: string): void;
    send(subject: string, body: string, sender: string, recipients: string, attach: string): void;
    setIMAP(server: string, port: number): Email;
    setOnMessage(callback: Function): Email;
    setOnStatus(callback: Function): Email;
    setSMTP(server: string, port: number): Email;
}
