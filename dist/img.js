import View from "./view";
export default class Img extends View {
    constructor(id) {
        super(id);
    }
    clear() {
        if (this._auto) {
            prompt(this.id, "Img.Clear(");
        }
        else {
            this.draw("c");
        }
    }
    draw(func, p1, p2, p3, p4, p5, p6, p7) {
        if (this._gfb.length > 2) {
            this._gfb += "\f";
        }
        this._gfb += `${func}~${p1}~${p2}~${p3}~${p4}~${p5}~${p6}~${p7}`;
    }
    drawArc(x1, y1, x2, y2, start, sweep) {
        if (this._auto) {
            prompt(this.id, `Img.DrawArc(${x1}\f${y1}\f${x2}\f${y2}\f${start}\f${sweep}`);
        }
        else {
            this.draw("a", null, x1, y1, x2, y2, start, sweep);
        }
    }
    drawCircle(x, y, radius) {
        if (this._auto) {
            prompt(this.id, `Img.DrawCircle(${x}\f${y}\f${radius}`);
        }
        else {
            this.draw("e", null, x, y, radius);
        }
    }
    drawFrame(ms) {
        prompt(this.id, `Img.DrawFrame\f${ms}`);
    }
    drawImage(image, x, y, w, h, angle, mode) {
        if (this._auto) {
            prompt(this.id, `Img.DrawImage\f${image ? image.id : null}\f${x}\f${y}\f${w}\f${h}\f${angle}\f${mode}`);
        }
        else {
            this.draw("i", image ? image.id : null, x, y, w ? w : -1, h ? h : -1, angle, mode);
        }
    }
    drawImageMtx(image, matrix) {
        if (this._auto) {
            prompt(this.id, `Img.DrawImageMtx\f${image ? image.id : null}\f${matrix}`);
        }
        else {
            this.draw("m", image ? image.id : null, matrix);
        }
    }
    drawLine(x1, y1, x2, y2) {
        if (this._auto) {
            prompt(this.id, `Img.DrawLine(${x1}\f${y1}\f${x2}\f${y2}`);
        }
        else {
            this.draw("l", null, x1, y1, x2, y2);
        }
    }
    drawPoint(x, y) {
        if (this._auto) {
            prompt(this.id, `Img.DrawPoint(${x}\f${y}`);
        }
        else {
            this.draw("p", null, x, y);
        }
    }
    drawRectangle(x1, y1, x2, y2) {
        if (this._auto) {
            prompt(this.id, `Img.DrawRect(${x1}\f${y1}\f${x2}\f${y2}`);
        }
        else {
            this.draw("r", null, x1, y1, x2, y2);
        }
    }
    drawSamples(data, range) {
        if (this._auto) {
            prompt(this.id, `Img.DrawSamples(\f${data}\f${range}`);
        }
        else {
            this.draw("g", data, range, 0, 0, 0, 0);
        }
    }
    drawText(txt, x, y) {
        if (this._auto) {
            prompt(this.id, `Img.DrawText(${txt}\f${x}\f${y}`);
        }
        else {
            this.draw("t", txt, x, y, 0, 0, 0);
        }
    }
    flatten() {
        prompt(this.id, "Img.Flatten(");
    }
    getName() {
        return prompt(this.id, "Img.GetName(");
    }
    getPixelColor(x, y) {
        return JSON.parse(prompt(this.id, `Img.GetPixelColor(\f${x}\f${y}`));
    }
    getPixelData(format, left, top, width, height) {
        return prompt(this.id, `Img.GetPixelData(\f${format}\f${left}\f${top}\f${width}\f${height}`);
    }
    getType() {
        return "Image";
    }
    measureText(text) {
        return JSON.parse(prompt(this.id, `Img.MeasureText(\f${text}`));
    }
    move(x, y) {
        prompt(this.id, `Img.Move(${x}\f${y}`);
    }
    play(ms) {
        prompt(this.id, `Img.Play\f${ms}`);
    }
    reset() {
        prompt(this.id, "Img.Reset(");
    }
    rotate(angle, pivX, pivY) {
        prompt(this.id, `Img.Rotate(${angle}\f${pivX}\f${pivY}`);
    }
    save(fileName, quality) {
        prompt(this.id, `Img.Save\f${fileName}\f${quality}`);
    }
    scale(x, y) {
        prompt(this.id, `Img.Scale(${x}\f${y}`);
    }
    setAlpha(alpha) {
        if (this._auto) {
            prompt(this.id, `Img.SetAlpha(${alpha}`);
        }
        else {
            this.draw("k", null, alpha);
        }
        return this;
    }
    setAutoUpdate(onoff) {
        this._auto = onoff;
        prompt(this.id, `Img.SetAutoUpdate(\f${onoff}`);
        return this;
    }
    setColor(color) {
        if (this._auto) {
            prompt(this.id, `Img.SetColor(${color}`);
        }
        else {
            this.draw("o", color);
        }
        return this;
    }
    setFontFile(file) {
        if (this._auto) {
            prompt(this.id, `Img.SetFontFile(\f${file}`);
        }
        else {
            this.draw("f", file);
        }
        return this;
    }
    setImage(image, width, height, options) {
        if (typeof image === "string") {
            prompt(this.id, `Img.LoadImage(\f${image}\f${width}\f${height}\f${options}`);
        }
        else {
            prompt(this.id, `Img.CopyImage(\f${image ? image.id : null}\f${width}\f${height}\f${options}`);
        }
        return this;
    }
    setLineWidth(width) {
        if (this._auto) {
            prompt(this.id, `Img.SetLineWidth(${width}`);
        }
        else {
            this.draw("w", null, width);
        }
        return this;
    }
    setMaxRate(ms) {
        prompt(this.id, `Img.SetMaxRate(${ms}`);
        return this;
    }
    setName(name) {
        prompt(this.id, `Img.SetName(${name}`);
        return this;
    }
    setOnLoad(callback) {
        prompt(this.id, `Img.SetOnLoad\f${_Cbm(callback)}`);
        return this;
    }
    setOnLongTouch(callback) {
        prompt(this.id, `Img.SetOnLongTouch(${_Cbm(callback)}`);
        return this;
    }
    setOnTouch(callback) {
        prompt(this.id, `Img.SetOnTouch(${_Cbm(callback)}`);
        return this;
    }
    setOnTouchDown(callback) {
        prompt(this.id, `Img.SetOnTouchDown(${_Cbm(callback)}`);
        return this;
    }
    setOnTouchMove(callback) {
        prompt(this.id, `Img.SetOnTouchMove(${_Cbm(callback)}`);
        return this;
    }
    setOnTouchUp(callback) {
        prompt(this.id, `Img.SetOnTouchUp(${_Cbm(callback)}`);
        return this;
    }
    setPaintColor(color) {
        if (this._auto) {
            prompt(this.id, `Img.SetPaintColor(${color}`);
        }
        else {
            this.draw("n", color);
        }
        return this;
    }
    setPaintStyle(style) {
        if (this._auto) {
            prompt(this.id, `Img.SetPaintStyle(${style}`);
        }
        else {
            this.draw("s", style);
        }
        return this;
    }
    setPixelData(data, width, height, options) {
        return prompt(this.id, `Img.SetPixelData(\f${data}\f${width}\f${height}\f${options}`);
    }
    setPixelMode(onoff) {
        prompt(this.id, `Img.SetPixelMode(\f${onoff}`);
        return this;
    }
    setTextSize(size) {
        if (this._auto) {
            prompt(this.id, `Img.SetTextSize(${size}`);
        }
        else {
            this.draw("x", null, size);
        }
        return this;
    }
    setTouchable(touchable) {
        prompt(this.id, `Img.SetTouchable(${touchable}`);
        return this;
    }
    skew(x, y) {
        prompt(this.id, `Img.Skew(${x}\f${y}`);
    }
    transform(matrix) {
        prompt(this.id, `Img.Transform(\f${matrix}`);
    }
    update() {
        if (this._auto) {
            prompt(this.id, "Img.Update(");
        }
        else {
            prompt(this.id, `Img.Batch(${this._gfb}`);
            this._gfb = "";
        }
    }
}
