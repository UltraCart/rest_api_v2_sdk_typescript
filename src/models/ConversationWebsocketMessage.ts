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
    ConversationEventQueuePosition,
    ConversationEventQueuePositionFromJSON,
    ConversationEventQueuePositionFromJSONTyped,
    ConversationEventQueuePositionToJSON,
} from './ConversationEventQueuePosition';
import {
    ConversationEventRRWeb,
    ConversationEventRRWebFromJSON,
    ConversationEventRRWebFromJSONTyped,
    ConversationEventRRWebToJSON,
} from './ConversationEventRRWeb';
import {
    ConversationEventTyping,
    ConversationEventTypingFromJSON,
    ConversationEventTypingFromJSONTyped,
    ConversationEventTypingToJSON,
} from './ConversationEventTyping';
import {
    ConversationMessage,
    ConversationMessageFromJSON,
    ConversationMessageFromJSONTyped,
    ConversationMessageToJSON,
} from './ConversationMessage';
import {
    ConversationSummary,
    ConversationSummaryFromJSON,
    ConversationSummaryFromJSONTyped,
    ConversationSummaryToJSON,
} from './ConversationSummary';
import {
    ConversationWebchatQueueStatus,
    ConversationWebchatQueueStatusFromJSON,
    ConversationWebchatQueueStatusFromJSONTyped,
    ConversationWebchatQueueStatusToJSON,
} from './ConversationWebchatQueueStatus';

/**
 * 
 * @export
 * @interface ConversationWebsocketMessage
 */
export interface ConversationWebsocketMessage {
    /**
     * Conversation UUID if the websocket message is tied to a specific conversation
     * @type {string}
     * @memberof ConversationWebsocketMessage
     */
    conversation_uuid?: string;
    /**
     * 
     * @type {ConversationSummary}
     * @memberof ConversationWebsocketMessage
     */
    event_conversation_closed?: ConversationSummary;
    /**
     * 
     * @type {ConversationSummary}
     * @memberof ConversationWebsocketMessage
     */
    event_new_conversation?: ConversationSummary;
    /**
     * 
     * @type {ConversationSummary}
     * @memberof ConversationWebsocketMessage
     */
    event_new_message?: ConversationSummary;
    /**
     * 
     * @type {ConversationEventQueuePosition}
     * @memberof ConversationWebsocketMessage
     */
    event_queue_position?: ConversationEventQueuePosition;
    /**
     * 
     * @type {ConversationWebchatQueueStatus}
     * @memberof ConversationWebsocketMessage
     */
    event_queue_status_update?: ConversationWebchatQueueStatus;
    /**
     * 
     * @type {ConversationEventRRWeb}
     * @memberof ConversationWebsocketMessage
     */
    event_rrweb?: ConversationEventRRWeb;
    /**
     * Type of event
     * @type {string}
     * @memberof ConversationWebsocketMessage
     */
    event_type?: ConversationWebsocketMessageEventTypeEnum;
    /**
     * 
     * @type {ConversationEventTyping}
     * @memberof ConversationWebsocketMessage
     */
    event_typing?: ConversationEventTyping;
    /**
     * 
     * @type {ConversationMessage}
     * @memberof ConversationWebsocketMessage
     */
    event_updated_message?: ConversationMessage;
    /**
     * 
     * @type {ConversationMessage}
     * @memberof ConversationWebsocketMessage
     */
    message?: ConversationMessage;
    /**
     * Type of message
     * @type {string}
     * @memberof ConversationWebsocketMessage
     */
    type?: ConversationWebsocketMessageTypeEnum;
}


/**
 * @export
 */
export const ConversationWebsocketMessageEventTypeEnum = {
    QueuePosition: 'queue position',
    WebchatStartConversation: 'webchat start conversation',
    ConversationClosed: 'conversation closed',
    NewConversation: 'new conversation',
    NewMessage: 'new message',
    UpdatedMessage: 'updated message',
    QueueStatusUpdate: 'queue status update',
    Rrweb: 'rrweb'
} as const;
export type ConversationWebsocketMessageEventTypeEnum = typeof ConversationWebsocketMessageEventTypeEnum[keyof typeof ConversationWebsocketMessageEventTypeEnum];

/**
 * @export
 */
export const ConversationWebsocketMessageTypeEnum = {
    Message: 'message',
    Event: 'event',
    Ping: 'ping',
    CheckQueuePosition: 'check queue position'
} as const;
export type ConversationWebsocketMessageTypeEnum = typeof ConversationWebsocketMessageTypeEnum[keyof typeof ConversationWebsocketMessageTypeEnum];


export function ConversationWebsocketMessageFromJSON(json: any): ConversationWebsocketMessage {
    return ConversationWebsocketMessageFromJSONTyped(json, false);
}

export function ConversationWebsocketMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationWebsocketMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conversation_uuid': !exists(json, 'conversation_uuid') ? undefined : json['conversation_uuid'],
        'event_conversation_closed': !exists(json, 'event_conversation_closed') ? undefined : ConversationSummaryFromJSON(json['event_conversation_closed']),
        'event_new_conversation': !exists(json, 'event_new_conversation') ? undefined : ConversationSummaryFromJSON(json['event_new_conversation']),
        'event_new_message': !exists(json, 'event_new_message') ? undefined : ConversationSummaryFromJSON(json['event_new_message']),
        'event_queue_position': !exists(json, 'event_queue_position') ? undefined : ConversationEventQueuePositionFromJSON(json['event_queue_position']),
        'event_queue_status_update': !exists(json, 'event_queue_status_update') ? undefined : ConversationWebchatQueueStatusFromJSON(json['event_queue_status_update']),
        'event_rrweb': !exists(json, 'event_rrweb') ? undefined : ConversationEventRRWebFromJSON(json['event_rrweb']),
        'event_type': !exists(json, 'event_type') ? undefined : json['event_type'],
        'event_typing': !exists(json, 'event_typing') ? undefined : ConversationEventTypingFromJSON(json['event_typing']),
        'event_updated_message': !exists(json, 'event_updated_message') ? undefined : ConversationMessageFromJSON(json['event_updated_message']),
        'message': !exists(json, 'message') ? undefined : ConversationMessageFromJSON(json['message']),
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ConversationWebsocketMessageToJSON(value?: ConversationWebsocketMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conversation_uuid': value.conversation_uuid,
        'event_conversation_closed': ConversationSummaryToJSON(value.event_conversation_closed),
        'event_new_conversation': ConversationSummaryToJSON(value.event_new_conversation),
        'event_new_message': ConversationSummaryToJSON(value.event_new_message),
        'event_queue_position': ConversationEventQueuePositionToJSON(value.event_queue_position),
        'event_queue_status_update': ConversationWebchatQueueStatusToJSON(value.event_queue_status_update),
        'event_rrweb': ConversationEventRRWebToJSON(value.event_rrweb),
        'event_type': value.event_type,
        'event_typing': ConversationEventTypingToJSON(value.event_typing),
        'event_updated_message': ConversationMessageToJSON(value.event_updated_message),
        'message': ConversationMessageToJSON(value.message),
        'type': value.type,
    };
}

