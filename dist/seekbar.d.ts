import View from "./view";
export default class Seekbar extends View {
    constructor(id: string);
    getType(): string;
    getValue(): number;
    setMaxRate(rate: number): Seekbar;
    setOnChange(callback: Function): Seekbar;
    setOnTouch(callback: Function): Seekbar;
    setRange(range: number): Seekbar;
    setValue(val: number): Seekbar;
}
