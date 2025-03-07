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
    CustomerWishListItem,
    CustomerWishListItemFromJSON,
    CustomerWishListItemFromJSONTyped,
    CustomerWishListItemToJSON,
} from './CustomerWishListItem';
import {
    ModelError,
    ModelErrorFromJSON,
    ModelErrorFromJSONTyped,
    ModelErrorToJSON,
} from './ModelError';
import {
    ResponseMetadata,
    ResponseMetadataFromJSON,
    ResponseMetadataFromJSONTyped,
    ResponseMetadataToJSON,
} from './ResponseMetadata';
import {
    Warning,
    WarningFromJSON,
    WarningFromJSONTyped,
    WarningToJSON,
} from './Warning';

/**
 * 
 * @export
 * @interface CustomerWishListItemResponse
 */
export interface CustomerWishListItemResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof CustomerWishListItemResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof CustomerWishListItemResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof CustomerWishListItemResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof CustomerWishListItemResponse
     */
    warning?: Warning;
    /**
     * 
     * @type {CustomerWishListItem}
     * @memberof CustomerWishListItemResponse
     */
    wishlist_item?: CustomerWishListItem;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof CustomerWishListItemResponse)[] = ["error", "metadata", "success", "warning", "wishlist_item"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the CustomerWishListItemResponse interface.
 */
export function instanceOfCustomerWishListItemResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerWishListItemResponseFromJSON(json: any): CustomerWishListItemResponse {
    return CustomerWishListItemResponseFromJSONTyped(json, false);
}

export function CustomerWishListItemResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerWishListItemResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
        'wishlist_item': !exists(json, 'wishlist_item') ? undefined : CustomerWishListItemFromJSON(json['wishlist_item']),
    };
}

export function CustomerWishListItemResponseToJSON(value?: CustomerWishListItemResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
        'wishlist_item': CustomerWishListItemToJSON(value.wishlist_item),
    };
}

