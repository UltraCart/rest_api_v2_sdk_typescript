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
import {
    WorkflowUser,
    WorkflowUserFromJSON,
    WorkflowUserFromJSONTyped,
    WorkflowUserToJSON,
} from './WorkflowUser';

/**
 * 
 * @export
 * @interface WorkflowUserResponse
 */
export interface WorkflowUserResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof WorkflowUserResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof WorkflowUserResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof WorkflowUserResponse
     */
    success?: boolean;
    /**
     * 
     * @type {WorkflowUser}
     * @memberof WorkflowUserResponse
     */
    user?: WorkflowUser;
    /**
     * 
     * @type {Warning}
     * @memberof WorkflowUserResponse
     */
    warning?: Warning;
}

export function WorkflowUserResponseFromJSON(json: any): WorkflowUserResponse {
    return WorkflowUserResponseFromJSONTyped(json, false);
}

export function WorkflowUserResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkflowUserResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'user': !exists(json, 'user') ? undefined : WorkflowUserFromJSON(json['user']),
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function WorkflowUserResponseToJSON(value?: WorkflowUserResponse | null): any {
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
        'user': WorkflowUserToJSON(value.user),
        'warning': WarningToJSON(value.warning),
    };
}
