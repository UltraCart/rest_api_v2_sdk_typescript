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
 * @interface CartPaymentCreditCard
 */
export interface CartPaymentCreditCard {
    /**
     * Card expiration month (1-12)
     * @type {number}
     * @memberof CartPaymentCreditCard
     */
    card_expiration_month?: number;
    /**
     * Card expiration year (four digit year)
     * @type {number}
     * @memberof CartPaymentCreditCard
     */
    card_expiration_year?: number;
    /**
     * Card number (masked to the last 4)
     * @type {string}
     * @memberof CartPaymentCreditCard
     */
    card_number?: string;
    /**
     * Hosted field token for the card number
     * @type {string}
     * @memberof CartPaymentCreditCard
     */
    card_number_token?: string;
    /**
     * Card type
     * @type {string}
     * @memberof CartPaymentCreditCard
     */
    card_type?: string;
    /**
     * Card verification number (masked)
     * @type {string}
     * @memberof CartPaymentCreditCard
     */
    card_verification_number?: string;
    /**
     * Hosted field token for the card verification number
     * @type {string}
     * @memberof CartPaymentCreditCard
     */
    card_verification_number_token?: string;
    /**
     * ID of the stored credit card to use
     * @type {number}
     * @memberof CartPaymentCreditCard
     */
    customer_profile_credit_card_id?: number;
    /**
     * True if the customer wants to store the card on their profile for future re-use
     * @type {boolean}
     * @memberof CartPaymentCreditCard
     */
    store_credit_card?: boolean;
}

export function CartPaymentCreditCardFromJSON(json: any): CartPaymentCreditCard {
    return CartPaymentCreditCardFromJSONTyped(json, false);
}

export function CartPaymentCreditCardFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartPaymentCreditCard {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'card_expiration_month': !exists(json, 'card_expiration_month') ? undefined : json['card_expiration_month'],
        'card_expiration_year': !exists(json, 'card_expiration_year') ? undefined : json['card_expiration_year'],
        'card_number': !exists(json, 'card_number') ? undefined : json['card_number'],
        'card_number_token': !exists(json, 'card_number_token') ? undefined : json['card_number_token'],
        'card_type': !exists(json, 'card_type') ? undefined : json['card_type'],
        'card_verification_number': !exists(json, 'card_verification_number') ? undefined : json['card_verification_number'],
        'card_verification_number_token': !exists(json, 'card_verification_number_token') ? undefined : json['card_verification_number_token'],
        'customer_profile_credit_card_id': !exists(json, 'customer_profile_credit_card_id') ? undefined : json['customer_profile_credit_card_id'],
        'store_credit_card': !exists(json, 'store_credit_card') ? undefined : json['store_credit_card'],
    };
}

export function CartPaymentCreditCardToJSON(value?: CartPaymentCreditCard | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'card_expiration_month': value.card_expiration_month,
        'card_expiration_year': value.card_expiration_year,
        'card_number': value.card_number,
        'card_number_token': value.card_number_token,
        'card_type': value.card_type,
        'card_verification_number': value.card_verification_number,
        'card_verification_number_token': value.card_verification_number_token,
        'customer_profile_credit_card_id': value.customer_profile_credit_card_id,
        'store_credit_card': value.store_credit_card,
    };
}
