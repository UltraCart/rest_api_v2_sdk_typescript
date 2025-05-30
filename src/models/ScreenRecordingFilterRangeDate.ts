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
 * @interface ScreenRecordingFilterRangeDate
 */
export interface ScreenRecordingFilterRangeDate {
    /**
     * End of the range
     * @type {string}
     * @memberof ScreenRecordingFilterRangeDate
     */
    end?: string;
    /**
     * Start of the range
     * @type {string}
     * @memberof ScreenRecordingFilterRangeDate
     */
    start?: string;
}



/**
 * Check if a given object implements the ScreenRecordingFilterRangeDate interface.
 */
export function instanceOfScreenRecordingFilterRangeDate(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ScreenRecordingFilterRangeDateFromJSON(json: any): ScreenRecordingFilterRangeDate {
    return ScreenRecordingFilterRangeDateFromJSONTyped(json, false);
}

export function ScreenRecordingFilterRangeDateFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenRecordingFilterRangeDate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'end': !exists(json, 'end') ? undefined : json['end'],
        'start': !exists(json, 'start') ? undefined : json['start'],
    };
}

export function ScreenRecordingFilterRangeDateToJSON(value?: ScreenRecordingFilterRangeDate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'end': value.end,
        'start': value.start,
    };
}

