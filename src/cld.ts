import Component from "./component";
export default class Cld extends Component {
  constructor(id: string) {
    super(id);
  }

  Delete(file: string, callback: Function): void {
    prompt(this.id, `Cld.Delete(\f${file}\f${_Cbm(callback)}`);
  }
  GetType(): string {
    return "CloudStore";
  }
  List(filter: string, callback: Function): void {
    prompt(this.id, `Cld.List(\f${filter}\f${_Cbm(callback)}`);
  }
  Load(file: string, callback: Function, options?: string): void {
    prompt(this.id, `Cld.Load(\f${file}\f${_Cbm(callback)}\f${options}`);
  }
  Merge(file: string, data: string, callback: Function): void {
    prompt(
      this.id,
      `Cld.Merge(\f${file}\f${JSON.stringify(data)}\f${_Cbm(callback)}`
    );
  }
  Save(file: string, data: string, callback: Function, options?: string): void {
    prompt(
      this.id,
      `Cld.Save(\f${file}\f${JSON.stringify(data)}\f${_Cbm(
        callback
      )}\f${options}`
    );
  }
}
