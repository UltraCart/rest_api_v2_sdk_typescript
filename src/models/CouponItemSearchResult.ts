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
 * @interface CouponItemSearchResult
 */
export interface CouponItemSearchResult {
    /**
     * The cost of this item.
     * @type {string}
     * @memberof CouponItemSearchResult
     */
    cost?: string;
    /**
     * A human readable description of this item.
     * @type {string}
     * @memberof CouponItemSearchResult
     */
    description?: string;
    /**
     * The manufacturer of this item.
     * @type {string}
     * @memberof CouponItemSearchResult
     */
    manufacturer_name?: string;
    /**
     * The manufacturer sku of this item.
     * @type {string}
     * @memberof CouponItemSearchResult
     */
    manufacturer_sku?: string;
    /**
     * The merchant item identifier, which is unique for this merchant, but not across all of UltraCart.
     * @type {string}
     * @memberof CouponItemSearchResult
     */
    merchant_item_id?: string;
    /**
     * The unique internal identifier used by UltraCart to manage this item.
     * @type {number}
     * @memberof CouponItemSearchResult
     */
    merchant_item_oid?: number;
    /**
     * The search score of this item.  Larger scores mean more accurate matches against the search term.
     * @type {string}
     * @memberof CouponItemSearchResult
     */
    score?: string;
    /**
     * A url for displaying a thumbnail of this item
     * @type {string}
     * @memberof CouponItemSearchResult
     */
    thumbnail_url?: string;
}



/**
 * Check if a given object implements the CouponItemSearchResult interface.
 */
export function instanceOfCouponItemSearchResult(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CouponItemSearchResultFromJSON(json: any): CouponItemSearchResult {
    return CouponItemSearchResultFromJSONTyped(json, false);
}

export function CouponItemSearchResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponItemSearchResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cost': !exists(json, 'cost') ? undefined : json['cost'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'manufacturer_name': !exists(json, 'manufacturer_name') ? undefined : json['manufacturer_name'],
        'manufacturer_sku': !exists(json, 'manufacturer_sku') ? undefined : json['manufacturer_sku'],
        'merchant_item_id': !exists(json, 'merchant_item_id') ? undefined : json['merchant_item_id'],
        'merchant_item_oid': !exists(json, 'merchant_item_oid') ? undefined : json['merchant_item_oid'],
        'score': !exists(json, 'score') ? undefined : json['score'],
        'thumbnail_url': !exists(json, 'thumbnail_url') ? undefined : json['thumbnail_url'],
    };
}

export function CouponItemSearchResultToJSON(value?: CouponItemSearchResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cost': value.cost,
        'description': value.description,
        'manufacturer_name': value.manufacturer_name,
        'manufacturer_sku': value.manufacturer_sku,
        'merchant_item_id': value.merchant_item_id,
        'merchant_item_oid': value.merchant_item_oid,
        'score': value.score,
        'thumbnail_url': value.thumbnail_url,
    };
}

