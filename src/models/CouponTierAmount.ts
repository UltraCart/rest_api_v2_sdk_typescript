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
 * @interface CouponTierAmount
 */
export interface CouponTierAmount {
    /**
     * The amount of subtotal discount
     * @type {number}
     * @memberof CouponTierAmount
     */
    discount_amount?: number;
    /**
     * Quickbooks accounting code.
     * @type {string}
     * @memberof CouponTierAmount
     */
    quickbooks_code?: string;
    /**
     * The amount of subtotal required to receive the discount amount
     * @type {number}
     * @memberof CouponTierAmount
     */
    subtotal_amount?: number;
}

export function CouponTierAmountFromJSON(json: any): CouponTierAmount {
    return CouponTierAmountFromJSONTyped(json, false);
}

export function CouponTierAmountFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponTierAmount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'discount_amount': !exists(json, 'discount_amount') ? undefined : json['discount_amount'],
        'quickbooks_code': !exists(json, 'quickbooks_code') ? undefined : json['quickbooks_code'],
        'subtotal_amount': !exists(json, 'subtotal_amount') ? undefined : json['subtotal_amount'],
    };
}

export function CouponTierAmountToJSON(value?: CouponTierAmount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'discount_amount': value.discount_amount,
        'quickbooks_code': value.quickbooks_code,
        'subtotal_amount': value.subtotal_amount,
    };
}

