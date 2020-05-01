import Component from "./component";
export default class Dwn extends Component {
    constructor(id: string);
    download(url: string, folder: string, name: string, headers: string): void;
    getProgress(): number;
    getSize(): number;
    getType(): string;
    isComplete(): boolean;
    setOnCancel(callback: Function): Dwn;
    setOnComplete(callback: Function): Dwn;
    setOnDownload(callback: Function): Dwn;
    setOnError(callback: Function): Dwn;
}
