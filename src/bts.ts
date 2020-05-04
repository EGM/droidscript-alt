import Component from "./component";
export default class Bts extends Component {
  constructor(id: string) {
    super(id);
  }

  Clear(): void {
    prompt(this.id, "Bts.Clear(");
  }
  Connect(name: string, channel: string): boolean {
    return prompt(this.id, `Bts.Connect(${name}\f${channel}`) === "true";
  }
  Disconnect(): void {
    prompt(this.id, "Bts.Disconnect(");
  }
  GetType(): string {
    return "BluetoothSerial";
  }
  IsBluetoothEnabled(): boolean {
    return prompt(this.id, "Bts.IsEnabled(") === "true";
  }
  IsConnected(): boolean {
    return prompt(this.id, "Bts.IsConnected(") === "true";
  }
  IsPaired(name: string): boolean {
    return prompt(this.id, `Bts.IsPaired(${name}`) === "true";
  }
  Listen(enabled: boolean): void {
    prompt(this.id, `Bts.Listen(\f${enabled}`);
  }
  RequestEnable(): void {
    prompt(this.id, "Bts.RequestEnable(");
  }
  SetDataMode(mode: string): Bts {
    prompt(this.id, `Bts.SetDataMode(\f${mode}`);
    return this;
  }
  SetOnConnect(callback: Function): Bts {
    prompt(this.id, `Bts.SetOnConnect(${_Cbm(callback)}`);
    return this;
  }
  SetOnDisconnect(callback: Function): Bts {
    prompt(this.id, `Bts.SetOnDisconnect(\f${_Cbm(callback)}`);
    return this;
  }
  SetOnReceive(callback: Function): Bts {
    prompt(this.id, `Bts.SetOnReceive(${_Cbm(callback)}`);
    return this;
  }
  SetSplitMode(mode: string, p2?: string, p3?: string): Bts {
    prompt(this.id, `Bts.SetSplitMode(${mode}\f${p2}\f${p3}`);
    return this;
  }
  SetTimeout(ms: number): Bts {
    prompt(this.id, `Bts.SetTimeout(${ms}`);
    return this;
  }
  Write(data: string): void {
    prompt(this.id, `Bts.Write(${data}`);
  }
}
