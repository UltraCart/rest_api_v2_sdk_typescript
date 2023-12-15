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
 * @interface CouponPercentOffItemWithItemsQuantityPurchase
 */
export interface CouponPercentOffItemWithItemsQuantityPurchase {
    /**
     * The percentage of subtotal discount
     * @type {number}
     * @memberof CouponPercentOffItemWithItemsQuantityPurchase
     */
    discount_percent?: number;
    /**
     * A list of items which will receive a discount if one of the required purchase items is purchased.
     * @type {Array<string>}
     * @memberof CouponPercentOffItemWithItemsQuantityPurchase
     */
    items?: Array<string>;
    /**
     * The (optional) maximum quantity of discounted items.
     * @type {number}
     * @memberof CouponPercentOffItemWithItemsQuantityPurchase
     */
    limit?: number;
    /**
     * Required items (at least one from the list) that must be purchased for coupon to be valid
     * @type {Array<string>}
     * @memberof CouponPercentOffItemWithItemsQuantityPurchase
     */
    required_purchase_items?: Array<string>;
    /**
     * The quantity of items that must be purchased for the discount to be applied.
     * @type {number}
     * @memberof CouponPercentOffItemWithItemsQuantityPurchase
     */
    required_purchase_quantity?: number;
}

export function CouponPercentOffItemWithItemsQuantityPurchaseFromJSON(json: any): CouponPercentOffItemWithItemsQuantityPurchase {
    return CouponPercentOffItemWithItemsQuantityPurchaseFromJSONTyped(json, false);
}

export function CouponPercentOffItemWithItemsQuantityPurchaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponPercentOffItemWithItemsQuantityPurchase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'discount_percent': !exists(json, 'discount_percent') ? undefined : json['discount_percent'],
        'items': !exists(json, 'items') ? undefined : json['items'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'required_purchase_items': !exists(json, 'required_purchase_items') ? undefined : json['required_purchase_items'],
        'required_purchase_quantity': !exists(json, 'required_purchase_quantity') ? undefined : json['required_purchase_quantity'],
    };
}

export function CouponPercentOffItemWithItemsQuantityPurchaseToJSON(value?: CouponPercentOffItemWithItemsQuantityPurchase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'discount_percent': value.discount_percent,
        'items': value.items,
        'limit': value.limit,
        'required_purchase_items': value.required_purchase_items,
        'required_purchase_quantity': value.required_purchase_quantity,
    };
}

