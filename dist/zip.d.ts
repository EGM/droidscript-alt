import Component from "./component";
export default class Zip extends Component {
    constructor(id: string);
    addFile(name: string, file: string): Zip;
    addText(name: string, text: string): Zip;
    close(): void;
    create(file: string): Zip;
    createDebugKey(file: string): Zip;
    createKey(file: string, pass: string, name: string, org: string): Zip;
    extract(name: string, file: string): Zip;
    getType(): string;
    list(path: string): string;
    open(file: string): void;
    sign(fileIn: string, fileOut: string, keyStore: string, pass: string): boolean;
    updateManifest(fileIn: string, fileOut: string, packageName: string, appName: string, permissions: string, options?: string): void;
}
