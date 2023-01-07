import { Formatter } from "./base";
import { createObjectCsvWriter } from "csv-writer";
import { join } from "path";
import { bold, green } from "chalk";

export class CsvFormatter extends Formatter {
  async run(): Promise<void> {
    const destination = join(process.cwd(), `contexts-${this.orgId}.csv`);
    const csvWriter = createObjectCsvWriter({
      path: destination,
      header: [
        { id: "context", title: "Context" },
        { id: "var", title: "Environment Variable" },
        { id: "timestamp", title: "Last Updated At" },
      ],
    });

    const records: Array<{ context: string; var: string; timestamp: string }> = [];

    for (const context in this.auditData) {
      this.auditData[context].forEach((environmentVariable, i) => {
        records.push({
          context,
          var: environmentVariable.variable,
          timestamp: environmentVariable.created_at,
        });
      });
    }

    await csvWriter.writeRecords(records);
    console.log(green(`CSV written to ${bold(destination)}.`));
  }
}
