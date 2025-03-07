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
    CouponTierQuantityPercent,
    CouponTierQuantityPercentFromJSON,
    CouponTierQuantityPercentFromJSONTyped,
    CouponTierQuantityPercentToJSON,
} from './CouponTierQuantityPercent';

/**
 * 
 * @export
 * @interface CouponTieredPercentOffItems
 */
export interface CouponTieredPercentOffItems {
    /**
     * An optional list of item tags which will receive a discount.  If blank, discount applies to all items except excluded items.
     * @type {Array<string>}
     * @memberof CouponTieredPercentOffItems
     */
    item_tags?: Array<string>;
    /**
     * A list of items of which at least one must be purchased for coupon to be valid.
     * @type {Array<string>}
     * @memberof CouponTieredPercentOffItems
     */
    items?: Array<string>;
    /**
     * The (optional) maximum quantity of discounted items.
     * @type {number}
     * @memberof CouponTieredPercentOffItems
     */
    limit?: number;
    /**
     * A list of discount tiers.
     * @type {Array<CouponTierQuantityPercent>}
     * @memberof CouponTieredPercentOffItems
     */
    tiers?: Array<CouponTierQuantityPercent>;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof CouponTieredPercentOffItems)[] = ["item_tags", "items", "limit", "tiers"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the CouponTieredPercentOffItems interface.
 */
export function instanceOfCouponTieredPercentOffItems(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CouponTieredPercentOffItemsFromJSON(json: any): CouponTieredPercentOffItems {
    return CouponTieredPercentOffItemsFromJSONTyped(json, false);
}

export function CouponTieredPercentOffItemsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponTieredPercentOffItems {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'item_tags': !exists(json, 'item_tags') ? undefined : json['item_tags'],
        'items': !exists(json, 'items') ? undefined : json['items'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'tiers': !exists(json, 'tiers') ? undefined : ((json['tiers'] as Array<any>).map(CouponTierQuantityPercentFromJSON)),
    };
}

export function CouponTieredPercentOffItemsToJSON(value?: CouponTieredPercentOffItems | null): any {
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
        'tiers': value.tiers === undefined ? undefined : ((value.tiers as Array<any>).map(CouponTierQuantityPercentToJSON)),
    };
}

