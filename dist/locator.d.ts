import Component from "./component";
export default class Locator extends Component {
    constructor(id: string);
    getBearingTo(lat: number, lng: number): number;
    getDistanceTo(lat: number, lng: number): number;
    getType(): string;
    setOnChange(callback: Function): Locator;
    setRate(rate: number): Locator;
    start(): void;
    stop(): void;
}
