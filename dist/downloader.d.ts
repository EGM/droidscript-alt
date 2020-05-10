import Component from "./component";
export default class Downloader extends Component {
    constructor(id: string);
    download(url: string, folder: string, name: string, headers: string): void;
    getProgress(): number;
    getSize(): number;
    getType(): string;
    isComplete(): boolean;
    setOnCancel(callback: Function): Downloader;
    setOnComplete(callback: Function): Downloader;
    setOnDownload(callback: Function): Downloader;
    setOnError(callback: Function): Downloader;
}
