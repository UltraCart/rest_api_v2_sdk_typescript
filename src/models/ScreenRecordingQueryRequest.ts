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
 * @interface ScreenRecordingQueryRequest
 */
export interface ScreenRecordingQueryRequest {
    /**
     * 
     * @type {ScreenRecordingFilter}
     * @memberof ScreenRecordingQueryRequest
     */
    filter?: ScreenRecordingFilter;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ScreenRecordingQueryRequest)[] = ["filter"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ScreenRecordingQueryRequest interface.
 */
export function instanceOfScreenRecordingQueryRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ScreenRecordingQueryRequestFromJSON(json: any): ScreenRecordingQueryRequest {
    return ScreenRecordingQueryRequestFromJSONTyped(json, false);
}

export function ScreenRecordingQueryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenRecordingQueryRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'filter': !exists(json, 'filter') ? undefined : ScreenRecordingFilterFromJSON(json['filter']),
    };
}

export function ScreenRecordingQueryRequestToJSON(value?: ScreenRecordingQueryRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'filter': ScreenRecordingFilterToJSON(value.filter),
    };
}

