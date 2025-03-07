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
 * @interface ItemChargebackAddendum
 */
export interface ItemChargebackAddendum {
    /**
     * Chargeback addendum object identifier
     * @type {number}
     * @memberof ItemChargebackAddendum
     */
    chargeback_addendum_oid?: number;
    /**
     * Description
     * @type {string}
     * @memberof ItemChargebackAddendum
     */
    description?: string;
    /**
     * Size of the file
     * @type {number}
     * @memberof ItemChargebackAddendum
     */
    file_size?: number;
    /**
     * Number of pages
     * @type {number}
     * @memberof ItemChargebackAddendum
     */
    pages?: number;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ItemChargebackAddendum)[] = ["chargeback_addendum_oid", "description", "file_size", "pages"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ItemChargebackAddendum interface.
 */
export function instanceOfItemChargebackAddendum(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ItemChargebackAddendumFromJSON(json: any): ItemChargebackAddendum {
    return ItemChargebackAddendumFromJSONTyped(json, false);
}

export function ItemChargebackAddendumFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemChargebackAddendum {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'chargeback_addendum_oid': !exists(json, 'chargeback_addendum_oid') ? undefined : json['chargeback_addendum_oid'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'file_size': !exists(json, 'file_size') ? undefined : json['file_size'],
        'pages': !exists(json, 'pages') ? undefined : json['pages'],
    };
}

export function ItemChargebackAddendumToJSON(value?: ItemChargebackAddendum | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'chargeback_addendum_oid': value.chargeback_addendum_oid,
        'description': value.description,
        'file_size': value.file_size,
        'pages': value.pages,
    };
}

