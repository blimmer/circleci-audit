import { Command, Flags } from "@oclif/core";
import { getContextAuditData } from "../../circleci/contexts";
import { Formatter } from "../../formatters/contexts/base";
import { CsvFormatter } from "../../formatters/contexts/csv";
import { JsonFormatter } from "../../formatters/contexts/json";
import { TableFormatter } from "../../formatters/contexts/table";

const OUTPUT_FORMATTERS = {
  csv: CsvFormatter,
  table: TableFormatter,
  json: JsonFormatter,
} as const;

export default class Contexts extends Command {
  static description = "Audit CircleCI contexts for exposed secrets";

  static examples = [
    `$ circleci-audit contexts --token $CIRCLECI_TOKEN --orgId YOUR-ORG-UUID`,
  ];

  static flags = {
    orgId: Flags.string({
      char: "o",
      description:
        "Your organization's ID. Find it on app.circleci.com, click 'Organization Settings'. It's a UUID.",
      required: true,
    }),
    token: Flags.string({
      char: "t",
      description:
        "A CircleCI API token. Generate one here: https://app.circleci.com/settings/user/tokens.",
      required: true,
    }),
    outputFormat: Flags.enum({
      char: "o",
      options: Object.keys(OUTPUT_FORMATTERS),
      default: "table",
    }),
  };

  async run(): Promise<void> {
    const { flags } = await this.parse(Contexts);
    const { orgId, token } = flags;
    const outputFormat = flags.outputFormat as keyof typeof OUTPUT_FORMATTERS;

    const auditData = await getContextAuditData(orgId, token);
    const formatter: Formatter = new OUTPUT_FORMATTERS[outputFormat](
      orgId,
      auditData
    );
    await formatter.run();
  }
}
