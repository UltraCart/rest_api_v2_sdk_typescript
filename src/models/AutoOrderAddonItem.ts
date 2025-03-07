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
    AutoOrderAddonItemOption,
    AutoOrderAddonItemOptionFromJSON,
    AutoOrderAddonItemOptionFromJSONTyped,
    AutoOrderAddonItemOptionToJSON,
} from './AutoOrderAddonItemOption';

/**
 * 
 * @export
 * @interface AutoOrderAddonItem
 */
export interface AutoOrderAddonItem {
    /**
     * 
     * @type {number}
     * @memberof AutoOrderAddonItem
     */
    arbitrary_unit_cost?: number;
    /**
     * 
     * @type {boolean}
     * @memberof AutoOrderAddonItem
     */
    free_shipping?: boolean;
    /**
     * 
     * @type {string}
     * @memberof AutoOrderAddonItem
     */
    item_id?: string;
    /**
     * 
     * @type {number}
     * @memberof AutoOrderAddonItem
     */
    next_x_orders?: number;
    /**
     * Options associated with this item
     * @type {Array<AutoOrderAddonItemOption>}
     * @memberof AutoOrderAddonItem
     */
    options?: Array<AutoOrderAddonItemOption>;
    /**
     * 
     * @type {number}
     * @memberof AutoOrderAddonItem
     */
    quantity?: number;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof AutoOrderAddonItem)[] = ["arbitrary_unit_cost", "free_shipping", "item_id", "next_x_orders", "options", "quantity"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the AutoOrderAddonItem interface.
 */
export function instanceOfAutoOrderAddonItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AutoOrderAddonItemFromJSON(json: any): AutoOrderAddonItem {
    return AutoOrderAddonItemFromJSONTyped(json, false);
}

export function AutoOrderAddonItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoOrderAddonItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arbitrary_unit_cost': !exists(json, 'arbitrary_unit_cost') ? undefined : json['arbitrary_unit_cost'],
        'free_shipping': !exists(json, 'free_shipping') ? undefined : json['free_shipping'],
        'item_id': !exists(json, 'item_id') ? undefined : json['item_id'],
        'next_x_orders': !exists(json, 'next_x_orders') ? undefined : json['next_x_orders'],
        'options': !exists(json, 'options') ? undefined : ((json['options'] as Array<any>).map(AutoOrderAddonItemOptionFromJSON)),
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
    };
}

export function AutoOrderAddonItemToJSON(value?: AutoOrderAddonItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arbitrary_unit_cost': value.arbitrary_unit_cost,
        'free_shipping': value.free_shipping,
        'item_id': value.item_id,
        'next_x_orders': value.next_x_orders,
        'options': value.options === undefined ? undefined : ((value.options as Array<any>).map(AutoOrderAddonItemOptionToJSON)),
        'quantity': value.quantity,
    };
}

