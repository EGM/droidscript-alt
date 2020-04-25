import Component from "./component";
export default class Fil extends Component {
    constructor(id) {
        super(id);
    }
    close() {
        prompt(this.id, "Fil.Close(");
    }
    getLength() {
        return parseInt(prompt(this.id, "Fil.GetLength("));
    }
    getPointer() {
        return parseInt(prompt(this.id, "Fil.GetPointer("));
    }
    getType() {
        return "File";
    }
    // eslint-disable-next-line
    readData(len, mode) {
        return JSON.parse(prompt(this.id, `Fil.ReadData(\f${len}\f${mode}`));
    }
    readNumber(type) {
        return parseFloat(prompt(this.id, `Fil.ReadNumber(\f${type}`));
    }
    readText(type) {
        return prompt(this.id, `Fil.ReadText(\f${type}`);
    }
    readTextAsync(type, callback) {
        return prompt(this.id, `Fil.ReadTextAsync(\f${type}\f${_Cbm(callback)}`);
    }
    seek(offset) {
        prompt(this.id, `Fil.Seek(\f${offset}`);
        return this;
    }
    setLength(len) {
        prompt(this.id, `Fil.SetLength(\f${len}`);
        return this;
    }
    skip(bytes) {
        prompt(this.id, `Fil.Skip(\f${bytes}`);
        return this;
    }
    writeData(data, mode) {
        prompt(this.id, `Fil.WriteData(\f${data}\f${mode}`);
        return this;
    }
    writeNumber(data, type) {
        prompt(this.id, `Fil.WriteNumber(\f${data}\f${type}`);
        return this;
    }
    writeText(data, type) {
        prompt(this.id, `Fil.WriteText(\f${data}\f${type}`);
        return this;
    }
}
