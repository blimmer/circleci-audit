/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class ContextService {

    /**
     * Create a new context
     * @param requestBody
     * @returns any The new context
     * @throws ApiError
     */
    public static createContext(
        requestBody?: {
            /**
             * The user defined name of the context.
             */
            name: string;
            owner: ({
                /**
                 * The unique ID of the owner of the context. Specify either this or slug.
                 */
                id: string;
                /**
                 * The type of the owner. Defaults to "organization". Accounts are only used as context owners in server.
                 */
                type?: 'account' | 'organization';
            } | {
                /**
                 * A string that represents an organization. Specify either this or id. Cannot be used for accounts.
                 */
                slug: string;
                /**
                 * The type of owner. Defaults to "organization". Accounts are only used as context owners in server and must be specified by an id instead of a slug.
                 */
                type?: 'organization';
            });
        },
    ): CancelablePromise<{
        /**
         * The unique ID of the context.
         */
        id: string;
        /**
         * The user defined name of the context.
         */
        name: string;
        /**
         * The date and time the context was created.
         */
        created_at: string;
    }> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/context',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * List contexts
     * List all contexts for an owner.
     * @param ownerId The unique ID of the owner of the context. Specify either this or owner-slug.
     * @param ownerSlug A string that represents an organization. Specify either this or owner-id. Cannot be used for accounts.
     * @param ownerType The type of the owner. Defaults to "organization". Accounts are only used as context owners in server.
     * @param pageToken A token to retrieve the next page of results.
     * @returns any A paginated list of contexts
     * @throws ApiError
     */
    public static listContexts(
        ownerId?: string,
        ownerSlug?: string,
        ownerType?: 'account' | 'organization',
        pageToken?: string,
    ): CancelablePromise<{
        items: Array<{
            /**
             * The unique ID of the context.
             */
            id: string;
            /**
             * The user defined name of the context.
             */
            name: string;
            /**
             * The date and time the context was created.
             */
            created_at: string;
        }>;
        /**
         * A token to pass as a `page-token` query parameter to return the next page of results.
         */
        next_page_token: string | null;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/context',
            query: {
                'owner-id': ownerId,
                'owner-slug': ownerSlug,
                'owner-type': ownerType,
                'page-token': pageToken,
            },
        });
    }

    /**
     * Get a context
     * Returns basic information about a context.
     * @param contextId ID of the context (UUID)
     * @returns any The context
     * @throws ApiError
     */
    public static getContext(
        contextId: string,
    ): CancelablePromise<{
        /**
         * The unique ID of the context.
         */
        id: string;
        /**
         * The user defined name of the context.
         */
        name: string;
        /**
         * The date and time the context was created.
         */
        created_at: string;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/context/{context-id}',
            path: {
                'context-id': contextId,
            },
        });
    }

    /**
     * Delete a context
     * @param contextId ID of the context (UUID)
     * @returns any A confirmation message
     * @throws ApiError
     */
    public static deleteContext(
        contextId: string,
    ): CancelablePromise<{
        /**
         * A human-readable message
         */
        message: string;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/context/{context-id}',
            path: {
                'context-id': contextId,
            },
        });
    }

    /**
     * List environment variables
     * List information about environment variables in a context, not including their values.
     * @param contextId ID of the context (UUID)
     * @param pageToken A token to retrieve the next page of results.
     * @returns any A paginated list of environment variables
     * @throws ApiError
     */
    public static listEnvironmentVariablesFromContext(
        contextId: string,
        pageToken?: string,
    ): CancelablePromise<{
        items: Array<{
            /**
             * The name of the environment variable
             */
            variable: string;
            /**
             * The date and time the environment variable was created.
             */
            created_at: string;
            /**
             * ID of the context (UUID)
             */
            context_id: string;
        }>;
        /**
         * A token to pass as a `page-token` query parameter to return the next page of results.
         */
        next_page_token: string | null;
    }> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/context/{context-id}/environment-variable',
            path: {
                'context-id': contextId,
            },
            query: {
                'page-token': pageToken,
            },
        });
    }

    /**
     * Add or update an environment variable
     * Create or update an environment variable within a context. Returns information about the environment variable, not including its value.
     * @param contextId ID of the context (UUID)
     * @param envVarName The name of the environment variable
     * @param requestBody
     * @returns any The new environment variable
     * @throws ApiError
     */
    public static addEnvironmentVariableToContext(
        contextId: string,
        envVarName: string,
        requestBody?: {
            /**
             * The value of the environment variable
             */
            value: string;
        },
    ): CancelablePromise<({
        /**
         * The name of the environment variable
         */
        variable: string;
        /**
         * The date and time the environment variable was created.
         */
        created_at: string;
        /**
         * ID of the context (UUID)
         */
        context_id: string;
    } | {
        /**
         * A human-readable message
         */
        message: string;
    })> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/context/{context-id}/environment-variable/{env-var-name}',
            path: {
                'context-id': contextId,
                'env-var-name': envVarName,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * Remove an environment variable
     * Delete an environment variable from a context.
     * @param envVarName The name of the environment variable
     * @param contextId ID of the context (UUID)
     * @returns any A confirmation message
     * @throws ApiError
     */
    public static deleteEnvironmentVariableFromContext(
        envVarName: string,
        contextId: string,
    ): CancelablePromise<{
        /**
         * A human-readable message
         */
        message: string;
    }> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/context/{context-id}/environment-variable/{env-var-name}',
            path: {
                'env-var-name': envVarName,
                'context-id': contextId,
            },
        });
    }

}
