import View from "./view";
export default class Tgl extends View {
    constructor(id: string);
    getChecked(): boolean;
    getText(): string;
    getTextSize(mode?: string): number;
    getType(): string;
    setChecked(checked: boolean): Tgl;
    setOnTouch(callback: Function): Tgl;
    setStyle(color1: string, color2: string, radius: number, strokeClr: string, strokeWidth: number, shadow: boolean, checkColor: string): Tgl;
    setText(text: string): Tgl;
    setTextColor(color: string): Tgl;
    setTextSize(size: number, mode?: string): Tgl;
}
