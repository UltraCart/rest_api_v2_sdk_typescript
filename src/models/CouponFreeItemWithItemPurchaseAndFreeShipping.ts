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
 * @interface CouponFreeItemWithItemPurchaseAndFreeShipping
 */
export interface CouponFreeItemWithItemPurchaseAndFreeShipping {
    /**
     * A list of free items which will receive a discount if one of the required purchase items is purchased.
     * @type {Array<string>}
     * @memberof CouponFreeItemWithItemPurchaseAndFreeShipping
     */
    items?: Array<string>;
    /**
     * The (optional) maximum quantity of discounted items.  Free shipping will apply to all units of the free item ids though.
     * @type {number}
     * @memberof CouponFreeItemWithItemPurchaseAndFreeShipping
     */
    limit?: number;
    /**
     * If true then the free item is matched 1:1 with the free item in the list.
     * @type {boolean}
     * @memberof CouponFreeItemWithItemPurchaseAndFreeShipping
     */
    match_required_purchase_item_to_free_item?: boolean;
    /**
     * Required items (at least one from the list) that must be purchased for coupon to be valid
     * @type {Array<string>}
     * @memberof CouponFreeItemWithItemPurchaseAndFreeShipping
     */
    required_purchase_items?: Array<string>;
}

export function CouponFreeItemWithItemPurchaseAndFreeShippingFromJSON(json: any): CouponFreeItemWithItemPurchaseAndFreeShipping {
    return CouponFreeItemWithItemPurchaseAndFreeShippingFromJSONTyped(json, false);
}

export function CouponFreeItemWithItemPurchaseAndFreeShippingFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponFreeItemWithItemPurchaseAndFreeShipping {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : json['items'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'match_required_purchase_item_to_free_item': !exists(json, 'match_required_purchase_item_to_free_item') ? undefined : json['match_required_purchase_item_to_free_item'],
        'required_purchase_items': !exists(json, 'required_purchase_items') ? undefined : json['required_purchase_items'],
    };
}

export function CouponFreeItemWithItemPurchaseAndFreeShippingToJSON(value?: CouponFreeItemWithItemPurchaseAndFreeShipping | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items,
        'limit': value.limit,
        'match_required_purchase_item_to_free_item': value.match_required_purchase_item_to_free_item,
        'required_purchase_items': value.required_purchase_items,
    };
}
