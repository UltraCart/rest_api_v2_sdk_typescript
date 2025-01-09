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
    CartItemOptionValue,
    CartItemOptionValueFromJSON,
    CartItemOptionValueFromJSONTyped,
    CartItemOptionValueToJSON,
} from './CartItemOptionValue';
import {
    Currency,
    CurrencyFromJSON,
    CurrencyFromJSONTyped,
    CurrencyToJSON,
} from './Currency';

/**
 * 
 * @export
 * @interface CartItemOption
 */
export interface CartItemOption {
    /**
     * 
     * @type {Currency}
     * @memberof CartItemOption
     */
    cost_if_specified?: Currency;
    /**
     * 
     * @type {Currency}
     * @memberof CartItemOption
     */
    cost_per_letter?: Currency;
    /**
     * 
     * @type {Currency}
     * @memberof CartItemOption
     */
    cost_per_line?: Currency;
    /**
     * True if the default answer is ignored
     * @type {boolean}
     * @memberof CartItemOption
     */
    ignore_if_default?: boolean;
    /**
     * Display label for the option
     * @type {string}
     * @memberof CartItemOption
     */
    label?: string;
    /**
     * Name of the option
     * @type {string}
     * @memberof CartItemOption
     */
    name?: string;
    /**
     * Charge the fee a single time instead of multiplying by the quantity
     * @type {boolean}
     * @memberof CartItemOption
     */
    one_time_fee?: boolean;
    /**
     * Unique identifier for the option
     * @type {number}
     * @memberof CartItemOption
     */
    option_oid?: number;
    /**
     * True if the customer is required to select a value
     * @type {boolean}
     * @memberof CartItemOption
     */
    required?: boolean;
    /**
     * The value of the option specified by the customer
     * @type {string}
     * @memberof CartItemOption
     */
    selected_value?: string;
    /**
     * Type of option
     * @type {string}
     * @memberof CartItemOption
     */
    type?: CartItemOptionTypeEnum;
    /**
     * Values that the customer can select from for radio or select type options
     * @type {Array<CartItemOptionValue>}
     * @memberof CartItemOption
     */
    values?: Array<CartItemOptionValue>;
}


/**
 * @export
 */
export const CartItemOptionTypeEnum = {
    Single: 'single',
    Multiline: 'multiline',
    Dropdown: 'dropdown',
    Hidden: 'hidden',
    Radio: 'radio',
    Fixed: 'fixed'
} as const;
export type CartItemOptionTypeEnum = typeof CartItemOptionTypeEnum[keyof typeof CartItemOptionTypeEnum];


export function CartItemOptionFromJSON(json: any): CartItemOption {
    return CartItemOptionFromJSONTyped(json, false);
}

export function CartItemOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartItemOption {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cost_if_specified': !exists(json, 'cost_if_specified') ? undefined : CurrencyFromJSON(json['cost_if_specified']),
        'cost_per_letter': !exists(json, 'cost_per_letter') ? undefined : CurrencyFromJSON(json['cost_per_letter']),
        'cost_per_line': !exists(json, 'cost_per_line') ? undefined : CurrencyFromJSON(json['cost_per_line']),
        'ignore_if_default': !exists(json, 'ignore_if_default') ? undefined : json['ignore_if_default'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'one_time_fee': !exists(json, 'one_time_fee') ? undefined : json['one_time_fee'],
        'option_oid': !exists(json, 'option_oid') ? undefined : json['option_oid'],
        'required': !exists(json, 'required') ? undefined : json['required'],
        'selected_value': !exists(json, 'selected_value') ? undefined : json['selected_value'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'values': !exists(json, 'values') ? undefined : ((json['values'] as Array<any>).map(CartItemOptionValueFromJSON)),
    };
}

export function CartItemOptionToJSON(value?: CartItemOption | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cost_if_specified': CurrencyToJSON(value.cost_if_specified),
        'cost_per_letter': CurrencyToJSON(value.cost_per_letter),
        'cost_per_line': CurrencyToJSON(value.cost_per_line),
        'ignore_if_default': value.ignore_if_default,
        'label': value.label,
        'name': value.name,
        'one_time_fee': value.one_time_fee,
        'option_oid': value.option_oid,
        'required': value.required,
        'selected_value': value.selected_value,
        'type': value.type,
        'values': value.values === undefined ? undefined : ((value.values as Array<any>).map(CartItemOptionValueToJSON)),
    };
}

