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
 * @interface OrderAffiliateLedger
 */
export interface OrderAffiliateLedger {
    /**
     * UltraCart user name that assigned this commission if manually assigned
     * @type {string}
     * @memberof OrderAffiliateLedger
     */
    assigned_by_user?: string;
    /**
     * Item ID that this ledger record is associated with
     * @type {string}
     * @memberof OrderAffiliateLedger
     */
    item_id?: string;
    /**
     * Tier number of this affiliate in the commission calculation
     * @type {number}
     * @memberof OrderAffiliateLedger
     */
    tier_number?: number;
    /**
     * Amount of the transaction
     * @type {number}
     * @memberof OrderAffiliateLedger
     */
    transaction_amount?: number;
    /**
     * The amount that has been paid so far on the transaction
     * @type {number}
     * @memberof OrderAffiliateLedger
     */
    transaction_amount_paid?: number;
    /**
     * The date/time that the affiliate ledger was generated for the transaction
     * @type {string}
     * @memberof OrderAffiliateLedger
     */
    transaction_dts?: string;
    /**
     * Details of the transaction suitable for display to the affiliate
     * @type {string}
     * @memberof OrderAffiliateLedger
     */
    transaction_memo?: string;
    /**
     * The percentage earned on the transaction
     * @type {number}
     * @memberof OrderAffiliateLedger
     */
    transaction_percentage?: number;
    /**
     * The state of the transaction
     * @type {string}
     * @memberof OrderAffiliateLedger
     */
    transaction_state?: OrderAffiliateLedgerTransactionStateEnum;
}



/**
 * @export
 */
export const OrderAffiliateLedgerTransactionStateEnum = {
    Pending: 'Pending',
    Posted: 'Posted',
    Approved: 'Approved',
    Paid: 'Paid',
    Rejected: 'Rejected',
    PartiallyPaid: 'Partially Paid'
} as const;
export type OrderAffiliateLedgerTransactionStateEnum = typeof OrderAffiliateLedgerTransactionStateEnum[keyof typeof OrderAffiliateLedgerTransactionStateEnum];


/**
 * Check if a given object implements the OrderAffiliateLedger interface.
 */
export function instanceOfOrderAffiliateLedger(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderAffiliateLedgerFromJSON(json: any): OrderAffiliateLedger {
    return OrderAffiliateLedgerFromJSONTyped(json, false);
}

export function OrderAffiliateLedgerFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderAffiliateLedger {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'assigned_by_user': !exists(json, 'assigned_by_user') ? undefined : json['assigned_by_user'],
        'item_id': !exists(json, 'item_id') ? undefined : json['item_id'],
        'tier_number': !exists(json, 'tier_number') ? undefined : json['tier_number'],
        'transaction_amount': !exists(json, 'transaction_amount') ? undefined : json['transaction_amount'],
        'transaction_amount_paid': !exists(json, 'transaction_amount_paid') ? undefined : json['transaction_amount_paid'],
        'transaction_dts': !exists(json, 'transaction_dts') ? undefined : json['transaction_dts'],
        'transaction_memo': !exists(json, 'transaction_memo') ? undefined : json['transaction_memo'],
        'transaction_percentage': !exists(json, 'transaction_percentage') ? undefined : json['transaction_percentage'],
        'transaction_state': !exists(json, 'transaction_state') ? undefined : json['transaction_state'],
    };
}

export function OrderAffiliateLedgerToJSON(value?: OrderAffiliateLedger | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'assigned_by_user': value.assigned_by_user,
        'item_id': value.item_id,
        'tier_number': value.tier_number,
        'transaction_amount': value.transaction_amount,
        'transaction_amount_paid': value.transaction_amount_paid,
        'transaction_dts': value.transaction_dts,
        'transaction_memo': value.transaction_memo,
        'transaction_percentage': value.transaction_percentage,
        'transaction_state': value.transaction_state,
    };
}

