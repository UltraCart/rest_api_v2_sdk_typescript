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
 * @interface ScreenRecordingUserAgentOS
 */
export interface ScreenRecordingUserAgentOS {
    /**
     * 
     * @type {string}
     * @memberof ScreenRecordingUserAgentOS
     */
    full?: string;
    /**
     * 
     * @type {string}
     * @memberof ScreenRecordingUserAgentOS
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ScreenRecordingUserAgentOS
     */
    version?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ScreenRecordingUserAgentOS)[] = ["full", "name", "version"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ScreenRecordingUserAgentOS interface.
 */
export function instanceOfScreenRecordingUserAgentOS(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ScreenRecordingUserAgentOSFromJSON(json: any): ScreenRecordingUserAgentOS {
    return ScreenRecordingUserAgentOSFromJSONTyped(json, false);
}

export function ScreenRecordingUserAgentOSFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenRecordingUserAgentOS {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'full': !exists(json, 'full') ? undefined : json['full'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function ScreenRecordingUserAgentOSToJSON(value?: ScreenRecordingUserAgentOS | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'full': value.full,
        'name': value.name,
        'version': value.version,
    };
}

