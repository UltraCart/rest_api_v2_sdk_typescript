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
    ConversationMessageTranslation,
    ConversationMessageTranslationFromJSON,
    ConversationMessageTranslationFromJSONTyped,
    ConversationMessageTranslationToJSON,
} from './ConversationMessageTranslation';
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
     * @type {string}
     * @memberof ConversationMessage
     */
    client_message_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationMessage
     */
    conversation_message_uuid?: string;
    /**
     * Delay message transmission until date/time
     * @type {string}
     * @memberof ConversationMessage
     */
    delay_until_dts?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationMessage
     */
    language_iso_code?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ConversationMessage
     */
    media_urls?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ConversationMessage
     */
    merchant_id?: string;
    /**
     * Message date/time
     * @type {string}
     * @memberof ConversationMessage
     */
    message_dts?: string;
    /**
     * Message epoch milliseconds
     * @type {number}
     * @memberof ConversationMessage
     */
    message_epoch?: number;
    /**
     * 
     * @type {Array<ConversationMessageTranslation>}
     * @memberof ConversationMessage
     */
    translations?: Array<ConversationMessageTranslation>;
    /**
     * 
     * @type {Array<ConversationMessageTransportStatus>}
     * @memberof ConversationMessage
     */
    transport_statuses?: Array<ConversationMessageTransportStatus>;
    /**
     * Message type
     * @type {string}
     * @memberof ConversationMessage
     */
    type?: ConversationMessageTypeEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof ConversationMessage
     */
    upload_keys?: Array<string>;
}


/**
 * @export
 */
export const ConversationMessageTypeEnum = {
    Message: 'message',
    Notice: 'notice'
} as const;
export type ConversationMessageTypeEnum = typeof ConversationMessageTypeEnum[keyof typeof ConversationMessageTypeEnum];


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
        'client_message_id': !exists(json, 'client_message_id') ? undefined : json['client_message_id'],
        'conversation_message_uuid': !exists(json, 'conversation_message_uuid') ? undefined : json['conversation_message_uuid'],
        'delay_until_dts': !exists(json, 'delay_until_dts') ? undefined : json['delay_until_dts'],
        'language_iso_code': !exists(json, 'language_iso_code') ? undefined : json['language_iso_code'],
        'media_urls': !exists(json, 'media_urls') ? undefined : json['media_urls'],
        'merchant_id': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'message_dts': !exists(json, 'message_dts') ? undefined : json['message_dts'],
        'message_epoch': !exists(json, 'message_epoch') ? undefined : json['message_epoch'],
        'translations': !exists(json, 'translations') ? undefined : ((json['translations'] as Array<any>).map(ConversationMessageTranslationFromJSON)),
        'transport_statuses': !exists(json, 'transport_statuses') ? undefined : ((json['transport_statuses'] as Array<any>).map(ConversationMessageTransportStatusFromJSON)),
        'type': !exists(json, 'type') ? undefined : json['type'],
        'upload_keys': !exists(json, 'upload_keys') ? undefined : json['upload_keys'],
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
        'client_message_id': value.client_message_id,
        'conversation_message_uuid': value.conversation_message_uuid,
        'delay_until_dts': value.delay_until_dts,
        'language_iso_code': value.language_iso_code,
        'media_urls': value.media_urls,
        'merchant_id': value.merchant_id,
        'message_dts': value.message_dts,
        'message_epoch': value.message_epoch,
        'translations': value.translations === undefined ? undefined : ((value.translations as Array<any>).map(ConversationMessageTranslationToJSON)),
        'transport_statuses': value.transport_statuses === undefined ? undefined : ((value.transport_statuses as Array<any>).map(ConversationMessageTransportStatusToJSON)),
        'type': value.type,
        'upload_keys': value.upload_keys,
    };
}

