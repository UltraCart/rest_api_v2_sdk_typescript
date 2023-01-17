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
 * @interface ApplyLibraryItemRequest
 */
export interface ApplyLibraryItemRequest {
    /**
     * Normal emails are applied to an existing email object, so when requesting a library item to be applied to an email, supply the email uuid.  This is only for normal emails.  Transactional emails do not have a uuid.
     * @type {string}
     * @memberof ApplyLibraryItemRequest
     */
    email_uuid?: string;
    /**
     * Library item oid that you wish to apply to the given StoreFront
     * @type {number}
     * @memberof ApplyLibraryItemRequest
     */
    library_item_oid?: number;
    /**
     * The postcard uuid you wish to apply to a given StoreFront.
     * @type {string}
     * @memberof ApplyLibraryItemRequest
     */
    postcard_uuid?: string;
    /**
     * StoreFront oid where content originates necessary for tracking down relative assets
     * @type {number}
     * @memberof ApplyLibraryItemRequest
     */
    storefront_oid?: number;
}

export function ApplyLibraryItemRequestFromJSON(json: any): ApplyLibraryItemRequest {
    return ApplyLibraryItemRequestFromJSONTyped(json, false);
}

export function ApplyLibraryItemRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ApplyLibraryItemRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email_uuid': !exists(json, 'email_uuid') ? undefined : json['email_uuid'],
        'library_item_oid': !exists(json, 'library_item_oid') ? undefined : json['library_item_oid'],
        'postcard_uuid': !exists(json, 'postcard_uuid') ? undefined : json['postcard_uuid'],
        'storefront_oid': !exists(json, 'storefront_oid') ? undefined : json['storefront_oid'],
    };
}

export function ApplyLibraryItemRequestToJSON(value?: ApplyLibraryItemRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email_uuid': value.email_uuid,
        'library_item_oid': value.library_item_oid,
        'postcard_uuid': value.postcard_uuid,
        'storefront_oid': value.storefront_oid,
    };
}
