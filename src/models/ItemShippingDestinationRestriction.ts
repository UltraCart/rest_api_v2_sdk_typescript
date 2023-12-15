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
 * @interface ItemShippingDestinationRestriction
 */
export interface ItemShippingDestinationRestriction {
    /**
     * Country code (ISO-3166 two letter)
     * @type {string}
     * @memberof ItemShippingDestinationRestriction
     */
    country_code?: string;
    /**
     * State
     * @type {string}
     * @memberof ItemShippingDestinationRestriction
     */
    state?: string;
    /**
     * Validity
     * @type {string}
     * @memberof ItemShippingDestinationRestriction
     */
    validity?: ItemShippingDestinationRestrictionValidityEnum;
}


/**
 * @export
 */
export const ItemShippingDestinationRestrictionValidityEnum = {
    ValidOnlyFor: 'valid only for',
    InvalidFor: 'invalid for'
} as const;
export type ItemShippingDestinationRestrictionValidityEnum = typeof ItemShippingDestinationRestrictionValidityEnum[keyof typeof ItemShippingDestinationRestrictionValidityEnum];


export function ItemShippingDestinationRestrictionFromJSON(json: any): ItemShippingDestinationRestriction {
    return ItemShippingDestinationRestrictionFromJSONTyped(json, false);
}

export function ItemShippingDestinationRestrictionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemShippingDestinationRestriction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'country_code': !exists(json, 'country_code') ? undefined : json['country_code'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'validity': !exists(json, 'validity') ? undefined : json['validity'],
    };
}

export function ItemShippingDestinationRestrictionToJSON(value?: ItemShippingDestinationRestriction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'country_code': value.country_code,
        'state': value.state,
        'validity': value.validity,
    };
}

