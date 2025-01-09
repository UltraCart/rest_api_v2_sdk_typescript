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
 * @interface CouponDeletesRequest
 */
export interface CouponDeletesRequest {
    /**
     * Coupon codes
     * @type {Array<string>}
     * @memberof CouponDeletesRequest
     */
    coupon_codes?: Array<string>;
    /**
     * Coupon oids
     * @type {Array<number>}
     * @memberof CouponDeletesRequest
     */
    coupon_oids?: Array<number>;
}

export function CouponDeletesRequestFromJSON(json: any): CouponDeletesRequest {
    return CouponDeletesRequestFromJSONTyped(json, false);
}

export function CouponDeletesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponDeletesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'coupon_codes': !exists(json, 'coupon_codes') ? undefined : json['coupon_codes'],
        'coupon_oids': !exists(json, 'coupon_oids') ? undefined : json['coupon_oids'],
    };
}

export function CouponDeletesRequestToJSON(value?: CouponDeletesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'coupon_codes': value.coupon_codes,
        'coupon_oids': value.coupon_oids,
    };
}

