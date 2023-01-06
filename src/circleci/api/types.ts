import { ContextService } from "./generated";

export type ListContextsResponse = Awaited<
  ReturnType<typeof ContextService.listContexts>
>;
export type Context = ListContextsResponse["items"][0];

export type ListEnvironmentVariablesFromContextResponse = Awaited<
  ReturnType<typeof ContextService.listEnvironmentVariablesFromContext>
>;
export type EnvironmentVariable =
  ListEnvironmentVariablesFromContextResponse["items"][0];
