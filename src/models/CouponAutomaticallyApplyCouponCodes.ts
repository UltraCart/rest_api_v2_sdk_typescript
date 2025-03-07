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
 * @interface CouponAutomaticallyApplyCouponCodes
 */
export interface CouponAutomaticallyApplyCouponCodes {
    /**
     * The coupon codes to automatically apply if this coupon is applied
     * @type {Array<string>}
     * @memberof CouponAutomaticallyApplyCouponCodes
     */
    coupon_codes?: Array<string>;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof CouponAutomaticallyApplyCouponCodes)[] = ["coupon_codes"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the CouponAutomaticallyApplyCouponCodes interface.
 */
export function instanceOfCouponAutomaticallyApplyCouponCodes(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CouponAutomaticallyApplyCouponCodesFromJSON(json: any): CouponAutomaticallyApplyCouponCodes {
    return CouponAutomaticallyApplyCouponCodesFromJSONTyped(json, false);
}

export function CouponAutomaticallyApplyCouponCodesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponAutomaticallyApplyCouponCodes {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'coupon_codes': !exists(json, 'coupon_codes') ? undefined : json['coupon_codes'],
    };
}

export function CouponAutomaticallyApplyCouponCodesToJSON(value?: CouponAutomaticallyApplyCouponCodes | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'coupon_codes': value.coupon_codes,
    };
}

