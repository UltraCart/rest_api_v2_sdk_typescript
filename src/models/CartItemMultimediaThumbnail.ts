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
 * @interface CartItemMultimediaThumbnail
 */
export interface CartItemMultimediaThumbnail {
    /**
     * Height in pixels
     * @type {number}
     * @memberof CartItemMultimediaThumbnail
     */
    height?: number;
    /**
     * True if thumbnail is a PNG, otherwise its a JPEG
     * @type {boolean}
     * @memberof CartItemMultimediaThumbnail
     */
    png?: boolean;
    /**
     * True if the thumbnail is square
     * @type {boolean}
     * @memberof CartItemMultimediaThumbnail
     */
    square?: boolean;
    /**
     * URL for the thumbnail
     * @type {string}
     * @memberof CartItemMultimediaThumbnail
     */
    url?: string;
    /**
     * Width in pixels
     * @type {number}
     * @memberof CartItemMultimediaThumbnail
     */
    width?: number;
}

export function CartItemMultimediaThumbnailFromJSON(json: any): CartItemMultimediaThumbnail {
    return CartItemMultimediaThumbnailFromJSONTyped(json, false);
}

export function CartItemMultimediaThumbnailFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartItemMultimediaThumbnail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'height': !exists(json, 'height') ? undefined : json['height'],
        'png': !exists(json, 'png') ? undefined : json['png'],
        'square': !exists(json, 'square') ? undefined : json['square'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'width': !exists(json, 'width') ? undefined : json['width'],
    };
}

export function CartItemMultimediaThumbnailToJSON(value?: CartItemMultimediaThumbnail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'height': value.height,
        'png': value.png,
        'square': value.square,
        'url': value.url,
        'width': value.width,
    };
}
