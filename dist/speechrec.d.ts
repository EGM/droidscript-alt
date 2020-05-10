import Component from "./component";
export default class SpeechRec extends Component {
    constructor(id: string);
    cancel(): void;
    getRMS(): number;
    getType(): string;
    isListening(): boolean;
    recognize(): string;
    setOnError(callback: Function): SpeechRec;
    setOnReady(callback: Function): SpeechRec;
    setOnResult(callback: Function): SpeechRec;
    stop(): void;
}
