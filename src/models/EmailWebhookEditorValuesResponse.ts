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
 * @interface EmailWebhookEditorValuesResponse
 */
export interface EmailWebhookEditorValuesResponse {
    /**
     * 
     * @type {Array<string>}
     * @memberof EmailWebhookEditorValuesResponse
     */
    available_expansions?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmailWebhookEditorValuesResponse
     */
    available_tokens?: Array<string>;
    /**
     * 
     * @type {ModelError}
     * @memberof EmailWebhookEditorValuesResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof EmailWebhookEditorValuesResponse
     */
    metadata?: ResponseMetadata;
    /**
     * 
     * @type {string}
     * @memberof EmailWebhookEditorValuesResponse
     */
    rest_object_type?: string;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof EmailWebhookEditorValuesResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof EmailWebhookEditorValuesResponse
     */
    warning?: Warning;
}

export function EmailWebhookEditorValuesResponseFromJSON(json: any): EmailWebhookEditorValuesResponse {
    return EmailWebhookEditorValuesResponseFromJSONTyped(json, false);
}

export function EmailWebhookEditorValuesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailWebhookEditorValuesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'available_expansions': !exists(json, 'available_expansions') ? undefined : json['available_expansions'],
        'available_tokens': !exists(json, 'available_tokens') ? undefined : json['available_tokens'],
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'rest_object_type': !exists(json, 'rest_object_type') ? undefined : json['rest_object_type'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function EmailWebhookEditorValuesResponseToJSON(value?: EmailWebhookEditorValuesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'available_expansions': value.available_expansions,
        'available_tokens': value.available_tokens,
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'rest_object_type': value.rest_object_type,
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

