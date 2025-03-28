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
 * @interface ItemAutoOrderStepArbitraryUnitCostSchedule
 */
export interface ItemAutoOrderStepArbitraryUnitCostSchedule {
    /**
     * Arbitrary unit cost
     * @type {number}
     * @memberof ItemAutoOrderStepArbitraryUnitCostSchedule
     */
    arbitrary_unit_cost?: number;
    /**
     * Retry days
     * @type {number}
     * @memberof ItemAutoOrderStepArbitraryUnitCostSchedule
     */
    retry_days?: number;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ItemAutoOrderStepArbitraryUnitCostSchedule)[] = ["arbitrary_unit_cost", "retry_days"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ItemAutoOrderStepArbitraryUnitCostSchedule interface.
 */
export function instanceOfItemAutoOrderStepArbitraryUnitCostSchedule(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ItemAutoOrderStepArbitraryUnitCostScheduleFromJSON(json: any): ItemAutoOrderStepArbitraryUnitCostSchedule {
    return ItemAutoOrderStepArbitraryUnitCostScheduleFromJSONTyped(json, false);
}

export function ItemAutoOrderStepArbitraryUnitCostScheduleFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemAutoOrderStepArbitraryUnitCostSchedule {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arbitrary_unit_cost': !exists(json, 'arbitrary_unit_cost') ? undefined : json['arbitrary_unit_cost'],
        'retry_days': !exists(json, 'retry_days') ? undefined : json['retry_days'],
    };
}

export function ItemAutoOrderStepArbitraryUnitCostScheduleToJSON(value?: ItemAutoOrderStepArbitraryUnitCostSchedule | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arbitrary_unit_cost': value.arbitrary_unit_cost,
        'retry_days': value.retry_days,
    };
}

