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
    CustomerLoyaltyLedger,
    CustomerLoyaltyLedgerFromJSON,
    CustomerLoyaltyLedgerFromJSONTyped,
    CustomerLoyaltyLedgerToJSON,
} from './CustomerLoyaltyLedger';
import {
    CustomerLoyaltyRedemption,
    CustomerLoyaltyRedemptionFromJSON,
    CustomerLoyaltyRedemptionFromJSONTyped,
    CustomerLoyaltyRedemptionToJSON,
} from './CustomerLoyaltyRedemption';
import {
    GiftCertificate,
    GiftCertificateFromJSON,
    GiftCertificateFromJSONTyped,
    GiftCertificateToJSON,
} from './GiftCertificate';

/**
 * 
 * @export
 * @interface CustomerLoyalty
 */
export interface CustomerLoyalty {
    /**
     * Current points
     * @type {number}
     * @memberof CustomerLoyalty
     */
    current_points?: number;
    /**
     * 
     * @type {GiftCertificate}
     * @memberof CustomerLoyalty
     */
    internal_gift_certificate?: GiftCertificate;
    /**
     * Loyalty Cashback / Store credit balance (internal gift certificate balance)
     * @type {string}
     * @memberof CustomerLoyalty
     */
    internal_gift_certificate_balance?: string;
    /**
     * Internal gift certificate oid used to tracking loyalty cashback / store credit.
     * @type {number}
     * @memberof CustomerLoyalty
     */
    internal_gift_certificate_oid?: number;
    /**
     * Ledger entries
     * @type {Array<CustomerLoyaltyLedger>}
     * @memberof CustomerLoyalty
     */
    ledger_entries?: Array<CustomerLoyaltyLedger>;
    /**
     * Pending Points
     * @type {number}
     * @memberof CustomerLoyalty
     */
    pending_points?: number;
    /**
     * Redemptions
     * @type {Array<CustomerLoyaltyRedemption>}
     * @memberof CustomerLoyalty
     */
    redemptions?: Array<CustomerLoyaltyRedemption>;
}



/**
 * Check if a given object implements the CustomerLoyalty interface.
 */
export function instanceOfCustomerLoyalty(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerLoyaltyFromJSON(json: any): CustomerLoyalty {
    return CustomerLoyaltyFromJSONTyped(json, false);
}

export function CustomerLoyaltyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerLoyalty {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'current_points': !exists(json, 'current_points') ? undefined : json['current_points'],
        'internal_gift_certificate': !exists(json, 'internal_gift_certificate') ? undefined : GiftCertificateFromJSON(json['internal_gift_certificate']),
        'internal_gift_certificate_balance': !exists(json, 'internal_gift_certificate_balance') ? undefined : json['internal_gift_certificate_balance'],
        'internal_gift_certificate_oid': !exists(json, 'internal_gift_certificate_oid') ? undefined : json['internal_gift_certificate_oid'],
        'ledger_entries': !exists(json, 'ledger_entries') ? undefined : ((json['ledger_entries'] as Array<any>).map(CustomerLoyaltyLedgerFromJSON)),
        'pending_points': !exists(json, 'pending_points') ? undefined : json['pending_points'],
        'redemptions': !exists(json, 'redemptions') ? undefined : ((json['redemptions'] as Array<any>).map(CustomerLoyaltyRedemptionFromJSON)),
    };
}

export function CustomerLoyaltyToJSON(value?: CustomerLoyalty | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'current_points': value.current_points,
        'internal_gift_certificate': GiftCertificateToJSON(value.internal_gift_certificate),
        'internal_gift_certificate_balance': value.internal_gift_certificate_balance,
        'internal_gift_certificate_oid': value.internal_gift_certificate_oid,
        'ledger_entries': value.ledger_entries === undefined ? undefined : ((value.ledger_entries as Array<any>).map(CustomerLoyaltyLedgerToJSON)),
        'pending_points': value.pending_points,
        'redemptions': value.redemptions === undefined ? undefined : ((value.redemptions as Array<any>).map(CustomerLoyaltyRedemptionToJSON)),
    };
}

