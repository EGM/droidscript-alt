import Component from "./component";
export default class WebServer extends Component {
    constructor(id) {
        super(id);
    }
    addRedirect(pattern, location) {
        prompt(this.id, `Wbs.AddRedirect(\f${pattern}\f${location}`);
        return this;
    }
    addServlet(path, callback) {
        prompt(this.id, `Wbs.AddServlet(${path}\f${_Cbm(callback)}`);
        return this;
    }
    getType() {
        return "WebServer";
    }
    getWebSockClients() {
        return JSON.parse(prompt(this.id, "Wbs.GetWebSockClients("));
    }
    sendText(text, ip, id) {
        prompt(this.id, `Wbs.SendText(\f${text}\f${ip}\f${id}`);
    }
    setFolder(folder) {
        prompt(this.id, `Wbs.SetFolder(\f${folder}`);
        return this;
    }
    setOnReceive(callback) {
        prompt(this.id, `Wbs.SetOnReceive(\f${_Cbm(callback)}`);
        return this;
    }
    setOnUpload(callback) {
        prompt(this.id, `Wbs.SetOnUpload(\f${_Cbm(callback)}`);
        return this;
    }
    setResponse(text) {
        prompt(this.id, `Wbs.SetResponse(${text}`);
        return this;
    }
    setUploadFolder(folder) {
        prompt(this.id, `Wbs.SetUploadFolder(\f${folder}`);
        return this;
    }
    start() {
        prompt(this.id, "Wbs.Start(");
    }
    stop() {
        prompt(this.id, "Wbs.Stop(");
    }
}
