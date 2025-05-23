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
    ScreenRecordingFilter,
    ScreenRecordingFilterFromJSON,
    ScreenRecordingFilterFromJSONTyped,
    ScreenRecordingFilterToJSON,
} from './ScreenRecordingFilter';

/**
 * 
 * @export
 * @interface ScreenRecordingSegment
 */
export interface ScreenRecordingSegment {
    /**
     * 
     * @type {string}
     * @memberof ScreenRecordingSegment
     */
    create_dts?: string;
    /**
     * 
     * @type {string}
     * @memberof ScreenRecordingSegment
     */
    description?: string;
    /**
     * 
     * @type {ScreenRecordingFilter}
     * @memberof ScreenRecordingSegment
     */
    filter?: ScreenRecordingFilter;
    /**
     * 
     * @type {Array<number>}
     * @memberof ScreenRecordingSegment
     */
    histogram_data?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof ScreenRecordingSegment
     */
    histogram_interval?: string;
    /**
     * 
     * @type {string}
     * @memberof ScreenRecordingSegment
     */
    histogram_start_dts?: string;
    /**
     * 
     * @type {string}
     * @memberof ScreenRecordingSegment
     */
    name?: string;
    /**
     * 
     * @type {number}
     * @memberof ScreenRecordingSegment
     */
    screen_recording_segment_oid?: number;
    /**
     * 
     * @type {number}
     * @memberof ScreenRecordingSegment
     */
    session_count?: number;
    /**
     * 
     * @type {string}
     * @memberof ScreenRecordingSegment
     */
    session_count_last_update_dts?: string;
}



/**
 * Check if a given object implements the ScreenRecordingSegment interface.
 */
export function instanceOfScreenRecordingSegment(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ScreenRecordingSegmentFromJSON(json: any): ScreenRecordingSegment {
    return ScreenRecordingSegmentFromJSONTyped(json, false);
}

export function ScreenRecordingSegmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenRecordingSegment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'create_dts': !exists(json, 'create_dts') ? undefined : json['create_dts'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'filter': !exists(json, 'filter') ? undefined : ScreenRecordingFilterFromJSON(json['filter']),
        'histogram_data': !exists(json, 'histogram_data') ? undefined : json['histogram_data'],
        'histogram_interval': !exists(json, 'histogram_interval') ? undefined : json['histogram_interval'],
        'histogram_start_dts': !exists(json, 'histogram_start_dts') ? undefined : json['histogram_start_dts'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'screen_recording_segment_oid': !exists(json, 'screen_recording_segment_oid') ? undefined : json['screen_recording_segment_oid'],
        'session_count': !exists(json, 'session_count') ? undefined : json['session_count'],
        'session_count_last_update_dts': !exists(json, 'session_count_last_update_dts') ? undefined : json['session_count_last_update_dts'],
    };
}

export function ScreenRecordingSegmentToJSON(value?: ScreenRecordingSegment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'create_dts': value.create_dts,
        'description': value.description,
        'filter': ScreenRecordingFilterToJSON(value.filter),
        'histogram_data': value.histogram_data,
        'histogram_interval': value.histogram_interval,
        'histogram_start_dts': value.histogram_start_dts,
        'name': value.name,
        'screen_recording_segment_oid': value.screen_recording_segment_oid,
        'session_count': value.session_count,
        'session_count_last_update_dts': value.session_count_last_update_dts,
    };
}

