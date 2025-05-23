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
    ConversationCannedMessage,
    ConversationCannedMessageFromJSON,
    ConversationCannedMessageFromJSONTyped,
    ConversationCannedMessageToJSON,
} from './ConversationCannedMessage';
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
 * @interface ConversationCannedMessageResponse
 */
export interface ConversationCannedMessageResponse {
    /**
     * 
     * @type {ConversationCannedMessage}
     * @memberof ConversationCannedMessageResponse
     */
    conversation_canned_message?: ConversationCannedMessage;
    /**
     * 
     * @type {ModelError}
     * @memberof ConversationCannedMessageResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ConversationCannedMessageResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ConversationCannedMessageResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof ConversationCannedMessageResponse
     */
    warning?: Warning;
}



/**
 * Check if a given object implements the ConversationCannedMessageResponse interface.
 */
export function instanceOfConversationCannedMessageResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConversationCannedMessageResponseFromJSON(json: any): ConversationCannedMessageResponse {
    return ConversationCannedMessageResponseFromJSONTyped(json, false);
}

export function ConversationCannedMessageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationCannedMessageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conversation_canned_message': !exists(json, 'conversation_canned_message') ? undefined : ConversationCannedMessageFromJSON(json['conversation_canned_message']),
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ConversationCannedMessageResponseToJSON(value?: ConversationCannedMessageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conversation_canned_message': ConversationCannedMessageToJSON(value.conversation_canned_message),
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

