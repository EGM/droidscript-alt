import View from "./view";
import Layout from "./layout";
export default class Dialog extends View {
    _tm: number;
    constructor(id: string);
    addLayout(layout: Layout): Dialog;
    dismiss(): void;
    enableBackKey(enable: boolean): void;
    getType(): string;
    removeLayout(layout: Layout): void;
    setOnBack(callback: Function): Dialog;
    setOnCancel(callback: Function): Dialog;
    setOnTouch(callback: Function): Dialog;
    setTitle(title: string, options?: string): Dialog;
    setTitleColor(color: string): Dialog;
    setTitleDividerColor(color: string): Dialog;
    setTitleDividerHeight(height: number, options?: string): Dialog;
    setTitleHeight(height: number, options?: string): Dialog;
    setTitleTextSize(height: number, options?: string): Dialog;
}
