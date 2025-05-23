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
 * @interface LibraryItemResponse
 */
export interface LibraryItemResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof LibraryItemResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {LibraryItem}
     * @memberof LibraryItemResponse
     */
    library_item?: LibraryItem;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof LibraryItemResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof LibraryItemResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof LibraryItemResponse
     */
    warning?: Warning;
}



/**
 * Check if a given object implements the LibraryItemResponse interface.
 */
export function instanceOfLibraryItemResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LibraryItemResponseFromJSON(json: any): LibraryItemResponse {
    return LibraryItemResponseFromJSONTyped(json, false);
}

export function LibraryItemResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): LibraryItemResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'library_item': !exists(json, 'library_item') ? undefined : LibraryItemFromJSON(json['library_item']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function LibraryItemResponseToJSON(value?: LibraryItemResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'library_item': LibraryItemToJSON(value.library_item),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

