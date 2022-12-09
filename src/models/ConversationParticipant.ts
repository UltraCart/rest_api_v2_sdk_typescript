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
 * @interface ConversationParticipant
 */
export interface ConversationParticipant {
    /**
     * 
     * @type {string}
     * @memberof ConversationParticipant
     */
    conversation_participant_arn?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationParticipant
     */
    conversation_participant_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationParticipant
     */
    conversation_participant_uuid?: string;
    /**
     * Joined conversation date/time
     * @type {string}
     * @memberof ConversationParticipant
     */
    joined_dts?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationParticipant
     */
    language_iso_code?: string;
    /**
     * Last message date/time
     * @type {string}
     * @memberof ConversationParticipant
     */
    last_message_dts?: string;
    /**
     * Left conversation date/time
     * @type {string}
     * @memberof ConversationParticipant
     */
    left_dts?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationParticipant
     */
    profile_image_url?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationParticipant
     */
    status?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationParticipant
     */
    timezone?: string;
    /**
     * 
     * @type {number}
     * @memberof ConversationParticipant
     */
    unread_messages?: number;
}

export function ConversationParticipantFromJSON(json: any): ConversationParticipant {
    return ConversationParticipantFromJSONTyped(json, false);
}

export function ConversationParticipantFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationParticipant {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conversation_participant_arn': !exists(json, 'conversation_participant_arn') ? undefined : json['conversation_participant_arn'],
        'conversation_participant_name': !exists(json, 'conversation_participant_name') ? undefined : json['conversation_participant_name'],
        'conversation_participant_uuid': !exists(json, 'conversation_participant_uuid') ? undefined : json['conversation_participant_uuid'],
        'joined_dts': !exists(json, 'joined_dts') ? undefined : json['joined_dts'],
        'language_iso_code': !exists(json, 'language_iso_code') ? undefined : json['language_iso_code'],
        'last_message_dts': !exists(json, 'last_message_dts') ? undefined : json['last_message_dts'],
        'left_dts': !exists(json, 'left_dts') ? undefined : json['left_dts'],
        'profile_image_url': !exists(json, 'profile_image_url') ? undefined : json['profile_image_url'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'timezone': !exists(json, 'timezone') ? undefined : json['timezone'],
        'unread_messages': !exists(json, 'unread_messages') ? undefined : json['unread_messages'],
    };
}

export function ConversationParticipantToJSON(value?: ConversationParticipant | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conversation_participant_arn': value.conversation_participant_arn,
        'conversation_participant_name': value.conversation_participant_name,
        'conversation_participant_uuid': value.conversation_participant_uuid,
        'joined_dts': value.joined_dts,
        'language_iso_code': value.language_iso_code,
        'last_message_dts': value.last_message_dts,
        'left_dts': value.left_dts,
        'profile_image_url': value.profile_image_url,
        'status': value.status,
        'timezone': value.timezone,
        'unread_messages': value.unread_messages,
    };
}

