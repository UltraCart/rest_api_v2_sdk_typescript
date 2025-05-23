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
    ConversationPbxQueue,
    ConversationPbxQueueFromJSON,
    ConversationPbxQueueFromJSONTyped,
    ConversationPbxQueueToJSON,
} from './ConversationPbxQueue';
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
 * @interface ConversationPbxQueueResponse
 */
export interface ConversationPbxQueueResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof ConversationPbxQueueResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ConversationPbxQueueResponse
     */
    metadata?: ResponseMetadata;
    /**
     * 
     * @type {ConversationPbxQueue}
     * @memberof ConversationPbxQueueResponse
     */
    queue?: ConversationPbxQueue;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ConversationPbxQueueResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof ConversationPbxQueueResponse
     */
    warning?: Warning;
}



/**
 * Check if a given object implements the ConversationPbxQueueResponse interface.
 */
export function instanceOfConversationPbxQueueResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConversationPbxQueueResponseFromJSON(json: any): ConversationPbxQueueResponse {
    return ConversationPbxQueueResponseFromJSONTyped(json, false);
}

export function ConversationPbxQueueResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationPbxQueueResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'queue': !exists(json, 'queue') ? undefined : ConversationPbxQueueFromJSON(json['queue']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ConversationPbxQueueResponseToJSON(value?: ConversationPbxQueueResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'queue': ConversationPbxQueueToJSON(value.queue),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

