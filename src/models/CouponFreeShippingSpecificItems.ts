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
 * @interface CouponFreeShippingSpecificItems
 */
export interface CouponFreeShippingSpecificItems {
    /**
     * A list of items of which at least one must be purchased for coupon to be valid.
     * @type {Array<string>}
     * @memberof CouponFreeShippingSpecificItems
     */
    items?: Array<string>;
}

export function CouponFreeShippingSpecificItemsFromJSON(json: any): CouponFreeShippingSpecificItems {
    return CouponFreeShippingSpecificItemsFromJSONTyped(json, false);
}

export function CouponFreeShippingSpecificItemsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponFreeShippingSpecificItems {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : json['items'],
    };
}

export function CouponFreeShippingSpecificItemsToJSON(value?: CouponFreeShippingSpecificItems | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items,
    };
}
