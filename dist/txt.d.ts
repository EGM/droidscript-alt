import View from "./view";
export default class Txt extends View {
    constructor(id: string);
    getHtml(): string;
    getLineCount(): number;
    getLineStart(line: number): number;
    getLineTop(line: number): number;
    getMaxLines(): number;
    getText(): string;
    getTextSize(mode?: string): number;
    getType(): string;
    log(message: string, options?: string): Txt;
    setEllipsize(mode: string): Txt;
    setFontFile(file: string): Txt;
    setHtml(html: string): Txt;
    setLog(maxLines: number): Txt;
    setOnLongTouch(callback: Function): Txt;
    setOnTouch(callback: Function): Txt;
    setOnTouchDown(callback: Function): Txt;
    setOnTouchMove(callback: Function): Txt;
    setOnTouchUp(callback: Function): Txt;
    setText(text: string): Txt;
    setTextColor(color: string): Txt;
    setTextShadow(radius: number, dx: number, dy: number, color: string): Txt;
    setTextSize(size: number, mode?: string): Txt;
    setTouchable(touchable: boolean): Txt;
}
