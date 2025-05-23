/* tslint:disable */
/* eslint-disable */
/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * The version of the OpenAPI document: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import {
    ModelError,
    ModelErrorFromJSON,
    ModelErrorFromJSONTyped,
    ModelErrorToJSON,
} from './ModelError';
import {
    ResponseMetadata,
    ResponseMetadataFromJSON,
    ResponseMetadataFromJSONTyped,
    ResponseMetadataToJSON,
} from './ResponseMetadata';
import {
    Warning,
    WarningFromJSON,
    WarningFromJSONTyped,
    WarningToJSON,
} from './Warning';
import {
    WebhookLogSummary,
    WebhookLogSummaryFromJSON,
    WebhookLogSummaryFromJSONTyped,
    WebhookLogSummaryToJSON,
} from './WebhookLogSummary';

/**
 * 
 * @export
 * @interface WebhookLogSummariesResponse
 */
export interface WebhookLogSummariesResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof WebhookLogSummariesResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof WebhookLogSummariesResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof WebhookLogSummariesResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof WebhookLogSummariesResponse
     */
    warning?: Warning;
    /**
     * Webhook log summaries
     * @type {Array<WebhookLogSummary>}
     * @memberof WebhookLogSummariesResponse
     */
    webhook_log_summaries?: Array<WebhookLogSummary>;
}



/**
 * Check if a given object implements the WebhookLogSummariesResponse interface.
 */
export function instanceOfWebhookLogSummariesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WebhookLogSummariesResponseFromJSON(json: any): WebhookLogSummariesResponse {
    return WebhookLogSummariesResponseFromJSONTyped(json, false);
}

export function WebhookLogSummariesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookLogSummariesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
        'webhook_log_summaries': !exists(json, 'webhook_log_summaries') ? undefined : ((json['webhook_log_summaries'] as Array<any>).map(WebhookLogSummaryFromJSON)),
    };
}

export function WebhookLogSummariesResponseToJSON(value?: WebhookLogSummariesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
        'webhook_log_summaries': value.webhook_log_summaries === undefined ? undefined : ((value.webhook_log_summaries as Array<any>).map(WebhookLogSummaryToJSON)),
    };
}

