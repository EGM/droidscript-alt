import DSObject from "./dsobject";
export default class Component implements DSObject {
  id: string;
  constructor(id: string) {
    this.id = id;
  }
}
