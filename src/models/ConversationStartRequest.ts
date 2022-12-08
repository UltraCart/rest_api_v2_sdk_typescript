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
 * @interface ConversationStartRequest
 */
export interface ConversationStartRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof ConversationStartRequest
     */
    add_conversation_participant_arns?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ConversationStartRequest
     */
    conversation_arn?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationStartRequest
     */
    conversation_webchat_queue_uuid?: string;
}

export function ConversationStartRequestFromJSON(json: any): ConversationStartRequest {
    return ConversationStartRequestFromJSONTyped(json, false);
}

export function ConversationStartRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationStartRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'add_conversation_participant_arns': !exists(json, 'add_conversation_participant_arns') ? undefined : json['add_conversation_participant_arns'],
        'conversation_arn': !exists(json, 'conversation_arn') ? undefined : json['conversation_arn'],
        'conversation_webchat_queue_uuid': !exists(json, 'conversation_webchat_queue_uuid') ? undefined : json['conversation_webchat_queue_uuid'],
    };
}

export function ConversationStartRequestToJSON(value?: ConversationStartRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'add_conversation_participant_arns': value.add_conversation_participant_arns,
        'conversation_arn': value.conversation_arn,
        'conversation_webchat_queue_uuid': value.conversation_webchat_queue_uuid,
    };
}
