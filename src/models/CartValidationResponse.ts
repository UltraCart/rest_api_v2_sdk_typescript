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
 * @interface CartValidationResponse
 */
export interface CartValidationResponse {
    /**
     * 
     * @type {Cart}
     * @memberof CartValidationResponse
     */
    cart?: Cart;
    /**
     * Errors to display to the customer if they failed any of the validations checked
     * @type {Array<string>}
     * @memberof CartValidationResponse
     */
    errors?: Array<string>;
}

export function CartValidationResponseFromJSON(json: any): CartValidationResponse {
    return CartValidationResponseFromJSONTyped(json, false);
}

export function CartValidationResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartValidationResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cart': !exists(json, 'cart') ? undefined : CartFromJSON(json['cart']),
        'errors': !exists(json, 'errors') ? undefined : json['errors'],
    };
}

export function CartValidationResponseToJSON(value?: CartValidationResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cart': CartToJSON(value.cart),
        'errors': value.errors,
    };
}

