import View from "./view";
declare type Item = {
    title: string;
    body: string;
    image: string;
};
export default class List extends View {
    constructor(id: string);
    addItem(title: string, body?: string, image?: string): List;
    getItem(title: string): Item;
    getItemByIndex(index: number): Item;
    getLength(): number;
    getList(delimiter?: string): Item[];
    getTextSize(mode?: string): number;
    getType(): string;
    insertItem(index: number, title: string, body?: string, image?: string): void;
    removeAll(): void;
    removeItem(title: number): void;
    removeItemByIndex(index: number): void;
    scrollToItem(title: string, body?: string): void;
    scrollToItemByIndex(index: number): void;
    selectItem(title: string, body?: string, scroll?: boolean): void;
    selectItemByIndex(index: number, scroll?: boolean): void;
    setColumnWidths(icon: number, title: number, body: number, mode?: string): List;
    setDivider(height: number, color?: string): List;
    setEllipsize(mode: string): List;
    setEllipsize1(mode: string): List;
    setEllipsize2(mode: string): List;
    setFontFile(file: string): List;
    setHiTextColor1(color: string): List;
    setHiTextColor2(color: string): List;
    setIconMargins(left: number, top: number, right: number, bottom: number, mode: string): List;
    setIconSize(size: number, mode?: string): List;
    setItem(title: string, newTitle: string, newBody?: string, newImage?: string): List;
    setItemByIndex(index: number, newTitle: string, newBody?: string, newImage?: string): List;
    setList(list: string, delimiter: string): List;
    setOnLongTouch(callback: Function): List;
    setOnTouch(callback: Function): List;
    setTextColor(color: string): List;
    setTextColor1(color: string): List;
    setTextColor2(color: string): List;
    setTextMargins(left: number, top: number, right: number, bottom: number, mode?: string, options?: string): List;
    setTextShadow(radius: number, dx: number, dy: number, color: string): List;
    setTextShadow1(radius: number, dx: number, dy: number, color: string): List;
    setTextShadow2(radius: number, dx: number, dy: number, color: string): List;
    setTextSize(size: number, mode?: string): List;
    setTextSize1(size: number, mode?: string): List;
    setTextSize2(size: number, mode?: string): List;
}
export {};
