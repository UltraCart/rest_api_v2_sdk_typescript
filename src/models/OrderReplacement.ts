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
    OrderReplacementItem,
    OrderReplacementItemFromJSON,
    OrderReplacementItemFromJSONTyped,
    OrderReplacementItemToJSON,
} from './OrderReplacementItem';

/**
 * 
 * @export
 * @interface OrderReplacement
 */
export interface OrderReplacement {
    /**
     * Additional merchant notes to append to the new order
     * @type {string}
     * @memberof OrderReplacement
     */
    additional_merchant_notes_new_order?: string;
    /**
     * Additional merchant notes to append to the original order
     * @type {string}
     * @memberof OrderReplacement
     */
    additional_merchant_notes_original_order?: string;
    /**
     * Custom field 1
     * @type {string}
     * @memberof OrderReplacement
     */
    custom_field1?: string;
    /**
     * Custom field 2
     * @type {string}
     * @memberof OrderReplacement
     */
    custom_field2?: string;
    /**
     * Custom field 3
     * @type {string}
     * @memberof OrderReplacement
     */
    custom_field3?: string;
    /**
     * Custom field 4
     * @type {string}
     * @memberof OrderReplacement
     */
    custom_field4?: string;
    /**
     * Custom field 5
     * @type {string}
     * @memberof OrderReplacement
     */
    custom_field5?: string;
    /**
     * Custom field 6
     * @type {string}
     * @memberof OrderReplacement
     */
    custom_field6?: string;
    /**
     * Custom field 7
     * @type {string}
     * @memberof OrderReplacement
     */
    custom_field7?: string;
    /**
     * Set to true if this replacement shipment should be free for the customer.
     * @type {boolean}
     * @memberof OrderReplacement
     */
    free?: boolean;
    /**
     * Set to true if you want to immediately charge the payment on this order, otherwise it will go to Accounts Receivable.
     * @type {boolean}
     * @memberof OrderReplacement
     */
    immediate_charge?: boolean;
    /**
     * Items to include in the replacement order
     * @type {Array<OrderReplacementItem>}
     * @memberof OrderReplacement
     */
    items?: Array<OrderReplacementItem>;
    /**
     * Original order id
     * @type {string}
     * @memberof OrderReplacement
     */
    original_order_id?: string;
    /**
     * Shipping method to use.  If not specified or invalid then least cost shipping will take place.
     * @type {string}
     * @memberof OrderReplacement
     */
    shipping_method?: string;
    /**
     * Set to true if you want to skip the payment as if it was successful.
     * @type {boolean}
     * @memberof OrderReplacement
     */
    skip_payment?: boolean;
}

export function OrderReplacementFromJSON(json: any): OrderReplacement {
    return OrderReplacementFromJSONTyped(json, false);
}

export function OrderReplacementFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderReplacement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additional_merchant_notes_new_order': !exists(json, 'additional_merchant_notes_new_order') ? undefined : json['additional_merchant_notes_new_order'],
        'additional_merchant_notes_original_order': !exists(json, 'additional_merchant_notes_original_order') ? undefined : json['additional_merchant_notes_original_order'],
        'custom_field1': !exists(json, 'custom_field1') ? undefined : json['custom_field1'],
        'custom_field2': !exists(json, 'custom_field2') ? undefined : json['custom_field2'],
        'custom_field3': !exists(json, 'custom_field3') ? undefined : json['custom_field3'],
        'custom_field4': !exists(json, 'custom_field4') ? undefined : json['custom_field4'],
        'custom_field5': !exists(json, 'custom_field5') ? undefined : json['custom_field5'],
        'custom_field6': !exists(json, 'custom_field6') ? undefined : json['custom_field6'],
        'custom_field7': !exists(json, 'custom_field7') ? undefined : json['custom_field7'],
        'free': !exists(json, 'free') ? undefined : json['free'],
        'immediate_charge': !exists(json, 'immediate_charge') ? undefined : json['immediate_charge'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(OrderReplacementItemFromJSON)),
        'original_order_id': !exists(json, 'original_order_id') ? undefined : json['original_order_id'],
        'shipping_method': !exists(json, 'shipping_method') ? undefined : json['shipping_method'],
        'skip_payment': !exists(json, 'skip_payment') ? undefined : json['skip_payment'],
    };
}

export function OrderReplacementToJSON(value?: OrderReplacement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additional_merchant_notes_new_order': value.additional_merchant_notes_new_order,
        'additional_merchant_notes_original_order': value.additional_merchant_notes_original_order,
        'custom_field1': value.custom_field1,
        'custom_field2': value.custom_field2,
        'custom_field3': value.custom_field3,
        'custom_field4': value.custom_field4,
        'custom_field5': value.custom_field5,
        'custom_field6': value.custom_field6,
        'custom_field7': value.custom_field7,
        'free': value.free,
        'immediate_charge': value.immediate_charge,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(OrderReplacementItemToJSON)),
        'original_order_id': value.original_order_id,
        'shipping_method': value.shipping_method,
        'skip_payment': value.skip_payment,
    };
}
