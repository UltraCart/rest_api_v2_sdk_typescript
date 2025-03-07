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
 * @interface ConversationPbxMenuMapping
 */
export interface ConversationPbxMenuMapping {
    /**
     * Action
     * @type {string}
     * @memberof ConversationPbxMenuMapping
     */
    action?: ConversationPbxMenuMappingActionEnum;
    /**
     * Action target.  This is the UUID associated with the configuration object of that particular type.
     * @type {string}
     * @memberof ConversationPbxMenuMapping
     */
    action_target?: string;
    /**
     * Digits
     * @type {number}
     * @memberof ConversationPbxMenuMapping
     */
    digits?: number;
    /**
     * Speech
     * @type {string}
     * @memberof ConversationPbxMenuMapping
     */
    speech?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ConversationPbxMenuMapping)[] = ["action", "action_target", "digits", "speech"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * @export
 */
export const ConversationPbxMenuMappingActionEnum = {
    TimeBased: 'time based',
    Menu: 'menu',
    Queue: 'queue',
    Voicemail: 'voicemail',
    Agent: 'agent'
} as const;
export type ConversationPbxMenuMappingActionEnum = typeof ConversationPbxMenuMappingActionEnum[keyof typeof ConversationPbxMenuMappingActionEnum];


/**
 * Check if a given object implements the ConversationPbxMenuMapping interface.
 */
export function instanceOfConversationPbxMenuMapping(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConversationPbxMenuMappingFromJSON(json: any): ConversationPbxMenuMapping {
    return ConversationPbxMenuMappingFromJSONTyped(json, false);
}

export function ConversationPbxMenuMappingFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationPbxMenuMapping {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': !exists(json, 'action') ? undefined : json['action'],
        'action_target': !exists(json, 'action_target') ? undefined : json['action_target'],
        'digits': !exists(json, 'digits') ? undefined : json['digits'],
        'speech': !exists(json, 'speech') ? undefined : json['speech'],
    };
}

export function ConversationPbxMenuMappingToJSON(value?: ConversationPbxMenuMapping | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'action_target': value.action_target,
        'digits': value.digits,
        'speech': value.speech,
    };
}

