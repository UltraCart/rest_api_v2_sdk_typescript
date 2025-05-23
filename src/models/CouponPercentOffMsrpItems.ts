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
 * @interface CouponPercentOffMsrpItems
 */
export interface CouponPercentOffMsrpItems {
    /**
     * The percentage of subtotal discount
     * @type {number}
     * @memberof CouponPercentOffMsrpItems
     */
    discount_percent?: number;
    /**
     * A list of items which cannot be discounted.
     * @type {Array<string>}
     * @memberof CouponPercentOffMsrpItems
     */
    excluded_items?: Array<string>;
    /**
     * An list of items which will receive a discount.
     * @type {Array<string>}
     * @memberof CouponPercentOffMsrpItems
     */
    items?: Array<string>;
    /**
     * The (optional) maximum quantity of discounted items.
     * @type {number}
     * @memberof CouponPercentOffMsrpItems
     */
    limit?: number;
    /**
     * The (optional) minimum cumulative msrp of qualifying items.
     * @type {number}
     * @memberof CouponPercentOffMsrpItems
     */
    minimum_cumulative_msrp?: number;
    /**
     * The (optional) minimum subtotal of qualifying items.
     * @type {number}
     * @memberof CouponPercentOffMsrpItems
     */
    minimum_subtotal?: number;
}



/**
 * Check if a given object implements the CouponPercentOffMsrpItems interface.
 */
export function instanceOfCouponPercentOffMsrpItems(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CouponPercentOffMsrpItemsFromJSON(json: any): CouponPercentOffMsrpItems {
    return CouponPercentOffMsrpItemsFromJSONTyped(json, false);
}

export function CouponPercentOffMsrpItemsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponPercentOffMsrpItems {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'discount_percent': !exists(json, 'discount_percent') ? undefined : json['discount_percent'],
        'excluded_items': !exists(json, 'excluded_items') ? undefined : json['excluded_items'],
        'items': !exists(json, 'items') ? undefined : json['items'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'minimum_cumulative_msrp': !exists(json, 'minimum_cumulative_msrp') ? undefined : json['minimum_cumulative_msrp'],
        'minimum_subtotal': !exists(json, 'minimum_subtotal') ? undefined : json['minimum_subtotal'],
    };
}

export function CouponPercentOffMsrpItemsToJSON(value?: CouponPercentOffMsrpItems | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'discount_percent': value.discount_percent,
        'excluded_items': value.excluded_items,
        'items': value.items,
        'limit': value.limit,
        'minimum_cumulative_msrp': value.minimum_cumulative_msrp,
        'minimum_subtotal': value.minimum_subtotal,
    };
}

