import { Formatter } from "../base";
import { table } from "table";
import { bold } from "chalk";

export class TableFormatter extends Formatter {
  run(): void {
    const tableData = [
      [bold("Context"), bold("Environment Variable"), bold("Last Updated At")],
    ];

    for (const context in this.auditData) {
      this.auditData[context].forEach((environmentVariable, i) => {
        tableData.push([
          i === 0 ? context : "",
          environmentVariable.variable,
          environmentVariable.created_at,
        ]);
      });
    }

    console.log(
      table(tableData, {
        header: {
          content: `Context Audit for Organization ${this.orgId}`,
          alignment: "center",
        },
      })
    );
  }
}
