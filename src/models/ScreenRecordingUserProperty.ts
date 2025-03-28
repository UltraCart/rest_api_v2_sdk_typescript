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
 * @interface ScreenRecordingUserProperty
 */
export interface ScreenRecordingUserProperty {
    /**
     * 
     * @type {string}
     * @memberof ScreenRecordingUserProperty
     */
    name?: string;
    /**
     * 
     * @type {ScreenRecordingMultifield}
     * @memberof ScreenRecordingUserProperty
     */
    value?: ScreenRecordingMultifield;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ScreenRecordingUserProperty)[] = ["name", "value"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ScreenRecordingUserProperty interface.
 */
export function instanceOfScreenRecordingUserProperty(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ScreenRecordingUserPropertyFromJSON(json: any): ScreenRecordingUserProperty {
    return ScreenRecordingUserPropertyFromJSONTyped(json, false);
}

export function ScreenRecordingUserPropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenRecordingUserProperty {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : ScreenRecordingMultifieldFromJSON(json['value']),
    };
}

export function ScreenRecordingUserPropertyToJSON(value?: ScreenRecordingUserProperty | null): any {
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

