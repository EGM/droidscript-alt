import Component from "./component";
export default class EMAIL extends Component {
    constructor(id: string);
    getType(): string;
    receive(folder: string, maxCount: number, filter: string): void;
    send(subject: string, body: string, sender: string, recipients: string, attach: string): void;
    setIMAP(server: string, port: number): EMAIL;
    setOnMessage(callback: Function): EMAIL;
    setOnStatus(callback: Function): EMAIL;
    setSMTP(server: string, port: number): EMAIL;
}
