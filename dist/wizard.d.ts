import Dialog from "./dialog";
import Layout from "./layout";
import Button from "./button";
export declare class Wizard {
    buttons: Button[];
    callback: Function;
    curPage: number;
    dlg: Dialog;
    layDlg: Layout;
    layContent: Layout;
    layHoriz: Layout;
    onTouch: Function;
    constructor(title: any, width: any, height: any, callback: any, options: any);
    dismiss(): void;
    finish(): void;
    getButtons(): Button[];
    getDialog(): Dialog;
    getLayout(): Layout;
    getType(): string;
    hide(): void;
    isVisible(): boolean;
    show(): void;
}
