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
    OrderTransactionalMerchantNote,
    OrderTransactionalMerchantNoteFromJSON,
    OrderTransactionalMerchantNoteFromJSONTyped,
    OrderTransactionalMerchantNoteToJSON,
} from './OrderTransactionalMerchantNote';

/**
 * 
 * @export
 * @interface OrderInternal
 */
export interface OrderInternal {
    /**
     * True if the order has been exported to QuickBooks. If QuickBooks is not configured, then this will already be true
     * @type {boolean}
     * @memberof OrderInternal
     */
    exported_to_accounting?: boolean;
    /**
     * Merchant notes.  Full notes in non-transactional mode.  Just used to write a new merchant note when transaction merchant notes enabled.
     * @type {string}
     * @memberof OrderInternal
     */
    merchant_notes?: string;
    /**
     * If placed via the BEOE, this is the user that placed the order
     * @type {string}
     * @memberof OrderInternal
     */
    placed_by_user?: string;
    /**
     * User that issued the refund
     * @type {string}
     * @memberof OrderInternal
     */
    refund_by_user?: string;
    /**
     * Sales rep code associated with the order
     * @type {string}
     * @memberof OrderInternal
     */
    sales_rep_code?: string;
    /**
     * Transactional merchant notes
     * @type {Array<OrderTransactionalMerchantNote>}
     * @memberof OrderInternal
     */
    transactional_merchant_notes?: Array<OrderTransactionalMerchantNote>;
}



/**
 * Check if a given object implements the OrderInternal interface.
 */
export function instanceOfOrderInternal(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderInternalFromJSON(json: any): OrderInternal {
    return OrderInternalFromJSONTyped(json, false);
}

export function OrderInternalFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderInternal {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exported_to_accounting': !exists(json, 'exported_to_accounting') ? undefined : json['exported_to_accounting'],
        'merchant_notes': !exists(json, 'merchant_notes') ? undefined : json['merchant_notes'],
        'placed_by_user': !exists(json, 'placed_by_user') ? undefined : json['placed_by_user'],
        'refund_by_user': !exists(json, 'refund_by_user') ? undefined : json['refund_by_user'],
        'sales_rep_code': !exists(json, 'sales_rep_code') ? undefined : json['sales_rep_code'],
        'transactional_merchant_notes': !exists(json, 'transactional_merchant_notes') ? undefined : ((json['transactional_merchant_notes'] as Array<any>).map(OrderTransactionalMerchantNoteFromJSON)),
    };
}

export function OrderInternalToJSON(value?: OrderInternal | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exported_to_accounting': value.exported_to_accounting,
        'merchant_notes': value.merchant_notes,
        'placed_by_user': value.placed_by_user,
        'refund_by_user': value.refund_by_user,
        'sales_rep_code': value.sales_rep_code,
        'transactional_merchant_notes': value.transactional_merchant_notes === undefined ? undefined : ((value.transactional_merchant_notes as Array<any>).map(OrderTransactionalMerchantNoteToJSON)),
    };
}

