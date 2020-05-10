import Component from "./component";
export default class SysProc extends Component {
    constructor(id: string);
    destroy(): void;
    err(maxLines: number, options?: string): string;
    getType(): string;
    in(maxLines: number, options?: string): string;
    out(cmd: string): void;
    readFileAsByte(file: string): number;
    setOnError(callback: Function): SysProc;
    setOnInput(callback: Function): SysProc;
    writeToFile(file: string, data: string): void;
}
