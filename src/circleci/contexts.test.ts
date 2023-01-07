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

  it("can handle paginated list context responses", async () => {
    jest
      .spyOn(ContextService, "listContexts")
      .mockResolvedValueOnce({
        items: [{ id: "1", name: "context1", created_at: now.toISOString() }],
        next_page_token: "list-contexts-next-page-token",
      })
      .mockResolvedValueOnce({
        items: [{ id: "2", name: "context2", created_at: now.toISOString() }],
        next_page_token: null,
      });

    when(jest.spyOn(ContextService, "listEnvironmentVariablesFromContext"))
      .calledWith("1", null)
      .mockResolvedValueOnce({
        items: [{ context_id: "1", variable: "foo", created_at: now.toISOString() }],
        next_page_token: null,
      })
      .calledWith("2", null)
      .mockResolvedValueOnce({
        items: [{ context_id: "2", variable: "bar", created_at: now.toISOString() }],
        next_page_token: null,
      });

    const contextAuditData = await getContextAuditData("myOrgId", "myToken");
    expect(contextAuditData).toEqual({
      context1: [{ context_id: "1", variable: "foo", created_at: now.toISOString() }],
      context2: [{ context_id: "2", variable: "bar", created_at: now.toISOString() }],
    });
  });

  it("can handle paginated list env variable responses", async () => {
    jest.spyOn(ContextService, "listContexts").mockResolvedValueOnce({
      items: [{ id: "1", name: "context1", created_at: now.toISOString() }],
      next_page_token: null,
    });

    when(jest.spyOn(ContextService, "listEnvironmentVariablesFromContext"))
      .calledWith("1", null)
      .mockResolvedValueOnce({
        items: [{ context_id: "1", variable: "foo", created_at: now.toISOString() }],
        next_page_token: "list-env-vars-next-page-token",
      })
      .calledWith("1", "list-env-vars-next-page-token")
      .mockResolvedValueOnce({
        items: [{ context_id: "1", variable: "bar", created_at: now.toISOString() }],
        next_page_token: null,
      });

    const contextAuditData = await getContextAuditData("myOrgId", "myToken");
    expect(contextAuditData).toEqual({
      context1: [
        { context_id: "1", variable: "foo", created_at: now.toISOString() },
        { context_id: "1", variable: "bar", created_at: now.toISOString() },
      ],
    });
  });
});
