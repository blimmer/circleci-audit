import { ContextService } from "./api/generated";
import { getContextAuditData } from "./contexts";
import { when } from "jest-when";

describe("contexts", () => {
  const now = new Date();

  it("returns context data", async () => {
    jest.spyOn(ContextService, "listContexts").mockResolvedValueOnce({
      items: [{ id: "1", name: "context1", created_at: now.toISOString() }],
      next_page_token: null,
    });
    when(jest.spyOn(ContextService, "listEnvironmentVariablesFromContext"))
      .calledWith("1", null)
      .mockResolvedValueOnce({
        items: [{ context_id: "1", variable: "foo", created_at: now.toISOString() }],
        next_page_token: null,
      });

    const contextAuditData = await getContextAuditData("myOrgId", "myToken");
    expect(contextAuditData).toEqual({
      context1: [{ context_id: "1", variable: "foo", created_at: now.toISOString() }],
    });
  });
});
