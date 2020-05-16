import Dialog from "./dialog";
import List from "./list";
export declare class CheckList {
    dlg: Dialog;
    lst1: List;
    onFinish: Function;
    options: string;
    constructor(title: any, list: any, callback: any, width: any, height: any, options?: string);
    onChoose(title: any, body: any, icon: any, index: any): void;
    onOk(): void;
    onCancel(): void;
    setList(): CheckList;
    show(): void;
}
