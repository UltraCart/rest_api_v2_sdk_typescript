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
    ScreenRecordingUserAgentDevice,
    ScreenRecordingUserAgentDeviceFromJSON,
    ScreenRecordingUserAgentDeviceFromJSONTyped,
    ScreenRecordingUserAgentDeviceToJSON,
} from './ScreenRecordingUserAgentDevice';
import {
    ScreenRecordingUserAgentOS,
    ScreenRecordingUserAgentOSFromJSON,
    ScreenRecordingUserAgentOSFromJSONTyped,
    ScreenRecordingUserAgentOSToJSON,
} from './ScreenRecordingUserAgentOS';

/**
 * 
 * @export
 * @interface ScreenRecordingUserAgent
 */
export interface ScreenRecordingUserAgent {
    /**
     * 
     * @type {ScreenRecordingUserAgentDevice}
     * @memberof ScreenRecordingUserAgent
     */
    device?: ScreenRecordingUserAgentDevice;
    /**
     * 
     * @type {string}
     * @memberof ScreenRecordingUserAgent
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ScreenRecordingUserAgent
     */
    original?: string;
    /**
     * 
     * @type {ScreenRecordingUserAgentOS}
     * @memberof ScreenRecordingUserAgent
     */
    os?: ScreenRecordingUserAgentOS;
    /**
     * 
     * @type {string}
     * @memberof ScreenRecordingUserAgent
     */
    version?: string;
}

export function ScreenRecordingUserAgentFromJSON(json: any): ScreenRecordingUserAgent {
    return ScreenRecordingUserAgentFromJSONTyped(json, false);
}

export function ScreenRecordingUserAgentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenRecordingUserAgent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'device': !exists(json, 'device') ? undefined : ScreenRecordingUserAgentDeviceFromJSON(json['device']),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'original': !exists(json, 'original') ? undefined : json['original'],
        'os': !exists(json, 'os') ? undefined : ScreenRecordingUserAgentOSFromJSON(json['os']),
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function ScreenRecordingUserAgentToJSON(value?: ScreenRecordingUserAgent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'device': ScreenRecordingUserAgentDeviceToJSON(value.device),
        'name': value.name,
        'original': value.original,
        'os': ScreenRecordingUserAgentOSToJSON(value.os),
        'version': value.version,
    };
}
