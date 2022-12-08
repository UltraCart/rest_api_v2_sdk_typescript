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
    ItemPricingTierDiscount,
    ItemPricingTierDiscountFromJSON,
    ItemPricingTierDiscountFromJSONTyped,
    ItemPricingTierDiscountToJSON,
} from './ItemPricingTierDiscount';
import {
    ItemPricingTierLimit,
    ItemPricingTierLimitFromJSON,
    ItemPricingTierLimitFromJSONTyped,
    ItemPricingTierLimitToJSON,
} from './ItemPricingTierLimit';

/**
 * 
 * @export
 * @interface ItemPricingTier
 */
export interface ItemPricingTier {
    /**
     * True if this is the default tier
     * @type {boolean}
     * @memberof ItemPricingTier
     */
    default_tier?: boolean;
    /**
     * Discounts
     * @type {Array<ItemPricingTierDiscount>}
     * @memberof ItemPricingTier
     */
    discounts?: Array<ItemPricingTierDiscount>;
    /**
     * 
     * @type {ItemPricingTierLimit}
     * @memberof ItemPricingTier
     */
    limit?: ItemPricingTierLimit;
    /**
     * Pricing tier name
     * @type {string}
     * @memberof ItemPricingTier
     */
    name?: string;
    /**
     * Pricing tier object identifier
     * @type {number}
     * @memberof ItemPricingTier
     */
    pricing_tier_oid?: number;
}

export function ItemPricingTierFromJSON(json: any): ItemPricingTier {
    return ItemPricingTierFromJSONTyped(json, false);
}

export function ItemPricingTierFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemPricingTier {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'default_tier': !exists(json, 'default_tier') ? undefined : json['default_tier'],
        'discounts': !exists(json, 'discounts') ? undefined : ((json['discounts'] as Array<any>).map(ItemPricingTierDiscountFromJSON)),
        'limit': !exists(json, 'limit') ? undefined : ItemPricingTierLimitFromJSON(json['limit']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'pricing_tier_oid': !exists(json, 'pricing_tier_oid') ? undefined : json['pricing_tier_oid'],
    };
}

export function ItemPricingTierToJSON(value?: ItemPricingTier | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'default_tier': value.default_tier,
        'discounts': value.discounts === undefined ? undefined : ((value.discounts as Array<any>).map(ItemPricingTierDiscountToJSON)),
        'limit': ItemPricingTierLimitToJSON(value.limit),
        'name': value.name,
        'pricing_tier_oid': value.pricing_tier_oid,
    };
}
