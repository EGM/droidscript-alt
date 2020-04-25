import Component from "./component";
export default class Crp extends Component {
    constructor(id) {
        super(id);
    }
    decrypt(text, password) {
        return prompt(this.id, `Crp.Decrypt\f${text}\f${password}`);
    }
    encrypt(text, password) {
        return prompt(this.id, `Crp.Encrypt\f${text}\f${password}`);
    }
    getType() {
        return "Crypt";
    }
    hash(text, mode, options) {
        return prompt(this.id, `Crp.Hash\f${text}\f${mode}\f${options}`);
    }
}
