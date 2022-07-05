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
/**
 * 
 * @export
 * @interface PublishLibraryItemRequest
 */
export interface PublishLibraryItemRequest {
    /**
     * Release notes for this release version.
     * @type {string}
     * @memberof PublishLibraryItemRequest
     */
    release_notes?: string;
}

export function PublishLibraryItemRequestFromJSON(json: any): PublishLibraryItemRequest {
    return PublishLibraryItemRequestFromJSONTyped(json, false);
}

export function PublishLibraryItemRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): PublishLibraryItemRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'release_notes': !exists(json, 'release_notes') ? undefined : json['release_notes'],
    };
}

export function PublishLibraryItemRequestToJSON(value?: PublishLibraryItemRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'release_notes': value.release_notes,
    };
}
