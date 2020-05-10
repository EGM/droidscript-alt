import Component from "./component";
import CameraView from "./cameraview";
import Image from "./image";
import DSObject from "./dsobject";
export default class Plugin extends Component {
    constructor(id: string);
    createObj(type: string, p1?: string, p2?: string, p3?: string, p4?: string, p5?: string, p6?: string, p7?: string, p8?: string): string;
    destroy(): void;
    getType(): string;
    send(cmd: string, p1?: string, p2?: string, p3?: string, p4?: string, p5?: string, p6?: string, p7?: string, p8?: string): string;
    sendCam(cmd: string, cam: CameraView): string;
    sendImg(cmd: string, img: Image, width?: number, height?: number): string;
    sendObj(cmd: string, ob: DSObject, p1?: string, p2?: string, p3?: string, p4?: string, p5?: string, p6?: string, p7?: string, p8?: string): string;
}
