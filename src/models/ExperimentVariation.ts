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
    ExperimentVariationStat,
    ExperimentVariationStatFromJSON,
    ExperimentVariationStatFromJSONTyped,
    ExperimentVariationStatToJSON,
} from './ExperimentVariationStat';

/**
 * 
 * @export
 * @interface ExperimentVariation
 */
export interface ExperimentVariation {
    /**
     * Total add to cart count for this variation
     * @type {number}
     * @memberof ExperimentVariation
     */
    add_to_cart_count?: number;
    /**
     * Average duration seconds per session for this variation
     * @type {number}
     * @memberof ExperimentVariation
     */
    average_duration_seconds?: number;
    /**
     * Average objective value per session for this variation
     * @type {number}
     * @memberof ExperimentVariation
     */
    average_objective_per_session?: number;
    /**
     * Average order value for this variation
     * @type {number}
     * @memberof ExperimentVariation
     */
    average_order_value?: number;
    /**
     * Total bounce count for this variation
     * @type {number}
     * @memberof ExperimentVariation
     */
    bounce_count?: number;
    /**
     * Conversion rate for this variation
     * @type {number}
     * @memberof ExperimentVariation
     */
    conversion_rate?: number;
    /**
     * Array of daily statistics for this variation
     * @type {Array<ExperimentVariationStat>}
     * @memberof ExperimentVariation
     */
    daily_statistics?: Array<ExperimentVariationStat>;
    /**
     * Total number of seconds spent on the site for this variation
     * @type {number}
     * @memberof ExperimentVariation
     */
    duration_seconds_sum?: number;
    /**
     * Total event ocunt for this variation
     * @type {number}
     * @memberof ExperimentVariation
     */
    event_count?: number;
    /**
     * Total initiate checkout count for this variation
     * @type {number}
     * @memberof ExperimentVariation
     */
    initiate_checkout_count?: number;
    /**
     * Total order count for this variation
     * @type {number}
     * @memberof ExperimentVariation
     */
    order_count?: number;
    /**
     * Total order item count for this variation
     * @type {number}
     * @memberof ExperimentVariation
     */
    order_item_count?: number;
    /**
     * Percentage of the traffic the variation originally started out with
     * @type {number}
     * @memberof ExperimentVariation
     */
    original_traffic_percentage?: number;
    /**
     * Total page view count for this variation
     * @type {number}
     * @memberof ExperimentVariation
     */
    page_view_count?: number;
    /**
     * True if traffic should be paused to this variation
     * @type {boolean}
     * @memberof ExperimentVariation
     */
    paused?: boolean;
    /**
     * Total revenue for this variation
     * @type {number}
     * @memberof ExperimentVariation
     */
    revenue?: number;
    /**
     * Total sessions for this variation
     * @type {number}
     * @memberof ExperimentVariation
     */
    session_count?: number;
    /**
     * SMS Opt Ins for this variation
     * @type {number}
     * @memberof ExperimentVariation
     */
    sms_opt_ins?: number;
    /**
     * Percentage of the traffic this variation is currently receiving
     * @type {number}
     * @memberof ExperimentVariation
     */
    traffic_percentage?: number;
    /**
     * Url of the variation if this experiment is a url experiment.
     * @type {string}
     * @memberof ExperimentVariation
     */
    url?: string;
    /**
     * Name of the variation
     * @type {string}
     * @memberof ExperimentVariation
     */
    variation_name?: string;
    /**
     * Variation number
     * @type {number}
     * @memberof ExperimentVariation
     */
    variation_number?: number;
    /**
     * True if this variation has been declared the winner
     * @type {boolean}
     * @memberof ExperimentVariation
     */
    winner?: boolean;
}

export function ExperimentVariationFromJSON(json: any): ExperimentVariation {
    return ExperimentVariationFromJSONTyped(json, false);
}

export function ExperimentVariationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExperimentVariation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'add_to_cart_count': !exists(json, 'add_to_cart_count') ? undefined : json['add_to_cart_count'],
        'average_duration_seconds': !exists(json, 'average_duration_seconds') ? undefined : json['average_duration_seconds'],
        'average_objective_per_session': !exists(json, 'average_objective_per_session') ? undefined : json['average_objective_per_session'],
        'average_order_value': !exists(json, 'average_order_value') ? undefined : json['average_order_value'],
        'bounce_count': !exists(json, 'bounce_count') ? undefined : json['bounce_count'],
        'conversion_rate': !exists(json, 'conversion_rate') ? undefined : json['conversion_rate'],
        'daily_statistics': !exists(json, 'daily_statistics') ? undefined : ((json['daily_statistics'] as Array<any>).map(ExperimentVariationStatFromJSON)),
        'duration_seconds_sum': !exists(json, 'duration_seconds_sum') ? undefined : json['duration_seconds_sum'],
        'event_count': !exists(json, 'event_count') ? undefined : json['event_count'],
        'initiate_checkout_count': !exists(json, 'initiate_checkout_count') ? undefined : json['initiate_checkout_count'],
        'order_count': !exists(json, 'order_count') ? undefined : json['order_count'],
        'order_item_count': !exists(json, 'order_item_count') ? undefined : json['order_item_count'],
        'original_traffic_percentage': !exists(json, 'original_traffic_percentage') ? undefined : json['original_traffic_percentage'],
        'page_view_count': !exists(json, 'page_view_count') ? undefined : json['page_view_count'],
        'paused': !exists(json, 'paused') ? undefined : json['paused'],
        'revenue': !exists(json, 'revenue') ? undefined : json['revenue'],
        'session_count': !exists(json, 'session_count') ? undefined : json['session_count'],
        'sms_opt_ins': !exists(json, 'sms_opt_ins') ? undefined : json['sms_opt_ins'],
        'traffic_percentage': !exists(json, 'traffic_percentage') ? undefined : json['traffic_percentage'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'variation_name': !exists(json, 'variation_name') ? undefined : json['variation_name'],
        'variation_number': !exists(json, 'variation_number') ? undefined : json['variation_number'],
        'winner': !exists(json, 'winner') ? undefined : json['winner'],
    };
}

export function ExperimentVariationToJSON(value?: ExperimentVariation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'add_to_cart_count': value.add_to_cart_count,
        'average_duration_seconds': value.average_duration_seconds,
        'average_objective_per_session': value.average_objective_per_session,
        'average_order_value': value.average_order_value,
        'bounce_count': value.bounce_count,
        'conversion_rate': value.conversion_rate,
        'daily_statistics': value.daily_statistics === undefined ? undefined : ((value.daily_statistics as Array<any>).map(ExperimentVariationStatToJSON)),
        'duration_seconds_sum': value.duration_seconds_sum,
        'event_count': value.event_count,
        'initiate_checkout_count': value.initiate_checkout_count,
        'order_count': value.order_count,
        'order_item_count': value.order_item_count,
        'original_traffic_percentage': value.original_traffic_percentage,
        'page_view_count': value.page_view_count,
        'paused': value.paused,
        'revenue': value.revenue,
        'session_count': value.session_count,
        'sms_opt_ins': value.sms_opt_ins,
        'traffic_percentage': value.traffic_percentage,
        'url': value.url,
        'variation_name': value.variation_name,
        'variation_number': value.variation_number,
        'winner': value.winner,
    };
}

