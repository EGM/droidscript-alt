import Component from "./component";
export default class File extends Component {
    constructor(id: string);
    close(): void;
    getLength(): number;
    getPointer(): number;
    getType(): string;
    readData(len: number, mode: "Hex" | "Int" | "Text"): any;
    readNumber(type: string): number;
    readText(type: string): string;
    readTextAsync(type: string, callback: Function): string;
    seek(offset: number): File;
    setLength(len: number): File;
    skip(bytes: number): File;
    writeData(data: string, mode: string): File;
    writeNumber(data: number, type: string): File;
    writeText(data: string, type: string): File;
}
