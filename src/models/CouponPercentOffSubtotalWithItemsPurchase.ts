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
 * @interface CouponPercentOffSubtotalWithItemsPurchase
 */
export interface CouponPercentOffSubtotalWithItemsPurchase {
    /**
     * The percentage of subtotal discount
     * @type {number}
     * @memberof CouponPercentOffSubtotalWithItemsPurchase
     */
    discount_percent?: number;
    /**
     * A list of items of which at least one must be purchased for coupon to be valid.
     * @type {Array<string>}
     * @memberof CouponPercentOffSubtotalWithItemsPurchase
     */
    items?: Array<string>;
}

export function CouponPercentOffSubtotalWithItemsPurchaseFromJSON(json: any): CouponPercentOffSubtotalWithItemsPurchase {
    return CouponPercentOffSubtotalWithItemsPurchaseFromJSONTyped(json, false);
}

export function CouponPercentOffSubtotalWithItemsPurchaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponPercentOffSubtotalWithItemsPurchase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'discount_percent': !exists(json, 'discount_percent') ? undefined : json['discount_percent'],
        'items': !exists(json, 'items') ? undefined : json['items'],
    };
}

export function CouponPercentOffSubtotalWithItemsPurchaseToJSON(value?: CouponPercentOffSubtotalWithItemsPurchase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'discount_percent': value.discount_percent,
        'items': value.items,
    };
}
