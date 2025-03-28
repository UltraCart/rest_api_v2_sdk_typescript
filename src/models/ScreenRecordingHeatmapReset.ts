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
 * @interface ScreenRecordingHeatmapReset
 */
export interface ScreenRecordingHeatmapReset {
    /**
     * 
     * @type {string}
     * @memberof ScreenRecordingHeatmapReset
     */
    url?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ScreenRecordingHeatmapReset)[] = ["url"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ScreenRecordingHeatmapReset interface.
 */
export function instanceOfScreenRecordingHeatmapReset(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ScreenRecordingHeatmapResetFromJSON(json: any): ScreenRecordingHeatmapReset {
    return ScreenRecordingHeatmapResetFromJSONTyped(json, false);
}

export function ScreenRecordingHeatmapResetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenRecordingHeatmapReset {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function ScreenRecordingHeatmapResetToJSON(value?: ScreenRecordingHeatmapReset | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'url': value.url,
    };
}

