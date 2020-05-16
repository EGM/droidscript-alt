import Layout from "./layout";
import DSObject from "./dsobject";
export declare class Tabs implements DSObject {
    id: string;
    data: any;
    private lay;
    private layTop;
    private layBody;
    private onChange;
    private tabs;
    constructor(list: string, width?: number, height?: number, options?: string);
    addTab(name: string): void;
    getLayout(name: string): Layout;
    getType(): string;
    setOnChange(callback: Function): void;
    showTab(name: string): void;
}
