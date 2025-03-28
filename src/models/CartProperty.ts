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
 * @interface CartProperty
 */
export interface CartProperty {
    /**
     * True if this property is displayed to the customer
     * @type {boolean}
     * @memberof CartProperty
     */
    display?: boolean;
    /**
     * The date/time that the property expires and is deleted
     * @type {string}
     * @memberof CartProperty
     */
    expiration_dts?: string;
    /**
     * Name
     * @type {string}
     * @memberof CartProperty
     */
    name?: string;
    /**
     * Value
     * @type {string}
     * @memberof CartProperty
     */
    value?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof CartProperty)[] = ["display", "expiration_dts", "name", "value"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the CartProperty interface.
 */
export function instanceOfCartProperty(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CartPropertyFromJSON(json: any): CartProperty {
    return CartPropertyFromJSONTyped(json, false);
}

export function CartPropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartProperty {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'display': !exists(json, 'display') ? undefined : json['display'],
        'expiration_dts': !exists(json, 'expiration_dts') ? undefined : json['expiration_dts'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function CartPropertyToJSON(value?: CartProperty | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'display': value.display,
        'expiration_dts': value.expiration_dts,
        'name': value.name,
        'value': value.value,
    };
}

