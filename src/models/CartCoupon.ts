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
 * @interface CartCoupon
 */
export interface CartCoupon {
    /**
     * Coupon code
     * @type {string}
     * @memberof CartCoupon
     */
    coupon_code?: string;
}

export function CartCouponFromJSON(json: any): CartCoupon {
    return CartCouponFromJSONTyped(json, false);
}

export function CartCouponFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartCoupon {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'coupon_code': !exists(json, 'coupon_code') ? undefined : json['coupon_code'],
    };
}

export function CartCouponToJSON(value?: CartCoupon | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'coupon_code': value.coupon_code,
    };
}
