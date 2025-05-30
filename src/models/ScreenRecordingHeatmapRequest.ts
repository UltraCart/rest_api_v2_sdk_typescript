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
    ScreenRecordingFilterRangeDate,
    ScreenRecordingFilterRangeDateFromJSON,
    ScreenRecordingFilterRangeDateFromJSONTyped,
    ScreenRecordingFilterRangeDateToJSON,
} from './ScreenRecordingFilterRangeDate';

/**
 * 
 * @export
 * @interface ScreenRecordingHeatmapRequest
 */
export interface ScreenRecordingHeatmapRequest {
    /**
     * 
     * @type {ScreenRecordingFilterRangeDate}
     * @memberof ScreenRecordingHeatmapRequest
     */
    range?: ScreenRecordingFilterRangeDate;
    /**
     * 
     * @type {Array<string>}
     * @memberof ScreenRecordingHeatmapRequest
     */
    screen_sizes?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ScreenRecordingHeatmapRequest
     */
    url?: string;
}



/**
 * Check if a given object implements the ScreenRecordingHeatmapRequest interface.
 */
export function instanceOfScreenRecordingHeatmapRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ScreenRecordingHeatmapRequestFromJSON(json: any): ScreenRecordingHeatmapRequest {
    return ScreenRecordingHeatmapRequestFromJSONTyped(json, false);
}

export function ScreenRecordingHeatmapRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenRecordingHeatmapRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'range': !exists(json, 'range') ? undefined : ScreenRecordingFilterRangeDateFromJSON(json['range']),
        'screen_sizes': !exists(json, 'screen_sizes') ? undefined : json['screen_sizes'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function ScreenRecordingHeatmapRequestToJSON(value?: ScreenRecordingHeatmapRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'range': ScreenRecordingFilterRangeDateToJSON(value.range),
        'screen_sizes': value.screen_sizes,
        'url': value.url,
    };
}

