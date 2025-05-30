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
 * @interface OrderTransactionalMerchantNote
 */
export interface OrderTransactionalMerchantNote {
    /**
     * IP Address
     * @type {string}
     * @memberof OrderTransactionalMerchantNote
     */
    ip_address?: string;
    /**
     * note
     * @type {string}
     * @memberof OrderTransactionalMerchantNote
     */
    note?: string;
    /**
     * Timestamp when the note was added
     * @type {string}
     * @memberof OrderTransactionalMerchantNote
     */
    note_dts?: string;
    /**
     * User that wrote the merchant note
     * @type {string}
     * @memberof OrderTransactionalMerchantNote
     */
    user?: string;
}



/**
 * Check if a given object implements the OrderTransactionalMerchantNote interface.
 */
export function instanceOfOrderTransactionalMerchantNote(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderTransactionalMerchantNoteFromJSON(json: any): OrderTransactionalMerchantNote {
    return OrderTransactionalMerchantNoteFromJSONTyped(json, false);
}

export function OrderTransactionalMerchantNoteFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderTransactionalMerchantNote {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ip_address': !exists(json, 'ip_address') ? undefined : json['ip_address'],
        'note': !exists(json, 'note') ? undefined : json['note'],
        'note_dts': !exists(json, 'note_dts') ? undefined : json['note_dts'],
        'user': !exists(json, 'user') ? undefined : json['user'],
    };
}

export function OrderTransactionalMerchantNoteToJSON(value?: OrderTransactionalMerchantNote | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ip_address': value.ip_address,
        'note': value.note,
        'note_dts': value.note_dts,
        'user': value.user,
    };
}

