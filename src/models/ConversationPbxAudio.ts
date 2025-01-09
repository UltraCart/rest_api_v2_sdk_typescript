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
 * @interface ConversationPbxAudio
 */
export interface ConversationPbxAudio {
    /**
     * Audio S3 Listing Key
     * @type {string}
     * @memberof ConversationPbxAudio
     */
    audio_s3_listing_key?: string;
    /**
     * Conversation Pbx Audio UUID
     * @type {string}
     * @memberof ConversationPbxAudio
     */
    conversation_pbx_audio_uuid?: string;
    /**
     * If true, this will be the default hold music
     * @type {boolean}
     * @memberof ConversationPbxAudio
     */
    default_hold_music?: boolean;
    /**
     * Description of this audio
     * @type {string}
     * @memberof ConversationPbxAudio
     */
    description?: string;
    /**
     * Filename
     * @type {string}
     * @memberof ConversationPbxAudio
     */
    filename?: string;
    /**
     * Merchant Id
     * @type {string}
     * @memberof ConversationPbxAudio
     */
    merchant_id?: string;
    /**
     * Mime Type
     * @type {string}
     * @memberof ConversationPbxAudio
     */
    mime_type?: string;
    /**
     * URL
     * @type {string}
     * @memberof ConversationPbxAudio
     */
    url?: string;
    /**
     * User Id
     * @type {number}
     * @memberof ConversationPbxAudio
     */
    user_id?: number;
    /**
     * Version
     * @type {number}
     * @memberof ConversationPbxAudio
     */
    version?: number;
}

export function ConversationPbxAudioFromJSON(json: any): ConversationPbxAudio {
    return ConversationPbxAudioFromJSONTyped(json, false);
}

export function ConversationPbxAudioFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationPbxAudio {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'audio_s3_listing_key': !exists(json, 'audio_s3_listing_key') ? undefined : json['audio_s3_listing_key'],
        'conversation_pbx_audio_uuid': !exists(json, 'conversation_pbx_audio_uuid') ? undefined : json['conversation_pbx_audio_uuid'],
        'default_hold_music': !exists(json, 'default_hold_music') ? undefined : json['default_hold_music'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'filename': !exists(json, 'filename') ? undefined : json['filename'],
        'merchant_id': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'mime_type': !exists(json, 'mime_type') ? undefined : json['mime_type'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'user_id': !exists(json, 'user_id') ? undefined : json['user_id'],
        'version': !exists(json, 'version') ? undefined : json['version'],
    };
}

export function ConversationPbxAudioToJSON(value?: ConversationPbxAudio | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'audio_s3_listing_key': value.audio_s3_listing_key,
        'conversation_pbx_audio_uuid': value.conversation_pbx_audio_uuid,
        'default_hold_music': value.default_hold_music,
        'description': value.description,
        'filename': value.filename,
        'merchant_id': value.merchant_id,
        'mime_type': value.mime_type,
        'url': value.url,
        'user_id': value.user_id,
        'version': value.version,
    };
}

