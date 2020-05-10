import Component from "./component";
export default class ZipUtil extends Component {
    constructor(id) {
        super(id);
    }
    addFile(name, file) {
        prompt(this.id, `Zip.AddFile(\f${name}\f${file}`);
        return this;
    }
    addText(name, text) {
        prompt(this.id, `Zip.AddText(\f${name}\f${text}`);
        return this;
    }
    close() {
        prompt(this.id, "Zip.Close(");
    }
    create(file) {
        prompt(this.id, `Zip.Create(\f${file}`);
        return this;
    }
    createDebugKey(file) {
        prompt(this.id, `Zip.CreateDebugKey(\f${file}`);
        return this;
    }
    createKey(file, pass, name, org) {
        prompt(this.id, `Zip.CreateKey(\f${file}\f${pass}\f${name}\f${org}`);
        return this;
    }
    extract(name, file) {
        prompt(this.id, `Zip.Extract(\f${name}\f${file}`);
        return this;
    }
    getType() {
        return "ZipUtil";
    }
    list(path) {
        return prompt(this.id, `Zip.List(\f${path}`);
    }
    open(file) {
        prompt(this.id, `Zip.Open(\f${file}`);
    }
    sign(fileIn, fileOut, keyStore, pass) {
        return (prompt(this.id, `Zip.Sign(\f${fileIn}\f${fileOut}\f${keyStore}\f${pass}`) === "true");
    }
    updateManifest(fileIn, fileOut, packageName, appName, permissions, options) {
        prompt(this.id, `Zip.UpdateManifest(\f${fileIn}\f${fileOut}\f${packageName}\f${appName}\f${permissions}\f${options}`);
    }
}
