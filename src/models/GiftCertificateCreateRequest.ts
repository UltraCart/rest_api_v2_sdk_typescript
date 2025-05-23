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
 * @interface GiftCertificateCreateRequest
 */
export interface GiftCertificateCreateRequest {
    /**
     * Initial amount of this gift certificate.
     * @type {number}
     * @memberof GiftCertificateCreateRequest
     */
    amount?: number;
    /**
     * The email address (customer/owner) associated with this gift certificate.
     * @type {string}
     * @memberof GiftCertificateCreateRequest
     */
    email?: string;
    /**
     * Expiration date time.
     * @type {string}
     * @memberof GiftCertificateCreateRequest
     */
    expiration_dts?: string;
    /**
     * A brief description of how and/or why this gift certificate was created.
     * @type {string}
     * @memberof GiftCertificateCreateRequest
     */
    initial_ledger_description?: string;
    /**
     * Any internal details you wish to record about this gift certificate.
     * @type {string}
     * @memberof GiftCertificateCreateRequest
     */
    merchant_note?: string;
}



/**
 * Check if a given object implements the GiftCertificateCreateRequest interface.
 */
export function instanceOfGiftCertificateCreateRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GiftCertificateCreateRequestFromJSON(json: any): GiftCertificateCreateRequest {
    return GiftCertificateCreateRequestFromJSONTyped(json, false);
}

export function GiftCertificateCreateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): GiftCertificateCreateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'expiration_dts': !exists(json, 'expiration_dts') ? undefined : json['expiration_dts'],
        'initial_ledger_description': !exists(json, 'initial_ledger_description') ? undefined : json['initial_ledger_description'],
        'merchant_note': !exists(json, 'merchant_note') ? undefined : json['merchant_note'],
    };
}

export function GiftCertificateCreateRequestToJSON(value?: GiftCertificateCreateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'email': value.email,
        'expiration_dts': value.expiration_dts,
        'initial_ledger_description': value.initial_ledger_description,
        'merchant_note': value.merchant_note,
    };
}

