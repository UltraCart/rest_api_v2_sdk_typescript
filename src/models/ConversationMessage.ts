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
    ConversationMessageTransportStatus,
    ConversationMessageTransportStatusFromJSON,
    ConversationMessageTransportStatusFromJSONTyped,
    ConversationMessageTransportStatusToJSON,
} from './ConversationMessageTransportStatus';

/**
 * 
 * @export
 * @interface ConversationMessage
 */
export interface ConversationMessage {
    /**
     * 
     * @type {string}
     * @memberof ConversationMessage
     */
    author_conversation_participant_arn?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationMessage
     */
    author_conversation_participant_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationMessage
     */
    body?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ConversationMessage
     */
    media_urls?: Array<string>;
    /**
     * Message date/time
     * @type {string}
     * @memberof ConversationMessage
     */
    message_dts?: string;
    /**
     * 
     * @type {Array<ConversationMessageTransportStatus>}
     * @memberof ConversationMessage
     */
    transport_statuses?: Array<ConversationMessageTransportStatus>;
}

export function ConversationMessageFromJSON(json: any): ConversationMessage {
    return ConversationMessageFromJSONTyped(json, false);
}

export function ConversationMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'author_conversation_participant_arn': !exists(json, 'author_conversation_participant_arn') ? undefined : json['author_conversation_participant_arn'],
        'author_conversation_participant_name': !exists(json, 'author_conversation_participant_name') ? undefined : json['author_conversation_participant_name'],
        'body': !exists(json, 'body') ? undefined : json['body'],
        'media_urls': !exists(json, 'media_urls') ? undefined : json['media_urls'],
        'message_dts': !exists(json, 'message_dts') ? undefined : json['message_dts'],
        'transport_statuses': !exists(json, 'transport_statuses') ? undefined : ((json['transport_statuses'] as Array<any>).map(ConversationMessageTransportStatusFromJSON)),
    };
}

export function ConversationMessageToJSON(value?: ConversationMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'author_conversation_participant_arn': value.author_conversation_participant_arn,
        'author_conversation_participant_name': value.author_conversation_participant_name,
        'body': value.body,
        'media_urls': value.media_urls,
        'message_dts': value.message_dts,
        'transport_statuses': value.transport_statuses === undefined ? undefined : ((value.transport_statuses as Array<any>).map(ConversationMessageTransportStatusToJSON)),
    };
}

