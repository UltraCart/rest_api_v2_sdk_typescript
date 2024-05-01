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
    ConversationPbxVoicemailMessage,
    ConversationPbxVoicemailMessageFromJSON,
    ConversationPbxVoicemailMessageFromJSONTyped,
    ConversationPbxVoicemailMessageToJSON,
} from './ConversationPbxVoicemailMessage';
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
 * @interface ConversationPbxVoicemailMessageResponse
 */
export interface ConversationPbxVoicemailMessageResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof ConversationPbxVoicemailMessageResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ConversationPbxVoicemailMessageResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ConversationPbxVoicemailMessageResponse
     */
    success?: boolean;
    /**
     * 
     * @type {ConversationPbxVoicemailMessage}
     * @memberof ConversationPbxVoicemailMessageResponse
     */
    voicemail_message?: ConversationPbxVoicemailMessage;
    /**
     * 
     * @type {Warning}
     * @memberof ConversationPbxVoicemailMessageResponse
     */
    warning?: Warning;
}

export function ConversationPbxVoicemailMessageResponseFromJSON(json: any): ConversationPbxVoicemailMessageResponse {
    return ConversationPbxVoicemailMessageResponseFromJSONTyped(json, false);
}

export function ConversationPbxVoicemailMessageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationPbxVoicemailMessageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'voicemail_message': !exists(json, 'voicemail_message') ? undefined : ConversationPbxVoicemailMessageFromJSON(json['voicemail_message']),
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ConversationPbxVoicemailMessageResponseToJSON(value?: ConversationPbxVoicemailMessageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'voicemail_message': ConversationPbxVoicemailMessageToJSON(value.voicemail_message),
        'warning': WarningToJSON(value.warning),
    };
}
