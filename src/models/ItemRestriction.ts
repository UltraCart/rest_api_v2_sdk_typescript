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
    ItemRestrictionItem,
    ItemRestrictionItemFromJSON,
    ItemRestrictionItemFromJSONTyped,
    ItemRestrictionItemToJSON,
} from './ItemRestrictionItem';

/**
 * 
 * @export
 * @interface ItemRestriction
 */
export interface ItemRestriction {
    /**
     * Exclude coupons
     * @type {boolean}
     * @memberof ItemRestriction
     */
    exclude_coupon?: boolean;
    /**
     * Exclude from free promotion
     * @type {boolean}
     * @memberof ItemRestriction
     */
    exclude_from_free_promotion?: boolean;
    /**
     * Items
     * @type {Array<ItemRestrictionItem>}
     * @memberof ItemRestriction
     */
    items?: Array<ItemRestrictionItem>;
    /**
     * Maximum quantity
     * @type {number}
     * @memberof ItemRestriction
     */
    maximum_quantity?: number;
    /**
     * Minimum quantity (defaults to 1)
     * @type {number}
     * @memberof ItemRestriction
     */
    minimum_quantity?: number;
    /**
     * Multiple of quantity
     * @type {number}
     * @memberof ItemRestriction
     */
    multiple_quantity?: number;
    /**
     * One per customer
     * @type {boolean}
     * @memberof ItemRestriction
     */
    one_per_customer?: boolean;
    /**
     * Purchase separately
     * @type {boolean}
     * @memberof ItemRestriction
     */
    purchase_separately?: boolean;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ItemRestriction)[] = ["exclude_coupon", "exclude_from_free_promotion", "items", "maximum_quantity", "minimum_quantity", "multiple_quantity", "one_per_customer", "purchase_separately"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ItemRestriction interface.
 */
export function instanceOfItemRestriction(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ItemRestrictionFromJSON(json: any): ItemRestriction {
    return ItemRestrictionFromJSONTyped(json, false);
}

export function ItemRestrictionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemRestriction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exclude_coupon': !exists(json, 'exclude_coupon') ? undefined : json['exclude_coupon'],
        'exclude_from_free_promotion': !exists(json, 'exclude_from_free_promotion') ? undefined : json['exclude_from_free_promotion'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(ItemRestrictionItemFromJSON)),
        'maximum_quantity': !exists(json, 'maximum_quantity') ? undefined : json['maximum_quantity'],
        'minimum_quantity': !exists(json, 'minimum_quantity') ? undefined : json['minimum_quantity'],
        'multiple_quantity': !exists(json, 'multiple_quantity') ? undefined : json['multiple_quantity'],
        'one_per_customer': !exists(json, 'one_per_customer') ? undefined : json['one_per_customer'],
        'purchase_separately': !exists(json, 'purchase_separately') ? undefined : json['purchase_separately'],
    };
}

export function ItemRestrictionToJSON(value?: ItemRestriction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exclude_coupon': value.exclude_coupon,
        'exclude_from_free_promotion': value.exclude_from_free_promotion,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(ItemRestrictionItemToJSON)),
        'maximum_quantity': value.maximum_quantity,
        'minimum_quantity': value.minimum_quantity,
        'multiple_quantity': value.multiple_quantity,
        'one_per_customer': value.one_per_customer,
        'purchase_separately': value.purchase_separately,
    };
}

