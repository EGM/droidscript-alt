export default class View {
    constructor(id) {
        this.id = id;
        this._left = 0;
        this._top = 0;
        this._parent = null;
    }
    adjustColor(hue, saturation, brightness, contrast) {
        prompt(this.id, `Obj.AdjustColor(\f${hue}\f${saturation}\f${brightness}\f${contrast}`);
    }
    animate(type, callback, time) {
        prompt(this.id, `Obj.Animate(\f${type}\f${_Cbm(callback)}\f${time}`);
    }
    clearFocus() {
        prompt(this.id, `Obj.ClearFocus(\f`);
    }
    destroy() {
        prompt(this.id, `Obj.Release(`);
        _map[this.id] = null;
    }
    focus() {
        prompt(this.id, `Obj.Focus(\f`);
    }
    getAbsHeight() {
        return parseInt(prompt(this.id, `Obj.GetAbsHeight(`));
    }
    getAbsWidth() {
        return parseInt(prompt(this.id, `Obj.GetAbsWidth(`));
    }
    getHeight(options) {
        return parseFloat(prompt(this.id, `Obj.GetHeight(\f${options}`));
    }
    getLeft(options) {
        return parseFloat(prompt(this.id, `Obj.GetLeft(\f${options}`));
    }
    getParent() {
        return this._parent;
    }
    getPosition(options) {
        return JSON.parse(prompt(this.id, `Obj.GetPosition(\f${options}`));
    }
    getTop(options) {
        return parseFloat(prompt(this.id, `Obj.GetTop(\f${options}`));
    }
    getVisibility() {
        return prompt(this.id, `Obj.GetVisibility(`);
    }
    getWidth(options) {
        return parseFloat(prompt(this.id, `Obj.GetWidth(\f${options}`));
    }
    gone() {
        prompt(this.id, `Obj.SetVisibility(Gone`);
    }
    hide() {
        prompt(this.id, `Obj.SetVisibility(Hide`);
    }
    isEnabled() {
        return prompt(this.id, `Obj.IsEnabled(`) === "true";
    }
    isVisible() {
        return prompt(this.id, `Obj.GetVisibility(`) === "Show";
    }
    /** *$ Premium* */
    method(name, types, p1, p2, p3, p4) {
        return prompt(this.id, `Obj.Method(\f${name}\f${types}\f${p1}\f${p2}\f${p3}\f${p4}`);
    }
    release() {
        prompt(this.id, `Obj.Release(`);
        _map[this.id] = null;
    }
    setBackAlpha(alpha) {
        prompt(this.id, `Obj.SetBackAlpha(\f${alpha}`);
        return this;
    }
    setBackColor(color) {
        prompt(this.id, `Obj.SetBackColor(\f${color}`);
        return this;
    }
    setBackGradient(color1, color2, color3, options) {
        prompt(this.id, `Obj.SetBackGradient(Linear\f${color1}\f${color2}\f${color3}\f${options}\f${null}\f${null}\f${null}`);
        return this;
    }
    setBackGradientRadial(x, y, radius, color1, color2, color3, options) {
        prompt(this.id, `Obj.SetBackGradient(Radial\f${x}\f${y}\f${radius}\f${color1}\f${color2}\f${color3}\f${options}`);
        return this;
    }
    setBackground(file, options) {
        prompt(this.id, `Obj.SetBackground(${file}\f${options}`);
        return this;
    }
    setColorFilter(color, mode) {
        prompt(this.id, `Obj.SetColorFilter(\f${color}\f${mode}`);
        return this;
    }
    setEnabled(enable) {
        prompt(this.id, `Obj.SetEnabled(\f${enable}`);
        return this;
    }
    setMargins(left, top, right, bottom, mode) {
        prompt(this.id, `Obj.SetMargins(\f${left}\f${top}\f${right}\f${bottom}\f${mode}`);
        return this;
    }
    setPadding(left, top, right, bottom, mode) {
        prompt(this.id, `Obj.SetPadding(\f${left}\f${top}\f${right}\f${bottom}\f${mode}`);
        return this;
    }
    setPosition(left, top, width, height, options) {
        prompt(this.id, `Obj.SetPosition(\f${left}\f${top}\f${width}\f${height}\f${options}`);
        this._left = left;
        this._top = top;
        return this;
    }
    setScale(x, y) {
        prompt(this.id, `Obj.SetScale(\f${x}\f${y}`);
        return this;
    }
    setSize(width, height, options) {
        prompt(this.id, `Obj.SetSize(\f${width}\f${height}\f${options}`);
        return this;
    }
    setVisibility(mode) {
        prompt(this.id, `Obj.SetVisibility(${mode}`);
        return this;
    }
    show() {
        prompt(this.id, `Obj.SetVisibility(Show`);
    }
    tween(target, duration, type, repeat, yoyo, callback) {
        _Tween.apply(this, [target, duration, type, repeat, yoyo, callback]);
    }
}
