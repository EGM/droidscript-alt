import View from "./view";
export default class Chk extends View {
    constructor(id: string);
    getChecked(): boolean;
    getText(): string;
    getTextSize(mode?: string): number;
    getType(): string;
    setChecked(checked: boolean): Chk;
    setOnTouch(callback: Function): Chk;
    setText(text: string): Chk;
    setTextColor(clr: string): Chk;
    setTextSize(size: string, mode?: string): Chk;
}
