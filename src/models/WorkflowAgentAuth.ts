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
 * @interface WorkflowAgentAuth
 */
export interface WorkflowAgentAuth {
    /**
     * 
     * @type {string}
     * @memberof WorkflowAgentAuth
     */
    jwt?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkflowAgentAuth
     */
    merchant_id?: string;
    /**
     * 
     * @type {string}
     * @memberof WorkflowAgentAuth
     */
    websocket_url?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof WorkflowAgentAuth)[] = ["jwt", "merchant_id", "websocket_url"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the WorkflowAgentAuth interface.
 */
export function instanceOfWorkflowAgentAuth(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function WorkflowAgentAuthFromJSON(json: any): WorkflowAgentAuth {
    return WorkflowAgentAuthFromJSONTyped(json, false);
}

export function WorkflowAgentAuthFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkflowAgentAuth {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'jwt': !exists(json, 'jwt') ? undefined : json['jwt'],
        'merchant_id': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'websocket_url': !exists(json, 'websocket_url') ? undefined : json['websocket_url'],
    };
}

export function WorkflowAgentAuthToJSON(value?: WorkflowAgentAuth | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'jwt': value.jwt,
        'merchant_id': value.merchant_id,
        'websocket_url': value.websocket_url,
    };
}

