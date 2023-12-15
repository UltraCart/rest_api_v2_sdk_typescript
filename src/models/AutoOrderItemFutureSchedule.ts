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
 * @interface AutoOrderItemFutureSchedule
 */
export interface AutoOrderItemFutureSchedule {
    /**
     * Item ID that should rebill
     * @type {string}
     * @memberof AutoOrderItemFutureSchedule
     */
    item_id?: string;
    /**
     * The number of times this rebill represents
     * @type {number}
     * @memberof AutoOrderItemFutureSchedule
     */
    rebill_count?: number;
    /**
     * Date/time that this item is scheduled to rebill
     * @type {string}
     * @memberof AutoOrderItemFutureSchedule
     */
    shipment_dts?: string;
    /**
     * The unit cost of the item rebilling
     * @type {number}
     * @memberof AutoOrderItemFutureSchedule
     */
    unit_cost?: number;
}

export function AutoOrderItemFutureScheduleFromJSON(json: any): AutoOrderItemFutureSchedule {
    return AutoOrderItemFutureScheduleFromJSONTyped(json, false);
}

export function AutoOrderItemFutureScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoOrderItemFutureSchedule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'item_id': !exists(json, 'item_id') ? undefined : json['item_id'],
        'rebill_count': !exists(json, 'rebill_count') ? undefined : json['rebill_count'],
        'shipment_dts': !exists(json, 'shipment_dts') ? undefined : json['shipment_dts'],
        'unit_cost': !exists(json, 'unit_cost') ? undefined : json['unit_cost'],
    };
}

export function AutoOrderItemFutureScheduleToJSON(value?: AutoOrderItemFutureSchedule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'item_id': value.item_id,
        'rebill_count': value.rebill_count,
        'shipment_dts': value.shipment_dts,
        'unit_cost': value.unit_cost,
    };
}

