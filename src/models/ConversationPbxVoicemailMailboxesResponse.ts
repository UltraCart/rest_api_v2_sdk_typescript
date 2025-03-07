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
    ConversationPbxVoicemailMailbox,
    ConversationPbxVoicemailMailboxFromJSON,
    ConversationPbxVoicemailMailboxFromJSONTyped,
    ConversationPbxVoicemailMailboxToJSON,
} from './ConversationPbxVoicemailMailbox';
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
 * @interface ConversationPbxVoicemailMailboxesResponse
 */
export interface ConversationPbxVoicemailMailboxesResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof ConversationPbxVoicemailMailboxesResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ConversationPbxVoicemailMailboxesResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ConversationPbxVoicemailMailboxesResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Array<ConversationPbxVoicemailMailbox>}
     * @memberof ConversationPbxVoicemailMailboxesResponse
     */
    voicemail_mailboxes?: Array<ConversationPbxVoicemailMailbox>;
    /**
     * 
     * @type {Warning}
     * @memberof ConversationPbxVoicemailMailboxesResponse
     */
    warning?: Warning;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ConversationPbxVoicemailMailboxesResponse)[] = ["error", "metadata", "success", "voicemail_mailboxes", "warning"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ConversationPbxVoicemailMailboxesResponse interface.
 */
export function instanceOfConversationPbxVoicemailMailboxesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConversationPbxVoicemailMailboxesResponseFromJSON(json: any): ConversationPbxVoicemailMailboxesResponse {
    return ConversationPbxVoicemailMailboxesResponseFromJSONTyped(json, false);
}

export function ConversationPbxVoicemailMailboxesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationPbxVoicemailMailboxesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'voicemail_mailboxes': !exists(json, 'voicemail_mailboxes') ? undefined : ((json['voicemail_mailboxes'] as Array<any>).map(ConversationPbxVoicemailMailboxFromJSON)),
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ConversationPbxVoicemailMailboxesResponseToJSON(value?: ConversationPbxVoicemailMailboxesResponse | null): any {
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
        'voicemail_mailboxes': value.voicemail_mailboxes === undefined ? undefined : ((value.voicemail_mailboxes as Array<any>).map(ConversationPbxVoicemailMailboxToJSON)),
        'warning': WarningToJSON(value.warning),
    };
}

