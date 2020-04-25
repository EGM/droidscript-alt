import View from "./view";
export default class Btn extends View {
    constructor(id: string);
    getText(): string;
    getTextSize(mode: string): number;
    getType(): string;
    setEllipsize(mode: string): Btn;
    setFontFile(file: string): Btn;
    setHtml(html: string): Btn;
    setOnLongTouch(callback: Function): Btn;
    setOnTouch(callback: Function): Btn;
    setStyle(clr1: string, clr2: string, radius: number, strokeClr: string, strokeWidth: number, shadow: string): Btn;
    setText(text: string): Btn;
    setTextColor(clr: string): Btn;
    setTextShadow(radius: string, dx: number, dy: number, color: string): Btn;
    setTextSize(size: string, mode?: string): Btn;
}
