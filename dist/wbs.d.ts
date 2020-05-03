import Component from "./component";
declare type WebSockClientType = {
    remoteAddress: string;
    id: number;
};
export default class Wbs extends Component {
    constructor(id: string);
    addRedirect(pattern: string, location: string): Wbs;
    addServlet(path: string, callback: Function): Wbs;
    getType(): string;
    getWebSockClients(): WebSockClientType[];
    sendText(text: string, ip: string, id: number): void;
    setFolder(folder: string): Wbs;
    setOnReceive(callback: any): Wbs;
    setOnUpload(callback: any): Wbs;
    setResponse(text: any): Wbs;
    setUploadFolder(folder: any): Wbs;
    start(): void;
    stop(): void;
}
export {};
