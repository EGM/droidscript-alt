import View from "./view";
export default class AdView extends View {
    constructor(id: string);
    GetType(): string;
    Load(): void;
    SetOnStatus(callback: Function): AdView;
}
