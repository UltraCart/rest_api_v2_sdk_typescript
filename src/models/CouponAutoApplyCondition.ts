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
 * @interface CouponAutoApplyCondition
 */
export interface CouponAutoApplyCondition {
    /**
     * 
     * @type {string}
     * @memberof CouponAutoApplyCondition
     */
    coupon_code?: string;
    /**
     * The minimum subtotal that must be purchased to receive this coupon. Item and subtotal are exclusive.  Only one can be populated.
     * @type {number}
     * @memberof CouponAutoApplyCondition
     */
    minimum_subtotal?: number;
    /**
     * The item that must be purchased to receive this coupon. Item and subtotal are exclusive.  Only one can be populated.
     * @type {string}
     * @memberof CouponAutoApplyCondition
     */
    required_item_id?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof CouponAutoApplyCondition)[] = ["coupon_code", "minimum_subtotal", "required_item_id"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the CouponAutoApplyCondition interface.
 */
export function instanceOfCouponAutoApplyCondition(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CouponAutoApplyConditionFromJSON(json: any): CouponAutoApplyCondition {
    return CouponAutoApplyConditionFromJSONTyped(json, false);
}

export function CouponAutoApplyConditionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponAutoApplyCondition {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'coupon_code': !exists(json, 'coupon_code') ? undefined : json['coupon_code'],
        'minimum_subtotal': !exists(json, 'minimum_subtotal') ? undefined : json['minimum_subtotal'],
        'required_item_id': !exists(json, 'required_item_id') ? undefined : json['required_item_id'],
    };
}

export function CouponAutoApplyConditionToJSON(value?: CouponAutoApplyCondition | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'coupon_code': value.coupon_code,
        'minimum_subtotal': value.minimum_subtotal,
        'required_item_id': value.required_item_id,
    };
}

