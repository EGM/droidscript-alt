import Component from "./component";
export default class MediaPlayer extends Component {
    constructor(id) {
        super(id);
    }
    close() {
        prompt(this.id, "Aud.Close(");
    }
    getDuration() {
        return parseFloat(prompt(this.id, "Aud.GetDuration("));
    }
    getType() {
        return "MediaPlayer";
    }
    isLooping() {
        return prompt(this.id, "Aud.IsLooping(") === "true";
    }
    isPlaying() {
        return prompt(this.id, "Aud.IsPlaying(") === "true";
    }
    isReady() {
        return prompt(this.id, "Aud.IsReady(") === "true";
    }
    pause() {
        prompt(this.id, "Aud.Pause(");
    }
    play(from) {
        prompt(this.id, `Aud.Play(\f${from}`);
    }
    seekTo(time) {
        prompt(this.id, `Aud.SeekTo(${time}`);
    }
    setFile(file) {
        prompt(this.id, `Aud.SetFile(${file}`);
        return this;
    }
    setLooping(loop) {
        prompt(this.id, `Aud.SetLooping(\f${loop}`);
        return this;
    }
    setOnComplete(callback) {
        prompt(this.id, `Aud.SetOnComplete(${_Cbm(callback)}`);
        return this;
    }
    setOnReady(callback) {
        prompt(this.id, `Aud.SetOnReady(${_Cbm(callback)}`);
        return this;
    }
    setOnSeekDone(callback) {
        prompt(this.id, `Aud.SetOnSeekDone(${_Cbm(callback)}`);
        return this;
    }
    setVolume(left, right) {
        prompt(this.id, `Aud.SetVolume(${left}\f${right}`);
        return this;
    }
    stop() {
        prompt(this.id, "Aud.Stop(");
    }
}
