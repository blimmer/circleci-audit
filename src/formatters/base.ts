import { ContextAuditData } from "../circleci/contexts";

export abstract class Formatter {
  constructor(protected orgId: string, protected auditData: ContextAuditData) {}

  abstract run(): void;
}
