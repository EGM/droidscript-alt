import View from "./view";
import DSObject from "./dsobject";
export default class Layout extends View {
    constructor(id: string);
    addChild(child: View, order?: number): Layout;
    childToFront(child: DSObject): void;
    destroyChild(child: View): void;
    getChildOrder(child: DSObject): number;
    getType(): string;
    removeChild(child: View): void;
    setCornerRadius(radius: number): Layout;
    setElevation(elevation: number): Layout;
    setGravity(gravity: string): Layout;
    setOnChildChange(callback: Function): Layout;
    setOnLongTouch(callback: Function): Layout;
    setOnTouch(callback: Function): Layout;
    setOnTouchDown(callback: Function): Layout;
    setOnTouchMove(callback: Function): Layout;
    setOnTouchUp(callback: Function): Layout;
    setOrientation(orientation: string): Layout;
    setTouchThrough(through: boolean): Layout;
    setTouchable(touchable: boolean): Layout;
}
