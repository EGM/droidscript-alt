import Component from "./component";
export default class Cld extends Component {
    constructor(id: string);
    Delete(file: string, callback: Function): void;
    GetType(): string;
    List(filter: string, callback: Function): void;
    Load(file: string, callback: Function, options?: string): void;
    Merge(file: string, data: string, callback: Function): void;
    Save(file: string, data: string, callback: Function, options?: string): void;
}
