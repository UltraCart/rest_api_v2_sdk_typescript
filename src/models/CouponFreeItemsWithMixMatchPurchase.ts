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
 * @interface CouponFreeItemsWithMixMatchPurchase
 */
export interface CouponFreeItemsWithMixMatchPurchase {
    /**
     * The item id of the free item that will be received when the required mix and match group quantity is purchased.
     * @type {string}
     * @memberof CouponFreeItemsWithMixMatchPurchase
     */
    free_item?: string;
    /**
     * The quantity of free item that will be received.
     * @type {number}
     * @memberof CouponFreeItemsWithMixMatchPurchase
     */
    free_quantity?: number;
    /**
     * The limit of free items that may be received when purchasing multiple mix and match group items
     * @type {number}
     * @memberof CouponFreeItemsWithMixMatchPurchase
     */
    limit?: number;
    /**
     * Required mix and match group that must be purchased for coupon to be valid
     * @type {string}
     * @memberof CouponFreeItemsWithMixMatchPurchase
     */
    required_purchase_mix_and_match_group?: string;
    /**
     * Required quantity of mix and match group items that must be purchased for coupon to be valid
     * @type {number}
     * @memberof CouponFreeItemsWithMixMatchPurchase
     */
    required_purchase_quantity?: number;
}

export function CouponFreeItemsWithMixMatchPurchaseFromJSON(json: any): CouponFreeItemsWithMixMatchPurchase {
    return CouponFreeItemsWithMixMatchPurchaseFromJSONTyped(json, false);
}

export function CouponFreeItemsWithMixMatchPurchaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponFreeItemsWithMixMatchPurchase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'free_item': !exists(json, 'free_item') ? undefined : json['free_item'],
        'free_quantity': !exists(json, 'free_quantity') ? undefined : json['free_quantity'],
        'limit': !exists(json, 'limit') ? undefined : json['limit'],
        'required_purchase_mix_and_match_group': !exists(json, 'required_purchase_mix_and_match_group') ? undefined : json['required_purchase_mix_and_match_group'],
        'required_purchase_quantity': !exists(json, 'required_purchase_quantity') ? undefined : json['required_purchase_quantity'],
    };
}

export function CouponFreeItemsWithMixMatchPurchaseToJSON(value?: CouponFreeItemsWithMixMatchPurchase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'free_item': value.free_item,
        'free_quantity': value.free_quantity,
        'limit': value.limit,
        'required_purchase_mix_and_match_group': value.required_purchase_mix_and_match_group,
        'required_purchase_quantity': value.required_purchase_quantity,
    };
}

