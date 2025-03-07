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
    AutoOrderItem,
    AutoOrderItemFromJSON,
    AutoOrderItemFromJSONTyped,
    AutoOrderItemToJSON,
} from './AutoOrderItem';
import {
    Order,
    OrderFromJSON,
    OrderFromJSONTyped,
    OrderToJSON,
} from './Order';

/**
 * 
 * @export
 * @interface OrderAutoOrder
 */
export interface OrderAutoOrder {
    /**
     * Unique code assigned to this auto order
     * @type {string}
     * @memberof OrderAutoOrder
     */
    auto_order_code?: string;
    /**
     * Auto order object identifier
     * @type {number}
     * @memberof OrderAutoOrder
     */
    auto_order_oid?: number;
    /**
     * Cancel this auto order after X additional rebills
     * @type {number}
     * @memberof OrderAutoOrder
     */
    cancel_after_next_x_orders?: number;
    /**
     * True if the auto order was canceled because the customer purchased a downgrade item
     * @type {boolean}
     * @memberof OrderAutoOrder
     */
    cancel_downgrade?: boolean;
    /**
     * The reason this auto order was canceled by either merchant or customer
     * @type {string}
     * @memberof OrderAutoOrder
     */
    cancel_reason?: string;
    /**
     * True if the auto order was canceled because the customer purchased an upgrade item
     * @type {boolean}
     * @memberof OrderAutoOrder
     */
    cancel_upgrade?: boolean;
    /**
     * The user that canceled the auto order
     * @type {string}
     * @memberof OrderAutoOrder
     */
    canceled_by_user?: string;
    /**
     * The date/time that the auto order was canceled
     * @type {string}
     * @memberof OrderAutoOrder
     */
    canceled_dts?: string;
    /**
     * True if the auto order ran successfully to completion
     * @type {boolean}
     * @memberof OrderAutoOrder
     */
    completed?: boolean;
    /**
     * The number of credit card attempts that have taken place
     * @type {number}
     * @memberof OrderAutoOrder
     */
    credit_card_attempt?: number;
    /**
     * The date/time the auto order was disabled due to failed rebills
     * @type {string}
     * @memberof OrderAutoOrder
     */
    disabled_dts?: string;
    /**
     * True if this auto order is enabled
     * @type {boolean}
     * @memberof OrderAutoOrder
     */
    enabled?: boolean;
    /**
     * The reason this auto order failed during the last rebill attempt
     * @type {string}
     * @memberof OrderAutoOrder
     */
    failure_reason?: string;
    /**
     * The items that are setup to rebill
     * @type {Array<AutoOrderItem>}
     * @memberof OrderAutoOrder
     */
    items?: Array<AutoOrderItem>;
    /**
     * The next time that the auto order will be attempted for processing
     * @type {string}
     * @memberof OrderAutoOrder
     */
    next_attempt?: string;
    /**
     * The original order id that this auto order is associated with.
     * @type {string}
     * @memberof OrderAutoOrder
     */
    original_order_id?: string;
    /**
     * Override the affiliate id given credit for rebills of this auto order
     * @type {number}
     * @memberof OrderAutoOrder
     */
    override_affiliate_id?: number;
    /**
     * Rebill orders that have taken place on this auto order
     * @type {Array<Order>}
     * @memberof OrderAutoOrder
     */
    rebill_orders?: Array<Order>;
    /**
     * The RTG code associated with this order for future rebills
     * @type {string}
     * @memberof OrderAutoOrder
     */
    rotating_transaction_gateway_code?: string;
    /**
     * The status of the auto order
     * @type {string}
     * @memberof OrderAutoOrder
     */
    status?: OrderAutoOrderStatusEnum;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof OrderAutoOrder)[] = ["auto_order_code", "auto_order_oid", "cancel_after_next_x_orders", "cancel_downgrade", "cancel_reason", "cancel_upgrade", "canceled_by_user", "canceled_dts", "completed", "credit_card_attempt", "disabled_dts", "enabled", "failure_reason", "items", "next_attempt", "original_order_id", "override_affiliate_id", "rebill_orders", "rotating_transaction_gateway_code", "status"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * @export
 */
export const OrderAutoOrderStatusEnum = {
    Active: 'active',
    Canceled: 'canceled',
    Disabled: 'disabled'
} as const;
export type OrderAutoOrderStatusEnum = typeof OrderAutoOrderStatusEnum[keyof typeof OrderAutoOrderStatusEnum];


/**
 * Check if a given object implements the OrderAutoOrder interface.
 */
export function instanceOfOrderAutoOrder(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderAutoOrderFromJSON(json: any): OrderAutoOrder {
    return OrderAutoOrderFromJSONTyped(json, false);
}

export function OrderAutoOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderAutoOrder {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'auto_order_code': !exists(json, 'auto_order_code') ? undefined : json['auto_order_code'],
        'auto_order_oid': !exists(json, 'auto_order_oid') ? undefined : json['auto_order_oid'],
        'cancel_after_next_x_orders': !exists(json, 'cancel_after_next_x_orders') ? undefined : json['cancel_after_next_x_orders'],
        'cancel_downgrade': !exists(json, 'cancel_downgrade') ? undefined : json['cancel_downgrade'],
        'cancel_reason': !exists(json, 'cancel_reason') ? undefined : json['cancel_reason'],
        'cancel_upgrade': !exists(json, 'cancel_upgrade') ? undefined : json['cancel_upgrade'],
        'canceled_by_user': !exists(json, 'canceled_by_user') ? undefined : json['canceled_by_user'],
        'canceled_dts': !exists(json, 'canceled_dts') ? undefined : json['canceled_dts'],
        'completed': !exists(json, 'completed') ? undefined : json['completed'],
        'credit_card_attempt': !exists(json, 'credit_card_attempt') ? undefined : json['credit_card_attempt'],
        'disabled_dts': !exists(json, 'disabled_dts') ? undefined : json['disabled_dts'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'failure_reason': !exists(json, 'failure_reason') ? undefined : json['failure_reason'],
        'items': !exists(json, 'items') ? undefined : ((json['items'] as Array<any>).map(AutoOrderItemFromJSON)),
        'next_attempt': !exists(json, 'next_attempt') ? undefined : json['next_attempt'],
        'original_order_id': !exists(json, 'original_order_id') ? undefined : json['original_order_id'],
        'override_affiliate_id': !exists(json, 'override_affiliate_id') ? undefined : json['override_affiliate_id'],
        'rebill_orders': !exists(json, 'rebill_orders') ? undefined : ((json['rebill_orders'] as Array<any>).map(OrderFromJSON)),
        'rotating_transaction_gateway_code': !exists(json, 'rotating_transaction_gateway_code') ? undefined : json['rotating_transaction_gateway_code'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function OrderAutoOrderToJSON(value?: OrderAutoOrder | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'auto_order_code': value.auto_order_code,
        'auto_order_oid': value.auto_order_oid,
        'cancel_after_next_x_orders': value.cancel_after_next_x_orders,
        'cancel_downgrade': value.cancel_downgrade,
        'cancel_reason': value.cancel_reason,
        'cancel_upgrade': value.cancel_upgrade,
        'canceled_by_user': value.canceled_by_user,
        'canceled_dts': value.canceled_dts,
        'completed': value.completed,
        'credit_card_attempt': value.credit_card_attempt,
        'disabled_dts': value.disabled_dts,
        'enabled': value.enabled,
        'failure_reason': value.failure_reason,
        'items': value.items === undefined ? undefined : ((value.items as Array<any>).map(AutoOrderItemToJSON)),
        'next_attempt': value.next_attempt,
        'original_order_id': value.original_order_id,
        'override_affiliate_id': value.override_affiliate_id,
        'rebill_orders': value.rebill_orders === undefined ? undefined : ((value.rebill_orders as Array<any>).map(OrderToJSON)),
        'rotating_transaction_gateway_code': value.rotating_transaction_gateway_code,
        'status': value.status,
    };
}

