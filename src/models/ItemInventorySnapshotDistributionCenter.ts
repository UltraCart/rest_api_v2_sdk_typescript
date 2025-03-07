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
 * @interface ItemInventorySnapshotDistributionCenter
 */
export interface ItemInventorySnapshotDistributionCenter {
    /**
     * 
     * @type {number}
     * @memberof ItemInventorySnapshotDistributionCenter
     */
    allocated_to_placed_orders?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemInventorySnapshotDistributionCenter
     */
    allocated_to_shopping_carts?: number;
    /**
     * 
     * @type {number}
     * @memberof ItemInventorySnapshotDistributionCenter
     */
    available_to_allocate?: number;
    /**
     * 
     * @type {string}
     * @memberof ItemInventorySnapshotDistributionCenter
     */
    code?: string;
    /**
     * 
     * @type {number}
     * @memberof ItemInventorySnapshotDistributionCenter
     */
    quantity?: number;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ItemInventorySnapshotDistributionCenter)[] = ["allocated_to_placed_orders", "allocated_to_shopping_carts", "available_to_allocate", "code", "quantity"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ItemInventorySnapshotDistributionCenter interface.
 */
export function instanceOfItemInventorySnapshotDistributionCenter(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ItemInventorySnapshotDistributionCenterFromJSON(json: any): ItemInventorySnapshotDistributionCenter {
    return ItemInventorySnapshotDistributionCenterFromJSONTyped(json, false);
}

export function ItemInventorySnapshotDistributionCenterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemInventorySnapshotDistributionCenter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allocated_to_placed_orders': !exists(json, 'allocated_to_placed_orders') ? undefined : json['allocated_to_placed_orders'],
        'allocated_to_shopping_carts': !exists(json, 'allocated_to_shopping_carts') ? undefined : json['allocated_to_shopping_carts'],
        'available_to_allocate': !exists(json, 'available_to_allocate') ? undefined : json['available_to_allocate'],
        'code': !exists(json, 'code') ? undefined : json['code'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
    };
}

export function ItemInventorySnapshotDistributionCenterToJSON(value?: ItemInventorySnapshotDistributionCenter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allocated_to_placed_orders': value.allocated_to_placed_orders,
        'allocated_to_shopping_carts': value.allocated_to_shopping_carts,
        'available_to_allocate': value.available_to_allocate,
        'code': value.code,
        'quantity': value.quantity,
    };
}

