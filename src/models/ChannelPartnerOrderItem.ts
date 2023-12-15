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
    ChannelPartnerOrderItemOption,
    ChannelPartnerOrderItemOptionFromJSON,
    ChannelPartnerOrderItemOptionFromJSONTyped,
    ChannelPartnerOrderItemOptionToJSON,
} from './ChannelPartnerOrderItemOption';

/**
 * 
 * @export
 * @interface ChannelPartnerOrderItem
 */
export interface ChannelPartnerOrderItem {
    /**
     * Arbitrary unit cost for this item that differs from the listed price
     * @type {number}
     * @memberof ChannelPartnerOrderItem
     */
    arbitrary_unit_cost?: number;
    /**
     * Optional date/time of the last rebill if this item is part of an auto (recurring) order
     * @type {string}
     * @memberof ChannelPartnerOrderItem
     */
    auto_order_last_rebill_dts?: string;
    /**
     * The frequency schedule for this item if this item is part of an auto (recurring) order
     * @type {string}
     * @memberof ChannelPartnerOrderItem
     */
    auto_order_schedule?: ChannelPartnerOrderItemAutoOrderScheduleEnum;
    /**
     * Item ID
     * @type {string}
     * @memberof ChannelPartnerOrderItem
     */
    merchant_item_id?: string;
    /**
     * Item options
     * @type {Array<ChannelPartnerOrderItemOption>}
     * @memberof ChannelPartnerOrderItem
     */
    options?: Array<ChannelPartnerOrderItemOption>;
    /**
     * Quantity
     * @type {number}
     * @memberof ChannelPartnerOrderItem
     */
    quantity?: number;
    /**
     * True if this item was an upsell item.
     * @type {boolean}
     * @memberof ChannelPartnerOrderItem
     */
    upsell?: boolean;
}


/**
 * @export
 */
export const ChannelPartnerOrderItemAutoOrderScheduleEnum = {
    Weekly: 'Weekly',
    Every10Days: 'Every 10 Days',
    Biweekly: 'Biweekly',
    Every24Days: 'Every 24 Days',
    Every28Days: 'Every 28 Days',
    Monthly: 'Monthly',
    Every45Days: 'Every 45 Days',
    Every2Months: 'Every 2 Months',
    Every3Months: 'Every 3 Months',
    Every4Months: 'Every 4 Months',
    Every6Months: 'Every 6 Months',
    Yearly: 'Yearly',
    Every4Weeks: 'Every 4 Weeks',
    Every6Weeks: 'Every 6 Weeks',
    Every8Weeks: 'Every 8 Weeks'
} as const;
export type ChannelPartnerOrderItemAutoOrderScheduleEnum = typeof ChannelPartnerOrderItemAutoOrderScheduleEnum[keyof typeof ChannelPartnerOrderItemAutoOrderScheduleEnum];


export function ChannelPartnerOrderItemFromJSON(json: any): ChannelPartnerOrderItem {
    return ChannelPartnerOrderItemFromJSONTyped(json, false);
}

export function ChannelPartnerOrderItemFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelPartnerOrderItem {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arbitrary_unit_cost': !exists(json, 'arbitrary_unit_cost') ? undefined : json['arbitrary_unit_cost'],
        'auto_order_last_rebill_dts': !exists(json, 'auto_order_last_rebill_dts') ? undefined : json['auto_order_last_rebill_dts'],
        'auto_order_schedule': !exists(json, 'auto_order_schedule') ? undefined : json['auto_order_schedule'],
        'merchant_item_id': !exists(json, 'merchant_item_id') ? undefined : json['merchant_item_id'],
        'options': !exists(json, 'options') ? undefined : ((json['options'] as Array<any>).map(ChannelPartnerOrderItemOptionFromJSON)),
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
        'upsell': !exists(json, 'upsell') ? undefined : json['upsell'],
    };
}

export function ChannelPartnerOrderItemToJSON(value?: ChannelPartnerOrderItem | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arbitrary_unit_cost': value.arbitrary_unit_cost,
        'auto_order_last_rebill_dts': value.auto_order_last_rebill_dts,
        'auto_order_schedule': value.auto_order_schedule,
        'merchant_item_id': value.merchant_item_id,
        'options': value.options === undefined ? undefined : ((value.options as Array<any>).map(ChannelPartnerOrderItemOptionToJSON)),
        'quantity': value.quantity,
        'upsell': value.upsell,
    };
}

