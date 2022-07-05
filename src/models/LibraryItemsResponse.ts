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
    LibraryItem,
    LibraryItemFromJSON,
    LibraryItemFromJSONTyped,
    LibraryItemToJSON,
} from './LibraryItem';
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
 * @interface LibraryItemsResponse
 */
export interface LibraryItemsResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof LibraryItemsResponse
     */
    error?: ModelError;
    /**
     * Library items
     * @type {Array<LibraryItem>}
     * @memberof LibraryItemsResponse
     */
    items?: Array<LibraryItem>;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof LibraryItemsResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof LibraryItemsResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof LibraryItemsResponse
     */
    warning?: Warning;
}

export function LibraryItemsResponseFromJSON(json: any): LibraryItemsResponse {
    return LibraryItemsResponseFromJSONTyped(json, false);
}

export function LibraryItemsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LibraryItemsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(LibraryItemFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function LibraryItemsResponseToJSON(value?: LibraryItemsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(LibraryItemToJSON)),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}
