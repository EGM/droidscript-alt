import View from "./view";
export default class WebView extends View {
    constructor(id) {
        super(id);
    }
    back() {
        prompt(this.id, "Web.Back(");
    }
    canGoBack() {
        return prompt(this.id, "Web.CanGoBack(") === "true";
    }
    canGoForward() {
        return prompt(this.id, "Web.CanGoForward(") === "true";
    }
    capture(file) {
        prompt(this.id, `Web.Capture(\f${file}`);
    }
    clearHistory() {
        prompt(this.id, "Web.ClearHistory(");
    }
    execute(code, callback) {
        prompt(this.id, `Web.Execute(\f${code}\f${_Cbm(callback)}`);
    }
    forward() {
        prompt(this.id, "Web.Forward(");
    }
    getTitle() {
        return prompt(this.id, "Web.GetTitle(");
    }
    getType() {
        return "WebView";
    }
    getUrl() {
        return prompt(this.id, "Web.GetUrl(");
    }
    loadHtml(html, baseFolder, options) {
        prompt(this.id, `Web.LoadHtml(\f${html}\f${baseFolder}\f${options}`);
    }
    loadUrl(url, options) {
        prompt(this.id, `Web.LoadUrl(\f${url}\f${options}`);
    }
    print() {
        prompt(this.id, "Web.Print(\f");
    }
    reload() {
        prompt(this.id, "Web.Reload(");
    }
    setOnConsole(callback) {
        prompt(this.id, `Web.SetOnConsole(\f${_Cbm(callback)}`);
        return this;
    }
    setOnError(callback) {
        prompt(this.id, `Web.SetOnError(\f${_Cbm(callback)}`);
        return this;
    }
    setOnProgress(callback) {
        prompt(this.id, `Web.SetOnProgress(${_Cbm(callback)}`);
        return this;
    }
    setOnTouch(callback) {
        prompt(this.id, `Web.SetOnTouch(\f${_Cbm(callback)}`);
        return this;
    }
    setRedirect(urlFrom, urlTo) {
        prompt(this.id, `Web.SetRedirect(\f${urlFrom}\f${urlTo}`);
        return this;
    }
    setTextZoom(zoom) {
        prompt(this.id, `Web.SetTextZoom(\f${zoom}`);
        return this;
    }
    setTouchMode(mode) {
        prompt(this.id, `Web.SetTouchMode(\f${mode}`);
        return this;
    }
    setUserAgent(agent) {
        prompt(this.id, `Web.SetUserAgent(\f${agent}`);
        return this;
    }
    setUserCreds(name, password) {
        prompt(this.id, `Web.SetUserCreds(\f${name}\f${password}`);
        return this;
    }
    setZoom(zoom) {
        prompt(this.id, `Web.SetZoom(\f${zoom}`);
        return this;
    }
    simulateKey(keyName, modifiers, pause) {
        prompt(this.id, `Web.SimulateKey(\f${keyName}\f${modifiers}\f${pause}`);
        return this;
    }
}
