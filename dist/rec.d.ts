import Component from "./component";
export default class Rec extends Component {
    constructor(id: string);
    getData(): any;
    getPeak(): number;
    getRMS(): number;
    getType(): string;
    pause(): void;
    setFile(file: string): Rec;
    setFrequency(frequency: number): Rec;
    setSource(src: string): Rec;
    start(): void;
    stop(): void;
}
