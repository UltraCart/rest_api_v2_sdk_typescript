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
 * @interface CustomerWishListItemsResponse
 */
export interface CustomerWishListItemsResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof CustomerWishListItemsResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof CustomerWishListItemsResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof CustomerWishListItemsResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof CustomerWishListItemsResponse
     */
    warning?: Warning;
    /**
     * 
     * @type {Array<CustomerWishListItem>}
     * @memberof CustomerWishListItemsResponse
     */
    wishlist_items?: Array<CustomerWishListItem>;
}



/**
 * Check if a given object implements the CustomerWishListItemsResponse interface.
 */
export function instanceOfCustomerWishListItemsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerWishListItemsResponseFromJSON(json: any): CustomerWishListItemsResponse {
    return CustomerWishListItemsResponseFromJSONTyped(json, false);
}

export function CustomerWishListItemsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerWishListItemsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
        'wishlist_items': !exists(json, 'wishlist_items') ? undefined : ((json['wishlist_items'] as Array<any>).map(CustomerWishListItemFromJSON)),
    };
}

export function CustomerWishListItemsResponseToJSON(value?: CustomerWishListItemsResponse | null): any {
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
        'wishlist_items': value.wishlist_items === undefined ? undefined : ((value.wishlist_items as Array<any>).map(CustomerWishListItemToJSON)),
    };
}

