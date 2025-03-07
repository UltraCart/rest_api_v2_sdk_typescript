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
 * @interface ItemRelatedItem
 */
export interface ItemRelatedItem {
    /**
     * Related item id
     * @type {string}
     * @memberof ItemRelatedItem
     */
    related_merchant_item_id?: string;
    /**
     * Related item object identifier
     * @type {number}
     * @memberof ItemRelatedItem
     */
    related_merchant_item_oid?: number;
    /**
     * Relationship type
     * @type {string}
     * @memberof ItemRelatedItem
     */
    type?: ItemRelatedItemTypeEnum;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ItemRelatedItem)[] = ["related_merchant_item_id", "related_merchant_item_oid", "type"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * @export
 */
export const ItemRelatedItemTypeEnum = {
    System: 'System',
    UserDefined: 'UserDefined'
} as const;
export type ItemRelatedItemTypeEnum = typeof ItemRelatedItemTypeEnum[keyof typeof ItemRelatedItemTypeEnum];


/**
 * Check if a given object implements the ItemRelatedItem interface.
 */
export function instanceOfItemRelatedItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ItemRelatedItemFromJSON(json: any): ItemRelatedItem {
    return ItemRelatedItemFromJSONTyped(json, false);
}

export function ItemRelatedItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemRelatedItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'related_merchant_item_id': !exists(json, 'related_merchant_item_id') ? undefined : json['related_merchant_item_id'],
        'related_merchant_item_oid': !exists(json, 'related_merchant_item_oid') ? undefined : json['related_merchant_item_oid'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ItemRelatedItemToJSON(value?: ItemRelatedItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'related_merchant_item_id': value.related_merchant_item_id,
        'related_merchant_item_oid': value.related_merchant_item_oid,
        'type': value.type,
    };
}

