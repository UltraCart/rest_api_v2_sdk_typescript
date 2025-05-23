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
    Conversation,
    ConversationFromJSON,
    ConversationFromJSONTyped,
    ConversationToJSON,
} from './Conversation';

/**
 * 
 * @export
 * @interface ConversationStartResponse
 */
export interface ConversationStartResponse {
    /**
     * 
     * @type {Conversation}
     * @memberof ConversationStartResponse
     */
    conversation?: Conversation;
}



/**
 * Check if a given object implements the ConversationStartResponse interface.
 */
export function instanceOfConversationStartResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConversationStartResponseFromJSON(json: any): ConversationStartResponse {
    return ConversationStartResponseFromJSONTyped(json, false);
}

export function ConversationStartResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationStartResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conversation': !exists(json, 'conversation') ? undefined : ConversationFromJSON(json['conversation']),
    };
}

export function ConversationStartResponseToJSON(value?: ConversationStartResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conversation': ConversationToJSON(value.conversation),
    };
}

