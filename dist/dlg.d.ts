import View from "./view";
import Lay from "./lay";
export default class Dlg extends View {
    constructor(id: string);
    addLayout(layout: Lay): void;
    dismiss(): void;
    enableBackKey(enable: boolean): void;
    getType(): string;
    removeLayout(layout: Lay): void;
    setOnBack(callback: Function): Dlg;
    setOnCancel(callback: Function): Dlg;
    setOnTouch(callback: Function): Dlg;
    setTitle(title: string, options?: string): Dlg;
    setTitleColor(color: string): Dlg;
    setTitleDividerColor(color: string): Dlg;
    setTitleDividerHeight(height: number, options?: string): Dlg;
    setTitleHeight(height: number, options?: string): Dlg;
    setTitleTextSize(height: number, options?: string): Dlg;
}
