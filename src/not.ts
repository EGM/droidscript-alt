import Component from "./component";
import Img from "./img";

export default class Not extends Component {
  constructor(id: string) {
    super(id);
  }

  cancel(id: string): void {
    prompt(this.id, `Not.Cancel(\f${id}`);
  }

  getType(): string {
    return "Notification";
  }

  listen(options?: string): void {
    prompt(this.id, `Not.Listen(\f${options}`);
  }

  notify(id: string): void {
    prompt(this.id, `Not.Notify(\f${id}`);
  }

  setLargeImage(image: Img | string): Not {
    if (typeof image !== "string") {
      prompt(this.id, `Not.SetLargeImage(\f${image ? image.id : null}`);
    } else {
      prompt(this.id, `Not.SetLargeImageFile(\f${image}`);
    }
    return this;
  }

  setLights(color: string, onMs: number, offMs: number): Not {
    prompt(this.id, `Not.SetLights(\f${color}\f${onMs}\f${offMs}`);
    return this;
  }

  setMessage(ticker: string, title: string, text: string, extra: string): Not {
    prompt(this.id, `Not.SetMessage(\f${ticker}\f${title}\f${text}\f${extra}`);
    return this;
  }

  setOnNotify(callback: Function): Not {
    prompt(this.id, `Not.SetOnNotify(\f${_Cbm(callback)}`);
    return this;
  }

  setSmallImage(image: string | Img): Not {
    if (typeof image !== "string") {
      prompt(this.id, `Not.SetSmallImage(\f${image ? image.id : null}`);
    } else {
      prompt(this.id, `Not.SetSmallImageFile(\f${image}`);
    }
    return this;
  }
}
