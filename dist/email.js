import Component from "./component";
export default class EMAIL extends Component {
    constructor(id) {
        super(id);
    }
    getType() {
        return "Email";
    }
    receive(folder, maxCount, filter) {
        prompt(this.id, `EML.Receive(${folder}\f${maxCount}\f${filter}`);
    }
    send(subject, body, sender, recipients, attach) {
        prompt(this.id, `EML.Send(\f${subject}\f${body}\f${sender}\f${recipients}\f${attach}`);
    }
    setIMAP(server, port) {
        prompt(this.id, `EML.SetIMAP(${server}\f${port}`);
        return this;
    }
    setOnMessage(callback) {
        prompt(this.id, `EML.SetOnMessage(${_Cbm(callback)}`);
        return this;
    }
    setOnStatus(callback) {
        prompt(this.id, `EML.SetOnStatus(${_Cbm(callback)}`);
        return this;
    }
    setSMTP(server, port) {
        prompt(this.id, `EML.SetSMTP(${server}\f${port}`);
        return this;
    }
}
