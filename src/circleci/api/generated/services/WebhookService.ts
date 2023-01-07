/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from "../core/CancelablePromise";
import { OpenAPI } from "../core/OpenAPI";
import { request as __request } from "../core/request";

export class WebhookService {
  /**
   * Create a webhook
   * @param requestBody
   * @returns any Error response.
   * @throws ApiError
   */
  public static createWebhook(requestBody?: {
    /**
     * Name of the webhook
     */
    name: string;
    /**
     * Events that will trigger the webhook
     */
    events: Array<"workflow-completed" | "job-completed">;
    /**
     * URL to deliver the webhook to. Note: protocol must be included as well (only https is supported)
     */
    url: string;
    /**
     * Whether to enforce TLS certificate verification when delivering the webhook
     */
    "verify-tls": boolean;
    /**
     * Secret used to build an HMAC hash of the payload and passed as a header in the webhook request
     */
    "signing-secret": string;
    /**
     * The scope in which the relevant events that will trigger webhooks
     */
    scope: {
      /**
       * ID of the scope being used (at the moment, only project ID is supported)
       */
      id: string;
      /**
       * Type of the scope being used
       */
      type: "project";
    };
  }): CancelablePromise<{
    message?: string;
  }> {
    return __request(OpenAPI, {
      method: "POST",
      url: "/webhook",
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * List webhooks
   * Get a list of webhook that match the given scope-type and scope-id
   * @param scopeId ID of the scope being used (at the moment, only project ID is supported)
   * @param scopeType Type of the scope being used
   * @returns any A list of webhooks
   * @throws ApiError
   */
  public static getWebhooks(
    scopeId: string,
    scopeType: "project"
  ): CancelablePromise<{
    items: Array<{
      /**
       * URL to deliver the webhook to. Note: protocol must be included as well (only https is supported)
       */
      url: string;
      /**
       * Whether to enforce TLS certificate verification when delivering the webhook
       */
      "verify-tls": boolean;
      /**
       * The unique ID of the webhook
       */
      id: string;
      /**
       * Masked value of the secret used to build an HMAC hash of the payload and passed as a header in the webhook request
       */
      "signing-secret": string;
      /**
       * The date and time the webhook was last updated.
       */
      "updated-at": string;
      /**
       * Name of the webhook
       */
      name: string;
      /**
       * The date and time the webhook was created.
       */
      "created-at": string;
      /**
       * The scope in which the relevant events that will trigger webhooks
       */
      scope: {
        /**
         * ID of the scope being used (at the moment, only project ID is supported)
         */
        id: string;
        /**
         * Type of the scope being used
         */
        type: string;
      };
      /**
       * Events that will trigger the webhook
       */
      events: Array<"workflow-completed" | "job-completed">;
    }>;
    /**
     * A token to pass as a `page-token` query parameter to return the next page of results.
     */
    next_page_token: string;
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/webhook",
      query: {
        "scope-id": scopeId,
        "scope-type": scopeType,
      },
    });
  }

  /**
   * Delete a webhook
   * @param webhookId ID of the webhook (UUID)
   * @returns any A confirmation message
   * @throws ApiError
   */
  public static deleteWebhook(webhookId: string): CancelablePromise<{
    /**
     * A human-readable message
     */
    message: string;
  }> {
    return __request(OpenAPI, {
      method: "DELETE",
      url: "/webhook/{webhook-id}",
      path: {
        "webhook-id": webhookId,
      },
    });
  }

  /**
   * Update a webhook
   * @param webhookId ID of the webhook (UUID)
   * @param requestBody
   * @returns any A webhook
   * @throws ApiError
   */
  public static updateWebhook(
    webhookId: string,
    requestBody?: {
      /**
       * Name of the webhook
       */
      name?: string;
      /**
       * Events that will trigger the webhook
       */
      events?: Array<"workflow-completed" | "job-completed">;
      /**
       * URL to deliver the webhook to. Note: protocol must be included as well (only https is supported)
       */
      url?: string;
      /**
       * Secret used to build an HMAC hash of the payload and passed as a header in the webhook request
       */
      "signing-secret"?: string;
      /**
       * Whether to enforce TLS certificate verification when delivering the webhook
       */
      "verify-tls"?: boolean;
    }
  ): CancelablePromise<{
    /**
     * URL to deliver the webhook to. Note: protocol must be included as well (only https is supported)
     */
    url: string;
    /**
     * Whether to enforce TLS certificate verification when delivering the webhook
     */
    "verify-tls": boolean;
    /**
     * The unique ID of the webhook
     */
    id: string;
    /**
     * Masked value of the secret used to build an HMAC hash of the payload and passed as a header in the webhook request
     */
    "signing-secret": string;
    /**
     * The date and time the webhook was last updated.
     */
    "updated-at": string;
    /**
     * Name of the webhook
     */
    name: string;
    /**
     * The date and time the webhook was created.
     */
    "created-at": string;
    /**
     * The scope in which the relevant events that will trigger webhooks
     */
    scope: {
      /**
       * ID of the scope being used (at the moment, only project ID is supported)
       */
      id: string;
      /**
       * Type of the scope being used
       */
      type: string;
    };
    /**
     * Events that will trigger the webhook
     */
    events: Array<"workflow-completed" | "job-completed">;
  }> {
    return __request(OpenAPI, {
      method: "PUT",
      url: "/webhook/{webhook-id}",
      path: {
        "webhook-id": webhookId,
      },
      body: requestBody,
      mediaType: "application/json",
    });
  }

  /**
   * Get a webhook
   * Get a webhook by id.
   * @param webhookId ID of the webhook (UUID)
   * @returns any A webhook
   * @throws ApiError
   */
  public static getWebhookById(webhookId: string): CancelablePromise<{
    /**
     * URL to deliver the webhook to. Note: protocol must be included as well (only https is supported)
     */
    url: string;
    /**
     * Whether to enforce TLS certificate verification when delivering the webhook
     */
    "verify-tls": boolean;
    /**
     * The unique ID of the webhook
     */
    id: string;
    /**
     * Masked value of the secret used to build an HMAC hash of the payload and passed as a header in the webhook request
     */
    "signing-secret": string;
    /**
     * The date and time the webhook was last updated.
     */
    "updated-at": string;
    /**
     * Name of the webhook
     */
    name: string;
    /**
     * The date and time the webhook was created.
     */
    "created-at": string;
    /**
     * The scope in which the relevant events that will trigger webhooks
     */
    scope: {
      /**
       * ID of the scope being used (at the moment, only project ID is supported)
       */
      id: string;
      /**
       * Type of the scope being used
       */
      type: string;
    };
    /**
     * Events that will trigger the webhook
     */
    events: Array<"workflow-completed" | "job-completed">;
  }> {
    return __request(OpenAPI, {
      method: "GET",
      url: "/webhook/{webhook-id}",
      path: {
        "webhook-id": webhookId,
      },
    });
  }
}
