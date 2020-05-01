import Component from "./component";

type WebSockClientType = { remoteAddress: string; id: number };

export default class Wbs extends Component {
  constructor(id: string) {
    super(id);
  }

  addRedirect(pattern: string, location: string): Wbs {
    prompt(this.id, `Wbs.AddRedirect(\f${pattern}\f${location}`);
    return this;
  }

  addServlet(path: string, callback: Function): Wbs {
    prompt(this.id, `Wbs.AddServlet(${path}\f${_Cbm(callback)}`);
    return this;
  }

  getType(): string {
    return "WebServer";
  }

  getWebSockClients(): WebSockClientType[] {
    return JSON.parse(prompt(this.id, "Wbs.GetWebSockClients("));
  }

  sendText(text: string, ip: string, id: number): void {
    prompt(this.id, `Wbs.SendText(\f${text}\f${ip}\f${id}`);
  }

  setFolder(folder: string): Wbs {
    prompt(this.id, `Wbs.SetFolder(\f${folder}`);
    return this;
  }

  setOnReceive(callback): Wbs {
    prompt(this.id, `Wbs.SetOnReceive(\f${_Cbm(callback)}`);
    return this;
  }

  setOnUpload(callback): Wbs {
    prompt(this.id, `Wbs.SetOnUpload(\f${_Cbm(callback)}`);
    return this;
  }

  setResponse(text): Wbs {
    prompt(this.id, `Wbs.SetResponse(${text}`);
    return this;
  }

  setUploadFolder(folder): Wbs {
    prompt(this.id, `Wbs.SetUploadFolder(\f${folder}`);
    return this;
  }

  start(): void {
    prompt(this.id, "Wbs.Start(");
  }

  stop(): void {
    prompt(this.id, "Wbs.Stop(");
  }
}
