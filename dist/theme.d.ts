import Component from "./component";
export default class Theme extends Component {
    constructor(id: string);
    adjustColor(hue: number, saturation: number, brightness: number, contrast: number): Theme;
    getType(): string;
    setBackColor(color: string): Theme;
    setBackground(file: string, options?: string): Theme;
    setButtonOptions(options: string): Theme;
    setButtonStyle(color1: string, color2: string, radius: number, strokeColor: string, strokeWidth: number, shadow: string, checkColor: string): Theme;
    setButtonTextColor(color: string): Theme;
    setCheckBoxOptions(options: string): Theme;
    setDialogColor(color: string): Theme;
    setDialogCornerRadius(radius: number): Theme;
    setDialogButtonColor(color: string): Theme;
    setDialogButtonTextColor(color: string): Theme;
    setDimBehind(dim: boolean): Theme;
    setProgressBarOptions(options: string): Theme;
    setProgressBackColor(color: string): Theme;
    setProgressTextColor(color: string): Theme;
    setTextColor(color: string): Theme;
    setTextEditOptions(options: string): Theme;
    setTitleHeight(height: number, options?: string): Theme;
    setTitleColor(color: string): Theme;
    setTitleDividerColor(color: string): Theme;
    setTitleDividerHeight(height: number, options?: string): Theme;
}
