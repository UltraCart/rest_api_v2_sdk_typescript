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
    CouponTierPercent,
    CouponTierPercentFromJSON,
    CouponTierPercentFromJSONTyped,
    CouponTierPercentToJSON,
} from './CouponTierPercent';

/**
 * 
 * @export
 * @interface CouponTieredPercentOffShipping
 */
export interface CouponTieredPercentOffShipping {
    /**
     * Quickbooks accounting code.
     * @type {string}
     * @memberof CouponTieredPercentOffShipping
     */
    quickbooks_code?: string;
    /**
     * One or more shipping methods that may receive this discount
     * @type {Array<string>}
     * @memberof CouponTieredPercentOffShipping
     */
    shipping_methods?: Array<string>;
    /**
     * A list of discount tiers.
     * @type {Array<CouponTierPercent>}
     * @memberof CouponTieredPercentOffShipping
     */
    tiers?: Array<CouponTierPercent>;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof CouponTieredPercentOffShipping)[] = ["quickbooks_code", "shipping_methods", "tiers"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the CouponTieredPercentOffShipping interface.
 */
export function instanceOfCouponTieredPercentOffShipping(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CouponTieredPercentOffShippingFromJSON(json: any): CouponTieredPercentOffShipping {
    return CouponTieredPercentOffShippingFromJSONTyped(json, false);
}

export function CouponTieredPercentOffShippingFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponTieredPercentOffShipping {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'quickbooks_code': !exists(json, 'quickbooks_code') ? undefined : json['quickbooks_code'],
        'shipping_methods': !exists(json, 'shipping_methods') ? undefined : json['shipping_methods'],
        'tiers': !exists(json, 'tiers') ? undefined : ((json['tiers'] as Array<any>).map(CouponTierPercentFromJSON)),
    };
}

export function CouponTieredPercentOffShippingToJSON(value?: CouponTieredPercentOffShipping | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'quickbooks_code': value.quickbooks_code,
        'shipping_methods': value.shipping_methods,
        'tiers': value.tiers === undefined ? undefined : ((value.tiers as Array<any>).map(CouponTierPercentToJSON)),
    };
}

