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
 * @interface ConversationDepartmentsResponse
 */
export interface ConversationDepartmentsResponse {
    /**
     * 
     * @type {Array<ConversationDepartment>}
     * @memberof ConversationDepartmentsResponse
     */
    conversation_departments?: Array<ConversationDepartment>;
    /**
     * 
     * @type {ModelError}
     * @memberof ConversationDepartmentsResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ConversationDepartmentsResponse
     */
    metadata?: ResponseMetadata;
    /**
     * 
     * @type {boolean}
     * @memberof ConversationDepartmentsResponse
     */
    read_only?: boolean;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ConversationDepartmentsResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof ConversationDepartmentsResponse
     */
    warning?: Warning;
}

export function ConversationDepartmentsResponseFromJSON(json: any): ConversationDepartmentsResponse {
    return ConversationDepartmentsResponseFromJSONTyped(json, false);
}

export function ConversationDepartmentsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationDepartmentsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conversation_departments': !exists(json, 'conversation_departments') ? undefined : ((json['conversation_departments'] as Array<any>).map(ConversationDepartmentFromJSON)),
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'read_only': !exists(json, 'read_only') ? undefined : json['read_only'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ConversationDepartmentsResponseToJSON(value?: ConversationDepartmentsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conversation_departments': value.conversation_departments === undefined ? undefined : ((value.conversation_departments as Array<any>).map(ConversationDepartmentToJSON)),
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'read_only': value.read_only,
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

