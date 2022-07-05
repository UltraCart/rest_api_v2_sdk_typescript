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
 * @interface LibraryItemAsset
 */
export interface LibraryItemAsset {
    /**
     * 
     * @type {string}
     * @memberof LibraryItemAsset
     */
    mime_type?: string;
    /**
     * 
     * @type {string}
     * @memberof LibraryItemAsset
     */
    url?: string;
}

export function LibraryItemAssetFromJSON(json: any): LibraryItemAsset {
    return LibraryItemAssetFromJSONTyped(json, false);
}

export function LibraryItemAssetFromJSONTyped(json: any, ignoreDiscriminator: boolean): LibraryItemAsset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'mime_type': !exists(json, 'mime_type') ? undefined : json['mime_type'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function LibraryItemAssetToJSON(value?: LibraryItemAsset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'mime_type': value.mime_type,
        'url': value.url,
    };
}
