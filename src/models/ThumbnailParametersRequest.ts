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
 * @interface ThumbnailParametersRequest
 */
export interface ThumbnailParametersRequest {
    /**
     * 
     * @type {number}
     * @memberof ThumbnailParametersRequest
     */
    height?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ThumbnailParametersRequest
     */
    pngFormat?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ThumbnailParametersRequest
     */
    squareThumbnail?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ThumbnailParametersRequest
     */
    webp?: boolean;
    /**
     * 
     * @type {number}
     * @memberof ThumbnailParametersRequest
     */
    width?: number;
}



/**
 * Check if a given object implements the ThumbnailParametersRequest interface.
 */
export function instanceOfThumbnailParametersRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ThumbnailParametersRequestFromJSON(json: any): ThumbnailParametersRequest {
    return ThumbnailParametersRequestFromJSONTyped(json, false);
}

export function ThumbnailParametersRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ThumbnailParametersRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'height': !exists(json, 'height') ? undefined : json['height'],
        'pngFormat': !exists(json, 'pngFormat') ? undefined : json['pngFormat'],
        'squareThumbnail': !exists(json, 'squareThumbnail') ? undefined : json['squareThumbnail'],
        'webp': !exists(json, 'webp') ? undefined : json['webp'],
        'width': !exists(json, 'width') ? undefined : json['width'],
    };
}

export function ThumbnailParametersRequestToJSON(value?: ThumbnailParametersRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'height': value.height,
        'pngFormat': value.pngFormat,
        'squareThumbnail': value.squareThumbnail,
        'webp': value.webp,
        'width': value.width,
    };
}

