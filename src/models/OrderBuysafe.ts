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
 * @interface OrderBuysafe
 */
export interface OrderBuysafe {
    /**
     * True if a buySAFE bond was available for purchase on this order
     * @type {boolean}
     * @memberof OrderBuysafe
     */
    buysafe_bond_available?: boolean;
    /**
     * 
     * @type {Currency}
     * @memberof OrderBuysafe
     */
    buysafe_bond_cost?: Currency;
    /**
     * True if the buySAFE bond was free for this order
     * @type {boolean}
     * @memberof OrderBuysafe
     */
    buysafe_bond_free?: boolean;
    /**
     * 
     * @type {Currency}
     * @memberof OrderBuysafe
     */
    buysafe_bond_refunded?: Currency;
    /**
     * True if the buySAFE bond was wanted by the customer
     * @type {boolean}
     * @memberof OrderBuysafe
     */
    buysafe_bond_wanted?: boolean;
    /**
     * Shopping cart ID associated with the buySAFE bond
     * @type {string}
     * @memberof OrderBuysafe
     */
    buysafe_shopping_cart_id?: string;
}

export function OrderBuysafeFromJSON(json: any): OrderBuysafe {
    return OrderBuysafeFromJSONTyped(json, false);
}

export function OrderBuysafeFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderBuysafe {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'buysafe_bond_available': !exists(json, 'buysafe_bond_available') ? undefined : json['buysafe_bond_available'],
        'buysafe_bond_cost': !exists(json, 'buysafe_bond_cost') ? undefined : CurrencyFromJSON(json['buysafe_bond_cost']),
        'buysafe_bond_free': !exists(json, 'buysafe_bond_free') ? undefined : json['buysafe_bond_free'],
        'buysafe_bond_refunded': !exists(json, 'buysafe_bond_refunded') ? undefined : CurrencyFromJSON(json['buysafe_bond_refunded']),
        'buysafe_bond_wanted': !exists(json, 'buysafe_bond_wanted') ? undefined : json['buysafe_bond_wanted'],
        'buysafe_shopping_cart_id': !exists(json, 'buysafe_shopping_cart_id') ? undefined : json['buysafe_shopping_cart_id'],
    };
}

export function OrderBuysafeToJSON(value?: OrderBuysafe | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'buysafe_bond_available': value.buysafe_bond_available,
        'buysafe_bond_cost': CurrencyToJSON(value.buysafe_bond_cost),
        'buysafe_bond_free': value.buysafe_bond_free,
        'buysafe_bond_refunded': CurrencyToJSON(value.buysafe_bond_refunded),
        'buysafe_bond_wanted': value.buysafe_bond_wanted,
        'buysafe_shopping_cart_id': value.buysafe_shopping_cart_id,
    };
}
