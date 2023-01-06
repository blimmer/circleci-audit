import { Formatter } from "./base";
import { table } from "table";
import { bold, bgYellow, black } from "chalk";

export class TableFormatter extends Formatter {
  async run(): Promise<void> {
    const tableData = [
      [bold("Context"), bold("Environment Variable"), bold("Last Updated At")],
    ];

    for (const context in this.auditData) {
      this.auditData[context].forEach((environmentVariable, i) => {
        tableData.push([
          i === 0 ? context : "",
          this.isEnvironmentVariableVulnerable(environmentVariable)
            ? this.warningText(environmentVariable.variable)
            : environmentVariable.variable,
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

    console.log(
      `Secrets ${this.warningText(
        "highlighted"
      )} were potentially exposed. You should rotate them immediately! https://circleci.com/blog/january-4-2023-security-alert/`
    );
  }

  private warningText(text: string): string {
    return black(bgYellow(text));
  }
}
