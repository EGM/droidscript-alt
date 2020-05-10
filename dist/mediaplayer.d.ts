import Component from "./component";
export default class MediaPlayer extends Component {
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
    setFile(file: string): MediaPlayer;
    setLooping(loop: boolean): MediaPlayer;
    setOnComplete(callback: Function): MediaPlayer;
    setOnReady(callback: Function): MediaPlayer;
    setOnSeekDone(callback: Function): MediaPlayer;
    setVolume(left: number, right: number): MediaPlayer;
    stop(): void;
}
