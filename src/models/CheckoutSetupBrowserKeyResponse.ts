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
 * @interface CheckoutSetupBrowserKeyResponse
 */
export interface CheckoutSetupBrowserKeyResponse {
    /**
     * Browser key that is used to authenticate against the new linked application.
     * @type {string}
     * @memberof CheckoutSetupBrowserKeyResponse
     */
    browser_key?: string;
}



/**
 * Check if a given object implements the CheckoutSetupBrowserKeyResponse interface.
 */
export function instanceOfCheckoutSetupBrowserKeyResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CheckoutSetupBrowserKeyResponseFromJSON(json: any): CheckoutSetupBrowserKeyResponse {
    return CheckoutSetupBrowserKeyResponseFromJSONTyped(json, false);
}

export function CheckoutSetupBrowserKeyResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckoutSetupBrowserKeyResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'browser_key': !exists(json, 'browser_key') ? undefined : json['browser_key'],
    };
}

export function CheckoutSetupBrowserKeyResponseToJSON(value?: CheckoutSetupBrowserKeyResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'browser_key': value.browser_key,
    };
}

