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
 * @interface EmailPerformanceCustomerHistogramPeriod
 */
export interface EmailPerformanceCustomerHistogramPeriod {
    /**
     * Active customers last active in this period
     * @type {number}
     * @memberof EmailPerformanceCustomerHistogramPeriod
     */
    active?: number;
    /**
     * Inactive customers last active in this period
     * @type {number}
     * @memberof EmailPerformanceCustomerHistogramPeriod
     */
    inactive?: number;
    /**
     * Month (1 = January)
     * @type {number}
     * @memberof EmailPerformanceCustomerHistogramPeriod
     */
    month?: number;
    /**
     * Total customers last active in this period
     * @type {number}
     * @memberof EmailPerformanceCustomerHistogramPeriod
     */
    total?: number;
    /**
     * Year (four digits)
     * @type {number}
     * @memberof EmailPerformanceCustomerHistogramPeriod
     */
    year?: number;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof EmailPerformanceCustomerHistogramPeriod)[] = ["active", "inactive", "month", "total", "year"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the EmailPerformanceCustomerHistogramPeriod interface.
 */
export function instanceOfEmailPerformanceCustomerHistogramPeriod(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailPerformanceCustomerHistogramPeriodFromJSON(json: any): EmailPerformanceCustomerHistogramPeriod {
    return EmailPerformanceCustomerHistogramPeriodFromJSONTyped(json, false);
}

export function EmailPerformanceCustomerHistogramPeriodFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailPerformanceCustomerHistogramPeriod {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
        'inactive': !exists(json, 'inactive') ? undefined : json['inactive'],
        'month': !exists(json, 'month') ? undefined : json['month'],
        'total': !exists(json, 'total') ? undefined : json['total'],
        'year': !exists(json, 'year') ? undefined : json['year'],
    };
}

export function EmailPerformanceCustomerHistogramPeriodToJSON(value?: EmailPerformanceCustomerHistogramPeriod | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'inactive': value.inactive,
        'month': value.month,
        'total': value.total,
        'year': value.year,
    };
}

