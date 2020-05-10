import Component from "./component";
export default class PhoneState extends Component {
    constructor(id: string);
    getType(): string;
    setOnChange(callback: Function): PhoneState;
    start(): void;
    stop(): void;
}
