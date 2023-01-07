import { configCircleCi } from "./api/config";
import { ContextService } from "./api/generated";
import {
  Context,
  ListContextsResponse,
  EnvironmentVariable,
  ListEnvironmentVariablesFromContextResponse,
} from "./api/types";

export type ContextAuditData = Record<string, EnvironmentVariable[]>;

export async function getContextAuditData(orgId: string, token: string) {
  configCircleCi(token);

  const contexts = await fetchContexts(orgId);

  const contextAuditData: ContextAuditData = {};
  await Promise.all(
    contexts.map(async (context) => {
      const environmentVariables = await getEnvironmentVariablesInContext(context);
      contextAuditData[context.name] = environmentVariables;
    })
  );

  return contextAuditData;
}

async function fetchContexts(orgId: string): Promise<Context[]> {
  const contexts: Context[] = [];
  let response: ListContextsResponse = { items: [], next_page_token: null };

  do {
    response = await ContextService.listContexts(orgId, undefined, undefined, response.next_page_token);
    contexts.push(...response.items);
  } while (response.next_page_token !== null);

  return contexts;
}

async function getEnvironmentVariablesInContext(context: Context): Promise<EnvironmentVariable[]> {
  const environmentVariables: EnvironmentVariable[] = [];

  let response: ListEnvironmentVariablesFromContextResponse = {
    items: [],
    next_page_token: null,
  };
  do {
    response = await ContextService.listEnvironmentVariablesFromContext(context.id, response.next_page_token);
    environmentVariables.push(...response.items);
  } while (response.next_page_token !== null);

  return environmentVariables;
}

// async function getVariablesInContext(circleci: CircleCI, context: Context) {
//   // const resp = await circleci.context.listEnvironmentVariablesFromContext({ contextId: });
//   const variables: EnvVariable[] = [];

//   let response: EnvVariableList = { items: [], next_page_token: null };
//   do {
//     response = await circleci.context.listEnvironmentVariablesFromContext({
//       contextId: context.id,
//       pageToken: response.next_page_token || undefined,
//     });
//     contexts.push(...response.items);
//   }
// }

// async function fetchContexts(
//   ownerId: string
// ): Promise<Context[]> {
//   const contexts: Context[] = [];

//   let response: ContextList = { items: [], next_page_token: null };
//   do {
//     response = await circleci.context.listContexts({
//       ownerId,
//       pageToken: response.next_page_token || undefined,
//     });
//     contexts.push(...response.items);
//   } while (response.next_page_token !== null);

//   return contexts;
// }
