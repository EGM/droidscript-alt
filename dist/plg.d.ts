import Component from "./component";
import Cam from "./cam";
import Img from "./img";
import DSObject from "./dsobject";
export default class Plg extends Component {
    constructor(id: string);
    CreateObj(type: string, p1?: string, p2?: string, p3?: string, p4?: string, p5?: string, p6?: string, p7?: string, p8?: string): string;
    Destroy(): void;
    GetType(): string;
    Send(cmd: string, p1?: string, p2?: string, p3?: string, p4?: string, p5?: string, p6?: string, p7?: string, p8?: string): string;
    SendCam(cmd: string, cam: Cam): string;
    SendImg(cmd: string, img: Img, width?: number, height?: number): string;
    SendObj(cmd: string, ob: DSObject, p1?: string, p2?: string, p3?: string, p4?: string, p5?: string, p6?: string, p7?: string, p8?: string): string;
}
