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
 * @interface CouponFreeShippingWithSubtotal
 */
export interface CouponFreeShippingWithSubtotal {
    /**
     * The ISO-4217 three letter currency code the customer is viewing prices in
     * @type {string}
     * @memberof CouponFreeShippingWithSubtotal
     */
    currency_code?: string;
    /**
     * The purchase amount to qualify for subtotal discount and free shipping
     * @type {number}
     * @memberof CouponFreeShippingWithSubtotal
     */
    purchase_amount?: number;
    /**
     * One or more shipping methods that may be used with this coupon
     * @type {Array<string>}
     * @memberof CouponFreeShippingWithSubtotal
     */
    shipping_methods?: Array<string>;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof CouponFreeShippingWithSubtotal)[] = ["currency_code", "purchase_amount", "shipping_methods"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the CouponFreeShippingWithSubtotal interface.
 */
export function instanceOfCouponFreeShippingWithSubtotal(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CouponFreeShippingWithSubtotalFromJSON(json: any): CouponFreeShippingWithSubtotal {
    return CouponFreeShippingWithSubtotalFromJSONTyped(json, false);
}

export function CouponFreeShippingWithSubtotalFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponFreeShippingWithSubtotal {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currency_code': !exists(json, 'currency_code') ? undefined : json['currency_code'],
        'purchase_amount': !exists(json, 'purchase_amount') ? undefined : json['purchase_amount'],
        'shipping_methods': !exists(json, 'shipping_methods') ? undefined : json['shipping_methods'],
    };
}

export function CouponFreeShippingWithSubtotalToJSON(value?: CouponFreeShippingWithSubtotal | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currency_code': value.currency_code,
        'purchase_amount': value.purchase_amount,
        'shipping_methods': value.shipping_methods,
    };
}

