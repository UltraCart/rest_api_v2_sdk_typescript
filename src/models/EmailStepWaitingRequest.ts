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
 * @interface EmailStepWaitingRequest
 */
export interface EmailStepWaitingRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof EmailStepWaitingRequest
     */
    commseq_step_uuids?: Array<string>;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof EmailStepWaitingRequest)[] = ["commseq_step_uuids"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the EmailStepWaitingRequest interface.
 */
export function instanceOfEmailStepWaitingRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailStepWaitingRequestFromJSON(json: any): EmailStepWaitingRequest {
    return EmailStepWaitingRequestFromJSONTyped(json, false);
}

export function EmailStepWaitingRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailStepWaitingRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commseq_step_uuids': !exists(json, 'commseq_step_uuids') ? undefined : json['commseq_step_uuids'],
    };
}

export function EmailStepWaitingRequestToJSON(value?: EmailStepWaitingRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'commseq_step_uuids': value.commseq_step_uuids,
    };
}

