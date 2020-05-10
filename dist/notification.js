import Component from "./component";
export default class Notification extends Component {
    constructor(id) {
        super(id);
    }
    cancel(id) {
        prompt(this.id, `Not.Cancel(\f${id}`);
    }
    getType() {
        return "Notification";
    }
    listen(options) {
        prompt(this.id, `Not.Listen(\f${options}`);
    }
    notify(id) {
        prompt(this.id, `Not.Notify(\f${id}`);
    }
    setLargeImage(image) {
        if (typeof image !== "string") {
            prompt(this.id, `Not.SetLargeImage(\f${image ? image.id : null}`);
        }
        else {
            prompt(this.id, `Not.SetLargeImageFile(\f${image}`);
        }
        return this;
    }
    setLights(color, onMs, offMs) {
        prompt(this.id, `Not.SetLights(\f${color}\f${onMs}\f${offMs}`);
        return this;
    }
    setMessage(ticker, title, text, extra) {
        prompt(this.id, `Not.SetMessage(\f${ticker}\f${title}\f${text}\f${extra}`);
        return this;
    }
    setOnNotify(callback) {
        prompt(this.id, `Not.SetOnNotify(\f${_Cbm(callback)}`);
        return this;
    }
    setSmallImage(image) {
        if (typeof image !== "string") {
            prompt(this.id, `Not.SetSmallImage(\f${image ? image.id : null}`);
        }
        else {
            prompt(this.id, `Not.SetSmallImageFile(\f${image}`);
        }
        return this;
    }
}
