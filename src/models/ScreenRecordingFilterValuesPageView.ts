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
    ScreenRecordingFilterValuesEvent,
    ScreenRecordingFilterValuesEventFromJSON,
    ScreenRecordingFilterValuesEventFromJSONTyped,
    ScreenRecordingFilterValuesEventToJSON,
} from './ScreenRecordingFilterValuesEvent';
import {
    ScreenRecordingFilterValuesPageParam,
    ScreenRecordingFilterValuesPageParamFromJSON,
    ScreenRecordingFilterValuesPageParamFromJSONTyped,
    ScreenRecordingFilterValuesPageParamToJSON,
} from './ScreenRecordingFilterValuesPageParam';

/**
 * 
 * @export
 * @interface ScreenRecordingFilterValuesPageView
 */
export interface ScreenRecordingFilterValuesPageView {
    /**
     * 
     * @type {Array<string>}
     * @memberof ScreenRecordingFilterValuesPageView
     */
    domains?: Array<string>;
    /**
     * 
     * @type {Array<ScreenRecordingFilterValuesEvent>}
     * @memberof ScreenRecordingFilterValuesPageView
     */
    events?: Array<ScreenRecordingFilterValuesEvent>;
    /**
     * 
     * @type {Array<ScreenRecordingFilterValuesPageParam>}
     * @memberof ScreenRecordingFilterValuesPageView
     */
    page_params?: Array<ScreenRecordingFilterValuesPageParam>;
    /**
     * 
     * @type {number}
     * @memberof ScreenRecordingFilterValuesPageView
     */
    time_on_page_max?: number;
    /**
     * 
     * @type {number}
     * @memberof ScreenRecordingFilterValuesPageView
     */
    time_on_page_min?: number;
    /**
     * 
     * @type {Array<string>}
     * @memberof ScreenRecordingFilterValuesPageView
     */
    urls?: Array<string>;
}

export function ScreenRecordingFilterValuesPageViewFromJSON(json: any): ScreenRecordingFilterValuesPageView {
    return ScreenRecordingFilterValuesPageViewFromJSONTyped(json, false);
}

export function ScreenRecordingFilterValuesPageViewFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenRecordingFilterValuesPageView {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'domains': !exists(json, 'domains') ? undefined : json['domains'],
        'events': !exists(json, 'events') ? undefined : ((json['events'] as Array<any>).map(ScreenRecordingFilterValuesEventFromJSON)),
        'page_params': !exists(json, 'page_params') ? undefined : ((json['page_params'] as Array<any>).map(ScreenRecordingFilterValuesPageParamFromJSON)),
        'time_on_page_max': !exists(json, 'time_on_page_max') ? undefined : json['time_on_page_max'],
        'time_on_page_min': !exists(json, 'time_on_page_min') ? undefined : json['time_on_page_min'],
        'urls': !exists(json, 'urls') ? undefined : json['urls'],
    };
}

export function ScreenRecordingFilterValuesPageViewToJSON(value?: ScreenRecordingFilterValuesPageView | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'domains': value.domains,
        'events': value.events === undefined ? undefined : ((value.events as Array<any>).map(ScreenRecordingFilterValuesEventToJSON)),
        'page_params': value.page_params === undefined ? undefined : ((value.page_params as Array<any>).map(ScreenRecordingFilterValuesPageParamToJSON)),
        'time_on_page_max': value.time_on_page_max,
        'time_on_page_min': value.time_on_page_min,
        'urls': value.urls,
    };
}

