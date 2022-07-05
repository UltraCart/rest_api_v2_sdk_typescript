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
    ItemAutoOrderStepArbitraryUnitCostSchedule,
    ItemAutoOrderStepArbitraryUnitCostScheduleFromJSON,
    ItemAutoOrderStepArbitraryUnitCostScheduleFromJSONTyped,
    ItemAutoOrderStepArbitraryUnitCostScheduleToJSON,
} from './ItemAutoOrderStepArbitraryUnitCostSchedule';
import {
    ItemAutoOrderStepGrandfatherPricing,
    ItemAutoOrderStepGrandfatherPricingFromJSON,
    ItemAutoOrderStepGrandfatherPricingFromJSONTyped,
    ItemAutoOrderStepGrandfatherPricingToJSON,
} from './ItemAutoOrderStepGrandfatherPricing';

/**
 * 
 * @export
 * @interface ItemAutoOrderStep
 */
export interface ItemAutoOrderStep {
    /**
     * If the schedule is arbitrary, then this is the number of days
     * @type {number}
     * @memberof ItemAutoOrderStep
     */
    arbitrary_schedule_days?: number;
    /**
     * Arbitrary unit cost used to override the regular item cost
     * @type {number}
     * @memberof ItemAutoOrderStep
     */
    arbitrary_unit_cost?: number;
    /**
     * Arbitrary unit costs schedules for more advanced discounting by rebill attempt
     * @type {Array<ItemAutoOrderStepArbitraryUnitCostSchedule>}
     * @memberof ItemAutoOrderStep
     */
    arbitrary_unit_cost_schedules?: Array<ItemAutoOrderStepArbitraryUnitCostSchedule>;
    /**
     * Grand-father pricing configuration if the rebill schedule has changed over time
     * @type {Array<ItemAutoOrderStepGrandfatherPricing>}
     * @memberof ItemAutoOrderStep
     */
    grandfather_pricing?: Array<ItemAutoOrderStepGrandfatherPricing>;
    /**
     * Managed by (defaults to UltraCart)
     * @type {string}
     * @memberof ItemAutoOrderStep
     */
    managed_by?: string;
    /**
     * Number of days to pause
     * @type {number}
     * @memberof ItemAutoOrderStep
     */
    pause_days?: number;
    /**
     * Wait for this step to happen until the specified date
     * @type {string}
     * @memberof ItemAutoOrderStep
     */
    pause_until_date?: string;
    /**
     * If set, a pre-shipment notice is sent to the customer this many days in advance
     * @type {number}
     * @memberof ItemAutoOrderStep
     */
    preshipment_notice_days?: number;
    /**
     * Item id to rebill
     * @type {string}
     * @memberof ItemAutoOrderStep
     */
    recurring_merchant_item_id?: string;
    /**
     * Item object identifier to rebill
     * @type {number}
     * @memberof ItemAutoOrderStep
     */
    recurring_merchant_item_oid?: number;
    /**
     * Number of times to rebill.  Last step can be null for infinite
     * @type {number}
     * @memberof ItemAutoOrderStep
     */
    repeat_count?: number;
    /**
     * Frequency of the rebill
     * @type {string}
     * @memberof ItemAutoOrderStep
     */
    schedule?: string;
    /**
     * Email list name to subscribe the customer to when the rebill occurs
     * @type {string}
     * @memberof ItemAutoOrderStep
     */
    subscribe_email_list_name?: string;
    /**
     * Email list identifier to subscribe the customer to when this rebill occurs
     * @type {number}
     * @memberof ItemAutoOrderStep
     */
    subscribe_email_list_oid?: number;
    /**
     * Type of step (item, kit only, loop or pause)
     * @type {string}
     * @memberof ItemAutoOrderStep
     */
    type?: ItemAutoOrderStepTypeEnum;
}


/**
 * @export
 */
export const ItemAutoOrderStepTypeEnum = {
    Item: 'item',
    Pause: 'pause',
    Loop: 'loop',
    KitOnly: 'kit only'
} as const;
export type ItemAutoOrderStepTypeEnum = typeof ItemAutoOrderStepTypeEnum[keyof typeof ItemAutoOrderStepTypeEnum];


export function ItemAutoOrderStepFromJSON(json: any): ItemAutoOrderStep {
    return ItemAutoOrderStepFromJSONTyped(json, false);
}

export function ItemAutoOrderStepFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemAutoOrderStep {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arbitrary_schedule_days': !exists(json, 'arbitrary_schedule_days') ? undefined : json['arbitrary_schedule_days'],
        'arbitrary_unit_cost': !exists(json, 'arbitrary_unit_cost') ? undefined : json['arbitrary_unit_cost'],
        'arbitrary_unit_cost_schedules': !exists(json, 'arbitrary_unit_cost_schedules') ? undefined : ((json['arbitrary_unit_cost_schedules'] as Array<any>).map(ItemAutoOrderStepArbitraryUnitCostScheduleFromJSON)),
        'grandfather_pricing': !exists(json, 'grandfather_pricing') ? undefined : ((json['grandfather_pricing'] as Array<any>).map(ItemAutoOrderStepGrandfatherPricingFromJSON)),
        'managed_by': !exists(json, 'managed_by') ? undefined : json['managed_by'],
        'pause_days': !exists(json, 'pause_days') ? undefined : json['pause_days'],
        'pause_until_date': !exists(json, 'pause_until_date') ? undefined : json['pause_until_date'],
        'preshipment_notice_days': !exists(json, 'preshipment_notice_days') ? undefined : json['preshipment_notice_days'],
        'recurring_merchant_item_id': !exists(json, 'recurring_merchant_item_id') ? undefined : json['recurring_merchant_item_id'],
        'recurring_merchant_item_oid': !exists(json, 'recurring_merchant_item_oid') ? undefined : json['recurring_merchant_item_oid'],
        'repeat_count': !exists(json, 'repeat_count') ? undefined : json['repeat_count'],
        'schedule': !exists(json, 'schedule') ? undefined : json['schedule'],
        'subscribe_email_list_name': !exists(json, 'subscribe_email_list_name') ? undefined : json['subscribe_email_list_name'],
        'subscribe_email_list_oid': !exists(json, 'subscribe_email_list_oid') ? undefined : json['subscribe_email_list_oid'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ItemAutoOrderStepToJSON(value?: ItemAutoOrderStep | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arbitrary_schedule_days': value.arbitrary_schedule_days,
        'arbitrary_unit_cost': value.arbitrary_unit_cost,
        'arbitrary_unit_cost_schedules': value.arbitrary_unit_cost_schedules === undefined ? undefined : ((value.arbitrary_unit_cost_schedules as Array<any>).map(ItemAutoOrderStepArbitraryUnitCostScheduleToJSON)),
        'grandfather_pricing': value.grandfather_pricing === undefined ? undefined : ((value.grandfather_pricing as Array<any>).map(ItemAutoOrderStepGrandfatherPricingToJSON)),
        'managed_by': value.managed_by,
        'pause_days': value.pause_days,
        'pause_until_date': value.pause_until_date,
        'preshipment_notice_days': value.preshipment_notice_days,
        'recurring_merchant_item_id': value.recurring_merchant_item_id,
        'recurring_merchant_item_oid': value.recurring_merchant_item_oid,
        'repeat_count': value.repeat_count,
        'schedule': value.schedule,
        'subscribe_email_list_name': value.subscribe_email_list_name,
        'subscribe_email_list_oid': value.subscribe_email_list_oid,
        'type': value.type,
    };
}
