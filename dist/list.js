import View from "./view";
export default class List extends View {
    constructor(id) {
        super(id);
    }
    addItem(title, body, image) {
        prompt(this.id, `Lst.AddItem(\f${title}\f${body}\f${image}`);
        return this;
    }
    getItem(title) {
        const p = `Lst.GetItem(\f${title}`;
        return JSON.parse(prompt(this.id, p));
    }
    getItemByIndex(index) {
        const p = `Lst.GetItemByIndex(\f${index}`;
        return JSON.parse(prompt(this.id, p));
    }
    getLength() {
        return parseInt(prompt(this.id, "Lst.GetLength("));
    }
    getList(delimiter) {
        return JSON.parse(prompt(this.id, `Lst.GetList(${delimiter}`));
    }
    getTextSize(mode) {
        return parseFloat(prompt(this.id, `Lst.GetTextSize(\f${mode}`));
    }
    getType() {
        return "List";
    }
    insertItem(index, title, body, image) {
        prompt(this.id, `Lst.InsertItem(\f${index}\f${title}\f${body}\f${image}`);
    }
    removeAll() {
        prompt(this.id, "Lst.RemoveAll(");
    }
    removeItem(title) {
        prompt(this.id, `Lst.RemoveItem(\f${title}`);
    }
    removeItemByIndex(index) {
        prompt(this.id, `Lst.RemoveItemByIndex(\f${index}`);
    }
    scrollToItem(title, body) {
        const p = `Lst.ScrollToItem(\f${title}\f${body}`;
        prompt(this.id, p);
    }
    scrollToItemByIndex(index) {
        const p = `Lst.ScrollToItemByIndex(\f${index}`;
        prompt(this.id, p);
    }
    selectItem(title, body, scroll) {
        const p = `Lst.SelectItem(\f${title}\f${body}\f${scroll}`;
        prompt(this.id, p);
    }
    selectItemByIndex(index, scroll) {
        const p = `Lst.SelectItemByIndex(\f${index}\f${scroll}`;
        prompt(this.id, p);
    }
    setColumnWidths(icon, title, body, mode) {
        prompt(this.id, `Lst.SetColumnWidths(\f${icon}\f${title}\f${body}\f${mode}`);
        return this;
    }
    setDivider(height, color) {
        prompt(this.id, `Lst.SetDivider(\f${height}\f${color}`);
        return this;
    }
    setEllipsize(mode) {
        prompt(this.id, `Lst.SetEllipsize(\f${mode}`);
        return this;
    }
    setEllipsize1(mode) {
        prompt(this.id, `Lst.SetEllipsize1(\f${mode}`);
        return this;
    }
    setEllipsize2(mode) {
        prompt(this.id, `Lst.SetEllipsize2(\f${mode}`);
        return this;
    }
    setFontFile(file) {
        prompt(this.id, `Lst.SetFontFile(\f${file}`);
        return this;
    }
    setHiTextColor1(color) {
        prompt(this.id, `Lst.SetHiTextColor1(${color}`);
        return this;
    }
    setHiTextColor2(color) {
        prompt(this.id, `Lst.SetHiTextColor2(${color}`);
        return this;
    }
    setIconMargins(left, top, right, bottom, mode) {
        prompt(this.id, `Lst.SetIconMargins(\f${left}\f${top}\f${right}\f${bottom}\f${mode}`);
        return this;
    }
    setIconSize(size, mode) {
        prompt(this.id, `Lst.SetIconSize(\f${size}\f${mode}`);
        return this;
    }
    setItem(title, newTitle, newBody, newImage) {
        prompt(this.id, `Lst.SetItem(\f${title}\f${newTitle}\f${newBody}\f${newImage}`);
        return this;
    }
    setItemByIndex(index, newTitle, newBody, newImage) {
        prompt(this.id, `Lst.SetItemByIndex(\f${index}\f${newTitle}\f${newBody}\f${newImage}`);
        return this;
    }
    setList(list, delimiter) {
        prompt(this.id, `Lst.SetList(\f${list}\f${delimiter}`);
        return this;
    }
    setOnLongTouch(callback) {
        prompt(this.id, `Lst.SetOnLongClick(${_Cbm(callback)}`);
        return this;
    }
    setOnTouch(callback) {
        prompt(this.id, `Lst.SetOnClick(${_Cbm(callback)}`);
        return this;
    }
    setTextColor(color) {
        prompt(this.id, `Lst.SetTextColor1(${color}`);
        return this;
    }
    setTextColor1(color) {
        prompt(this.id, `Lst.SetTextColor1(${color}`);
        return this;
    }
    setTextColor2(color) {
        prompt(this.id, `Lst.SetTextColor2(${color}`);
        return this;
    }
    setTextMargins(left, top, right, bottom, mode, options) {
        prompt(this.id, `Lst.SetTextMargins(\f${left}\f${top}\f${right}\f${bottom}\f${mode}\f${options}`);
        return this;
    }
    setTextShadow(radius, dx, dy, color) {
        prompt(this.id, `Lst.SetTextShadow1(\f${radius}\f${dx}\f${dy}\f${color}`);
        return this;
    }
    setTextShadow1(radius, dx, dy, color) {
        prompt(this.id, `Lst.SetTextShadow1(\f${radius}\f${dx}\f${dy}\f${color}`);
        return this;
    }
    setTextShadow2(radius, dx, dy, color) {
        prompt(this.id, `Lst.SetTextShadow2(\f${radius}\f${dx}\f${dy}\f${color}`);
        return this;
    }
    setTextSize(size, mode) {
        prompt(this.id, `Lst.SetTextSize1(\f${size}\f${mode}`);
        return this;
    }
    setTextSize1(size, mode) {
        prompt(this.id, `Lst.SetTextSize1(\f${size}\f${mode}`);
        return this;
    }
    setTextSize2(size, mode) {
        prompt(this.id, `Lst.SetTextSize2(\f${size}\f${mode}`);
        return this;
    }
}
