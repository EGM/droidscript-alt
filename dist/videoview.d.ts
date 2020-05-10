import View from "./view";
export default class VideoView extends View {
    constructor(id: string);
    getDuration(): number;
    getType(): string;
    isPlaying(): boolean;
    isReady(): boolean;
    pause(): void;
    play(): void;
    seekTo(secs: number): void;
    setFile(file: string): VideoView;
    setOnComplete(callback: Function): VideoView;
    setOnError(callback: Function): VideoView;
    setOnReady(callback: Function): VideoView;
    setOnSubtitle(callback: Function): VideoView;
    setSubtitles(file: string): VideoView;
    setVolume(left: number, right: number): VideoView;
    stop(): void;
}
