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
 * @interface ConversationPbxAgent
 */
export interface ConversationPbxAgent {
    /**
     * Cellphone number of agent in E.164 format
     * @type {string}
     * @memberof ConversationPbxAgent
     */
    cellphone?: string;
    /**
     * Conversation Pbx Agent unique identifier
     * @type {string}
     * @memberof ConversationPbxAgent
     */
    conversation_pbx_agent_uuid?: string;
    /**
     * Conversation Pbx Voicemail Mailbox UUID
     * @type {string}
     * @memberof ConversationPbxAgent
     */
    conversation_pbx_voicemail_mailbox_uuid?: string;
    /**
     * True if calls to this agent should be forwarded to their cellphone
     * @type {boolean}
     * @memberof ConversationPbxAgent
     */
    forward_calls_to_cellphone?: boolean;
    /**
     * Merchant Id
     * @type {string}
     * @memberof ConversationPbxAgent
     */
    merchant_id?: string;
    /**
     * True if outgoing calls should be automatically recorded
     * @type {boolean}
     * @memberof ConversationPbxAgent
     */
    record_outgoing_automatically?: boolean;
    /**
     * Twilio taskrouter worker Id
     * @type {string}
     * @memberof ConversationPbxAgent
     */
    twilio_taskrouter_worker_id?: string;
    /**
     * User Id
     * @type {number}
     * @memberof ConversationPbxAgent
     */
    user_id?: number;
    /**
     * True if this agent has voicemail configured
     * @type {boolean}
     * @memberof ConversationPbxAgent
     */
    voicemail?: boolean;
}

export function ConversationPbxAgentFromJSON(json: any): ConversationPbxAgent {
    return ConversationPbxAgentFromJSONTyped(json, false);
}

export function ConversationPbxAgentFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationPbxAgent {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cellphone': !exists(json, 'cellphone') ? undefined : json['cellphone'],
        'conversation_pbx_agent_uuid': !exists(json, 'conversation_pbx_agent_uuid') ? undefined : json['conversation_pbx_agent_uuid'],
        'conversation_pbx_voicemail_mailbox_uuid': !exists(json, 'conversation_pbx_voicemail_mailbox_uuid') ? undefined : json['conversation_pbx_voicemail_mailbox_uuid'],
        'forward_calls_to_cellphone': !exists(json, 'forward_calls_to_cellphone') ? undefined : json['forward_calls_to_cellphone'],
        'merchant_id': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'record_outgoing_automatically': !exists(json, 'record_outgoing_automatically') ? undefined : json['record_outgoing_automatically'],
        'twilio_taskrouter_worker_id': !exists(json, 'twilio_taskrouter_worker_id') ? undefined : json['twilio_taskrouter_worker_id'],
        'user_id': !exists(json, 'user_id') ? undefined : json['user_id'],
        'voicemail': !exists(json, 'voicemail') ? undefined : json['voicemail'],
    };
}

export function ConversationPbxAgentToJSON(value?: ConversationPbxAgent | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cellphone': value.cellphone,
        'conversation_pbx_agent_uuid': value.conversation_pbx_agent_uuid,
        'conversation_pbx_voicemail_mailbox_uuid': value.conversation_pbx_voicemail_mailbox_uuid,
        'forward_calls_to_cellphone': value.forward_calls_to_cellphone,
        'merchant_id': value.merchant_id,
        'record_outgoing_automatically': value.record_outgoing_automatically,
        'twilio_taskrouter_worker_id': value.twilio_taskrouter_worker_id,
        'user_id': value.user_id,
        'voicemail': value.voicemail,
    };
}

