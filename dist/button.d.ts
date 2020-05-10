import View from "./view";
export default class Button extends View {
    constructor(id: string);
    getText(): string;
    getTextSize(mode: string): number;
    getType(): string;
    setEllipsize(mode: string): Button;
    setFontFile(file: string): Button;
    setHtml(html: string): Button;
    setOnLongTouch(callback: Function): Button;
    setOnTouch(callback: Function): Button;
    setStyle(clr1: string, clr2: string, radius: number, strokeClr: string, strokeWidth: number, shadow: string): Button;
    setText(text: string): Button;
    setTextColor(clr: string): Button;
    setTextShadow(radius: string, dx: number, dy: number, color: string): Button;
    setTextSize(size: string, mode?: string): Button;
}
