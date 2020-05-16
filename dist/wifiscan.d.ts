import Dialog from "./dialog";
import List from "./list";
export declare class WifiScan {
    tProg: number;
    tScan: number;
    dlgScan: Dialog;
    dlgList: List;
    filter: string;
    list: string;
    onSelect: Function;
    options: string;
    title1: string;
    title2: string;
    prog: number;
    name: string;
    address: string;
    extra: string;
    constructor(title1?: string, title2?: string, callback?: any, options?: string, extra?: string);
    onCancel(): void;
    onChoose(title: any, body: any): void;
    onDevice(ssids: any): void;
    select(filt: any): void;
    showProgress(): void;
}
