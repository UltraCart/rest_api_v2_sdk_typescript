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
 * @interface ConversationPbxAudioUploadUrl
 */
export interface ConversationPbxAudioUploadUrl {
    /**
     * 
     * @type {string}
     * @memberof ConversationPbxAudioUploadUrl
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationPbxAudioUploadUrl
     */
    url?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ConversationPbxAudioUploadUrl)[] = ["key", "url"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ConversationPbxAudioUploadUrl interface.
 */
export function instanceOfConversationPbxAudioUploadUrl(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConversationPbxAudioUploadUrlFromJSON(json: any): ConversationPbxAudioUploadUrl {
    return ConversationPbxAudioUploadUrlFromJSONTyped(json, false);
}

export function ConversationPbxAudioUploadUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationPbxAudioUploadUrl {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': !exists(json, 'key') ? undefined : json['key'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function ConversationPbxAudioUploadUrlToJSON(value?: ConversationPbxAudioUploadUrl | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key': value.key,
        'url': value.url,
    };
}

