import Component from "./component";
export default class Wallpaper extends Component {
    constructor(id: string);
    getType(): string;
    isVisible(): boolean;
}
