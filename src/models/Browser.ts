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
    BrowserDevice,
    BrowserDeviceFromJSON,
    BrowserDeviceFromJSONTyped,
    BrowserDeviceToJSON,
} from './BrowserDevice';
import {
    BrowserOS,
    BrowserOSFromJSON,
    BrowserOSFromJSONTyped,
    BrowserOSToJSON,
} from './BrowserOS';
import {
    BrowserUserAgent,
    BrowserUserAgentFromJSON,
    BrowserUserAgentFromJSONTyped,
    BrowserUserAgentToJSON,
} from './BrowserUserAgent';

/**
 * 
 * @export
 * @interface Browser
 */
export interface Browser {
    /**
     * 
     * @type {BrowserDevice}
     * @memberof Browser
     */
    device?: BrowserDevice;
    /**
     * 
     * @type {BrowserOS}
     * @memberof Browser
     */
    os?: BrowserOS;
    /**
     * 
     * @type {BrowserUserAgent}
     * @memberof Browser
     */
    user_agent?: BrowserUserAgent;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof Browser)[] = ["device", "os", "user_agent"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the Browser interface.
 */
export function instanceOfBrowser(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BrowserFromJSON(json: any): Browser {
    return BrowserFromJSONTyped(json, false);
}

export function BrowserFromJSONTyped(json: any, ignoreDiscriminator: boolean): Browser {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'device': !exists(json, 'device') ? undefined : BrowserDeviceFromJSON(json['device']),
        'os': !exists(json, 'os') ? undefined : BrowserOSFromJSON(json['os']),
        'user_agent': !exists(json, 'user_agent') ? undefined : BrowserUserAgentFromJSON(json['user_agent']),
    };
}

export function BrowserToJSON(value?: Browser | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'device': BrowserDeviceToJSON(value.device),
        'os': BrowserOSToJSON(value.os),
        'user_agent': BrowserUserAgentToJSON(value.user_agent),
    };
}

