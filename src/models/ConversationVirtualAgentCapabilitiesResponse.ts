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
    ConversationVirtualAgentCapabilities,
    ConversationVirtualAgentCapabilitiesFromJSON,
    ConversationVirtualAgentCapabilitiesFromJSONTyped,
    ConversationVirtualAgentCapabilitiesToJSON,
} from './ConversationVirtualAgentCapabilities';
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
 * @interface ConversationVirtualAgentCapabilitiesResponse
 */
export interface ConversationVirtualAgentCapabilitiesResponse {
    /**
     * 
     * @type {ConversationVirtualAgentCapabilities}
     * @memberof ConversationVirtualAgentCapabilitiesResponse
     */
    capabilities?: ConversationVirtualAgentCapabilities;
    /**
     * 
     * @type {ModelError}
     * @memberof ConversationVirtualAgentCapabilitiesResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ConversationVirtualAgentCapabilitiesResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ConversationVirtualAgentCapabilitiesResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof ConversationVirtualAgentCapabilitiesResponse
     */
    warning?: Warning;
}



/**
 * Check if a given object implements the ConversationVirtualAgentCapabilitiesResponse interface.
 */
export function instanceOfConversationVirtualAgentCapabilitiesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConversationVirtualAgentCapabilitiesResponseFromJSON(json: any): ConversationVirtualAgentCapabilitiesResponse {
    return ConversationVirtualAgentCapabilitiesResponseFromJSONTyped(json, false);
}

export function ConversationVirtualAgentCapabilitiesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationVirtualAgentCapabilitiesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'capabilities': !exists(json, 'capabilities') ? undefined : ConversationVirtualAgentCapabilitiesFromJSON(json['capabilities']),
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ConversationVirtualAgentCapabilitiesResponseToJSON(value?: ConversationVirtualAgentCapabilitiesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'capabilities': ConversationVirtualAgentCapabilitiesToJSON(value.capabilities),
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

