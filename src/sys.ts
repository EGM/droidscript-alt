import Component from "./component";
export default class Sys extends Component {
  constructor(id: string) {
    super(id);
  }

  Destroy(): void {
    prompt(this.id, "Sys.Destroy(");
    _map[this.id] = null;
  }
  Err(maxLines: number, options?: string): string {
    return prompt(this.id, `Sys.Err(\f${maxLines}\f${options}`);
  }
  GetType(): string {
    return "SysProc";
  }
  In(maxLines: number, options?: string): string {
    return prompt(this.id, `Sys.In(\f${maxLines}\f${options}`);
  }
  Out(cmd: string): void {
    prompt(this.id, `Sys.Out(\f${cmd}`);
  }
  ReadFileAsByte(file: string): number {
    return parseInt(prompt(this.id, `Sys.ReadFileAsByte(\f${file}`));
  }
  SetOnError(callback: Function): Sys {
    prompt(this.id, `Sys.SetOnError(\f${_Cbm(callback)}`);
    return this;
  }
  SetOnInput(callback: Function): Sys {
    prompt(this.id, `Sys.SetOnInput(\f${_Cbm(callback)}`);
    return this;
  }
  WriteToFile(file: string, data: string): void {
    prompt(this.id, `Sys.WriteToFile(\f${file}\f${data}`);
  }
}
