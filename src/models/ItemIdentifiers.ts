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
 * @interface ItemIdentifiers
 */
export interface ItemIdentifiers {
    /**
     * Barcode
     * @type {string}
     * @memberof ItemIdentifiers
     */
    barcode?: string;
    /**
     * Manufacturer Name
     * @type {string}
     * @memberof ItemIdentifiers
     */
    manufacturer_name?: string;
    /**
     * Manufacturer SKU
     * @type {string}
     * @memberof ItemIdentifiers
     */
    manufacturer_sku?: string;
    /**
     * UNSPSC
     * @type {string}
     * @memberof ItemIdentifiers
     */
    unspsc?: string;
}

export function ItemIdentifiersFromJSON(json: any): ItemIdentifiers {
    return ItemIdentifiersFromJSONTyped(json, false);
}

export function ItemIdentifiersFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemIdentifiers {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'barcode': !exists(json, 'barcode') ? undefined : json['barcode'],
        'manufacturer_name': !exists(json, 'manufacturer_name') ? undefined : json['manufacturer_name'],
        'manufacturer_sku': !exists(json, 'manufacturer_sku') ? undefined : json['manufacturer_sku'],
        'unspsc': !exists(json, 'unspsc') ? undefined : json['unspsc'],
    };
}

export function ItemIdentifiersToJSON(value?: ItemIdentifiers | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'barcode': value.barcode,
        'manufacturer_name': value.manufacturer_name,
        'manufacturer_sku': value.manufacturer_sku,
        'unspsc': value.unspsc,
    };
}
