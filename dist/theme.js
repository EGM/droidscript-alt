import Component from "./component";
export default class Theme extends Component {
    constructor(id) {
        super(id);
    }
    adjustColor(hue, saturation, brightness, contrast) {
        prompt(this.id, `Thm.AdjustColor(\f${hue}\f${saturation}\f${brightness}\f${contrast}`);
        return this;
    }
    getType() {
        return "Theme";
    }
    setBackColor(color) {
        prompt(this.id, `Thm.SetBackColor(\f${color}`);
        return this;
    }
    setBackground(file, options) {
        prompt(this.id, `Thm.SetBackground(\f${file}\f${options}`);
        return this;
    }
    setButtonOptions(options) {
        prompt(this.id, `Thm.SetButtonOptions(\f${options}`);
        return this;
    }
    setButtonStyle(color1, color2, radius, strokeColor, strokeWidth, shadow, checkColor) {
        prompt(this.id, `Thm.SetButtonStyle(\f${color1}\f${color2}\f${radius}\f${strokeColor}\f${strokeWidth}\f${shadow}\f${checkColor}`);
        return this;
    }
    setButtonTextColor(color) {
        prompt(this.id, `Thm.SetBtnTextColor(\f${color}`);
        return this;
    }
    setCheckBoxOptions(options) {
        prompt(this.id, `Thm.SetCheckBoxOptions(\f${options}`);
        return this;
    }
    setDialogColor(color) {
        prompt(this.id, `Thm.SetDialogColor(\f${color}`);
        return this;
    }
    setDialogCornerRadius(radius) {
        prompt(this.id, `Thm.SetDialogCornerRadius(\f${radius}`);
        return this;
    }
    setDialogButtonColor(color) {
        prompt(this.id, `Thm.SetDialogBtnColor(\f${color}`);
        return this;
    }
    setDialogButtonTextColor(color) {
        prompt(this.id, `Thm.SetDialogBtnTxtColor(\f${color}`);
        return this;
    }
    setDimBehind(dim) {
        prompt(this.id, `Thm.SetDimBehind(\f${dim}`);
        return this;
    }
    setProgressBarOptions(options) {
        prompt(this.id, `Thm.SetProgressBarOptions(\f${options}`);
        return this;
    }
    setProgressBackColor(color) {
        prompt(this.id, `Thm.SetProgressBackColor(\f${color}`);
        return this;
    }
    setProgressTextColor(color) {
        prompt(this.id, `Thm.SetProgressTextColor(\f${color}`);
        return this;
    }
    setTextColor(color) {
        prompt(this.id, `Thm.SetTextColor(\f${color}`);
        return this;
    }
    setTextEditOptions(options) {
        prompt(this.id, `Thm.SetTextEditOptions(\f${options}`);
        return this;
    }
    setTitleHeight(height, options) {
        prompt(this.id, `Thm.SetTitleHeight(\f${height}\f${options}`);
        return this;
    }
    setTitleColor(color) {
        prompt(this.id, `Thm.SetTitleColor(\f${color}`);
        return this;
    }
    setTitleDividerColor(color) {
        prompt(this.id, `Thm.SetTitleDividerColor(\f${color}`);
        return this;
    }
    setTitleDividerHeight(height, options) {
        prompt(this.id, `Thm.SetTitleDividerHeight(\f${height}\f${options}`);
        return this;
    }
}
