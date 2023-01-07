import { EnvironmentVariable } from "../../circleci/api/types";
import { ContextAuditData } from "../../circleci/contexts";

export abstract class Formatter {
  constructor(protected orgId: string, protected auditData: ContextAuditData) {}

  abstract run(): void | Promise<void>;

  private securityIncidentEpoch = new Date("2023-01-05T00:00:00.000Z");
  protected isEnvironmentVariableVulnerable(environmentVariable: EnvironmentVariable): boolean {
    return new Date(environmentVariable.created_at) < this.securityIncidentEpoch;
  }
}
