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
 * @interface ExperimentVariationStat
 */
export interface ExperimentVariationStat {
    /**
     * Total add to cart count for this variation
     * @type {number}
     * @memberof ExperimentVariationStat
     */
    add_to_cart_count?: number;
    /**
     * Total bounce count for this variation
     * @type {number}
     * @memberof ExperimentVariationStat
     */
    bounce_count?: number;
    /**
     * Total number of seconds spent on the site for this variation
     * @type {number}
     * @memberof ExperimentVariationStat
     */
    duration_seconds_sum?: number;
    /**
     * Total event count for this variation
     * @type {number}
     * @memberof ExperimentVariationStat
     */
    event_count?: number;
    /**
     * Total initiate checkout count for this variation
     * @type {number}
     * @memberof ExperimentVariationStat
     */
    initiate_checkout_count?: number;
    /**
     * Total order count for this variation
     * @type {number}
     * @memberof ExperimentVariationStat
     */
    order_count?: number;
    /**
     * Total order item count for this variation
     * @type {number}
     * @memberof ExperimentVariationStat
     */
    order_item_count?: number;
    /**
     * Total page view count for this variation
     * @type {number}
     * @memberof ExperimentVariationStat
     */
    page_view_count?: number;
    /**
     * Total revenue for this variation
     * @type {number}
     * @memberof ExperimentVariationStat
     */
    revenue?: number;
    /**
     * Total sessions for this variation
     * @type {number}
     * @memberof ExperimentVariationStat
     */
    session_count?: number;
    /**
     * Total SMS opt in count for this variation
     * @type {number}
     * @memberof ExperimentVariationStat
     */
    sms_opt_in_count?: number;
    /**
     * Date/time that the statistic was created
     * @type {string}
     * @memberof ExperimentVariationStat
     */
    stat_dts?: string;
}

export function ExperimentVariationStatFromJSON(json: any): ExperimentVariationStat {
    return ExperimentVariationStatFromJSONTyped(json, false);
}

export function ExperimentVariationStatFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExperimentVariationStat {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'add_to_cart_count': !exists(json, 'add_to_cart_count') ? undefined : json['add_to_cart_count'],
        'bounce_count': !exists(json, 'bounce_count') ? undefined : json['bounce_count'],
        'duration_seconds_sum': !exists(json, 'duration_seconds_sum') ? undefined : json['duration_seconds_sum'],
        'event_count': !exists(json, 'event_count') ? undefined : json['event_count'],
        'initiate_checkout_count': !exists(json, 'initiate_checkout_count') ? undefined : json['initiate_checkout_count'],
        'order_count': !exists(json, 'order_count') ? undefined : json['order_count'],
        'order_item_count': !exists(json, 'order_item_count') ? undefined : json['order_item_count'],
        'page_view_count': !exists(json, 'page_view_count') ? undefined : json['page_view_count'],
        'revenue': !exists(json, 'revenue') ? undefined : json['revenue'],
        'session_count': !exists(json, 'session_count') ? undefined : json['session_count'],
        'sms_opt_in_count': !exists(json, 'sms_opt_in_count') ? undefined : json['sms_opt_in_count'],
        'stat_dts': !exists(json, 'stat_dts') ? undefined : json['stat_dts'],
    };
}

export function ExperimentVariationStatToJSON(value?: ExperimentVariationStat | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'add_to_cart_count': value.add_to_cart_count,
        'bounce_count': value.bounce_count,
        'duration_seconds_sum': value.duration_seconds_sum,
        'event_count': value.event_count,
        'initiate_checkout_count': value.initiate_checkout_count,
        'order_count': value.order_count,
        'order_item_count': value.order_item_count,
        'page_view_count': value.page_view_count,
        'revenue': value.revenue,
        'session_count': value.session_count,
        'sms_opt_in_count': value.sms_opt_in_count,
        'stat_dts': value.stat_dts,
    };
}

