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
    ConversationEngagement,
    ConversationEngagementFromJSON,
    ConversationEngagementFromJSONTyped,
    ConversationEngagementToJSON,
} from './ConversationEngagement';
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
 * @interface ConversationEngagementsResponse
 */
export interface ConversationEngagementsResponse {
    /**
     * 
     * @type {Array<ConversationEngagement>}
     * @memberof ConversationEngagementsResponse
     */
    conversation_engagements?: Array<ConversationEngagement>;
    /**
     * 
     * @type {ModelError}
     * @memberof ConversationEngagementsResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ConversationEngagementsResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ConversationEngagementsResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof ConversationEngagementsResponse
     */
    warning?: Warning;
}



/**
 * Check if a given object implements the ConversationEngagementsResponse interface.
 */
export function instanceOfConversationEngagementsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConversationEngagementsResponseFromJSON(json: any): ConversationEngagementsResponse {
    return ConversationEngagementsResponseFromJSONTyped(json, false);
}

export function ConversationEngagementsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationEngagementsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conversation_engagements': !exists(json, 'conversation_engagements') ? undefined : ((json['conversation_engagements'] as Array<any>).map(ConversationEngagementFromJSON)),
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ConversationEngagementsResponseToJSON(value?: ConversationEngagementsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conversation_engagements': value.conversation_engagements === undefined ? undefined : ((value.conversation_engagements as Array<any>).map(ConversationEngagementToJSON)),
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

