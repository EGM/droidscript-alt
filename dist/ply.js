import Component from "./component";
export default class Ply extends Component {
    constructor(id) {
        super(id);
    }
    getBillingInfo(prodIDs, callback, options) {
        prompt(this.id, `Ply.GetBillingInfo(\f${prodIDs}\f${_Cbm(callback)}\f${options}`);
    }
    getPurchases(callback, options) {
        prompt(this.id, `Ply.GetPurchases(\f${_Cbm(callback)}\f${options}`);
    }
    getType() {
        return "PlayStore";
    }
    purchase(prodID, token, callback, options) {
        prompt(this.id, `Ply.Purchase(\f${prodID}\f${token}\f${_Cbm(callback)}\f${options}`);
    }
}
