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
 * @interface CartPaymentCheck
 */
export interface CartPaymentCheck {
    /**
     * Check number they are paying with
     * @type {number}
     * @memberof CartPaymentCheck
     */
    check_number?: number;
}



/**
 * Check if a given object implements the CartPaymentCheck interface.
 */
export function instanceOfCartPaymentCheck(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CartPaymentCheckFromJSON(json: any): CartPaymentCheck {
    return CartPaymentCheckFromJSONTyped(json, false);
}

export function CartPaymentCheckFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartPaymentCheck {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'check_number': !exists(json, 'check_number') ? undefined : json['check_number'],
    };
}

export function CartPaymentCheckToJSON(value?: CartPaymentCheck | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'check_number': value.check_number,
    };
}

