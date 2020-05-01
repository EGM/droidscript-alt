import Component from "./component";
import Img from "./img";
export default class Not extends Component {
    constructor(id: string);
    cancel(id: string): void;
    getType(): string;
    listen(options?: string): void;
    notify(id: string): void;
    setLargeImage(image: Img | string): Not;
    setLights(color: string, onMs: number, offMs: number): Not;
    setMessage(ticker: string, title: string, text: string, extra: string): Not;
    setOnNotify(callback: Function): Not;
    setSmallImage(image: string | Img): Not;
}
