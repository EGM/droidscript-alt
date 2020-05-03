import Component from "./component";
export default class Plg extends Component {
    constructor(id) {
        super(id);
    }
    CreateObj(type, p1, p2, p3, p4, p5, p6, p7, p8) {
        return prompt(this.id, `Plg.CreateObj\f${type}\f${typeof p1}\f${p1}\f${typeof p2}\f${p2}\f${typeof p3}\f${p3}\f${typeof p4}\f${p4}\f${typeof p5}\f${p5}\f${typeof p6}\f${p6}\f${typeof p7}\f${p7}\f${typeof p8}\f${p8}`);
    }
    Destroy() {
        prompt(this.id, "Plg.Destroy");
    }
    GetType() {
        return "Plugin";
    }
    Send(cmd, p1, p2, p3, p4, p5, p6, p7, p8) {
        return prompt(this.id, `Plg.Send\f${cmd}\f${typeof p1}\f${p1}\f${typeof p2}\f${p2}\f${typeof p3}\f${p3}\f${typeof p4}\f${p4}\f${typeof p5}\f${p5}\f${typeof p6}\f${p6}\f${typeof p7}\f${p7}\f${typeof p8}\f${p8}`);
    }
    SendCam(cmd, cam) {
        return prompt(this.id, `Plg.SendCam\f${cmd}\f${cam ? cam.id : null}`);
    }
    SendImg(cmd, img, width, height) {
        return prompt(this.id, `Plg.SendImg\f${cmd}\f${img ? img.id : null}\f${width}\f${height}`);
    }
    SendObj(cmd, ob, p1, p2, p3, p4, p5, p6, p7, p8) {
        return prompt(this.id, `Plg.SendObj\f${cmd}\f${ob ? ob.id : null}\f${typeof p1}\f${p1}\f${typeof p2}\f${p2}\f${typeof p3}\f${p3}\f${typeof p4}\f${p4}\f${typeof p5}\f${p5}\f${typeof p6}\f${p6}\f${typeof p7}\f${p7}\f${typeof p8}\f${p8}`);
    }
}
