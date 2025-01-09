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
 * @interface CartPaymentHealthBenefitCard
 */
export interface CartPaymentHealthBenefitCard {
    /**
     * Health benefit expiration month (1-12)
     * @type {number}
     * @memberof CartPaymentHealthBenefitCard
     */
    health_benefit_card_expiration_month?: number;
    /**
     * Health benefit card expiration year (four digit year)
     * @type {number}
     * @memberof CartPaymentHealthBenefitCard
     */
    health_benefit_card_expiration_year?: number;
    /**
     * Health benefit card number (masked to the last 4)
     * @type {string}
     * @memberof CartPaymentHealthBenefitCard
     */
    health_benefit_card_number?: string;
    /**
     * Hosted field token for the card number
     * @type {string}
     * @memberof CartPaymentHealthBenefitCard
     */
    health_benefit_card_number_token?: string;
    /**
     * Health benefit card verification number (masked)
     * @type {string}
     * @memberof CartPaymentHealthBenefitCard
     */
    health_benefit_card_verification_number?: string;
    /**
     * Hosted field token for the health benefit card verification number
     * @type {string}
     * @memberof CartPaymentHealthBenefitCard
     */
    health_benefit_card_verification_number_token?: string;
}

export function CartPaymentHealthBenefitCardFromJSON(json: any): CartPaymentHealthBenefitCard {
    return CartPaymentHealthBenefitCardFromJSONTyped(json, false);
}

export function CartPaymentHealthBenefitCardFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartPaymentHealthBenefitCard {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'health_benefit_card_expiration_month': !exists(json, 'health_benefit_card_expiration_month') ? undefined : json['health_benefit_card_expiration_month'],
        'health_benefit_card_expiration_year': !exists(json, 'health_benefit_card_expiration_year') ? undefined : json['health_benefit_card_expiration_year'],
        'health_benefit_card_number': !exists(json, 'health_benefit_card_number') ? undefined : json['health_benefit_card_number'],
        'health_benefit_card_number_token': !exists(json, 'health_benefit_card_number_token') ? undefined : json['health_benefit_card_number_token'],
        'health_benefit_card_verification_number': !exists(json, 'health_benefit_card_verification_number') ? undefined : json['health_benefit_card_verification_number'],
        'health_benefit_card_verification_number_token': !exists(json, 'health_benefit_card_verification_number_token') ? undefined : json['health_benefit_card_verification_number_token'],
    };
}

export function CartPaymentHealthBenefitCardToJSON(value?: CartPaymentHealthBenefitCard | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'health_benefit_card_expiration_month': value.health_benefit_card_expiration_month,
        'health_benefit_card_expiration_year': value.health_benefit_card_expiration_year,
        'health_benefit_card_number': value.health_benefit_card_number,
        'health_benefit_card_number_token': value.health_benefit_card_number_token,
        'health_benefit_card_verification_number': value.health_benefit_card_verification_number,
        'health_benefit_card_verification_number_token': value.health_benefit_card_verification_number_token,
    };
}
