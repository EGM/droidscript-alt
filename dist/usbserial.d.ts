import Component from "./component";
export default class USBSerial extends Component {
    constructor(id: string);
    getType(): string;
    isConnected(): boolean;
    start(): void;
    stop(): void;
    setOnReceive(callback: Function): USBSerial;
    setDTR(onOff: boolean): USBSerial;
    setRTS(onOff: boolean): USBSerial;
    setMaxRead(bytes: number): USBSerial;
    setMaxWrite(bytes: number): USBSerial;
    setTimeout(ms: number): USBSerial;
    setDataMode(mode: string): USBSerial;
    setSplitMode(mode: string, p2?: string, p3?: string): USBSerial;
    write(text: string, encoding?: string): void;
}
