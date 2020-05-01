import View from "./view";
export default class Vid extends View {
  constructor(id: string) {
    super(id);
  }

  getDuration(): number {
    return parseFloat(prompt(this.id, "Vid.GetDuration("));
  }

  getType(): string {
    return "VideoView";
  }

  isPlaying(): boolean {
    return prompt(this.id, "Vid.IsPlaying(") === "true";
  }

  isReady(): boolean {
    return prompt(this.id, "Vid.IsReady(") === "true";
  }

  pause(): void {
    prompt(this.id, "Vid.Pause(");
  }

  play(): void {
    prompt(this.id, "Vid.Play(");
  }

  seekTo(secs: number): void {
    prompt(this.id, `Vid.SeekTo(${secs}`);
  }

  setFile(file: string): Vid {
    prompt(this.id, `Vid.SetFile(${file}`);
    return this;
  }

  setOnComplete(callback: Function): Vid {
    prompt(this.id, `Vid.SetOnComplete(${_Cbm(callback)}`);
    return this;
  }

  setOnError(callback: Function): Vid {
    prompt(this.id, `Vid.SetOnError(${_Cbm(callback)}`);
    return this;
  }

  setOnReady(callback: Function): Vid {
    prompt(this.id, `Vid.SetOnReady(${_Cbm(callback)}`);
    return this;
  }

  setOnSubtitle(callback: Function): Vid {
    prompt(this.id, `Vid.SetOnSubtitle(\f${_Cbm(callback)}`);
    return this;
  }

  setSubtitles(file: string): Vid {
    prompt(this.id, `Vid.SetSubtitles(\f${file}`);
    return this;
  }

  setVolume(left: number, right: number): Vid {
    prompt(this.id, `Vid.SetVolume(\f${left}\f${right}`);
    return this;
  }

  stop(): void {
    prompt(this.id, "Vid.Stop(");
  }
}
