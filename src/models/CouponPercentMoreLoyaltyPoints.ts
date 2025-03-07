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
 * @interface CouponPercentMoreLoyaltyPoints
 */
export interface CouponPercentMoreLoyaltyPoints {
    /**
     * The percentage of additional loyalty points
     * @type {number}
     * @memberof CouponPercentMoreLoyaltyPoints
     */
    percent_more_loyalty_points?: number;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof CouponPercentMoreLoyaltyPoints)[] = ["percent_more_loyalty_points"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the CouponPercentMoreLoyaltyPoints interface.
 */
export function instanceOfCouponPercentMoreLoyaltyPoints(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CouponPercentMoreLoyaltyPointsFromJSON(json: any): CouponPercentMoreLoyaltyPoints {
    return CouponPercentMoreLoyaltyPointsFromJSONTyped(json, false);
}

export function CouponPercentMoreLoyaltyPointsFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponPercentMoreLoyaltyPoints {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'percent_more_loyalty_points': !exists(json, 'percent_more_loyalty_points') ? undefined : json['percent_more_loyalty_points'],
    };
}

export function CouponPercentMoreLoyaltyPointsToJSON(value?: CouponPercentMoreLoyaltyPoints | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'percent_more_loyalty_points': value.percent_more_loyalty_points,
    };
}

