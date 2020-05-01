import Component from "./component";
export default class Pst extends Component {
    constructor(id: string);
    getType(): string;
    setOnChange(callback: Function): void;
    start(): void;
    stop(): void;
}
