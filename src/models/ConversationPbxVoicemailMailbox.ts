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
 * @interface ConversationPbxVoicemailMailbox
 */
export interface ConversationPbxVoicemailMailbox {
    /**
     * Conversation Pbx Voicemail Mailbox UUID
     * @type {string}
     * @memberof ConversationPbxVoicemailMailbox
     */
    conversation_pbx_voicemail_mailbox_uuid?: string;
    /**
     * Merchant Id
     * @type {string}
     * @memberof ConversationPbxVoicemailMailbox
     */
    merchant_id?: string;
    /**
     * Send notices to email
     * @type {string}
     * @memberof ConversationPbxVoicemailMailbox
     */
    send_notices_to_email?: string;
    /**
     * User Id
     * @type {number}
     * @memberof ConversationPbxVoicemailMailbox
     */
    user_id?: number;
    /**
     * Voicemail follow play audio UUID
     * @type {string}
     * @memberof ConversationPbxVoicemailMailbox
     */
    voicemail_followup_play_audio_uuid?: string;
    /**
     * Voicemail followup say
     * @type {string}
     * @memberof ConversationPbxVoicemailMailbox
     */
    voicemail_followup_say?: string;
    /**
     * Voicemail followup say voice
     * @type {string}
     * @memberof ConversationPbxVoicemailMailbox
     */
    voicemail_followup_say_voice?: ConversationPbxVoicemailMailboxVoicemailFollowupSayVoiceEnum;
    /**
     * Voicemail mailbox id
     * @type {string}
     * @memberof ConversationPbxVoicemailMailbox
     */
    voicemail_mailbox_id?: string;
    /**
     * Voicemail mailbox type
     * @type {string}
     * @memberof ConversationPbxVoicemailMailbox
     */
    voicemail_mailbox_type?: ConversationPbxVoicemailMailboxVoicemailMailboxTypeEnum;
    /**
     * Voicemail prompt play audio UUID
     * @type {string}
     * @memberof ConversationPbxVoicemailMailbox
     */
    voicemail_prompt_play_audio_uuid?: string;
    /**
     * Voicemail prompt say
     * @type {string}
     * @memberof ConversationPbxVoicemailMailbox
     */
    voicemail_prompt_say?: string;
    /**
     * Voicemail prompt say voice
     * @type {string}
     * @memberof ConversationPbxVoicemailMailbox
     */
    voicemail_prompt_say_voice?: ConversationPbxVoicemailMailboxVoicemailPromptSayVoiceEnum;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ConversationPbxVoicemailMailbox)[] = ["conversation_pbx_voicemail_mailbox_uuid", "merchant_id", "send_notices_to_email", "user_id", "voicemail_followup_play_audio_uuid", "voicemail_followup_say", "voicemail_followup_say_voice", "voicemail_mailbox_id", "voicemail_mailbox_type", "voicemail_prompt_play_audio_uuid", "voicemail_prompt_say", "voicemail_prompt_say_voice"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * @export
 */
export const ConversationPbxVoicemailMailboxVoicemailFollowupSayVoiceEnum = {
    Man: 'man',
    Woman: 'woman'
} as const;
export type ConversationPbxVoicemailMailboxVoicemailFollowupSayVoiceEnum = typeof ConversationPbxVoicemailMailboxVoicemailFollowupSayVoiceEnum[keyof typeof ConversationPbxVoicemailMailboxVoicemailFollowupSayVoiceEnum];

/**
 * @export
 */
export const ConversationPbxVoicemailMailboxVoicemailMailboxTypeEnum = {
    Agent: 'agent',
    Shared: 'shared'
} as const;
export type ConversationPbxVoicemailMailboxVoicemailMailboxTypeEnum = typeof ConversationPbxVoicemailMailboxVoicemailMailboxTypeEnum[keyof typeof ConversationPbxVoicemailMailboxVoicemailMailboxTypeEnum];

/**
 * @export
 */
export const ConversationPbxVoicemailMailboxVoicemailPromptSayVoiceEnum = {
    Man: 'man',
    Woman: 'woman'
} as const;
export type ConversationPbxVoicemailMailboxVoicemailPromptSayVoiceEnum = typeof ConversationPbxVoicemailMailboxVoicemailPromptSayVoiceEnum[keyof typeof ConversationPbxVoicemailMailboxVoicemailPromptSayVoiceEnum];


/**
 * Check if a given object implements the ConversationPbxVoicemailMailbox interface.
 */
export function instanceOfConversationPbxVoicemailMailbox(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConversationPbxVoicemailMailboxFromJSON(json: any): ConversationPbxVoicemailMailbox {
    return ConversationPbxVoicemailMailboxFromJSONTyped(json, false);
}

export function ConversationPbxVoicemailMailboxFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationPbxVoicemailMailbox {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conversation_pbx_voicemail_mailbox_uuid': !exists(json, 'conversation_pbx_voicemail_mailbox_uuid') ? undefined : json['conversation_pbx_voicemail_mailbox_uuid'],
        'merchant_id': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'send_notices_to_email': !exists(json, 'send_notices_to_email') ? undefined : json['send_notices_to_email'],
        'user_id': !exists(json, 'user_id') ? undefined : json['user_id'],
        'voicemail_followup_play_audio_uuid': !exists(json, 'voicemail_followup_play_audio_uuid') ? undefined : json['voicemail_followup_play_audio_uuid'],
        'voicemail_followup_say': !exists(json, 'voicemail_followup_say') ? undefined : json['voicemail_followup_say'],
        'voicemail_followup_say_voice': !exists(json, 'voicemail_followup_say_voice') ? undefined : json['voicemail_followup_say_voice'],
        'voicemail_mailbox_id': !exists(json, 'voicemail_mailbox_id') ? undefined : json['voicemail_mailbox_id'],
        'voicemail_mailbox_type': !exists(json, 'voicemail_mailbox_type') ? undefined : json['voicemail_mailbox_type'],
        'voicemail_prompt_play_audio_uuid': !exists(json, 'voicemail_prompt_play_audio_uuid') ? undefined : json['voicemail_prompt_play_audio_uuid'],
        'voicemail_prompt_say': !exists(json, 'voicemail_prompt_say') ? undefined : json['voicemail_prompt_say'],
        'voicemail_prompt_say_voice': !exists(json, 'voicemail_prompt_say_voice') ? undefined : json['voicemail_prompt_say_voice'],
    };
}

export function ConversationPbxVoicemailMailboxToJSON(value?: ConversationPbxVoicemailMailbox | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conversation_pbx_voicemail_mailbox_uuid': value.conversation_pbx_voicemail_mailbox_uuid,
        'merchant_id': value.merchant_id,
        'send_notices_to_email': value.send_notices_to_email,
        'user_id': value.user_id,
        'voicemail_followup_play_audio_uuid': value.voicemail_followup_play_audio_uuid,
        'voicemail_followup_say': value.voicemail_followup_say,
        'voicemail_followup_say_voice': value.voicemail_followup_say_voice,
        'voicemail_mailbox_id': value.voicemail_mailbox_id,
        'voicemail_mailbox_type': value.voicemail_mailbox_type,
        'voicemail_prompt_play_audio_uuid': value.voicemail_prompt_play_audio_uuid,
        'voicemail_prompt_say': value.voicemail_prompt_say,
        'voicemail_prompt_say_voice': value.voicemail_prompt_say_voice,
    };
}

