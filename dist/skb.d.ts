import View from "./view";
export default class Skb extends View {
    constructor(id: string);
    getType(): string;
    getValue(): number;
    setMaxRate(rate: number): Skb;
    setOnChange(callback: Function): Skb;
    setOnTouch(callback: Function): Skb;
    setRange(range: number): Skb;
    setValue(val: number): Skb;
}
