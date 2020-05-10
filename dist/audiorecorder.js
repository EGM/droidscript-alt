import Component from "./component";
export default class AudioRecorder extends Component {
    constructor(id) {
        super(id);
    }
    // eslint-disable-next-line
    getData() { return JSON.parse(prompt(this.id, "Rec.GetData(")); }
    getPeak() {
        return parseFloat(prompt(this.id, "Rec.GetPeak("));
    }
    getRMS() {
        return parseFloat(prompt(this.id, "Rec.GetRMS("));
    }
    getType() {
        return "AudioRecorder";
    }
    pause() {
        prompt(this.id, "Rec.Pause(");
    }
    setFile(file) {
        prompt(this.id, `Rec.SetFile(${file}`);
        return this;
    }
    setFrequency(frequency) {
        prompt(this.id, `Rec.SetFrequency(\f${frequency}`);
        return this;
    }
    setSource(src) {
        prompt(this.id, `Rec.SetSource(\f${src}`);
        return this;
    }
    start() {
        prompt(this.id, "Rec.Start(");
    }
    stop() {
        prompt(this.id, "Rec.Stop(");
    }
}
