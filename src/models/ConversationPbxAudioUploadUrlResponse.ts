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
    ConversationPbxAudioUploadUrl,
    ConversationPbxAudioUploadUrlFromJSON,
    ConversationPbxAudioUploadUrlFromJSONTyped,
    ConversationPbxAudioUploadUrlToJSON,
} from './ConversationPbxAudioUploadUrl';
import {
    ModelError,
    ModelErrorFromJSON,
    ModelErrorFromJSONTyped,
    ModelErrorToJSON,
} from './ModelError';
import {
    ResponseMetadata,
    ResponseMetadataFromJSON,
    ResponseMetadataFromJSONTyped,
    ResponseMetadataToJSON,
} from './ResponseMetadata';
import {
    Warning,
    WarningFromJSON,
    WarningFromJSONTyped,
    WarningToJSON,
} from './Warning';

/**
 * 
 * @export
 * @interface ConversationPbxAudioUploadUrlResponse
 */
export interface ConversationPbxAudioUploadUrlResponse {
    /**
     * 
     * @type {ConversationPbxAudioUploadUrl}
     * @memberof ConversationPbxAudioUploadUrlResponse
     */
    conversation_pbx_audio_upload_url?: ConversationPbxAudioUploadUrl;
    /**
     * 
     * @type {ModelError}
     * @memberof ConversationPbxAudioUploadUrlResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ConversationPbxAudioUploadUrlResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ConversationPbxAudioUploadUrlResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof ConversationPbxAudioUploadUrlResponse
     */
    warning?: Warning;
}



/**
 * Check if a given object implements the ConversationPbxAudioUploadUrlResponse interface.
 */
export function instanceOfConversationPbxAudioUploadUrlResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConversationPbxAudioUploadUrlResponseFromJSON(json: any): ConversationPbxAudioUploadUrlResponse {
    return ConversationPbxAudioUploadUrlResponseFromJSONTyped(json, false);
}

export function ConversationPbxAudioUploadUrlResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationPbxAudioUploadUrlResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conversation_pbx_audio_upload_url': !exists(json, 'conversation_pbx_audio_upload_url') ? undefined : ConversationPbxAudioUploadUrlFromJSON(json['conversation_pbx_audio_upload_url']),
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ConversationPbxAudioUploadUrlResponseToJSON(value?: ConversationPbxAudioUploadUrlResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conversation_pbx_audio_upload_url': ConversationPbxAudioUploadUrlToJSON(value.conversation_pbx_audio_upload_url),
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

