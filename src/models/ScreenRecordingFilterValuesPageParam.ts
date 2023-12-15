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
 * @interface ScreenRecordingFilterValuesPageParam
 */
export interface ScreenRecordingFilterValuesPageParam {
    /**
     * 
     * @type {string}
     * @memberof ScreenRecordingFilterValuesPageParam
     */
    name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ScreenRecordingFilterValuesPageParam
     */
    values?: Array<string>;
}

export function ScreenRecordingFilterValuesPageParamFromJSON(json: any): ScreenRecordingFilterValuesPageParam {
    return ScreenRecordingFilterValuesPageParamFromJSONTyped(json, false);
}

export function ScreenRecordingFilterValuesPageParamFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenRecordingFilterValuesPageParam {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'values': !exists(json, 'values') ? undefined : json['values'],
    };
}

export function ScreenRecordingFilterValuesPageParamToJSON(value?: ScreenRecordingFilterValuesPageParam | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'values': value.values,
    };
}

