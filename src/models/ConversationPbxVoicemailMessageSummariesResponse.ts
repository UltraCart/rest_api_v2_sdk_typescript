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
    ConversationPbxVoicemailMessageSummary,
    ConversationPbxVoicemailMessageSummaryFromJSON,
    ConversationPbxVoicemailMessageSummaryFromJSONTyped,
    ConversationPbxVoicemailMessageSummaryToJSON,
} from './ConversationPbxVoicemailMessageSummary';
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
 * @interface ConversationPbxVoicemailMessageSummariesResponse
 */
export interface ConversationPbxVoicemailMessageSummariesResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof ConversationPbxVoicemailMessageSummariesResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ConversationPbxVoicemailMessageSummariesResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ConversationPbxVoicemailMessageSummariesResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Array<ConversationPbxVoicemailMessageSummary>}
     * @memberof ConversationPbxVoicemailMessageSummariesResponse
     */
    voicemail_message_summaries?: Array<ConversationPbxVoicemailMessageSummary>;
    /**
     * 
     * @type {Warning}
     * @memberof ConversationPbxVoicemailMessageSummariesResponse
     */
    warning?: Warning;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ConversationPbxVoicemailMessageSummariesResponse)[] = ["error", "metadata", "success", "voicemail_message_summaries", "warning"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ConversationPbxVoicemailMessageSummariesResponse interface.
 */
export function instanceOfConversationPbxVoicemailMessageSummariesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConversationPbxVoicemailMessageSummariesResponseFromJSON(json: any): ConversationPbxVoicemailMessageSummariesResponse {
    return ConversationPbxVoicemailMessageSummariesResponseFromJSONTyped(json, false);
}

export function ConversationPbxVoicemailMessageSummariesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationPbxVoicemailMessageSummariesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'voicemail_message_summaries': !exists(json, 'voicemail_message_summaries') ? undefined : ((json['voicemail_message_summaries'] as Array<any>).map(ConversationPbxVoicemailMessageSummaryFromJSON)),
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ConversationPbxVoicemailMessageSummariesResponseToJSON(value?: ConversationPbxVoicemailMessageSummariesResponse | null): any {
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
        'voicemail_message_summaries': value.voicemail_message_summaries === undefined ? undefined : ((value.voicemail_message_summaries as Array<any>).map(ConversationPbxVoicemailMessageSummaryToJSON)),
        'warning': WarningToJSON(value.warning),
    };
}

