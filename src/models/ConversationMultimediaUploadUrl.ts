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
 * @interface ConversationMultimediaUploadUrl
 */
export interface ConversationMultimediaUploadUrl {
    /**
     * 
     * @type {string}
     * @memberof ConversationMultimediaUploadUrl
     */
    key?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationMultimediaUploadUrl
     */
    url?: string;
}



/**
 * Check if a given object implements the ConversationMultimediaUploadUrl interface.
 */
export function instanceOfConversationMultimediaUploadUrl(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConversationMultimediaUploadUrlFromJSON(json: any): ConversationMultimediaUploadUrl {
    return ConversationMultimediaUploadUrlFromJSONTyped(json, false);
}

export function ConversationMultimediaUploadUrlFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationMultimediaUploadUrl {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'key': !exists(json, 'key') ? undefined : json['key'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function ConversationMultimediaUploadUrlToJSON(value?: ConversationMultimediaUploadUrl | null): any {
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

