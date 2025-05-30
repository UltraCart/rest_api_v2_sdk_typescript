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
    KeyValue,
    KeyValueFromJSON,
    KeyValueFromJSONTyped,
    KeyValueToJSON,
} from './KeyValue';
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
 * @interface LookupResponse
 */
export interface LookupResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof LookupResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof LookupResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof LookupResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Array<KeyValue>}
     * @memberof LookupResponse
     */
    values?: Array<KeyValue>;
    /**
     * 
     * @type {Warning}
     * @memberof LookupResponse
     */
    warning?: Warning;
}



/**
 * Check if a given object implements the LookupResponse interface.
 */
export function instanceOfLookupResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LookupResponseFromJSON(json: any): LookupResponse {
    return LookupResponseFromJSONTyped(json, false);
}

export function LookupResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LookupResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'values': !exists(json, 'values') ? undefined : ((json['values'] as Array<any>).map(KeyValueFromJSON)),
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function LookupResponseToJSON(value?: LookupResponse | null): any {
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
        'values': value.values === undefined ? undefined : ((value.values as Array<any>).map(KeyValueToJSON)),
        'warning': WarningToJSON(value.warning),
    };
}

