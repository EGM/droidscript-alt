import Component from "./component";
import Cam from "./cam";
import Img from "./img";
import DSObject from "./dsobject";

export default class Plg extends Component {
  constructor(id: string) {
    super(id);
  }

  CreateObj(
    type: string,
    p1?: string,
    p2?: string,
    p3?: string,
    p4?: string,
    p5?: string,
    p6?: string,
    p7?: string,
    p8?: string
  ): string {
    return prompt(
      this.id,
      `Plg.CreateObj\f${type}\f${typeof p1}\f${p1}\f${typeof p2}\f${p2}\f${typeof p3}\f${p3}\f${typeof p4}\f${p4}\f${typeof p5}\f${p5}\f${typeof p6}\f${p6}\f${typeof p7}\f${p7}\f${typeof p8}\f${p8}`
    );
  }
  Destroy(): void {
    prompt(this.id, "Plg.Destroy");
  }
  GetType(): string {
    return "Plugin";
  }
  Send(
    cmd: string,
    p1?: string,
    p2?: string,
    p3?: string,
    p4?: string,
    p5?: string,
    p6?: string,
    p7?: string,
    p8?: string
  ): string {
    return prompt(
      this.id,
      `Plg.Send\f${cmd}\f${typeof p1}\f${p1}\f${typeof p2}\f${p2}\f${typeof p3}\f${p3}\f${typeof p4}\f${p4}\f${typeof p5}\f${p5}\f${typeof p6}\f${p6}\f${typeof p7}\f${p7}\f${typeof p8}\f${p8}`
    );
  }
  SendCam(cmd: string, cam: Cam): string {
    return prompt(this.id, `Plg.SendCam\f${cmd}\f${cam ? cam.id : null}`);
  }
  SendImg(cmd: string, img: Img, width?: number, height?: number): string {
    return prompt(
      this.id,
      `Plg.SendImg\f${cmd}\f${img ? img.id : null}\f${width}\f${height}`
    );
  }
  SendObj(
    cmd: string,
    ob: DSObject,
    p1?: string,
    p2?: string,
    p3?: string,
    p4?: string,
    p5?: string,
    p6?: string,
    p7?: string,
    p8?: string
  ): string {
    return prompt(
      this.id,
      `Plg.SendObj\f${cmd}\f${
        ob ? ob.id : null
      }\f${typeof p1}\f${p1}\f${typeof p2}\f${p2}\f${typeof p3}\f${p3}\f${typeof p4}\f${p4}\f${typeof p5}\f${p5}\f${typeof p6}\f${p6}\f${typeof p7}\f${p7}\f${typeof p8}\f${p8}`
    );
  }
}
