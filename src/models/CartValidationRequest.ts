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
 * @interface CartValidationRequest
 */
export interface CartValidationRequest {
    /**
     * 
     * @type {Cart}
     * @memberof CartValidationRequest
     */
    cart?: Cart;
    /**
     * Checks to perform
     * @type {Array<string>}
     * @memberof CartValidationRequest
     */
    checks?: Array<string>;
}

export function CartValidationRequestFromJSON(json: any): CartValidationRequest {
    return CartValidationRequestFromJSONTyped(json, false);
}

export function CartValidationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartValidationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cart': !exists(json, 'cart') ? undefined : CartFromJSON(json['cart']),
        'checks': !exists(json, 'checks') ? undefined : json['checks'],
    };
}

export function CartValidationRequestToJSON(value?: CartValidationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cart': CartToJSON(value.cart),
        'checks': value.checks,
    };
}
