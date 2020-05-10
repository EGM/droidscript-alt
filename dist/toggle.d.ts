import View from "./view";
export default class Toggle extends View {
    constructor(id: string);
    getChecked(): boolean;
    getText(): string;
    getTextSize(mode?: string): number;
    getType(): string;
    setChecked(checked: boolean): Toggle;
    setOnTouch(callback: Function): Toggle;
    setStyle(color1: string, color2: string, radius: number, strokeClr: string, strokeWidth: number, shadow: boolean, checkColor: string): Toggle;
    setText(text: string): Toggle;
    setTextColor(color: string): Toggle;
    setTextSize(size: number, mode?: string): Toggle;
}
