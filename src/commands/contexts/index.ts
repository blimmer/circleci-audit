import { Command, Flags } from "@oclif/core";
import { getContextAuditData } from "../../circleci/contexts";
import { Formatter } from "../../formatters/base";
import { TableFormatter } from "../../formatters/contexts/table";

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
  };

  async run(): Promise<void> {
    const {
      flags: { orgId, token },
    } = await this.parse(Contexts);

    const auditData = await getContextAuditData(orgId, token);
    const formatter: Formatter = new TableFormatter(orgId, auditData);
    formatter.run();
  }
}
