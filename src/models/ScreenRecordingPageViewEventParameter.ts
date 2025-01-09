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
    ScreenRecordingMultifield,
    ScreenRecordingMultifieldFromJSON,
    ScreenRecordingMultifieldFromJSONTyped,
    ScreenRecordingMultifieldToJSON,
} from './ScreenRecordingMultifield';

/**
 * 
 * @export
 * @interface ScreenRecordingPageViewEventParameter
 */
export interface ScreenRecordingPageViewEventParameter {
    /**
     * 
     * @type {string}
     * @memberof ScreenRecordingPageViewEventParameter
     */
    name?: string;
    /**
     * 
     * @type {ScreenRecordingMultifield}
     * @memberof ScreenRecordingPageViewEventParameter
     */
    value?: ScreenRecordingMultifield;
}

export function ScreenRecordingPageViewEventParameterFromJSON(json: any): ScreenRecordingPageViewEventParameter {
    return ScreenRecordingPageViewEventParameterFromJSONTyped(json, false);
}

export function ScreenRecordingPageViewEventParameterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenRecordingPageViewEventParameter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : ScreenRecordingMultifieldFromJSON(json['value']),
    };
}

export function ScreenRecordingPageViewEventParameterToJSON(value?: ScreenRecordingPageViewEventParameter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': ScreenRecordingMultifieldToJSON(value.value),
    };
}

