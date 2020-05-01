import Component from "./component";
export default class Ply extends Component {
    constructor(id: string);
    getBillingInfo(prodIDs: string, callback: Function, options?: string): void;
    getPurchases(callback: Function, options?: string): void;
    getType(): string;
    purchase(prodID: string, token: string, callback: Function, options?: string): void;
}
