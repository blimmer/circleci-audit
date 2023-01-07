import { Formatter } from "./base";

export class JsonFormatter extends Formatter {
  run(): void {
    console.log(JSON.stringify(this.auditData, null, 2));
  }
}
