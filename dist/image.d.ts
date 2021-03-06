import View from "./view";
declare type PaintStyleType = "Fill" | "Line";
declare type PixelColorType = [number, number, number];
declare type PixelDataFormatType = "rawbase64" | "pngbase64" | "jpgbase64";
declare type PixelDataType = "<rawbase64>" | "data:image/jpg;base64,<jpgbase64>" | "data:image/png;base64,<pngbase64>";
export default class Image extends View {
    _auto: boolean;
    _gfb: string;
    constructor(id: string);
    clear(): void;
    draw(func: string, p1?: number | string, p2?: number | number[], p3?: number, p4?: number, p5?: number, p6?: number, p7?: number | string): void;
    drawArc(x1: number, y1: number, x2: number, y2: number, start: number, sweep: number): void;
    drawCircle(x: number, y: number, radius: number): void;
    drawFrame(ms: number): void;
    drawImage(image: Image, x: number, y: number, w: number, h: number, angle: number, mode: string): void;
    drawImageMtx(image: Image, matrix: [number, number, number, number, number, number]): void;
    drawLine(x1: any, y1: any, x2: any, y2: any): void;
    drawPoint(x: any, y: any): void;
    drawRectangle(x1: any, y1: any, x2: any, y2: any): void;
    drawSamples(data: any, range: any): void;
    drawText(txt: any, x: any, y: any): void;
    flatten(): void;
    getName(): string;
    getPixelColor(x: number, y: number): PixelColorType;
    getPixelData(format: PixelDataFormatType, left: number, top: number, width: number, height: number): string;
    getType(): string;
    measureText(text: string): {
        width: number;
        height: number;
    };
    move(x: number, y: number): void;
    play(ms: number): void;
    reset(): void;
    rotate(angle: number, pivX: number, pivY: number): void;
    save(fileName: string, quality?: number): void;
    scale(x: number, y: number): void;
    setAlpha(alpha: number): Image;
    setAutoUpdate(onoff: boolean): Image;
    setColor(color: string): Image;
    setFontFile(file: string): Image;
    setImage(image: Image | string, width?: number, height?: number, options?: string): Image;
    setLineWidth(width: number): Image;
    setMaxRate(ms: number): Image;
    setName(name: string): Image;
    setOnLoad(callback: Function): Image;
    setOnLongTouch(callback: Function): Image;
    setOnTouch(callback: Function): Image;
    setOnTouchDown(callback: Function): Image;
    setOnTouchMove(callback: Function): Image;
    setOnTouchUp(callback: Function): Image;
    setPaintColor(color: string): Image;
    setPaintStyle(style: PaintStyleType): Image;
    setPixelData(data: PixelDataType, width?: number, height?: number, options?: string): string;
    setPixelMode(onoff: boolean): Image;
    setTextSize(size: number): Image;
    setTouchable(touchable: boolean): Image;
    skew(x: number, y: number): void;
    transform(matrix: string): void;
    update(): void;
}
export {};
