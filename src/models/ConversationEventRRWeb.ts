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
 * @interface ConversationEventRRWeb
 */
export interface ConversationEventRRWeb {
    /**
     * 
     * @type {string}
     * @memberof ConversationEventRRWeb
     */
    data?: string;
    /**
     * 
     * @type {number}
     * @memberof ConversationEventRRWeb
     */
    data_part?: number;
    /**
     * 
     * @type {string}
     * @memberof ConversationEventRRWeb
     */
    data_sha256?: string;
    /**
     * 
     * @type {number}
     * @memberof ConversationEventRRWeb
     */
    data_total_parts?: number;
    /**
     * 
     * @type {string}
     * @memberof ConversationEventRRWeb
     */
    data_total_sha256?: string;
    /**
     * 
     * @type {number}
     * @memberof ConversationEventRRWeb
     */
    event_index?: number;
    /**
     * Type of event
     * @type {string}
     * @memberof ConversationEventRRWeb
     */
    type?: ConversationEventRRWebTypeEnum;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ConversationEventRRWeb)[] = ["data", "data_part", "data_sha256", "data_total_parts", "data_total_sha256", "event_index", "type"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * @export
 */
export const ConversationEventRRWebTypeEnum = {
    Init: 'init',
    Events: 'events'
} as const;
export type ConversationEventRRWebTypeEnum = typeof ConversationEventRRWebTypeEnum[keyof typeof ConversationEventRRWebTypeEnum];


/**
 * Check if a given object implements the ConversationEventRRWeb interface.
 */
export function instanceOfConversationEventRRWeb(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConversationEventRRWebFromJSON(json: any): ConversationEventRRWeb {
    return ConversationEventRRWebFromJSONTyped(json, false);
}

export function ConversationEventRRWebFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationEventRRWeb {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : json['data'],
        'data_part': !exists(json, 'data_part') ? undefined : json['data_part'],
        'data_sha256': !exists(json, 'data_sha256') ? undefined : json['data_sha256'],
        'data_total_parts': !exists(json, 'data_total_parts') ? undefined : json['data_total_parts'],
        'data_total_sha256': !exists(json, 'data_total_sha256') ? undefined : json['data_total_sha256'],
        'event_index': !exists(json, 'event_index') ? undefined : json['event_index'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ConversationEventRRWebToJSON(value?: ConversationEventRRWeb | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data,
        'data_part': value.data_part,
        'data_sha256': value.data_sha256,
        'data_total_parts': value.data_total_parts,
        'data_total_sha256': value.data_total_sha256,
        'event_index': value.event_index,
        'type': value.type,
    };
}

