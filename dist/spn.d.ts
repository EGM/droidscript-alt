import View from "./view";
export default class Spn extends View {
    constructor(id: string);
    getText(): string;
    getTextSize(mode?: string): number;
    getType(): string;
    selectItem(item: string): void;
    setList(list: string, delim?: string): Spn;
    setOnChange(callback: Function): Spn;
    setOnTouch(callback: Function): Spn;
    setText(text: string): Spn;
    setTextColor(color: string): Spn;
    setTextSize(size: number, mode?: string): Spn;
}
