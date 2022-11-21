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
 * @interface AccountsReceivableRetryStatMetrics
 */
export interface AccountsReceivableRetryStatMetrics {
    /**
     * 
     * @type {number}
     * @memberof AccountsReceivableRetryStatMetrics
     */
    attempts?: number;
    /**
     * 
     * @type {string}
     * @memberof AccountsReceivableRetryStatMetrics
     */
    attempts_formatted?: string;
    /**
     * 
     * @type {number}
     * @memberof AccountsReceivableRetryStatMetrics
     */
    conversion_rate?: number;
    /**
     * 
     * @type {string}
     * @memberof AccountsReceivableRetryStatMetrics
     */
    conversion_rate_formatted?: string;
    /**
     * 
     * @type {number}
     * @memberof AccountsReceivableRetryStatMetrics
     */
    day?: number;
    /**
     * 
     * @type {number}
     * @memberof AccountsReceivableRetryStatMetrics
     */
    discounts?: number;
    /**
     * 
     * @type {string}
     * @memberof AccountsReceivableRetryStatMetrics
     */
    discounts_formatted?: string;
    /**
     * 
     * @type {number}
     * @memberof AccountsReceivableRetryStatMetrics
     */
    revenue?: number;
    /**
     * 
     * @type {string}
     * @memberof AccountsReceivableRetryStatMetrics
     */
    revenue_formatted?: string;
    /**
     * 
     * @type {number}
     * @memberof AccountsReceivableRetryStatMetrics
     */
    successes?: number;
    /**
     * 
     * @type {string}
     * @memberof AccountsReceivableRetryStatMetrics
     */
    successes_formatted?: string;
}

export function AccountsReceivableRetryStatMetricsFromJSON(json: any): AccountsReceivableRetryStatMetrics {
    return AccountsReceivableRetryStatMetricsFromJSONTyped(json, false);
}

export function AccountsReceivableRetryStatMetricsFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountsReceivableRetryStatMetrics {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attempts': !exists(json, 'attempts') ? undefined : json['attempts'],
        'attempts_formatted': !exists(json, 'attempts_formatted') ? undefined : json['attempts_formatted'],
        'conversion_rate': !exists(json, 'conversion_rate') ? undefined : json['conversion_rate'],
        'conversion_rate_formatted': !exists(json, 'conversion_rate_formatted') ? undefined : json['conversion_rate_formatted'],
        'day': !exists(json, 'day') ? undefined : json['day'],
        'discounts': !exists(json, 'discounts') ? undefined : json['discounts'],
        'discounts_formatted': !exists(json, 'discounts_formatted') ? undefined : json['discounts_formatted'],
        'revenue': !exists(json, 'revenue') ? undefined : json['revenue'],
        'revenue_formatted': !exists(json, 'revenue_formatted') ? undefined : json['revenue_formatted'],
        'successes': !exists(json, 'successes') ? undefined : json['successes'],
        'successes_formatted': !exists(json, 'successes_formatted') ? undefined : json['successes_formatted'],
    };
}

export function AccountsReceivableRetryStatMetricsToJSON(value?: AccountsReceivableRetryStatMetrics | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attempts': value.attempts,
        'attempts_formatted': value.attempts_formatted,
        'conversion_rate': value.conversion_rate,
        'conversion_rate_formatted': value.conversion_rate_formatted,
        'day': value.day,
        'discounts': value.discounts,
        'discounts_formatted': value.discounts_formatted,
        'revenue': value.revenue,
        'revenue_formatted': value.revenue_formatted,
        'successes': value.successes,
        'successes_formatted': value.successes_formatted,
    };
}
