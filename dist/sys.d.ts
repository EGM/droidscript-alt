import Component from "./component";
export default class Sys extends Component {
    constructor(id: string);
    Destroy(): void;
    Err(maxLines: number, options?: string): string;
    GetType(): string;
    In(maxLines: number, options?: string): string;
    Out(cmd: string): void;
    ReadFileAsByte(file: string): number;
    SetOnError(callback: Function): Sys;
    SetOnInput(callback: Function): Sys;
    WriteToFile(file: string, data: string): void;
}
