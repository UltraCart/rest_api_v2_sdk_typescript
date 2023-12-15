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
    ConversationEventAddCoupon,
    ConversationEventAddCouponFromJSON,
    ConversationEventAddCouponFromJSONTyped,
    ConversationEventAddCouponToJSON,
} from './ConversationEventAddCoupon';
import {
    ConversationEventAddItem,
    ConversationEventAddItemFromJSON,
    ConversationEventAddItemFromJSONTyped,
    ConversationEventAddItemToJSON,
} from './ConversationEventAddItem';
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
    ConversationEventReadMessage,
    ConversationEventReadMessageFromJSON,
    ConversationEventReadMessageFromJSONTyped,
    ConversationEventReadMessageToJSON,
} from './ConversationEventReadMessage';
import {
    ConversationEventTyping,
    ConversationEventTypingFromJSON,
    ConversationEventTypingFromJSONTyped,
    ConversationEventTypingToJSON,
} from './ConversationEventTyping';
import {
    ConversationEventWebchatContext,
    ConversationEventWebchatContextFromJSON,
    ConversationEventWebchatContextFromJSONTyped,
    ConversationEventWebchatContextToJSON,
} from './ConversationEventWebchatContext';
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
import {
    ConversationWebchatQueueStatusQueueEntry,
    ConversationWebchatQueueStatusQueueEntryFromJSON,
    ConversationWebchatQueueStatusQueueEntryFromJSONTyped,
    ConversationWebchatQueueStatusQueueEntryToJSON,
} from './ConversationWebchatQueueStatusQueueEntry';

/**
 * 
 * @export
 * @interface ConversationWebsocketMessage
 */
export interface ConversationWebsocketMessage {
    /**
     * Conversation ARN
     * @type {string}
     * @memberof ConversationWebsocketMessage
     */
    conversation_arn?: string;
    /**
     * Conversation UUID if the websocket message is tied to a specific conversation
     * @type {string}
     * @memberof ConversationWebsocketMessage
     */
    conversation_uuid?: string;
    /**
     * 
     * @type {ConversationEventAddCoupon}
     * @memberof ConversationWebsocketMessage
     */
    event_add_coupon?: ConversationEventAddCoupon;
    /**
     * 
     * @type {ConversationEventAddItem}
     * @memberof ConversationWebsocketMessage
     */
    event_add_item?: ConversationEventAddItem;
    /**
     * 
     * @type {ConversationSummary}
     * @memberof ConversationWebsocketMessage
     */
    event_conversation_closed?: ConversationSummary;
    /**
     * 
     * @type {ConversationWebchatQueueStatusQueueEntry}
     * @memberof ConversationWebsocketMessage
     */
    event_engage_customer?: ConversationWebchatQueueStatusQueueEntry;
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
     * @type {ConversationSummary}
     * @memberof ConversationWebsocketMessage
     */
    event_participant_join?: ConversationSummary;
    /**
     * 
     * @type {ConversationParticipant}
     * @memberof ConversationWebsocketMessage
     */
    event_participant_join_participant?: ConversationParticipant;
    /**
     * 
     * @type {ConversationSummary}
     * @memberof ConversationWebsocketMessage
     */
    event_participant_left?: ConversationSummary;
    /**
     * 
     * @type {ConversationParticipant}
     * @memberof ConversationWebsocketMessage
     */
    event_participant_left_participant?: ConversationParticipant;
    /**
     * 
     * @type {ConversationSummary}
     * @memberof ConversationWebsocketMessage
     */
    event_participant_update?: ConversationSummary;
    /**
     * 
     * @type {ConversationWebchatQueueStatusQueueEntry}
     * @memberof ConversationWebsocketMessage
     */
    event_queue_new_member?: ConversationWebchatQueueStatusQueueEntry;
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
     * @type {ConversationEventReadMessage}
     * @memberof ConversationWebsocketMessage
     */
    event_read_message?: ConversationEventReadMessage;
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
     * @type {ConversationEventWebchatContext}
     * @memberof ConversationWebsocketMessage
     */
    event_webchat_context?: ConversationEventWebchatContext;
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
    Rrweb: 'rrweb',
    ParticipantUpdate: 'participant update',
    ParticipantJoin: 'participant join',
    ParticipantLeft: 'participant left',
    ReadMessage: 'read message',
    Typing: 'typing',
    AddCoupon: 'add coupon',
    AddItem: 'add item',
    WebchatContext: 'webchat context',
    EngageCustomer: 'engage customer',
    QueueNewMember: 'queue new member'
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
        
        'conversation_arn': !exists(json, 'conversation_arn') ? undefined : json['conversation_arn'],
        'conversation_uuid': !exists(json, 'conversation_uuid') ? undefined : json['conversation_uuid'],
        'event_add_coupon': !exists(json, 'event_add_coupon') ? undefined : ConversationEventAddCouponFromJSON(json['event_add_coupon']),
        'event_add_item': !exists(json, 'event_add_item') ? undefined : ConversationEventAddItemFromJSON(json['event_add_item']),
        'event_conversation_closed': !exists(json, 'event_conversation_closed') ? undefined : ConversationSummaryFromJSON(json['event_conversation_closed']),
        'event_engage_customer': !exists(json, 'event_engage_customer') ? undefined : ConversationWebchatQueueStatusQueueEntryFromJSON(json['event_engage_customer']),
        'event_new_conversation': !exists(json, 'event_new_conversation') ? undefined : ConversationSummaryFromJSON(json['event_new_conversation']),
        'event_new_message': !exists(json, 'event_new_message') ? undefined : ConversationSummaryFromJSON(json['event_new_message']),
        'event_participant_join': !exists(json, 'event_participant_join') ? undefined : ConversationSummaryFromJSON(json['event_participant_join']),
        'event_participant_join_participant': !exists(json, 'event_participant_join_participant') ? undefined : ConversationParticipantFromJSON(json['event_participant_join_participant']),
        'event_participant_left': !exists(json, 'event_participant_left') ? undefined : ConversationSummaryFromJSON(json['event_participant_left']),
        'event_participant_left_participant': !exists(json, 'event_participant_left_participant') ? undefined : ConversationParticipantFromJSON(json['event_participant_left_participant']),
        'event_participant_update': !exists(json, 'event_participant_update') ? undefined : ConversationSummaryFromJSON(json['event_participant_update']),
        'event_queue_new_member': !exists(json, 'event_queue_new_member') ? undefined : ConversationWebchatQueueStatusQueueEntryFromJSON(json['event_queue_new_member']),
        'event_queue_position': !exists(json, 'event_queue_position') ? undefined : ConversationEventQueuePositionFromJSON(json['event_queue_position']),
        'event_queue_status_update': !exists(json, 'event_queue_status_update') ? undefined : ConversationWebchatQueueStatusFromJSON(json['event_queue_status_update']),
        'event_read_message': !exists(json, 'event_read_message') ? undefined : ConversationEventReadMessageFromJSON(json['event_read_message']),
        'event_rrweb': !exists(json, 'event_rrweb') ? undefined : ConversationEventRRWebFromJSON(json['event_rrweb']),
        'event_type': !exists(json, 'event_type') ? undefined : json['event_type'],
        'event_typing': !exists(json, 'event_typing') ? undefined : ConversationEventTypingFromJSON(json['event_typing']),
        'event_updated_message': !exists(json, 'event_updated_message') ? undefined : ConversationMessageFromJSON(json['event_updated_message']),
        'event_webchat_context': !exists(json, 'event_webchat_context') ? undefined : ConversationEventWebchatContextFromJSON(json['event_webchat_context']),
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
        
        'conversation_arn': value.conversation_arn,
        'conversation_uuid': value.conversation_uuid,
        'event_add_coupon': ConversationEventAddCouponToJSON(value.event_add_coupon),
        'event_add_item': ConversationEventAddItemToJSON(value.event_add_item),
        'event_conversation_closed': ConversationSummaryToJSON(value.event_conversation_closed),
        'event_engage_customer': ConversationWebchatQueueStatusQueueEntryToJSON(value.event_engage_customer),
        'event_new_conversation': ConversationSummaryToJSON(value.event_new_conversation),
        'event_new_message': ConversationSummaryToJSON(value.event_new_message),
        'event_participant_join': ConversationSummaryToJSON(value.event_participant_join),
        'event_participant_join_participant': ConversationParticipantToJSON(value.event_participant_join_participant),
        'event_participant_left': ConversationSummaryToJSON(value.event_participant_left),
        'event_participant_left_participant': ConversationParticipantToJSON(value.event_participant_left_participant),
        'event_participant_update': ConversationSummaryToJSON(value.event_participant_update),
        'event_queue_new_member': ConversationWebchatQueueStatusQueueEntryToJSON(value.event_queue_new_member),
        'event_queue_position': ConversationEventQueuePositionToJSON(value.event_queue_position),
        'event_queue_status_update': ConversationWebchatQueueStatusToJSON(value.event_queue_status_update),
        'event_read_message': ConversationEventReadMessageToJSON(value.event_read_message),
        'event_rrweb': ConversationEventRRWebToJSON(value.event_rrweb),
        'event_type': value.event_type,
        'event_typing': ConversationEventTypingToJSON(value.event_typing),
        'event_updated_message': ConversationMessageToJSON(value.event_updated_message),
        'event_webchat_context': ConversationEventWebchatContextToJSON(value.event_webchat_context),
        'message': ConversationMessageToJSON(value.message),
        'type': value.type,
    };
}

