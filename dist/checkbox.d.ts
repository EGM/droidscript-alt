import View from "./view";
export default class CheckBox extends View {
    constructor(id: string);
    getChecked(): boolean;
    getText(): string;
    getTextSize(mode?: string): number;
    getType(): string;
    setChecked(checked: boolean): CheckBox;
    setOnTouch(callback: Function): CheckBox;
    setText(text: string): CheckBox;
    setTextColor(clr: string): CheckBox;
    setTextSize(size: string, mode?: string): CheckBox;
}
