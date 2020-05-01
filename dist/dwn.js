import Component from "./component";
export default class Dwn extends Component {
    constructor(id) {
        super(id);
    }
    download(url, folder, name, headers) {
        prompt(this.id, `Dwn.Download(\f${url}\f${folder}\f${name}\f${headers}`);
    }
    getProgress() {
        return parseFloat(prompt(this.id, "Dwn.GetProgress("));
    }
    getSize() {
        return parseFloat(prompt(this.id, "Dwn.GetSize("));
    }
    getType() {
        return "Downloader";
    }
    isComplete() {
        return prompt(this.id, "Dwn.IsComplete(") === "true";
    }
    setOnCancel(callback) {
        prompt(this.id, `Dwn.SetOnCancel(\f${_Cbm(callback)}`);
        return this;
    }
    setOnComplete(callback) {
        prompt(this.id, `Dwn.SetOnComplete(\f${_Cbm(callback)}`);
        return this;
    }
    setOnDownload(callback) {
        prompt(this.id, `Dwn.SetOnDownload(\f${_Cbm(callback)}`);
        return this;
    }
    setOnError(callback) {
        prompt(this.id, `Dwn.SetOnError(\f${_Cbm(callback)}`);
        return this;
    }
}
