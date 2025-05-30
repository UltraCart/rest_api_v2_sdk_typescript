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
    ConversationDepartment,
    ConversationDepartmentFromJSON,
    ConversationDepartmentFromJSONTyped,
    ConversationDepartmentToJSON,
} from './ConversationDepartment';
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
 * @interface ConversationDepartmentResponse
 */
export interface ConversationDepartmentResponse {
    /**
     * 
     * @type {ConversationDepartment}
     * @memberof ConversationDepartmentResponse
     */
    conversation_department?: ConversationDepartment;
    /**
     * 
     * @type {ModelError}
     * @memberof ConversationDepartmentResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ConversationDepartmentResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ConversationDepartmentResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof ConversationDepartmentResponse
     */
    warning?: Warning;
}



/**
 * Check if a given object implements the ConversationDepartmentResponse interface.
 */
export function instanceOfConversationDepartmentResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConversationDepartmentResponseFromJSON(json: any): ConversationDepartmentResponse {
    return ConversationDepartmentResponseFromJSONTyped(json, false);
}

export function ConversationDepartmentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationDepartmentResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conversation_department': !exists(json, 'conversation_department') ? undefined : ConversationDepartmentFromJSON(json['conversation_department']),
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ConversationDepartmentResponseToJSON(value?: ConversationDepartmentResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conversation_department': ConversationDepartmentToJSON(value.conversation_department),
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

