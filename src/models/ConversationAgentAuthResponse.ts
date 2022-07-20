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
 * @interface ConversationAgentAuthResponse
 */
export interface ConversationAgentAuthResponse {
    /**
     * 
     * @type {string}
     * @memberof ConversationAgentAuthResponse
     */
    conversation_participant_arn?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationAgentAuthResponse
     */
    conversation_participant_name?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationAgentAuthResponse
     */
    jwt?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationAgentAuthResponse
     */
    merchant_id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof ConversationAgentAuthResponse
     */
    twilio_phone_numbers?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof ConversationAgentAuthResponse
     */
    websocket_url?: string;
}

export function ConversationAgentAuthResponseFromJSON(json: any): ConversationAgentAuthResponse {
    return ConversationAgentAuthResponseFromJSONTyped(json, false);
}

export function ConversationAgentAuthResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationAgentAuthResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conversation_participant_arn': !exists(json, 'conversation_participant_arn') ? undefined : json['conversation_participant_arn'],
        'conversation_participant_name': !exists(json, 'conversation_participant_name') ? undefined : json['conversation_participant_name'],
        'jwt': !exists(json, 'jwt') ? undefined : json['jwt'],
        'merchant_id': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'twilio_phone_numbers': !exists(json, 'twilio_phone_numbers') ? undefined : json['twilio_phone_numbers'],
        'websocket_url': !exists(json, 'websocket_url') ? undefined : json['websocket_url'],
    };
}

export function ConversationAgentAuthResponseToJSON(value?: ConversationAgentAuthResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conversation_participant_arn': value.conversation_participant_arn,
        'conversation_participant_name': value.conversation_participant_name,
        'jwt': value.jwt,
        'merchant_id': value.merchant_id,
        'twilio_phone_numbers': value.twilio_phone_numbers,
        'websocket_url': value.websocket_url,
    };
}
