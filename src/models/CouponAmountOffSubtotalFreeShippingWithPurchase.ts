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
 * @interface CouponAmountOffSubtotalFreeShippingWithPurchase
 */
export interface CouponAmountOffSubtotalFreeShippingWithPurchase {
    /**
     * The ISO-4217 three letter currency code the customer is viewing prices in
     * @type {string}
     * @memberof CouponAmountOffSubtotalFreeShippingWithPurchase
     */
    currency_code?: string;
    /**
     * The amount of subtotal discount
     * @type {number}
     * @memberof CouponAmountOffSubtotalFreeShippingWithPurchase
     */
    discount_amount?: number;
    /**
     * The purchase amount to qualify for subtotal discount and free shipping
     * @type {number}
     * @memberof CouponAmountOffSubtotalFreeShippingWithPurchase
     */
    purchase_amount?: number;
    /**
     * One or more shipping methods that may be free
     * @type {Array<string>}
     * @memberof CouponAmountOffSubtotalFreeShippingWithPurchase
     */
    shipping_methods?: Array<string>;
}

export function CouponAmountOffSubtotalFreeShippingWithPurchaseFromJSON(json: any): CouponAmountOffSubtotalFreeShippingWithPurchase {
    return CouponAmountOffSubtotalFreeShippingWithPurchaseFromJSONTyped(json, false);
}

export function CouponAmountOffSubtotalFreeShippingWithPurchaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponAmountOffSubtotalFreeShippingWithPurchase {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'currency_code': !exists(json, 'currency_code') ? undefined : json['currency_code'],
        'discount_amount': !exists(json, 'discount_amount') ? undefined : json['discount_amount'],
        'purchase_amount': !exists(json, 'purchase_amount') ? undefined : json['purchase_amount'],
        'shipping_methods': !exists(json, 'shipping_methods') ? undefined : json['shipping_methods'],
    };
}

export function CouponAmountOffSubtotalFreeShippingWithPurchaseToJSON(value?: CouponAmountOffSubtotalFreeShippingWithPurchase | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'currency_code': value.currency_code,
        'discount_amount': value.discount_amount,
        'purchase_amount': value.purchase_amount,
        'shipping_methods': value.shipping_methods,
    };
}
