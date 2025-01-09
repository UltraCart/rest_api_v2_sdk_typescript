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
import {
    CouponTierQuantityAmount,
    CouponTierQuantityAmountFromJSON,
    CouponTierQuantityAmountFromJSONTyped,
    CouponTierQuantityAmountToJSON,
} from './CouponTierQuantityAmount';

/**
 * 
 * @export
 * @interface CouponTieredAmountOffItems
 */
export interface CouponTieredAmountOffItems {
    /**
     * An optional list of item tags which will receive a discount.  If blank, discount applies to all items except excluded items.
     * @type {Array<string>}
     * @memberof CouponTieredAmountOffItems
     */
    item_tags?: Array<string>;
    /**
     * The items being discounted by this coupon.
     * @type {Array<string>}
     * @memberof CouponTieredAmountOffItems
     */
    items?: Array<string>;
    /**
     * The maximum number of discounted items.
     * @type {number}
     * @memberof CouponTieredAmountOffItems
     */
    limit?: number;
    /**
     * A list of discount tiers.
     * @type {Array<CouponTierQuantityAmount>}
     * @memberof CouponTieredAmountOffItems
     */
    tiers?: Array<CouponTierQuantityAmount>;
}

export function CouponTieredAmountOffItemsFromJSON(json: any): CouponTieredAmountOffItems {
    return CouponTieredAmountOffItemsFromJSONTyped(json, false);
}

export function CouponTieredAmountOffItemsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponTieredAmountOffItems {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'item_tags': !exists(json, 'item_tags') ? undefined : json['item_tags'],
        'items': !exists(json, 'items') ? undefined : json['items'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'tiers': !exists(json, 'tiers') ? undefined : ((json['tiers'] as Array<any>).map(CouponTierQuantityAmountFromJSON)),
    };
}

export function CouponTieredAmountOffItemsToJSON(value?: CouponTieredAmountOffItems | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'item_tags': value.item_tags,
        'items': value.items,
        'limit': value.limit,
        'tiers': value.tiers === undefined ? undefined : ((value.tiers as Array<any>).map(CouponTierQuantityAmountToJSON)),
    };
}

