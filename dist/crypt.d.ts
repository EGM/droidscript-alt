import Component from "./component";
export default class Crypt extends Component {
    constructor(id: string);
    decrypt(text: string, password?: string): string;
    encrypt(text: string, password?: string): string;
    getType(): string;
    hash(text: string, mode?: string, options?: string): string;
}
