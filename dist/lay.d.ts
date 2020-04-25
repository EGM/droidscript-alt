import View from "./view";
import DSObject from "./dsobject";
export default class Lay extends View {
    constructor(id: string);
    addChild(child: View, order?: number): Lay;
    childToFront(child: DSObject): void;
    destroyChild(child: View): void;
    getChildOrder(child: DSObject): number;
    getType(): string;
    removeChild(child: View): void;
    setCornerRadius(radius: number): Lay;
    setElevation(elevation: number): Lay;
    setGravity(gravity: string): Lay;
    setOnChildChange(callback: Function): Lay;
    setOnLongTouch(callback: Function): Lay;
    setOnTouch(callback: Function): Lay;
    setOnTouchDown(callback: Function): Lay;
    setOnTouchMove(callback: Function): Lay;
    setOnTouchUp(callback: Function): Lay;
    setOrientation(orientation: string): Lay;
    setTouchThrough(through: boolean): Lay;
    setTouchable(touchable: boolean): Lay;
}
