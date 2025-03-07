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
 * @interface LookupRequest
 */
export interface LookupRequest {
    /**
     * 
     * @type {string}
     * @memberof LookupRequest
     */
    category?: string;
    /**
     * 
     * @type {string}
     * @memberof LookupRequest
     */
    matches?: string;
    /**
     * 
     * @type {number}
     * @memberof LookupRequest
     */
    max_hits?: number;
    /**
     * 
     * @type {string}
     * @memberof LookupRequest
     */
    storefront_host_name?: string;
    /**
     * 
     * @type {number}
     * @memberof LookupRequest
     */
    storefront_oid?: number;
    /**
     * 
     * @type {string}
     * @memberof LookupRequest
     */
    subcategory?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof LookupRequest)[] = ["category", "matches", "max_hits", "storefront_host_name", "storefront_oid", "subcategory"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the LookupRequest interface.
 */
export function instanceOfLookupRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LookupRequestFromJSON(json: any): LookupRequest {
    return LookupRequestFromJSONTyped(json, false);
}

export function LookupRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): LookupRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'category': !exists(json, 'category') ? undefined : json['category'],
        'matches': !exists(json, 'matches') ? undefined : json['matches'],
        'max_hits': !exists(json, 'max_hits') ? undefined : json['max_hits'],
        'storefront_host_name': !exists(json, 'storefront_host_name') ? undefined : json['storefront_host_name'],
        'storefront_oid': !exists(json, 'storefront_oid') ? undefined : json['storefront_oid'],
        'subcategory': !exists(json, 'subcategory') ? undefined : json['subcategory'],
    };
}

export function LookupRequestToJSON(value?: LookupRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'category': value.category,
        'matches': value.matches,
        'max_hits': value.max_hits,
        'storefront_host_name': value.storefront_host_name,
        'storefront_oid': value.storefront_oid,
        'subcategory': value.subcategory,
    };
}

