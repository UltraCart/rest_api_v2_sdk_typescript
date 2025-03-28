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
    Cart,
    CartFromJSON,
    CartFromJSONTyped,
    CartToJSON,
} from './Cart';

/**
 * 
 * @export
 * @interface CheckoutHandoffResponse
 */
export interface CheckoutHandoffResponse {
    /**
     * 
     * @type {Cart}
     * @memberof CheckoutHandoffResponse
     */
    cart?: Cart;
    /**
     * Errors that occurred which are preventing the handoff operation.  Display these to the customer.
     * @type {Array<string>}
     * @memberof CheckoutHandoffResponse
     */
    errors?: Array<string>;
    /**
     * The URL that you should redirect the customers browser to
     * @type {string}
     * @memberof CheckoutHandoffResponse
     */
    redirect_to_url?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof CheckoutHandoffResponse)[] = ["cart", "errors", "redirect_to_url"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the CheckoutHandoffResponse interface.
 */
export function instanceOfCheckoutHandoffResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CheckoutHandoffResponseFromJSON(json: any): CheckoutHandoffResponse {
    return CheckoutHandoffResponseFromJSONTyped(json, false);
}

export function CheckoutHandoffResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CheckoutHandoffResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cart': !exists(json, 'cart') ? undefined : CartFromJSON(json['cart']),
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
        'redirect_to_url': !exists(json, 'redirect_to_url') ? undefined : json['redirect_to_url'],
    };
}

export function CheckoutHandoffResponseToJSON(value?: CheckoutHandoffResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cart': CartToJSON(value.cart),
        'errors': value.errors,
        'redirect_to_url': value.redirect_to_url,
    };
}

