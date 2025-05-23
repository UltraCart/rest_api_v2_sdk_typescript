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
import {
    CouponTierPercent,
    CouponTierPercentFromJSON,
    CouponTierPercentFromJSONTyped,
    CouponTierPercentToJSON,
} from './CouponTierPercent';

/**
 * 
 * @export
 * @interface CouponTieredPercentOffSubtotal
 */
export interface CouponTieredPercentOffSubtotal {
    /**
     * An optional list of items of which a quantity of one or many must be purchased for coupon to be valid.  If empty, all items apply toward subtotal amount.
     * @type {Array<string>}
     * @memberof CouponTieredPercentOffSubtotal
     */
    items?: Array<string>;
    /**
     * A list of discount tiers.
     * @type {Array<CouponTierPercent>}
     * @memberof CouponTieredPercentOffSubtotal
     */
    tiers?: Array<CouponTierPercent>;
}



/**
 * Check if a given object implements the CouponTieredPercentOffSubtotal interface.
 */
export function instanceOfCouponTieredPercentOffSubtotal(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CouponTieredPercentOffSubtotalFromJSON(json: any): CouponTieredPercentOffSubtotal {
    return CouponTieredPercentOffSubtotalFromJSONTyped(json, false);
}

export function CouponTieredPercentOffSubtotalFromJSONTyped(json: any, ignoreDiscriminator: boolean): CouponTieredPercentOffSubtotal {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'items': !exists(json, 'items') ? undefined : json['items'],
        'tiers': !exists(json, 'tiers') ? undefined : ((json['tiers'] as Array<any>).map(CouponTierPercentFromJSON)),
    };
}

export function CouponTieredPercentOffSubtotalToJSON(value?: CouponTieredPercentOffSubtotal | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'items': value.items,
        'tiers': value.tiers === undefined ? undefined : ((value.tiers as Array<any>).map(CouponTierPercentToJSON)),
    };
}

