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
    Order,
    OrderFromJSON,
    OrderFromJSONTyped,
    OrderToJSON,
} from './Order';

/**
 * 
 * @export
 * @interface ChargebackDispute
 */
export interface ChargebackDispute {
    /**
     * Account number
     * @type {string}
     * @memberof ChargebackDispute
     */
    account_number?: string;
    /**
     * Adjustment request text
     * @type {string}
     * @memberof ChargebackDispute
     */
    adjustment_request_text?: string;
    /**
     * Amount
     * @type {number}
     * @memberof ChargebackDispute
     */
    amount?: number;
    /**
     * Auth code
     * @type {string}
     * @memberof ChargebackDispute
     */
    auth_code?: string;
    /**
     * Case number
     * @type {string}
     * @memberof ChargebackDispute
     */
    case_number?: string;
    /**
     * Chargeback Dispute Oid
     * @type {number}
     * @memberof ChargebackDispute
     */
    chargeback_dispute_oid?: number;
    /**
     * Chargeback dts
     * @type {string}
     * @memberof ChargebackDispute
     */
    chargeback_dts?: string;
    /**
     * Currency
     * @type {string}
     * @memberof ChargebackDispute
     */
    currency?: string;
    /**
     * Customer care notes
     * @type {string}
     * @memberof ChargebackDispute
     */
    customer_care_notes?: string;
    /**
     * Encryption key
     * @type {string}
     * @memberof ChargebackDispute
     */
    encryption_key?: string;
    /**
     * Expiration Dts
     * @type {string}
     * @memberof ChargebackDispute
     */
    expiration_dts?: string;
    /**
     * Fax failure reason
     * @type {string}
     * @memberof ChargebackDispute
     */
    fax_failure_reason?: string;
    /**
     * Fax number
     * @type {string}
     * @memberof ChargebackDispute
     */
    fax_number?: string;
    /**
     * Fax transaction id
     * @type {number}
     * @memberof ChargebackDispute
     */
    fax_transaction_id?: number;
    /**
     * icsid
     * @type {string}
     * @memberof ChargebackDispute
     */
    icsid?: string;
    /**
     * Merchant account profile oid
     * @type {number}
     * @memberof ChargebackDispute
     */
    merchant_account_profile_oid?: number;
    /**
     * 
     * @type {Order}
     * @memberof ChargebackDispute
     */
    order?: Order;
    /**
     * Order Id
     * @type {string}
     * @memberof ChargebackDispute
     */
    order_id?: string;
    /**
     * Partial card number
     * @type {string}
     * @memberof ChargebackDispute
     */
    partial_card_number?: string;
    /**
     * PDF file oid
     * @type {string}
     * @memberof ChargebackDispute
     */
    pdf_file_oid?: string;
    /**
     * Reason code
     * @type {string}
     * @memberof ChargebackDispute
     */
    reason_code?: string;
    /**
     * Status
     * @type {string}
     * @memberof ChargebackDispute
     */
    status?: string;
    /**
     * Website URL
     * @type {string}
     * @memberof ChargebackDispute
     */
    website_url?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ChargebackDispute)[] = ["account_number", "adjustment_request_text", "amount", "auth_code", "case_number", "chargeback_dispute_oid", "chargeback_dts", "currency", "customer_care_notes", "encryption_key", "expiration_dts", "fax_failure_reason", "fax_number", "fax_transaction_id", "icsid", "merchant_account_profile_oid", "order", "order_id", "partial_card_number", "pdf_file_oid", "reason_code", "status", "website_url"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ChargebackDispute interface.
 */
export function instanceOfChargebackDispute(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChargebackDisputeFromJSON(json: any): ChargebackDispute {
    return ChargebackDisputeFromJSONTyped(json, false);
}

export function ChargebackDisputeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChargebackDispute {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account_number': !exists(json, 'account_number') ? undefined : json['account_number'],
        'adjustment_request_text': !exists(json, 'adjustment_request_text') ? undefined : json['adjustment_request_text'],
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'auth_code': !exists(json, 'auth_code') ? undefined : json['auth_code'],
        'case_number': !exists(json, 'case_number') ? undefined : json['case_number'],
        'chargeback_dispute_oid': !exists(json, 'chargeback_dispute_oid') ? undefined : json['chargeback_dispute_oid'],
        'chargeback_dts': !exists(json, 'chargeback_dts') ? undefined : json['chargeback_dts'],
        'currency': !exists(json, 'currency') ? undefined : json['currency'],
        'customer_care_notes': !exists(json, 'customer_care_notes') ? undefined : json['customer_care_notes'],
        'encryption_key': !exists(json, 'encryption_key') ? undefined : json['encryption_key'],
        'expiration_dts': !exists(json, 'expiration_dts') ? undefined : json['expiration_dts'],
        'fax_failure_reason': !exists(json, 'fax_failure_reason') ? undefined : json['fax_failure_reason'],
        'fax_number': !exists(json, 'fax_number') ? undefined : json['fax_number'],
        'fax_transaction_id': !exists(json, 'fax_transaction_id') ? undefined : json['fax_transaction_id'],
        'icsid': !exists(json, 'icsid') ? undefined : json['icsid'],
        'merchant_account_profile_oid': !exists(json, 'merchant_account_profile_oid') ? undefined : json['merchant_account_profile_oid'],
        'order': !exists(json, 'order') ? undefined : OrderFromJSON(json['order']),
        'order_id': !exists(json, 'order_id') ? undefined : json['order_id'],
        'partial_card_number': !exists(json, 'partial_card_number') ? undefined : json['partial_card_number'],
        'pdf_file_oid': !exists(json, 'pdf_file_oid') ? undefined : json['pdf_file_oid'],
        'reason_code': !exists(json, 'reason_code') ? undefined : json['reason_code'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'website_url': !exists(json, 'website_url') ? undefined : json['website_url'],
    };
}

export function ChargebackDisputeToJSON(value?: ChargebackDispute | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_number': value.account_number,
        'adjustment_request_text': value.adjustment_request_text,
        'amount': value.amount,
        'auth_code': value.auth_code,
        'case_number': value.case_number,
        'chargeback_dispute_oid': value.chargeback_dispute_oid,
        'chargeback_dts': value.chargeback_dts,
        'currency': value.currency,
        'customer_care_notes': value.customer_care_notes,
        'encryption_key': value.encryption_key,
        'expiration_dts': value.expiration_dts,
        'fax_failure_reason': value.fax_failure_reason,
        'fax_number': value.fax_number,
        'fax_transaction_id': value.fax_transaction_id,
        'icsid': value.icsid,
        'merchant_account_profile_oid': value.merchant_account_profile_oid,
        'order': OrderToJSON(value.order),
        'order_id': value.order_id,
        'partial_card_number': value.partial_card_number,
        'pdf_file_oid': value.pdf_file_oid,
        'reason_code': value.reason_code,
        'status': value.status,
        'website_url': value.website_url,
    };
}

