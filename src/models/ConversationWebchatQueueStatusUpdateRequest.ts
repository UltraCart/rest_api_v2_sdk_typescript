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
 * @interface ConversationWebchatQueueStatusUpdateRequest
 */
export interface ConversationWebchatQueueStatusUpdateRequest {
    /**
     * 
     * @type {string}
     * @memberof ConversationWebchatQueueStatusUpdateRequest
     */
    agent_status?: string;
}

export function ConversationWebchatQueueStatusUpdateRequestFromJSON(json: any): ConversationWebchatQueueStatusUpdateRequest {
    return ConversationWebchatQueueStatusUpdateRequestFromJSONTyped(json, false);
}

export function ConversationWebchatQueueStatusUpdateRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationWebchatQueueStatusUpdateRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'agent_status': !exists(json, 'agent_status') ? undefined : json['agent_status'],
    };
}

export function ConversationWebchatQueueStatusUpdateRequestToJSON(value?: ConversationWebchatQueueStatusUpdateRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'agent_status': value.agent_status,
    };
}
