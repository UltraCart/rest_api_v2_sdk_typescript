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
 * @interface EmailGlobalSettings
 */
export interface EmailGlobalSettings {
    /**
     * 
     * @type {boolean}
     * @memberof EmailGlobalSettings
     */
    dedicated_ip?: boolean;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof EmailGlobalSettings)[] = ["dedicated_ip"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the EmailGlobalSettings interface.
 */
export function instanceOfEmailGlobalSettings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailGlobalSettingsFromJSON(json: any): EmailGlobalSettings {
    return EmailGlobalSettingsFromJSONTyped(json, false);
}

export function EmailGlobalSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailGlobalSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dedicated_ip': !exists(json, 'dedicated_ip') ? undefined : json['dedicated_ip'],
    };
}

export function EmailGlobalSettingsToJSON(value?: EmailGlobalSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dedicated_ip': value.dedicated_ip,
    };
}

