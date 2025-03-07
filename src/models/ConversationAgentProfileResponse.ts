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
    ConversationAgentProfile,
    ConversationAgentProfileFromJSON,
    ConversationAgentProfileFromJSONTyped,
    ConversationAgentProfileToJSON,
} from './ConversationAgentProfile';
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
 * @interface ConversationAgentProfileResponse
 */
export interface ConversationAgentProfileResponse {
    /**
     * 
     * @type {ConversationAgentProfile}
     * @memberof ConversationAgentProfileResponse
     */
    agent_profile?: ConversationAgentProfile;
    /**
     * 
     * @type {ModelError}
     * @memberof ConversationAgentProfileResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ConversationAgentProfileResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ConversationAgentProfileResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof ConversationAgentProfileResponse
     */
    warning?: Warning;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ConversationAgentProfileResponse)[] = ["agent_profile", "error", "metadata", "success", "warning"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ConversationAgentProfileResponse interface.
 */
export function instanceOfConversationAgentProfileResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConversationAgentProfileResponseFromJSON(json: any): ConversationAgentProfileResponse {
    return ConversationAgentProfileResponseFromJSONTyped(json, false);
}

export function ConversationAgentProfileResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationAgentProfileResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'agent_profile': !exists(json, 'agent_profile') ? undefined : ConversationAgentProfileFromJSON(json['agent_profile']),
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ConversationAgentProfileResponseToJSON(value?: ConversationAgentProfileResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'agent_profile': ConversationAgentProfileToJSON(value.agent_profile),
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

