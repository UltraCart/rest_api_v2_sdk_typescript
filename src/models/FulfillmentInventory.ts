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
 * @interface FulfillmentInventory
 */
export interface FulfillmentInventory {
    /**
     * 
     * @type {string}
     * @memberof FulfillmentInventory
     */
    itemId?: string;
    /**
     * 
     * @type {number}
     * @memberof FulfillmentInventory
     */
    quantity?: number;
}

export function FulfillmentInventoryFromJSON(json: any): FulfillmentInventory {
    return FulfillmentInventoryFromJSONTyped(json, false);
}

export function FulfillmentInventoryFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfillmentInventory {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'itemId': !exists(json, 'itemId') ? undefined : json['itemId'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
    };
}

export function FulfillmentInventoryToJSON(value?: FulfillmentInventory | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'itemId': value.itemId,
        'quantity': value.quantity,
    };
}

