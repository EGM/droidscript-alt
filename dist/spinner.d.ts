import View from "./view";
export default class Spinner extends View {
    constructor(id: string);
    getText(): string;
    getTextSize(mode?: string): number;
    getType(): string;
    selectItem(item: string): void;
    setList(list: string, delim?: string): Spinner;
    setOnChange(callback: Function): Spinner;
    setOnTouch(callback: Function): Spinner;
    setText(text: string): Spinner;
    setTextColor(color: string): Spinner;
    setTextSize(size: number, mode?: string): Spinner;
}
