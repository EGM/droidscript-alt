import Component from "./component";
export default class SMS extends Component {
    constructor(id: string);
    getType(): string;
    send(number: string, msg: string, options?: string): void;
    setOnStatus(callback: Function): SMS;
    setOnMessage(callback: Function): SMS;
}
