import View from "./view";
export default class Web extends View {
    constructor(id: string);
    back(): void;
    canGoBack(): boolean;
    canGoForward(): boolean;
    capture(file: string): void;
    clearHistory(): void;
    execute(code: string, callback?: Function): void;
    forward(): void;
    getTitle(): string;
    getType(): string;
    getUrl(): string;
    loadHtml(html: string, baseFolder?: string, options?: string): void;
    loadUrl(url: string, options?: string): void;
    print(): void;
    reload(): void;
    setOnConsole(callback: Function): Web;
    setOnError(callback: Function): Web;
    setOnProgress(callback: Function): Web;
    setOnTouch(callback: Function): Web;
    setRedirect(urlFrom: string, urlTo: string): Web;
    setTextZoom(zoom: number): Web;
    setTouchMode(mode: string): Web;
    setUserAgent(agent: string): Web;
    setUserCreds(name: string, password: string): Web;
    setZoom(zoom: number): Web;
    simulateKey(keyName: string, modifiers?: string, pause?: number): Web;
}
