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
 * @interface EmailCommseqSmsSendTestRequest
 */
export interface EmailCommseqSmsSendTestRequest {
    /**
     * 
     * @type {string}
     * @memberof EmailCommseqSmsSendTestRequest
     */
    esp_commseq_step_uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailCommseqSmsSendTestRequest
     */
    esp_commseq_uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailCommseqSmsSendTestRequest
     */
    send_to_cellphone_e164?: string;
}

export function EmailCommseqSmsSendTestRequestFromJSON(json: any): EmailCommseqSmsSendTestRequest {
    return EmailCommseqSmsSendTestRequestFromJSONTyped(json, false);
}

export function EmailCommseqSmsSendTestRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailCommseqSmsSendTestRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'esp_commseq_step_uuid': !exists(json, 'esp_commseq_step_uuid') ? undefined : json['esp_commseq_step_uuid'],
        'esp_commseq_uuid': !exists(json, 'esp_commseq_uuid') ? undefined : json['esp_commseq_uuid'],
        'send_to_cellphone_e164': !exists(json, 'send_to_cellphone_e164') ? undefined : json['send_to_cellphone_e164'],
    };
}

export function EmailCommseqSmsSendTestRequestToJSON(value?: EmailCommseqSmsSendTestRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'esp_commseq_step_uuid': value.esp_commseq_step_uuid,
        'esp_commseq_uuid': value.esp_commseq_uuid,
        'send_to_cellphone_e164': value.send_to_cellphone_e164,
    };
}

