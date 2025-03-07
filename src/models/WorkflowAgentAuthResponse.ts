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
    WorkflowAgentAuth,
    WorkflowAgentAuthFromJSON,
    WorkflowAgentAuthFromJSONTyped,
    WorkflowAgentAuthToJSON,
} from './WorkflowAgentAuth';

/**
 * 
 * @export
 * @interface WorkflowAgentAuthResponse
 */
export interface WorkflowAgentAuthResponse {
    /**
     * 
     * @type {WorkflowAgentAuth}
     * @memberof WorkflowAgentAuthResponse
     */
    agent_auth?: WorkflowAgentAuth;
    /**
     * 
     * @type {ModelError}
     * @memberof WorkflowAgentAuthResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof WorkflowAgentAuthResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof WorkflowAgentAuthResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof WorkflowAgentAuthResponse
     */
    warning?: Warning;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof WorkflowAgentAuthResponse)[] = ["agent_auth", "error", "metadata", "success", "warning"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the WorkflowAgentAuthResponse interface.
 */
export function instanceOfWorkflowAgentAuthResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WorkflowAgentAuthResponseFromJSON(json: any): WorkflowAgentAuthResponse {
    return WorkflowAgentAuthResponseFromJSONTyped(json, false);
}

export function WorkflowAgentAuthResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkflowAgentAuthResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'agent_auth': !exists(json, 'agent_auth') ? undefined : WorkflowAgentAuthFromJSON(json['agent_auth']),
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function WorkflowAgentAuthResponseToJSON(value?: WorkflowAgentAuthResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'agent_auth': WorkflowAgentAuthToJSON(value.agent_auth),
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

