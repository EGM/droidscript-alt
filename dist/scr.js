import View from "./view";
export default class Scr extends View {
    constructor(id) {
        super(id);
    }
    addChild(child) {
        prompt(this.id, `Scr.AddChild(\f${child ? child.id : null}`);
        return this;
    }
    destroyChild(child) {
        prompt(this.id, `Scr.DestroyChild(\f${child ? child.id : null}`);
    }
    getScrollX() {
        return parseFloat(prompt(this.id, "Scr.GetScrollX("));
    }
    getScrollY() {
        return parseFloat(prompt(this.id, "Scr.GetScrollY("));
    }
    getType() {
        return "Scroller";
    }
    removeChild(child) {
        prompt(this.id, `Scr.RemoveChild(\f${child ? child.id : null}`);
    }
    scrollBy(x, y) {
        prompt(this.id, `Scr.ScrollBy\f${x}\f${y}`);
    }
    scrollTo(x, y) {
        prompt(this.id, `Scr.ScrollTo\f${x}\f${y}`);
    }
}
