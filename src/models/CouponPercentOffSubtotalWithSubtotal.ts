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
 * @interface CouponPercentOffSubtotalWithSubtotal
 */
export interface CouponPercentOffSubtotalWithSubtotal {
    /**
     * The ISO-4217 three letter currency code the customer is viewing prices in
     * @type {string}
     * @memberof CouponPercentOffSubtotalWithSubtotal
     */
    currency_code?: string;
    /**
     * The percentage of subtotal discount
     * @type {number}
     * @memberof CouponPercentOffSubtotalWithSubtotal
     */
    discount_percent?: number;
    /**
     * The amount of subtotal required to receive the discount percent
     * @type {number}
     * @memberof CouponPercentOffSubtotalWithSubtotal
     */
    subtotal_amount?: number;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof CouponPercentOffSubtotalWithSubtotal)[] = ["currency_code", "discount_percent", "subtotal_amount"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the CouponPercentOffSubtotalWithSubtotal interface.
 */
export function instanceOfCouponPercentOffSubtotalWithSubtotal(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CouponPercentOffSubtotalWithSubtotalFromJSON(json: any): CouponPercentOffSubtotalWithSubtotal {
    return CouponPercentOffSubtotalWithSubtotalFromJSONTyped(json, false);
}

export function CouponPercentOffSubtotalWithSubtotalFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponPercentOffSubtotalWithSubtotal {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currency_code': !exists(json, 'currency_code') ? undefined : json['currency_code'],
        'discount_percent': !exists(json, 'discount_percent') ? undefined : json['discount_percent'],
        'subtotal_amount': !exists(json, 'subtotal_amount') ? undefined : json['subtotal_amount'],
    };
}

export function CouponPercentOffSubtotalWithSubtotalToJSON(value?: CouponPercentOffSubtotalWithSubtotal | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currency_code': value.currency_code,
        'discount_percent': value.discount_percent,
        'subtotal_amount': value.subtotal_amount,
    };
}

