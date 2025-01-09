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
 * @interface EmailStatSmsSummaryRequest
 */
export interface EmailStatSmsSummaryRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof EmailStatSmsSummaryRequest
     */
    commseq_step_uuids?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof EmailStatSmsSummaryRequest
     */
    days?: number;
}

export function EmailStatSmsSummaryRequestFromJSON(json: any): EmailStatSmsSummaryRequest {
    return EmailStatSmsSummaryRequestFromJSONTyped(json, false);
}

export function EmailStatSmsSummaryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailStatSmsSummaryRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commseq_step_uuids': !exists(json, 'commseq_step_uuids') ? undefined : json['commseq_step_uuids'],
        'days': !exists(json, 'days') ? undefined : json['days'],
    };
}

export function EmailStatSmsSummaryRequestToJSON(value?: EmailStatSmsSummaryRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'commseq_step_uuids': value.commseq_step_uuids,
        'days': value.days,
    };
}
