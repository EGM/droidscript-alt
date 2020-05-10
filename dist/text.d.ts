import View from "./view";
export default class Text extends View {
    constructor(id: string);
    getHtml(): string;
    getLineCount(): number;
    getLineStart(line: number): number;
    getLineTop(line: number): number;
    getMaxLines(): number;
    getText(): string;
    getTextSize(mode?: string): number;
    getType(): string;
    log(message: string, options?: string): Text;
    setEllipsize(mode: string): Text;
    setFontFile(file: string): Text;
    setHtml(html: string): Text;
    setLog(maxLines: number): Text;
    setOnLongTouch(callback: Function): Text;
    setOnTouch(callback: Function): Text;
    setOnTouchDown(callback: Function): Text;
    setOnTouchMove(callback: Function): Text;
    setOnTouchUp(callback: Function): Text;
    setText(text: string): Text;
    setTextColor(color: string): Text;
    setTextShadow(radius: number, dx: number, dy: number, color: string): Text;
    setTextSize(size: number, mode?: string): Text;
    setTouchable(touchable: boolean): Text;
}
