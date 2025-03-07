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
 * @interface SingleSignOnAuthorizeRequest
 */
export interface SingleSignOnAuthorizeRequest {
    /**
     * The URL that the customer should be redirected to after they have approved a single sign on session.
     * @type {string}
     * @memberof SingleSignOnAuthorizeRequest
     */
    redirect_uri?: string;
    /**
     * An optional state variable that you provide.  It will be returned to you on the redirect.  You can inspect the state to validate the request is legitimate.  We recommend using this field.
     * @type {string}
     * @memberof SingleSignOnAuthorizeRequest
     */
    state?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof SingleSignOnAuthorizeRequest)[] = ["redirect_uri", "state"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the SingleSignOnAuthorizeRequest interface.
 */
export function instanceOfSingleSignOnAuthorizeRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SingleSignOnAuthorizeRequestFromJSON(json: any): SingleSignOnAuthorizeRequest {
    return SingleSignOnAuthorizeRequestFromJSONTyped(json, false);
}

export function SingleSignOnAuthorizeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): SingleSignOnAuthorizeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'redirect_uri': !exists(json, 'redirect_uri') ? undefined : json['redirect_uri'],
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function SingleSignOnAuthorizeRequestToJSON(value?: SingleSignOnAuthorizeRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'redirect_uri': value.redirect_uri,
        'state': value.state,
    };
}

