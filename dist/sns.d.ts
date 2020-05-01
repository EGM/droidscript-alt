import Component from "./component";
export default class Sns extends Component {
    constructor(id: string);
    getAzimuth(): number;
    getNames(): string;
    getPitch(): number;
    getRoll(): number;
    getType(): string;
    getValues(): number[];
    setMaxRate(rate: number): Sns;
    setMinChange(min: number): Sns;
    setOnChange(callback: Function): Sns;
    start(): void;
    stop(): void;
}
