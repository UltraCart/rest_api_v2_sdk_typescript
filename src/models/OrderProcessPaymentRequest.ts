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
 * @interface OrderProcessPaymentRequest
 */
export interface OrderProcessPaymentRequest {
    /**
     * Specific amount to bill (optional).  If not specified the total of the order is billed.
     * @type {number}
     * @memberof OrderProcessPaymentRequest
     */
    amount?: number;
    /**
     * Card verification number token from hosted fields used during credit card transaction processing (optional)
     * @type {string}
     * @memberof OrderProcessPaymentRequest
     */
    card_verification_number_token?: string;
}

export function OrderProcessPaymentRequestFromJSON(json: any): OrderProcessPaymentRequest {
    return OrderProcessPaymentRequestFromJSONTyped(json, false);
}

export function OrderProcessPaymentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderProcessPaymentRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'card_verification_number_token': !exists(json, 'card_verification_number_token') ? undefined : json['card_verification_number_token'],
    };
}

export function OrderProcessPaymentRequestToJSON(value?: OrderProcessPaymentRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'card_verification_number_token': value.card_verification_number_token,
    };
}
