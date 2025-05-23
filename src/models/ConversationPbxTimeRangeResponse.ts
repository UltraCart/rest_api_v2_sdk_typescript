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
    ConversationPbxTimeRange,
    ConversationPbxTimeRangeFromJSON,
    ConversationPbxTimeRangeFromJSONTyped,
    ConversationPbxTimeRangeToJSON,
} from './ConversationPbxTimeRange';
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
 * @interface ConversationPbxTimeRangeResponse
 */
export interface ConversationPbxTimeRangeResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof ConversationPbxTimeRangeResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ConversationPbxTimeRangeResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ConversationPbxTimeRangeResponse
     */
    success?: boolean;
    /**
     * 
     * @type {ConversationPbxTimeRange}
     * @memberof ConversationPbxTimeRangeResponse
     */
    time_range?: ConversationPbxTimeRange;
    /**
     * 
     * @type {Warning}
     * @memberof ConversationPbxTimeRangeResponse
     */
    warning?: Warning;
}



/**
 * Check if a given object implements the ConversationPbxTimeRangeResponse interface.
 */
export function instanceOfConversationPbxTimeRangeResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConversationPbxTimeRangeResponseFromJSON(json: any): ConversationPbxTimeRangeResponse {
    return ConversationPbxTimeRangeResponseFromJSONTyped(json, false);
}

export function ConversationPbxTimeRangeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationPbxTimeRangeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'time_range': !exists(json, 'time_range') ? undefined : ConversationPbxTimeRangeFromJSON(json['time_range']),
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ConversationPbxTimeRangeResponseToJSON(value?: ConversationPbxTimeRangeResponse | null): any {
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
        'time_range': ConversationPbxTimeRangeToJSON(value.time_range),
        'warning': WarningToJSON(value.warning),
    };
}

