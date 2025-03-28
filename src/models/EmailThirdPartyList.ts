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
 * @interface EmailThirdPartyList
 */
export interface EmailThirdPartyList {
    /**
     * id
     * @type {string}
     * @memberof EmailThirdPartyList
     */
    id?: string;
    /**
     * name
     * @type {string}
     * @memberof EmailThirdPartyList
     */
    name?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof EmailThirdPartyList)[] = ["id", "name"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the EmailThirdPartyList interface.
 */
export function instanceOfEmailThirdPartyList(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailThirdPartyListFromJSON(json: any): EmailThirdPartyList {
    return EmailThirdPartyListFromJSONTyped(json, false);
}

export function EmailThirdPartyListFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailThirdPartyList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function EmailThirdPartyListToJSON(value?: EmailThirdPartyList | null): any {
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

