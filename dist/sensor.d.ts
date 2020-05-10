import Component from "./component";
export default class Sensor extends Component {
    constructor(id: string);
    getAzimuth(): number;
    getNames(): string;
    getPitch(): number;
    getRoll(): number;
    getType(): string;
    getValues(): number[];
    setMaxRate(rate: number): Sensor;
    setMinChange(min: number): Sensor;
    setOnChange(callback: Function): Sensor;
    start(): void;
    stop(): void;
}
