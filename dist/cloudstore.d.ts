import Component from "./component";
export default class CloudStore extends Component {
    constructor(id: string);
    delete(file: string, callback: Function): void;
    getType(): string;
    list(filter: string, callback: Function): void;
    load(file: string, callback: Function, options?: string): void;
    merge(file: string, data: string, callback: Function): void;
    save(file: string, data: string, callback: Function, options?: string): void;
}
