import Component from "./component";
export default class Fil extends Component {
    constructor(id: string);
    close(): void;
    getLength(): number;
    getPointer(): number;
    getType(): string;
    readData(len: number, mode: "Hex" | "Int" | "Text"): any;
    readNumber(type: string): number;
    readText(type: string): string;
    readTextAsync(type: string, callback: Function): string;
    seek(offset: number): Fil;
    setLength(len: number): Fil;
    skip(bytes: number): Fil;
    writeData(data: string, mode: string): Fil;
    writeNumber(data: number, type: string): Fil;
    writeText(data: string, type: string): Fil;
}
