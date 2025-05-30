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
/**
 * 
 * @export
 * @interface WorkflowGroup
 */
export interface WorkflowGroup {
    /**
     * The group
     * @type {string}
     * @memberof WorkflowGroup
     */
    group?: string;
    /**
     * Group ID
     * @type {number}
     * @memberof WorkflowGroup
     */
    group_id?: number;
}



/**
 * Check if a given object implements the WorkflowGroup interface.
 */
export function instanceOfWorkflowGroup(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WorkflowGroupFromJSON(json: any): WorkflowGroup {
    return WorkflowGroupFromJSONTyped(json, false);
}

export function WorkflowGroupFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkflowGroup {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'group': !exists(json, 'group') ? undefined : json['group'],
        'group_id': !exists(json, 'group_id') ? undefined : json['group_id'],
    };
}

export function WorkflowGroupToJSON(value?: WorkflowGroup | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'group': value.group,
        'group_id': value.group_id,
    };
}

