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
 * @interface CartAffiliate
 */
export interface CartAffiliate {
    /**
     * Affiliate id associated with the cart
     * @type {number}
     * @memberof CartAffiliate
     */
    affiliate_id?: number;
    /**
     * Affiliate sub id associated with the cart
     * @type {string}
     * @memberof CartAffiliate
     */
    affiliate_sub_id?: string;
}

export function CartAffiliateFromJSON(json: any): CartAffiliate {
    return CartAffiliateFromJSONTyped(json, false);
}

export function CartAffiliateFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartAffiliate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'affiliate_id': !exists(json, 'affiliate_id') ? undefined : json['affiliate_id'],
        'affiliate_sub_id': !exists(json, 'affiliate_sub_id') ? undefined : json['affiliate_sub_id'],
    };
}

export function CartAffiliateToJSON(value?: CartAffiliate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'affiliate_id': value.affiliate_id,
        'affiliate_sub_id': value.affiliate_sub_id,
    };
}
