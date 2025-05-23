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
    WorkflowTask,
    WorkflowTaskFromJSON,
    WorkflowTaskFromJSONTyped,
    WorkflowTaskToJSON,
} from './WorkflowTask';

/**
 * 
 * @export
 * @interface WorkflowTasksResponse
 */
export interface WorkflowTasksResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof WorkflowTasksResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof WorkflowTasksResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof WorkflowTasksResponse
     */
    success?: boolean;
    /**
     * User friendly string of the task context if querying for a specific object type/id
     * @type {string}
     * @memberof WorkflowTasksResponse
     */
    task_context?: string;
    /**
     * tasks
     * @type {Array<WorkflowTask>}
     * @memberof WorkflowTasksResponse
     */
    tasks?: Array<WorkflowTask>;
    /**
     * 
     * @type {Warning}
     * @memberof WorkflowTasksResponse
     */
    warning?: Warning;
}



/**
 * Check if a given object implements the WorkflowTasksResponse interface.
 */
export function instanceOfWorkflowTasksResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WorkflowTasksResponseFromJSON(json: any): WorkflowTasksResponse {
    return WorkflowTasksResponseFromJSONTyped(json, false);
}

export function WorkflowTasksResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkflowTasksResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'task_context': !exists(json, 'task_context') ? undefined : json['task_context'],
        'tasks': !exists(json, 'tasks') ? undefined : ((json['tasks'] as Array<any>).map(WorkflowTaskFromJSON)),
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function WorkflowTasksResponseToJSON(value?: WorkflowTasksResponse | null): any {
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
        'task_context': value.task_context,
        'tasks': value.tasks === undefined ? undefined : ((value.tasks as Array<any>).map(WorkflowTaskToJSON)),
        'warning': WarningToJSON(value.warning),
    };
}

