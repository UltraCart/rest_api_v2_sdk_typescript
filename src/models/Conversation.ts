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
    ConversationMessage,
    ConversationMessageFromJSON,
    ConversationMessageFromJSONTyped,
    ConversationMessageToJSON,
} from './ConversationMessage';
import {
    ConversationParticipant,
    ConversationParticipantFromJSON,
    ConversationParticipantFromJSONTyped,
    ConversationParticipantToJSON,
} from './ConversationParticipant';

/**
 * 
 * @export
 * @interface Conversation
 */
export interface Conversation {
    /**
     * 
     * @type {boolean}
     * @memberof Conversation
     */
    closed?: boolean;
    /**
     * 
     * @type {string}
     * @memberof Conversation
     */
    conversation_arn?: string;
    /**
     * 
     * @type {string}
     * @memberof Conversation
     */
    conversation_uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof Conversation
     */
    last_conversation_message_body?: string;
    /**
     * 
     * @type {string}
     * @memberof Conversation
     */
    last_conversation_participant_arn?: string;
    /**
     * 
     * @type {string}
     * @memberof Conversation
     */
    last_conversation_participant_name?: string;
    /**
     * Last message date/time
     * @type {string}
     * @memberof Conversation
     */
    last_message_dts?: string;
    /**
     * The communication medium of the customer.
     * @type {string}
     * @memberof Conversation
     */
    medium?: ConversationMediumEnum;
    /**
     * 
     * @type {string}
     * @memberof Conversation
     */
    merchant_id?: string;
    /**
     * 
     * @type {number}
     * @memberof Conversation
     */
    message_count?: number;
    /**
     * 
     * @type {Array<ConversationMessage>}
     * @memberof Conversation
     */
    messages?: Array<ConversationMessage>;
    /**
     * 
     * @type {Array<ConversationParticipant>}
     * @memberof Conversation
     */
    participants?: Array<ConversationParticipant>;
    /**
     * Start of the conversation date/time
     * @type {string}
     * @memberof Conversation
     */
    start_dts?: string;
    /**
     * 
     * @type {boolean}
     * @memberof Conversation
     */
    unread_messages?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof Conversation
     */
    visible?: boolean;
}


/**
 * @export
 */
export const ConversationMediumEnum = {
    Sms: 'sms',
    Websocket: 'websocket'
} as const;
export type ConversationMediumEnum = typeof ConversationMediumEnum[keyof typeof ConversationMediumEnum];


export function ConversationFromJSON(json: any): Conversation {
    return ConversationFromJSONTyped(json, false);
}

export function ConversationFromJSONTyped(json: any, ignoreDiscriminator: boolean): Conversation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'closed': !exists(json, 'closed') ? undefined : json['closed'],
        'conversation_arn': !exists(json, 'conversation_arn') ? undefined : json['conversation_arn'],
        'conversation_uuid': !exists(json, 'conversation_uuid') ? undefined : json['conversation_uuid'],
        'last_conversation_message_body': !exists(json, 'last_conversation_message_body') ? undefined : json['last_conversation_message_body'],
        'last_conversation_participant_arn': !exists(json, 'last_conversation_participant_arn') ? undefined : json['last_conversation_participant_arn'],
        'last_conversation_participant_name': !exists(json, 'last_conversation_participant_name') ? undefined : json['last_conversation_participant_name'],
        'last_message_dts': !exists(json, 'last_message_dts') ? undefined : json['last_message_dts'],
        'medium': !exists(json, 'medium') ? undefined : json['medium'],
        'merchant_id': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'message_count': !exists(json, 'message_count') ? undefined : json['message_count'],
        'messages': !exists(json, 'messages') ? undefined : ((json['messages'] as Array<any>).map(ConversationMessageFromJSON)),
        'participants': !exists(json, 'participants') ? undefined : ((json['participants'] as Array<any>).map(ConversationParticipantFromJSON)),
        'start_dts': !exists(json, 'start_dts') ? undefined : json['start_dts'],
        'unread_messages': !exists(json, 'unread_messages') ? undefined : json['unread_messages'],
        'visible': !exists(json, 'visible') ? undefined : json['visible'],
    };
}

export function ConversationToJSON(value?: Conversation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'closed': value.closed,
        'conversation_arn': value.conversation_arn,
        'conversation_uuid': value.conversation_uuid,
        'last_conversation_message_body': value.last_conversation_message_body,
        'last_conversation_participant_arn': value.last_conversation_participant_arn,
        'last_conversation_participant_name': value.last_conversation_participant_name,
        'last_message_dts': value.last_message_dts,
        'medium': value.medium,
        'merchant_id': value.merchant_id,
        'message_count': value.message_count,
        'messages': value.messages === undefined ? undefined : ((value.messages as Array<any>).map(ConversationMessageToJSON)),
        'participants': value.participants === undefined ? undefined : ((value.participants as Array<any>).map(ConversationParticipantToJSON)),
        'start_dts': value.start_dts,
        'unread_messages': value.unread_messages,
        'visible': value.visible,
    };
}

