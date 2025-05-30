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
import {
    CartFinalizeOrderRequestOptions,
    CartFinalizeOrderRequestOptionsFromJSON,
    CartFinalizeOrderRequestOptionsFromJSONTyped,
    CartFinalizeOrderRequestOptionsToJSON,
} from './CartFinalizeOrderRequestOptions';

/**
 * 
 * @export
 * @interface CartFinalizeOrderRequest
 */
export interface CartFinalizeOrderRequest {
    /**
     * 
     * @type {Cart}
     * @memberof CartFinalizeOrderRequest
     */
    cart?: Cart;
    /**
     * 
     * @type {CartFinalizeOrderRequestOptions}
     * @memberof CartFinalizeOrderRequest
     */
    options?: CartFinalizeOrderRequestOptions;
}



/**
 * Check if a given object implements the CartFinalizeOrderRequest interface.
 */
export function instanceOfCartFinalizeOrderRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CartFinalizeOrderRequestFromJSON(json: any): CartFinalizeOrderRequest {
    return CartFinalizeOrderRequestFromJSONTyped(json, false);
}

export function CartFinalizeOrderRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartFinalizeOrderRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cart': !exists(json, 'cart') ? undefined : CartFromJSON(json['cart']),
        'options': !exists(json, 'options') ? undefined : CartFinalizeOrderRequestOptionsFromJSON(json['options']),
    };
}

export function CartFinalizeOrderRequestToJSON(value?: CartFinalizeOrderRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cart': CartToJSON(value.cart),
        'options': CartFinalizeOrderRequestOptionsToJSON(value.options),
    };
}

