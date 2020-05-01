import View from "./view";
import DSObject from "./dsobject";
export default class Lay extends View {
  constructor(id: string) {
    super(id);
  }

  addChild(child: View, order?: number): Lay {
    prompt(this.id, `Lay.AddChild(\f${child ? child.id : null}\f${order}`);
    if (child) {
      child._parent = this;
    }
    return this;
  }

  childToFront(child: DSObject): void {
    prompt(this.id, `Lay.ChildToFront(${child ? child.id : null}`);
  }

  destroyChild(child: View): void {
    prompt(this.id, `Lay.DestroyChild(${child ? child.id : null}`);
    if (child) {
      child._parent = null;
    }
  }

  getChildOrder(child: DSObject): number {
    return parseInt(
      prompt(this.id, `Lay.GetChildOrder(\f${child ? child.id : null}`)
    );
  }

  getType(): string {
    return "Layout";
  }

  removeChild(child: View): void {
    prompt(this.id, `Lay.RemoveChild(${child ? child.id : null}`);
    if (child) {
      child._parent = null;
    }
  }

  setCornerRadius(radius: number): Lay {
    prompt(this.id, `Lay.SetCornerRadius(\f${radius}`);
    return this;
  }

  setElevation(elevation: number): Lay {
    prompt(this.id, `Lay.SetElevation(\f${elevation}`);
    return this;
  }

  setGravity(gravity: string): Lay {
    prompt(this.id, `Lay.SetGravity(\f${gravity}`);
    return this;
  }

  setOnChildChange(callback: Function): Lay {
    prompt(this.id, `Lay.SetOnChildChange(\f${_Cbm(callback)}`);
    return this;
  }

  setOnLongTouch(callback: Function): Lay {
    prompt(this.id, `Lay.SetOnLongTouch(\f${_Cbm(callback)}`);
    return this;
  }

  setOnTouch(callback: Function): Lay {
    prompt(this.id, `Lay.SetOnTouch(\f${_Cbm(callback)}`);
    return this;
  }

  setOnTouchDown(callback: Function): Lay {
    prompt(this.id, `Lay.SetOnTouchDown(\f${_Cbm(callback)}`);
    return this;
  }

  setOnTouchMove(callback: Function): Lay {
    prompt(this.id, `Lay.SetOnTouchMove(\f${_Cbm(callback)}`);
    return this;
  }

  setOnTouchUp(callback: Function): Lay {
    prompt(this.id, `Lay.SetOnTouchUp(\f${_Cbm(callback)}`);
    return this;
  }

  setOrientation(orientation: string): Lay {
    prompt(this.id, `Lay.SetOrientation(\f${orientation}`);
    return this;
  }

  setTouchThrough(through: boolean): Lay {
    prompt(this.id, `Lay.SetTouchThrough(\f${through}`);
    return this;
  }

  setTouchable(touchable: boolean): Lay {
    prompt(this.id, `Lay.SetTouchable(\f${touchable}`);
    return this;
  }
}
