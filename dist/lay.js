import View from "./view";
export default class Lay extends View {
    constructor(id) {
        super(id);
    }
    addChild(child, order) {
        prompt(this.id, `Lay.AddChild(\f${child ? child.id : null}\f${order}`);
        if (child) {
            child._parent = this;
        }
        return this;
    }
    childToFront(child) {
        prompt(this.id, `Lay.ChildToFront(${child ? child.id : null}`);
    }
    destroyChild(child) {
        prompt(this.id, `Lay.DestroyChild(${child ? child.id : null}`);
        if (child) {
            child._parent = null;
        }
    }
    getChildOrder(child) {
        return parseInt(prompt(this.id, `Lay.GetChildOrder(\f${child ? child.id : null}`));
    }
    getType() {
        return "Layout";
    }
    removeChild(child) {
        prompt(this.id, `Lay.RemoveChild(${child ? child.id : null}`);
        if (child) {
            child._parent = null;
        }
    }
    setCornerRadius(radius) {
        prompt(this.id, `Lay.SetCornerRadius(\f${radius}`);
        return this;
    }
    setElevation(elevation) {
        prompt(this.id, `Lay.SetElevation(\f${elevation}`);
        return this;
    }
    setGravity(gravity) {
        prompt(this.id, `Lay.SetGravity(\f${gravity}`);
        return this;
    }
    setOnChildChange(callback) {
        prompt(this.id, `Lay.SetOnChildChange(\f${_Cbm(callback)}`);
        return this;
    }
    setOnLongTouch(callback) {
        prompt(this.id, `Lay.SetOnLongTouch(\f${_Cbm(callback)}`);
        return this;
    }
    setOnTouch(callback) {
        prompt(this.id, `Lay.SetOnTouch(\f${_Cbm(callback)}`);
        return this;
    }
    setOnTouchDown(callback) {
        prompt(this.id, `Lay.SetOnTouchDown(\f${_Cbm(callback)}`);
        return this;
    }
    setOnTouchMove(callback) {
        prompt(this.id, `Lay.SetOnTouchMove(\f${_Cbm(callback)}`);
        return this;
    }
    setOnTouchUp(callback) {
        prompt(this.id, `Lay.SetOnTouchUp(\f${_Cbm(callback)}`);
        return this;
    }
    setOrientation(orientation) {
        prompt(this.id, `Lay.SetOrientation(\f${orientation}`);
        return this;
    }
    setTouchThrough(through) {
        prompt(this.id, `Lay.SetTouchThrough(\f${through}`);
        return this;
    }
    setTouchable(touchable) {
        prompt(this.id, `Lay.SetTouchable(\f${touchable}`);
        return this;
    }
}
