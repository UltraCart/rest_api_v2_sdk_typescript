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
    Currency,
    CurrencyFromJSON,
    CurrencyFromJSONTyped,
    CurrencyToJSON,
} from './Currency';

/**
 * 
 * @export
 * @interface CartBuysafe
 */
export interface CartBuysafe {
    /**
     * True if buySAFE is willing to bond the order
     * @type {boolean}
     * @memberof CartBuysafe
     */
    bond_available?: boolean;
    /**
     * 
     * @type {Currency}
     * @memberof CartBuysafe
     */
    bond_cost?: Currency;
    /**
     * True if the bond is free (merchant paying for it)
     * @type {boolean}
     * @memberof CartBuysafe
     */
    bond_free?: boolean;
    /**
     * True if the customer wants the bond
     * @type {boolean}
     * @memberof CartBuysafe
     */
    bond_wanted?: boolean;
    /**
     * Recommend text to display to the customer
     * @type {string}
     * @memberof CartBuysafe
     */
    cart_display_text?: string;
    /**
     * URL associated with the recommended text
     * @type {string}
     * @memberof CartBuysafe
     */
    cart_display_url?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof CartBuysafe)[] = ["bond_available", "bond_cost", "bond_free", "bond_wanted", "cart_display_text", "cart_display_url"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the CartBuysafe interface.
 */
export function instanceOfCartBuysafe(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CartBuysafeFromJSON(json: any): CartBuysafe {
    return CartBuysafeFromJSONTyped(json, false);
}

export function CartBuysafeFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartBuysafe {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bond_available': !exists(json, 'bond_available') ? undefined : json['bond_available'],
        'bond_cost': !exists(json, 'bond_cost') ? undefined : CurrencyFromJSON(json['bond_cost']),
        'bond_free': !exists(json, 'bond_free') ? undefined : json['bond_free'],
        'bond_wanted': !exists(json, 'bond_wanted') ? undefined : json['bond_wanted'],
        'cart_display_text': !exists(json, 'cart_display_text') ? undefined : json['cart_display_text'],
        'cart_display_url': !exists(json, 'cart_display_url') ? undefined : json['cart_display_url'],
    };
}

export function CartBuysafeToJSON(value?: CartBuysafe | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bond_available': value.bond_available,
        'bond_cost': CurrencyToJSON(value.bond_cost),
        'bond_free': value.bond_free,
        'bond_wanted': value.bond_wanted,
        'cart_display_text': value.cart_display_text,
        'cart_display_url': value.cart_display_url,
    };
}

