import View from "./view";
export default class WebView extends View {
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
    setOnConsole(callback: Function): WebView;
    setOnError(callback: Function): WebView;
    setOnProgress(callback: Function): WebView;
    setOnTouch(callback: Function): WebView;
    setRedirect(urlFrom: string, urlTo: string): WebView;
    setTextZoom(zoom: number): WebView;
    setTouchMode(mode: string): WebView;
    setUserAgent(agent: string): WebView;
    setUserCreds(name: string, password: string): WebView;
    setZoom(zoom: number): WebView;
    simulateKey(keyName: string, modifiers?: string, pause?: number): WebView;
}
