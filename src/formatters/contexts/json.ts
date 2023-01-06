import { Formatter } from "./base";

export class JsonFormatter extends Formatter {
  async run(): Promise<void> {
    console.log(JSON.stringify(this.auditData, null, 2));
  }
}
