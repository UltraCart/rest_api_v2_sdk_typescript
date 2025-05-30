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
 * @interface CouponRestriction
 */
export interface CouponRestriction {
    /**
     * 
     * @type {boolean}
     * @memberof CouponRestriction
     */
    invalidForThis?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CouponRestriction
     */
    name?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CouponRestriction
     */
    validForThis?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof CouponRestriction
     */
    validOnlyForThis?: boolean;
}



/**
 * Check if a given object implements the CouponRestriction interface.
 */
export function instanceOfCouponRestriction(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CouponRestrictionFromJSON(json: any): CouponRestriction {
    return CouponRestrictionFromJSONTyped(json, false);
}

export function CouponRestrictionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponRestriction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'invalidForThis': !exists(json, 'invalidForThis') ? undefined : json['invalidForThis'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'validForThis': !exists(json, 'validForThis') ? undefined : json['validForThis'],
        'validOnlyForThis': !exists(json, 'validOnlyForThis') ? undefined : json['validOnlyForThis'],
    };
}

export function CouponRestrictionToJSON(value?: CouponRestriction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'invalidForThis': value.invalidForThis,
        'name': value.name,
        'validForThis': value.validForThis,
        'validOnlyForThis': value.validOnlyForThis,
    };
}

