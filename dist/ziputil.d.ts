import Component from "./component";
export default class ZipUtil extends Component {
    constructor(id: string);
    addFile(name: string, file: string): ZipUtil;
    addText(name: string, text: string): ZipUtil;
    close(): void;
    create(file: string): ZipUtil;
    createDebugKey(file: string): ZipUtil;
    createKey(file: string, pass: string, name: string, org: string): ZipUtil;
    extract(name: string, file: string): ZipUtil;
    getType(): string;
    list(path: string): string;
    open(file: string): void;
    sign(fileIn: string, fileOut: string, keyStore: string, pass: string): boolean;
    updateManifest(fileIn: string, fileOut: string, packageName: string, appName: string, permissions: string, options?: string): void;
}
