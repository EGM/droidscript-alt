import View from "./view";
import DSObject from "./dsobject";
export default class Scroller extends View {
    constructor(id: string);
    addChild(child: DSObject): Scroller;
    destroyChild(child: DSObject): void;
    getScrollX(): number;
    getScrollY(): number;
    getType(): string;
    removeChild(child: DSObject): void;
    scrollBy(x: number, y: number): void;
    scrollTo(x: number, y: number): void;
}
