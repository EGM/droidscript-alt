import Component from "./component";
import Img from "./img";

export default class Svc extends Component {
  constructor(id: string) {
    super(id);
  }

  GetType(): string {
    return "Service";
  }
  Stop(): void {
    prompt(this.id, "Svc.Stop(");
  }
  private _Send(
    cmd: string,
    p1?: string,
    p2?: string,
    p3?: string,
    p4?: string,
    p5?: string,
    p6?: string,
    p7?: string
  ): void {
    prompt(
      this.id,
      `Svc.Send(\f${cmd}\f${typeof p1}\f${p1}\f${typeof p2}\f${p2}\f${typeof p3}\f${p3}\f${typeof p4}\f${p4}\f${typeof p5}\f${p5}\f${typeof p6}\f${p6}\f${typeof p7}\f${p7}`
    );
  }
  private _SendImg(cmd: string, img: Img): void {
    prompt(this.id, `Svc.SendImg(\f${cmd}\f${img ? img.id : null}`);
  }
  SendMessage(message: string): void {
    prompt(this.id, `Svc.SendMsg(\f${message}`);
  }
  SetOnMessage(callback: Function): Svc {
    prompt(this.id, `Svc.SetOnMessage(\f${_Cbm(callback)}`);
    return this;
  }
  SetInForeground(
    title?: string,
    text?: string,
    largeIcon?: string,
    smallIcon?: string,
    importance?: string
  ): void {
    prompt(
      this.id,
      `Svc.SetInForeground(\f${title}\f${text}\f${largeIcon}\f${smallIcon}\f${importance}`
    );
  }
  SetInBackground(): void {
    prompt(this.id, "Svc.SendMsg(\f_background");
  }
}
