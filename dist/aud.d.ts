import Component from "./component";
export default class Aud extends Component {
    constructor(id: string);
    close(): void;
    getDuration(): number;
    getType(): string;
    isLooping(): boolean;
    isPlaying(): boolean;
    isReady(): boolean;
    pause(): void;
    play(from: number): void;
    seekTo(time: number): void;
    setFile(file: string): Aud;
    setLooping(loop: boolean): Aud;
    setOnComplete(callback: Function): Aud;
    setOnReady(callback: Function): Aud;
    setOnSeekDone(callback: Function): Aud;
    setVolume(left: number, right: number): Aud;
    stop(): void;
}
