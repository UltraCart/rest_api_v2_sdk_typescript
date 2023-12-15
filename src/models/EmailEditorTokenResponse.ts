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
 * @interface EmailEditorTokenResponse
 */
export interface EmailEditorTokenResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof EmailEditorTokenResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof EmailEditorTokenResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof EmailEditorTokenResponse
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EmailEditorTokenResponse
     */
    token?: string;
    /**
     * 
     * @type {Warning}
     * @memberof EmailEditorTokenResponse
     */
    warning?: Warning;
}

export function EmailEditorTokenResponseFromJSON(json: any): EmailEditorTokenResponse {
    return EmailEditorTokenResponseFromJSONTyped(json, false);
}

export function EmailEditorTokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailEditorTokenResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'token': !exists(json, 'token') ? undefined : json['token'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function EmailEditorTokenResponseToJSON(value?: EmailEditorTokenResponse | null): any {
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
        'token': value.token,
        'warning': WarningToJSON(value.warning),
    };
}

