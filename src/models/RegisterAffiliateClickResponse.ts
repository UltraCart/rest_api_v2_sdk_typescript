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
 * @interface RegisterAffiliateClickResponse
 */
export interface RegisterAffiliateClickResponse {
    /**
     * The cookie max age to use
     * @type {number}
     * @memberof RegisterAffiliateClickResponse
     */
    cookie_max_age?: number;
    /**
     * The names of all the cookies to set on the browser
     * @type {Array<string>}
     * @memberof RegisterAffiliateClickResponse
     */
    cookie_names?: Array<string>;
    /**
     * The values of all the cookies to set on the browser
     * @type {Array<string>}
     * @memberof RegisterAffiliateClickResponse
     */
    cookie_values?: Array<string>;
    /**
     * True if a click was registered
     * @type {boolean}
     * @memberof RegisterAffiliateClickResponse
     */
    registered?: boolean;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof RegisterAffiliateClickResponse)[] = ["cookie_max_age", "cookie_names", "cookie_values", "registered"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the RegisterAffiliateClickResponse interface.
 */
export function instanceOfRegisterAffiliateClickResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RegisterAffiliateClickResponseFromJSON(json: any): RegisterAffiliateClickResponse {
    return RegisterAffiliateClickResponseFromJSONTyped(json, false);
}

export function RegisterAffiliateClickResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): RegisterAffiliateClickResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cookie_max_age': !exists(json, 'cookie_max_age') ? undefined : json['cookie_max_age'],
        'cookie_names': !exists(json, 'cookie_names') ? undefined : json['cookie_names'],
        'cookie_values': !exists(json, 'cookie_values') ? undefined : json['cookie_values'],
        'registered': !exists(json, 'registered') ? undefined : json['registered'],
    };
}

export function RegisterAffiliateClickResponseToJSON(value?: RegisterAffiliateClickResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cookie_max_age': value.cookie_max_age,
        'cookie_names': value.cookie_names,
        'cookie_values': value.cookie_values,
        'registered': value.registered,
    };
}

