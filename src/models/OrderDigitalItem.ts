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
 * @interface OrderDigitalItem
 */
export interface OrderDigitalItem {
    /**
     * File size
     * @type {number}
     * @memberof OrderDigitalItem
     */
    file_size?: number;
    /**
     * Last download
     * @type {string}
     * @memberof OrderDigitalItem
     */
    last_download?: string;
    /**
     * IP address that performed the last download
     * @type {string}
     * @memberof OrderDigitalItem
     */
    last_download_ip_address?: string;
    /**
     * Original file name
     * @type {string}
     * @memberof OrderDigitalItem
     */
    original_filename?: string;
    /**
     * Item id associated with this item
     * @type {string}
     * @memberof OrderDigitalItem
     */
    product_code?: string;
    /**
     * Item description associated with this item
     * @type {string}
     * @memberof OrderDigitalItem
     */
    product_description?: string;
    /**
     * Remaining number of downloads
     * @type {number}
     * @memberof OrderDigitalItem
     */
    remaining_downloads?: number;
    /**
     * URL that the customer can click to download the specific digital item
     * @type {string}
     * @memberof OrderDigitalItem
     */
    url?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof OrderDigitalItem)[] = ["file_size", "last_download", "last_download_ip_address", "original_filename", "product_code", "product_description", "remaining_downloads", "url"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the OrderDigitalItem interface.
 */
export function instanceOfOrderDigitalItem(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderDigitalItemFromJSON(json: any): OrderDigitalItem {
    return OrderDigitalItemFromJSONTyped(json, false);
}

export function OrderDigitalItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderDigitalItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'file_size': !exists(json, 'file_size') ? undefined : json['file_size'],
        'last_download': !exists(json, 'last_download') ? undefined : json['last_download'],
        'last_download_ip_address': !exists(json, 'last_download_ip_address') ? undefined : json['last_download_ip_address'],
        'original_filename': !exists(json, 'original_filename') ? undefined : json['original_filename'],
        'product_code': !exists(json, 'product_code') ? undefined : json['product_code'],
        'product_description': !exists(json, 'product_description') ? undefined : json['product_description'],
        'remaining_downloads': !exists(json, 'remaining_downloads') ? undefined : json['remaining_downloads'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function OrderDigitalItemToJSON(value?: OrderDigitalItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'file_size': value.file_size,
        'last_download': value.last_download,
        'last_download_ip_address': value.last_download_ip_address,
        'original_filename': value.original_filename,
        'product_code': value.product_code,
        'product_description': value.product_description,
        'remaining_downloads': value.remaining_downloads,
        'url': value.url,
    };
}

