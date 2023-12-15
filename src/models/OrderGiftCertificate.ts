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
    Currency,
    CurrencyFromJSON,
    CurrencyFromJSONTyped,
    CurrencyToJSON,
} from './Currency';

/**
 * 
 * @export
 * @interface OrderGiftCertificate
 */
export interface OrderGiftCertificate {
    /**
     * 
     * @type {Currency}
     * @memberof OrderGiftCertificate
     */
    gift_certificate_amount?: Currency;
    /**
     * Gift certificate code used on the order
     * @type {string}
     * @memberof OrderGiftCertificate
     */
    gift_certificate_code?: string;
    /**
     * Gift certificate object identifier
     * @type {number}
     * @memberof OrderGiftCertificate
     */
    gift_certificate_oid?: number;
}

export function OrderGiftCertificateFromJSON(json: any): OrderGiftCertificate {
    return OrderGiftCertificateFromJSONTyped(json, false);
}

export function OrderGiftCertificateFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderGiftCertificate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'gift_certificate_amount': !exists(json, 'gift_certificate_amount') ? undefined : CurrencyFromJSON(json['gift_certificate_amount']),
        'gift_certificate_code': !exists(json, 'gift_certificate_code') ? undefined : json['gift_certificate_code'],
        'gift_certificate_oid': !exists(json, 'gift_certificate_oid') ? undefined : json['gift_certificate_oid'],
    };
}

export function OrderGiftCertificateToJSON(value?: OrderGiftCertificate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'gift_certificate_amount': CurrencyToJSON(value.gift_certificate_amount),
        'gift_certificate_code': value.gift_certificate_code,
        'gift_certificate_oid': value.gift_certificate_oid,
    };
}

