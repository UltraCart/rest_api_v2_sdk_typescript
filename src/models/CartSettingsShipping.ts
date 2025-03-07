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
    CartSettingsProvince,
    CartSettingsProvinceFromJSON,
    CartSettingsProvinceFromJSONTyped,
    CartSettingsProvinceToJSON,
} from './CartSettingsProvince';
import {
    CartSettingsShippingCalendar,
    CartSettingsShippingCalendarFromJSON,
    CartSettingsShippingCalendarFromJSONTyped,
    CartSettingsShippingCalendarToJSON,
} from './CartSettingsShippingCalendar';
import {
    CartSettingsShippingEstimate,
    CartSettingsShippingEstimateFromJSON,
    CartSettingsShippingEstimateFromJSONTyped,
    CartSettingsShippingEstimateToJSON,
} from './CartSettingsShippingEstimate';

/**
 * 
 * @export
 * @interface CartSettingsShipping
 */
export interface CartSettingsShipping {
    /**
     * 
     * @type {CartSettingsShippingCalendar}
     * @memberof CartSettingsShipping
     */
    deliver_on_date?: CartSettingsShippingCalendar;
    /**
     * Estimates for this cart
     * @type {Array<CartSettingsShippingEstimate>}
     * @memberof CartSettingsShipping
     */
    estimates?: Array<CartSettingsShippingEstimate>;
    /**
     * True if this order needs shipping
     * @type {boolean}
     * @memberof CartSettingsShipping
     */
    need_shipping?: boolean;
    /**
     * Provinces
     * @type {Array<CartSettingsProvince>}
     * @memberof CartSettingsShipping
     */
    provinces?: Array<CartSettingsProvince>;
    /**
     * 
     * @type {CartSettingsShippingCalendar}
     * @memberof CartSettingsShipping
     */
    ship_on_date?: CartSettingsShippingCalendar;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof CartSettingsShipping)[] = ["deliver_on_date", "estimates", "need_shipping", "provinces", "ship_on_date"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the CartSettingsShipping interface.
 */
export function instanceOfCartSettingsShipping(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CartSettingsShippingFromJSON(json: any): CartSettingsShipping {
    return CartSettingsShippingFromJSONTyped(json, false);
}

export function CartSettingsShippingFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartSettingsShipping {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deliver_on_date': !exists(json, 'deliver_on_date') ? undefined : CartSettingsShippingCalendarFromJSON(json['deliver_on_date']),
        'estimates': !exists(json, 'estimates') ? undefined : ((json['estimates'] as Array<any>).map(CartSettingsShippingEstimateFromJSON)),
        'need_shipping': !exists(json, 'need_shipping') ? undefined : json['need_shipping'],
        'provinces': !exists(json, 'provinces') ? undefined : ((json['provinces'] as Array<any>).map(CartSettingsProvinceFromJSON)),
        'ship_on_date': !exists(json, 'ship_on_date') ? undefined : CartSettingsShippingCalendarFromJSON(json['ship_on_date']),
    };
}

export function CartSettingsShippingToJSON(value?: CartSettingsShipping | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deliver_on_date': CartSettingsShippingCalendarToJSON(value.deliver_on_date),
        'estimates': value.estimates === undefined ? undefined : ((value.estimates as Array<any>).map(CartSettingsShippingEstimateToJSON)),
        'need_shipping': value.need_shipping,
        'provinces': value.provinces === undefined ? undefined : ((value.provinces as Array<any>).map(CartSettingsProvinceToJSON)),
        'ship_on_date': CartSettingsShippingCalendarToJSON(value.ship_on_date),
    };
}

