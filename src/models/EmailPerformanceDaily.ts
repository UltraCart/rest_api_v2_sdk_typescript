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
 * @interface EmailPerformanceDaily
 */
export interface EmailPerformanceDaily {
    /**
     * Bounce count
     * @type {number}
     * @memberof EmailPerformanceDaily
     */
    bounce_count?: number;
    /**
     * Delivered count
     * @type {number}
     * @memberof EmailPerformanceDaily
     */
    delivered_count?: number;
    /**
     * Revenue
     * @type {number}
     * @memberof EmailPerformanceDaily
     */
    revenue?: number;
    /**
     * Total sequence (campaign/flow) emails sent
     * @type {number}
     * @memberof EmailPerformanceDaily
     */
    sequence_send_count?: number;
    /**
     * Spam complaints
     * @type {number}
     * @memberof EmailPerformanceDaily
     */
    spam_count?: number;
    /**
     * The date that these statistcs are for
     * @type {string}
     * @memberof EmailPerformanceDaily
     */
    stat_dts?: string;
    /**
     * Total transactions emails sent
     * @type {number}
     * @memberof EmailPerformanceDaily
     */
    transactional_send_count?: number;
}



/**
 * Check if a given object implements the EmailPerformanceDaily interface.
 */
export function instanceOfEmailPerformanceDaily(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailPerformanceDailyFromJSON(json: any): EmailPerformanceDaily {
    return EmailPerformanceDailyFromJSONTyped(json, false);
}

export function EmailPerformanceDailyFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailPerformanceDaily {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'bounce_count': !exists(json, 'bounce_count') ? undefined : json['bounce_count'],
        'delivered_count': !exists(json, 'delivered_count') ? undefined : json['delivered_count'],
        'revenue': !exists(json, 'revenue') ? undefined : json['revenue'],
        'sequence_send_count': !exists(json, 'sequence_send_count') ? undefined : json['sequence_send_count'],
        'spam_count': !exists(json, 'spam_count') ? undefined : json['spam_count'],
        'stat_dts': !exists(json, 'stat_dts') ? undefined : json['stat_dts'],
        'transactional_send_count': !exists(json, 'transactional_send_count') ? undefined : json['transactional_send_count'],
    };
}

export function EmailPerformanceDailyToJSON(value?: EmailPerformanceDaily | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'bounce_count': value.bounce_count,
        'delivered_count': value.delivered_count,
        'revenue': value.revenue,
        'sequence_send_count': value.sequence_send_count,
        'spam_count': value.spam_count,
        'stat_dts': value.stat_dts,
        'transactional_send_count': value.transactional_send_count,
    };
}

