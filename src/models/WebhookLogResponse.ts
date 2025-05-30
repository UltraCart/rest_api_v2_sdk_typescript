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
    WebhookLog,
    WebhookLogFromJSON,
    WebhookLogFromJSONTyped,
    WebhookLogToJSON,
} from './WebhookLog';

/**
 * 
 * @export
 * @interface WebhookLogResponse
 */
export interface WebhookLogResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof WebhookLogResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof WebhookLogResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof WebhookLogResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof WebhookLogResponse
     */
    warning?: Warning;
    /**
     * 
     * @type {WebhookLog}
     * @memberof WebhookLogResponse
     */
    webhook_log?: WebhookLog;
}



/**
 * Check if a given object implements the WebhookLogResponse interface.
 */
export function instanceOfWebhookLogResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WebhookLogResponseFromJSON(json: any): WebhookLogResponse {
    return WebhookLogResponseFromJSONTyped(json, false);
}

export function WebhookLogResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WebhookLogResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
        'webhook_log': !exists(json, 'webhook_log') ? undefined : WebhookLogFromJSON(json['webhook_log']),
    };
}

export function WebhookLogResponseToJSON(value?: WebhookLogResponse | null): any {
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
        'webhook_log': WebhookLogToJSON(value.webhook_log),
    };
}

