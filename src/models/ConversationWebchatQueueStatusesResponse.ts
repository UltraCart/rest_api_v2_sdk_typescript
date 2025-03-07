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
    ConversationWebchatQueueStatus,
    ConversationWebchatQueueStatusFromJSON,
    ConversationWebchatQueueStatusFromJSONTyped,
    ConversationWebchatQueueStatusToJSON,
} from './ConversationWebchatQueueStatus';
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
 * @interface ConversationWebchatQueueStatusesResponse
 */
export interface ConversationWebchatQueueStatusesResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof ConversationWebchatQueueStatusesResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ConversationWebchatQueueStatusesResponse
     */
    metadata?: ResponseMetadata;
    /**
     * 
     * @type {Array<ConversationWebchatQueueStatus>}
     * @memberof ConversationWebchatQueueStatusesResponse
     */
    queue_statuses?: Array<ConversationWebchatQueueStatus>;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ConversationWebchatQueueStatusesResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof ConversationWebchatQueueStatusesResponse
     */
    warning?: Warning;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ConversationWebchatQueueStatusesResponse)[] = ["error", "metadata", "queue_statuses", "success", "warning"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ConversationWebchatQueueStatusesResponse interface.
 */
export function instanceOfConversationWebchatQueueStatusesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConversationWebchatQueueStatusesResponseFromJSON(json: any): ConversationWebchatQueueStatusesResponse {
    return ConversationWebchatQueueStatusesResponseFromJSONTyped(json, false);
}

export function ConversationWebchatQueueStatusesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationWebchatQueueStatusesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'queue_statuses': !exists(json, 'queue_statuses') ? undefined : ((json['queue_statuses'] as Array<any>).map(ConversationWebchatQueueStatusFromJSON)),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ConversationWebchatQueueStatusesResponseToJSON(value?: ConversationWebchatQueueStatusesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'queue_statuses': value.queue_statuses === undefined ? undefined : ((value.queue_statuses as Array<any>).map(ConversationWebchatQueueStatusToJSON)),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

