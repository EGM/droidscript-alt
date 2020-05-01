import Component from "./component";
export default class Syn extends Component {
    constructor(id) {
        super(id);
    }
    getType() {
        return "Synth";
    }
    playMidiTune(tune) {
        prompt(this.id, `Syn.PlayMidiTune(${tune}`);
    }
    playNote(note) {
        prompt(this.id, `Syn.PlayNote(${note}`);
    }
    playTone(frequency, duration) {
        prompt(this.id, `Syn.PlayTone(${frequency}\f${duration}`);
    }
    setDelay(ms) {
        prompt(this.id, `Syn.SetDelay(${ms}`);
        return this;
    }
    setDelayEnabled(enable) {
        prompt(this.id, `Syn.SetDelayEnabled(${enable}`);
        return this;
    }
    setFeedback(feedback) {
        prompt(this.id, `Syn.SetFeedback(${feedback}`);
        return this;
    }
    setFrequency(frequency) {
        prompt(this.id, `Syn.SetFrequency(${frequency}`);
        return this;
    }
    setNoteLength(duration) {
        prompt(this.id, `Syn.SetNoteLength(${duration}`);
        return this;
    }
    setPhaser(drywet, rate, range, feedback) {
        prompt(this.id, `Syn.SetPhaser\f${drywet}\f${rate}\f${range}\f${feedback}`);
        return this;
    }
    setPhaserDryWet(drywet) {
        prompt(this.id, `Syn.SetPhaserDryWet(${drywet}`);
        return this;
    }
    setPhaserEnabled(enable) {
        prompt(this.id, `Syn.SetPhaserEnabled(${enable}`);
        return this;
    }
    setPhaserFeedback(feedback) {
        prompt(this.id, `Syn.SetPhaserFeedback(${feedback}`);
        return this;
    }
    setPhaserRange(range) {
        prompt(this.id, `Syn.SetPhaserRange(${range}`);
        return this;
    }
    setPhaserRate(rate) {
        prompt(this.id, `Syn.SetPhaserRate(${rate}`);
        return this;
    }
    setVca(attack, decay, sustain, release) {
        prompt(this.id, `Syn.SetVca\f${attack}\f${decay}\f${sustain}\f${release}`);
        return this;
    }
    setVcaAttack(attack) {
        prompt(this.id, `Syn.SetVcaAttack(${attack}`);
        return this;
    }
    setVcaDecay(decay) {
        prompt(this.id, `Syn.SetVcaDecay(${decay}`);
        return this;
    }
    setVcaEnabled(enable) {
        prompt(this.id, `Syn.SetVcaEnabled(${enable}`);
        return this;
    }
    setVcaRelease(release) {
        prompt(this.id, `Syn.SetVcaRelease(${release}`);
        return this;
    }
    setVcaSustain(sustain) {
        prompt(this.id, `Syn.SetVcaSustain(${sustain}`);
        return this;
    }
    setVcf(attack, decay, sustain, release, cuttoff, resonance, depth) {
        prompt(this.id, `Syn.SetVcf\f${attack}\f${decay}\f${sustain}\f${release}\f${cuttoff}\f${resonance}\f${depth}`);
        return this;
    }
    setVcfAttack(attack) {
        prompt(this.id, `Syn.SetVcfAttack(${attack}`);
        return this;
    }
    setVcfCutoff(cuttoff) {
        prompt(this.id, `Syn.SetVcfCutoff(${cuttoff}`);
        return this;
    }
    setVcfDecay(decay) {
        prompt(this.id, `Syn.SetVcfDecay(${decay}`);
        return this;
    }
    setVcfDepth(depth) {
        prompt(this.id, `Syn.SetVcfDepth(${depth}`);
        return this;
    }
    setVcfEnabled(enable) {
        prompt(this.id, `Syn.SetVcfEnabled(${enable}`);
        return this;
    }
    setVcfRelease(release) {
        prompt(this.id, `Syn.SetVcfRelease(${release}`);
        return this;
    }
    setVcfResonance(resonance) {
        prompt(this.id, `Syn.SetVcfResonance(${resonance}`);
        return this;
    }
    setVcfSustain(sustain) {
        prompt(this.id, `Syn.SetVcfSustain(${sustain}`);
        return this;
    }
    setVolume(left, right) {
        prompt(this.id, `Syn.SetVolume(${left}\f${right}`);
        return this;
    }
    setWaveShape(shape) {
        prompt(this.id, `Syn.SetWaveShape(${shape}`);
        return this;
    }
    start() {
        prompt(this.id, "Syn.Start(");
    }
    stop() {
        prompt(this.id, "Syn.Stop(");
    }
}
