import Component from "./component";
declare type WebSockClientType = {
    remoteAddress: string;
    id: number;
};
export default class WebServer extends Component {
    constructor(id: string);
    addRedirect(pattern: string, location: string): WebServer;
    addServlet(path: string, callback: Function): WebServer;
    getType(): string;
    getWebSockClients(): WebSockClientType[];
    sendText(text: string, ip: string, id: number): void;
    setFolder(folder: string): WebServer;
    setOnReceive(callback: any): WebServer;
    setOnUpload(callback: any): WebServer;
    setResponse(text: any): WebServer;
    setUploadFolder(folder: any): WebServer;
    start(): void;
    stop(): void;
}
export {};
