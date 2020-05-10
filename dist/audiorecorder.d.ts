import Component from "./component";
export default class AudioRecorder extends Component {
    constructor(id: string);
    getData(): any;
    getPeak(): number;
    getRMS(): number;
    getType(): string;
    pause(): void;
    setFile(file: string): AudioRecorder;
    setFrequency(frequency: number): AudioRecorder;
    setSource(src: string): AudioRecorder;
    start(): void;
    stop(): void;
}
