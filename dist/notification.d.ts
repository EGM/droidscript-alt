import Component from "./component";
import Image from "./image";
export default class Notification extends Component {
    constructor(id: string);
    cancel(id: string): void;
    getType(): string;
    listen(options?: string): void;
    notify(id: string): void;
    setLargeImage(image: Image | string): Notification;
    setLights(color: string, onMs: number, offMs: number): Notification;
    setMessage(ticker: string, title: string, text: string, extra: string): Notification;
    setOnNotify(callback: Function): Notification;
    setSmallImage(image: string | Image): Notification;
}
