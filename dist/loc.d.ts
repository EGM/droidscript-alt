import Component from "./component";
export default class Loc extends Component {
    constructor(id: string);
    getBearingTo(lat: number, lng: number): number;
    getDistanceTo(lat: number, lng: number): number;
    getType(): string;
    setOnChange(callback: Function): Loc;
    setRate(rate: number): Loc;
    start(): void;
    stop(): void;
}
