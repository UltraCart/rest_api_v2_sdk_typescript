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
 * @interface CouponAmountShippingWithSubtotal
 */
export interface CouponAmountShippingWithSubtotal {
    /**
     * The ISO-4217 three letter currency code the customer is viewing prices in
     * @type {string}
     * @memberof CouponAmountShippingWithSubtotal
     */
    currency_code?: string;
    /**
     * The purchase amount to qualify for subtotal discount and free shipping
     * @type {number}
     * @memberof CouponAmountShippingWithSubtotal
     */
    purchase_amount?: number;
    /**
     * The amount of the shipping cost (this is not a discount, this is the actual cost of shipping)
     * @type {number}
     * @memberof CouponAmountShippingWithSubtotal
     */
    shipping_amount?: number;
    /**
     * One or more shipping methods that may be used with this coupon
     * @type {Array<string>}
     * @memberof CouponAmountShippingWithSubtotal
     */
    shipping_methods?: Array<string>;
}



/**
 * Check if a given object implements the CouponAmountShippingWithSubtotal interface.
 */
export function instanceOfCouponAmountShippingWithSubtotal(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CouponAmountShippingWithSubtotalFromJSON(json: any): CouponAmountShippingWithSubtotal {
    return CouponAmountShippingWithSubtotalFromJSONTyped(json, false);
}

export function CouponAmountShippingWithSubtotalFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponAmountShippingWithSubtotal {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currency_code': !exists(json, 'currency_code') ? undefined : json['currency_code'],
        'purchase_amount': !exists(json, 'purchase_amount') ? undefined : json['purchase_amount'],
        'shipping_amount': !exists(json, 'shipping_amount') ? undefined : json['shipping_amount'],
        'shipping_methods': !exists(json, 'shipping_methods') ? undefined : json['shipping_methods'],
    };
}

export function CouponAmountShippingWithSubtotalToJSON(value?: CouponAmountShippingWithSubtotal | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currency_code': value.currency_code,
        'purchase_amount': value.purchase_amount,
        'shipping_amount': value.shipping_amount,
        'shipping_methods': value.shipping_methods,
    };
}

