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
    LibraryFilterValues,
    LibraryFilterValuesFromJSON,
    LibraryFilterValuesFromJSONTyped,
    LibraryFilterValuesToJSON,
} from './LibraryFilterValues';
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
 * @interface LibraryFilterValuesResponse
 */
export interface LibraryFilterValuesResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof LibraryFilterValuesResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {LibraryFilterValues}
     * @memberof LibraryFilterValuesResponse
     */
    filter_values?: LibraryFilterValues;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof LibraryFilterValuesResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof LibraryFilterValuesResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof LibraryFilterValuesResponse
     */
    warning?: Warning;
}

export function LibraryFilterValuesResponseFromJSON(json: any): LibraryFilterValuesResponse {
    return LibraryFilterValuesResponseFromJSONTyped(json, false);
}

export function LibraryFilterValuesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LibraryFilterValuesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'filter_values': !exists(json, 'filter_values') ? undefined : LibraryFilterValuesFromJSON(json['filter_values']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function LibraryFilterValuesResponseToJSON(value?: LibraryFilterValuesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'filter_values': LibraryFilterValuesToJSON(value.filter_values),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}
