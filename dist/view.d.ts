import DSObject from "./dsobject";
export default class View implements DSObject {
    data: {};
    id: string;
    _left: number;
    _top: number;
    _parent: View;
    constructor(id: string);
    adjustColor(hue: number, saturation: number, brightness: number, contrast: number): void;
    animate(type: string, callback: Function, time: number): void;
    clearFocus(): void;
    destroy(): void;
    focus(): void;
    getAbsHeight(): number;
    getAbsWidth(): number;
    getHeight(options?: string): number;
    getLeft(options?: string): number;
    getParent(): DSObject;
    getPosition(options?: string): {
        left: any;
        top: any;
        right: any;
        bottom: any;
    };
    getTop(options?: string): number;
    getVisibility(): string;
    getWidth(options?: string): number;
    gone(): void;
    hide(): void;
    isEnabled(): boolean;
    isVisible(): boolean;
    /** *$ Premium* */
    method(name: string, types: string, p1: string, p2: string, p3: string, p4: string): string;
    release(): void;
    setBackAlpha(alpha: number): DSObject;
    setBackColor(color: string): DSObject;
    setBackGradient(color1: string, color2?: string, color3?: string, options?: string): DSObject;
    setBackGradientRadial(x: number, y: number, radius: number, color1: number, color2?: number, color3?: number, options?: string): DSObject;
    setBackground(file: string, options?: string): DSObject;
    setColorFilter(color: string, mode?: string): DSObject;
    setEnabled(enable: boolean): DSObject;
    setMargins(left: number, top: number, right: number, bottom: number, mode?: string): DSObject;
    setPadding(left: number, top: number, right: number, bottom: number, mode?: string): DSObject;
    setPosition(left: number, top: number, width?: number, height?: number, options?: string): DSObject;
    setScale(x: number, y: number): DSObject;
    setSize(width: number, height: number, options?: string): DSObject;
    setVisibility(mode: string): DSObject;
    show(): void;
    tween(target: {
        x: number;
        y: number;
        w: number;
        h: number;
        sw: number;
        sh: number;
        rot: number;
    }, duration: number, type: string, repeat: number, yoyo: boolean, callback: Function): void;
}
