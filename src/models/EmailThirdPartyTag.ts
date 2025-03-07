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
 * @interface EmailThirdPartyTag
 */
export interface EmailThirdPartyTag {
    /**
     * id
     * @type {string}
     * @memberof EmailThirdPartyTag
     */
    id?: string;
    /**
     * name
     * @type {string}
     * @memberof EmailThirdPartyTag
     */
    name?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof EmailThirdPartyTag)[] = ["id", "name"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the EmailThirdPartyTag interface.
 */
export function instanceOfEmailThirdPartyTag(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailThirdPartyTagFromJSON(json: any): EmailThirdPartyTag {
    return EmailThirdPartyTagFromJSONTyped(json, false);
}

export function EmailThirdPartyTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailThirdPartyTag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function EmailThirdPartyTagToJSON(value?: EmailThirdPartyTag | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'name': value.name,
    };
}

