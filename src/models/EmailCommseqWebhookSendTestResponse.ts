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

/**
 * 
 * @export
 * @interface EmailCommseqWebhookSendTestResponse
 */
export interface EmailCommseqWebhookSendTestResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof EmailCommseqWebhookSendTestResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof EmailCommseqWebhookSendTestResponse
     */
    metadata?: ResponseMetadata;
    /**
     * HTTP Request
     * @type {string}
     * @memberof EmailCommseqWebhookSendTestResponse
     */
    request?: string;
    /**
     * HTTP Response
     * @type {string}
     * @memberof EmailCommseqWebhookSendTestResponse
     */
    response?: string;
    /**
     * HTTP Status Code
     * @type {number}
     * @memberof EmailCommseqWebhookSendTestResponse
     */
    status_code?: number;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof EmailCommseqWebhookSendTestResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof EmailCommseqWebhookSendTestResponse
     */
    warning?: Warning;
}

export function EmailCommseqWebhookSendTestResponseFromJSON(json: any): EmailCommseqWebhookSendTestResponse {
    return EmailCommseqWebhookSendTestResponseFromJSONTyped(json, false);
}

export function EmailCommseqWebhookSendTestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailCommseqWebhookSendTestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'request': !exists(json, 'request') ? undefined : json['request'],
        'response': !exists(json, 'response') ? undefined : json['response'],
        'status_code': !exists(json, 'status_code') ? undefined : json['status_code'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function EmailCommseqWebhookSendTestResponseToJSON(value?: EmailCommseqWebhookSendTestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'request': value.request,
        'response': value.response,
        'status_code': value.status_code,
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

