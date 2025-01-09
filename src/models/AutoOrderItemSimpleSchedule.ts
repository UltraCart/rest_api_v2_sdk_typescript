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
 * @interface AutoOrderItemSimpleSchedule
 */
export interface AutoOrderItemSimpleSchedule {
    /**
     * Frequency of the rebill if not a fixed schedule
     * @type {string}
     * @memberof AutoOrderItemSimpleSchedule
     */
    frequency?: AutoOrderItemSimpleScheduleFrequencyEnum;
    /**
     * Item ID that should rebill
     * @type {string}
     * @memberof AutoOrderItemSimpleSchedule
     */
    item_id?: string;
    /**
     * The number of times this simple schedule is configured for
     * @type {number}
     * @memberof AutoOrderItemSimpleSchedule
     */
    repeat_count?: number;
}


/**
 * @export
 */
export const AutoOrderItemSimpleScheduleFrequencyEnum = {
    Weekly: 'Weekly',
    Biweekly: 'Biweekly',
    Every: 'Every...',
    Every10Days: 'Every 10 Days',
    Every24Days: 'Every 24 Days',
    Every28Days: 'Every 28 Days',
    Monthly: 'Monthly',
    Every45Days: 'Every 45 Days',
    Every2Months: 'Every 2 Months',
    Every3Months: 'Every 3 Months',
    Every4Months: 'Every 4 Months',
    Every5Months: 'Every 5 Months',
    Every6Months: 'Every 6 Months',
    Yearly: 'Yearly',
    Every4Weeks: 'Every 4 Weeks',
    Every6Weeks: 'Every 6 Weeks',
    Every8Weeks: 'Every 8 Weeks'
} as const;
export type AutoOrderItemSimpleScheduleFrequencyEnum = typeof AutoOrderItemSimpleScheduleFrequencyEnum[keyof typeof AutoOrderItemSimpleScheduleFrequencyEnum];


export function AutoOrderItemSimpleScheduleFromJSON(json: any): AutoOrderItemSimpleSchedule {
    return AutoOrderItemSimpleScheduleFromJSONTyped(json, false);
}

export function AutoOrderItemSimpleScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoOrderItemSimpleSchedule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'frequency': !exists(json, 'frequency') ? undefined : json['frequency'],
        'item_id': !exists(json, 'item_id') ? undefined : json['item_id'],
        'repeat_count': !exists(json, 'repeat_count') ? undefined : json['repeat_count'],
    };
}

export function AutoOrderItemSimpleScheduleToJSON(value?: AutoOrderItemSimpleSchedule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'frequency': value.frequency,
        'item_id': value.item_id,
        'repeat_count': value.repeat_count,
    };
}

