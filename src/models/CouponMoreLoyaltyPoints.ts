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
 * @interface CouponMoreLoyaltyPoints
 */
export interface CouponMoreLoyaltyPoints {
    /**
     * The additional loyalty points
     * @type {number}
     * @memberof CouponMoreLoyaltyPoints
     */
    loyalty_points?: number;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof CouponMoreLoyaltyPoints)[] = ["loyalty_points"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the CouponMoreLoyaltyPoints interface.
 */
export function instanceOfCouponMoreLoyaltyPoints(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CouponMoreLoyaltyPointsFromJSON(json: any): CouponMoreLoyaltyPoints {
    return CouponMoreLoyaltyPointsFromJSONTyped(json, false);
}

export function CouponMoreLoyaltyPointsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponMoreLoyaltyPoints {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'loyalty_points': !exists(json, 'loyalty_points') ? undefined : json['loyalty_points'],
    };
}

export function CouponMoreLoyaltyPointsToJSON(value?: CouponMoreLoyaltyPoints | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'loyalty_points': value.loyalty_points,
    };
}

