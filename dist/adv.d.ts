import View from "./view";
export default class Adv extends View {
    constructor(id: string);
    GetType(): string;
    Load(): void;
    SetOnStatus(callback: Function): Adv;
}
