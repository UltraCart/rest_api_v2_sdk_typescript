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
 * @interface ConversationWebchatQueueStatusQueueEntry
 */
export interface ConversationWebchatQueueStatusQueueEntry {
    /**
     * 
     * @type {string}
     * @memberof ConversationWebchatQueueStatusQueueEntry
     */
    conversation_participant_arn?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationWebchatQueueStatusQueueEntry
     */
    conversation_participant_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationWebchatQueueStatusQueueEntry
     */
    conversation_webchat_queue_uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationWebchatQueueStatusQueueEntry
     */
    email?: string;
    /**
     * Date/time the customer joined the queue
     * @type {string}
     * @memberof ConversationWebchatQueueStatusQueueEntry
     */
    join_dts?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationWebchatQueueStatusQueueEntry
     */
    participant_language_iso_code?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationWebchatQueueStatusQueueEntry
     */
    question?: string;
}

export function ConversationWebchatQueueStatusQueueEntryFromJSON(json: any): ConversationWebchatQueueStatusQueueEntry {
    return ConversationWebchatQueueStatusQueueEntryFromJSONTyped(json, false);
}

export function ConversationWebchatQueueStatusQueueEntryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationWebchatQueueStatusQueueEntry {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conversation_participant_arn': !exists(json, 'conversation_participant_arn') ? undefined : json['conversation_participant_arn'],
        'conversation_participant_name': !exists(json, 'conversation_participant_name') ? undefined : json['conversation_participant_name'],
        'conversation_webchat_queue_uuid': !exists(json, 'conversation_webchat_queue_uuid') ? undefined : json['conversation_webchat_queue_uuid'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'join_dts': !exists(json, 'join_dts') ? undefined : json['join_dts'],
        'participant_language_iso_code': !exists(json, 'participant_language_iso_code') ? undefined : json['participant_language_iso_code'],
        'question': !exists(json, 'question') ? undefined : json['question'],
    };
}

export function ConversationWebchatQueueStatusQueueEntryToJSON(value?: ConversationWebchatQueueStatusQueueEntry | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conversation_participant_arn': value.conversation_participant_arn,
        'conversation_participant_name': value.conversation_participant_name,
        'conversation_webchat_queue_uuid': value.conversation_webchat_queue_uuid,
        'email': value.email,
        'join_dts': value.join_dts,
        'participant_language_iso_code': value.participant_language_iso_code,
        'question': value.question,
    };
}

