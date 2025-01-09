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
 * @interface ConversationPbxVoicemailMessage
 */
export interface ConversationPbxVoicemailMessage {
    /**
     * Call SID
     * @type {string}
     * @memberof ConversationPbxVoicemailMessage
     */
    call_sid?: string;
    /**
     * Duration in seconds
     * @type {number}
     * @memberof ConversationPbxVoicemailMessage
     */
    duration?: number;
    /**
     * From phone number in E.164
     * @type {string}
     * @memberof ConversationPbxVoicemailMessage
     */
    from?: string;
    /**
     * From caller id (if available)
     * @type {string}
     * @memberof ConversationPbxVoicemailMessage
     */
    from_caller_id?: string;
    /**
     * True if the voicemail has been listened to in the user interface
     * @type {boolean}
     * @memberof ConversationPbxVoicemailMessage
     */
    listened?: boolean;
    /**
     * Merchant ID
     * @type {string}
     * @memberof ConversationPbxVoicemailMessage
     */
    merchant_id?: string;
    /**
     * Recording SID
     * @type {string}
     * @memberof ConversationPbxVoicemailMessage
     */
    recording_sid?: string;
    /**
     * Recording size in bytes
     * @type {number}
     * @memberof ConversationPbxVoicemailMessage
     */
    recording_size_bytes?: number;
    /**
     * Recording Status
     * @type {string}
     * @memberof ConversationPbxVoicemailMessage
     */
    recording_status?: ConversationPbxVoicemailMessageRecordingStatusEnum;
    /**
     * Recording URL (expires in 4 hours)
     * @type {string}
     * @memberof ConversationPbxVoicemailMessage
     */
    recording_url?: string;
    /**
     * JSON version of the transcript
     * @type {string}
     * @memberof ConversationPbxVoicemailMessage
     */
    transcript_json?: string;
    /**
     * Formatted text of the transcript
     * @type {string}
     * @memberof ConversationPbxVoicemailMessage
     */
    transcript_text?: string;
    /**
     * Voicemail date/time
     * @type {string}
     * @memberof ConversationPbxVoicemailMessage
     */
    voicemail_dts?: string;
}


/**
 * @export
 */
export const ConversationPbxVoicemailMessageRecordingStatusEnum = {
    Completed: 'completed'
} as const;
export type ConversationPbxVoicemailMessageRecordingStatusEnum = typeof ConversationPbxVoicemailMessageRecordingStatusEnum[keyof typeof ConversationPbxVoicemailMessageRecordingStatusEnum];


export function ConversationPbxVoicemailMessageFromJSON(json: any): ConversationPbxVoicemailMessage {
    return ConversationPbxVoicemailMessageFromJSONTyped(json, false);
}

export function ConversationPbxVoicemailMessageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationPbxVoicemailMessage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'call_sid': !exists(json, 'call_sid') ? undefined : json['call_sid'],
        'duration': !exists(json, 'duration') ? undefined : json['duration'],
        'from': !exists(json, 'from') ? undefined : json['from'],
        'from_caller_id': !exists(json, 'from_caller_id') ? undefined : json['from_caller_id'],
        'listened': !exists(json, 'listened') ? undefined : json['listened'],
        'merchant_id': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'recording_sid': !exists(json, 'recording_sid') ? undefined : json['recording_sid'],
        'recording_size_bytes': !exists(json, 'recording_size_bytes') ? undefined : json['recording_size_bytes'],
        'recording_status': !exists(json, 'recording_status') ? undefined : json['recording_status'],
        'recording_url': !exists(json, 'recording_url') ? undefined : json['recording_url'],
        'transcript_json': !exists(json, 'transcript_json') ? undefined : json['transcript_json'],
        'transcript_text': !exists(json, 'transcript_text') ? undefined : json['transcript_text'],
        'voicemail_dts': !exists(json, 'voicemail_dts') ? undefined : json['voicemail_dts'],
    };
}

export function ConversationPbxVoicemailMessageToJSON(value?: ConversationPbxVoicemailMessage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'call_sid': value.call_sid,
        'duration': value.duration,
        'from': value.from,
        'from_caller_id': value.from_caller_id,
        'listened': value.listened,
        'merchant_id': value.merchant_id,
        'recording_sid': value.recording_sid,
        'recording_size_bytes': value.recording_size_bytes,
        'recording_status': value.recording_status,
        'recording_url': value.recording_url,
        'transcript_json': value.transcript_json,
        'transcript_text': value.transcript_text,
        'voicemail_dts': value.voicemail_dts,
    };
}

