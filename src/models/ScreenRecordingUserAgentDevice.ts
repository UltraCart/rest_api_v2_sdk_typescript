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
 * @interface ScreenRecordingUserAgentDevice
 */
export interface ScreenRecordingUserAgentDevice {
    /**
     * 
     * @type {string}
     * @memberof ScreenRecordingUserAgentDevice
     */
    name?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ScreenRecordingUserAgentDevice)[] = ["name"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ScreenRecordingUserAgentDevice interface.
 */
export function instanceOfScreenRecordingUserAgentDevice(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ScreenRecordingUserAgentDeviceFromJSON(json: any): ScreenRecordingUserAgentDevice {
    return ScreenRecordingUserAgentDeviceFromJSONTyped(json, false);
}

export function ScreenRecordingUserAgentDeviceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenRecordingUserAgentDevice {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function ScreenRecordingUserAgentDeviceToJSON(value?: ScreenRecordingUserAgentDevice | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
    };
}

