import Component from "./component";
export default class Spr extends Component {
    constructor(id: string);
    cancel(): void;
    getRMS(): number;
    getType(): string;
    isListening(): boolean;
    recognize(): string;
    setOnError(callback: Function): Spr;
    setOnReady(callback: Function): Spr;
    setOnResult(callback: Function): Spr;
    stop(): void;
}
