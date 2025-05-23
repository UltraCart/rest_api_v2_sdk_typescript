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
 * @interface CouponDiscountItemWithItemPurchase
 */
export interface CouponDiscountItemWithItemPurchase {
    /**
     * The ISO-4217 three letter currency code the customer is viewing prices in
     * @type {string}
     * @memberof CouponDiscountItemWithItemPurchase
     */
    currency_code?: string;
    /**
     * The item that will be sold at the discount_price when required_purchase_item is purchased.
     * @type {string}
     * @memberof CouponDiscountItemWithItemPurchase
     */
    discount_item?: string;
    /**
     * An optional list of item tags which will receive a discount of one of the required purchased items is purchased.
     * @type {Array<string>}
     * @memberof CouponDiscountItemWithItemPurchase
     */
    discount_item_tags?: Array<string>;
    /**
     * The price (unit cost) of the discounted item
     * @type {number}
     * @memberof CouponDiscountItemWithItemPurchase
     */
    discount_price?: number;
    /**
     * The (optional) maximum quantity of discounted items.
     * @type {number}
     * @memberof CouponDiscountItemWithItemPurchase
     */
    limit?: number;
    /**
     * The item that must be purchased for the discount to be applied to the discount item.
     * @type {string}
     * @memberof CouponDiscountItemWithItemPurchase
     */
    required_purchase_item?: string;
    /**
     * An optional list of item tags which are required to be purchased.
     * @type {Array<string>}
     * @memberof CouponDiscountItemWithItemPurchase
     */
    required_purchase_items_tags?: Array<string>;
}



/**
 * Check if a given object implements the CouponDiscountItemWithItemPurchase interface.
 */
export function instanceOfCouponDiscountItemWithItemPurchase(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CouponDiscountItemWithItemPurchaseFromJSON(json: any): CouponDiscountItemWithItemPurchase {
    return CouponDiscountItemWithItemPurchaseFromJSONTyped(json, false);
}

export function CouponDiscountItemWithItemPurchaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponDiscountItemWithItemPurchase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currency_code': !exists(json, 'currency_code') ? undefined : json['currency_code'],
        'discount_item': !exists(json, 'discount_item') ? undefined : json['discount_item'],
        'discount_item_tags': !exists(json, 'discount_item_tags') ? undefined : json['discount_item_tags'],
        'discount_price': !exists(json, 'discount_price') ? undefined : json['discount_price'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'required_purchase_item': !exists(json, 'required_purchase_item') ? undefined : json['required_purchase_item'],
        'required_purchase_items_tags': !exists(json, 'required_purchase_items_tags') ? undefined : json['required_purchase_items_tags'],
    };
}

export function CouponDiscountItemWithItemPurchaseToJSON(value?: CouponDiscountItemWithItemPurchase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currency_code': value.currency_code,
        'discount_item': value.discount_item,
        'discount_item_tags': value.discount_item_tags,
        'discount_price': value.discount_price,
        'limit': value.limit,
        'required_purchase_item': value.required_purchase_item,
        'required_purchase_items_tags': value.required_purchase_items_tags,
    };
}

