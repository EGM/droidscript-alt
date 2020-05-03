import View from "./view";
export default class Vid extends View {
    constructor(id) {
        super(id);
    }
    getDuration() {
        return parseFloat(prompt(this.id, "Vid.GetDuration("));
    }
    getType() {
        return "VideoView";
    }
    isPlaying() {
        return prompt(this.id, "Vid.IsPlaying(") === "true";
    }
    isReady() {
        return prompt(this.id, "Vid.IsReady(") === "true";
    }
    pause() {
        prompt(this.id, "Vid.Pause(");
    }
    play() {
        prompt(this.id, "Vid.Play(");
    }
    seekTo(secs) {
        prompt(this.id, `Vid.SeekTo(${secs}`);
    }
    setFile(file) {
        prompt(this.id, `Vid.SetFile(${file}`);
        return this;
    }
    setOnComplete(callback) {
        prompt(this.id, `Vid.SetOnComplete(${_Cbm(callback)}`);
        return this;
    }
    setOnError(callback) {
        prompt(this.id, `Vid.SetOnError(${_Cbm(callback)}`);
        return this;
    }
    setOnReady(callback) {
        prompt(this.id, `Vid.SetOnReady(${_Cbm(callback)}`);
        return this;
    }
    setOnSubtitle(callback) {
        prompt(this.id, `Vid.SetOnSubtitle(\f${_Cbm(callback)}`);
        return this;
    }
    setSubtitles(file) {
        prompt(this.id, `Vid.SetSubtitles(\f${file}`);
        return this;
    }
    setVolume(left, right) {
        prompt(this.id, `Vid.SetVolume(\f${left}\f${right}`);
        return this;
    }
    stop() {
        prompt(this.id, "Vid.Stop(");
    }
}
