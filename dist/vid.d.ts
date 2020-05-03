import View from "./view";
export default class Vid extends View {
    constructor(id: string);
    getDuration(): number;
    getType(): string;
    isPlaying(): boolean;
    isReady(): boolean;
    pause(): void;
    play(): void;
    seekTo(secs: number): void;
    setFile(file: string): Vid;
    setOnComplete(callback: Function): Vid;
    setOnError(callback: Function): Vid;
    setOnReady(callback: Function): Vid;
    setOnSubtitle(callback: Function): Vid;
    setSubtitles(file: string): Vid;
    setVolume(left: number, right: number): Vid;
    stop(): void;
}
