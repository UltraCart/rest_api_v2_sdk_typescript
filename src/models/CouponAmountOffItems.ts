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
 * @interface CouponAmountOffItems
 */
export interface CouponAmountOffItems {
    /**
     * The ISO-4217 three letter currency code the customer is viewing prices in
     * @type {string}
     * @memberof CouponAmountOffItems
     */
    currency_code?: string;
    /**
     * The amount of shipping discount
     * @type {number}
     * @memberof CouponAmountOffItems
     */
    discount_amount?: number;
    /**
     * An optional list of item tags which will receive a discount.
     * @type {Array<string>}
     * @memberof CouponAmountOffItems
     */
    item_tags?: Array<string>;
    /**
     * A list of items which are eligible for the discount amount.
     * @type {Array<string>}
     * @memberof CouponAmountOffItems
     */
    items?: Array<string>;
    /**
     * The limit of items which are eligible for the discount amount.
     * @type {number}
     * @memberof CouponAmountOffItems
     */
    limit?: number;
}



/**
 * Check if a given object implements the CouponAmountOffItems interface.
 */
export function instanceOfCouponAmountOffItems(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CouponAmountOffItemsFromJSON(json: any): CouponAmountOffItems {
    return CouponAmountOffItemsFromJSONTyped(json, false);
}

export function CouponAmountOffItemsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponAmountOffItems {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currency_code': !exists(json, 'currency_code') ? undefined : json['currency_code'],
        'discount_amount': !exists(json, 'discount_amount') ? undefined : json['discount_amount'],
        'item_tags': !exists(json, 'item_tags') ? undefined : json['item_tags'],
        'items': !exists(json, 'items') ? undefined : json['items'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
    };
}

export function CouponAmountOffItemsToJSON(value?: CouponAmountOffItems | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currency_code': value.currency_code,
        'discount_amount': value.discount_amount,
        'item_tags': value.item_tags,
        'items': value.items,
        'limit': value.limit,
    };
}

