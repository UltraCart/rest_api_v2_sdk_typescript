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
 * @interface EmailStatSummaryRequest
 */
export interface EmailStatSummaryRequest {
    /**
     * 
     * @type {Array<string>}
     * @memberof EmailStatSummaryRequest
     */
    commseq_email_uuids?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmailStatSummaryRequest
     */
    commseq_step_uuids?: Array<string>;
    /**
     * 
     * @type {number}
     * @memberof EmailStatSummaryRequest
     */
    days?: number;
}

export function EmailStatSummaryRequestFromJSON(json: any): EmailStatSummaryRequest {
    return EmailStatSummaryRequestFromJSONTyped(json, false);
}

export function EmailStatSummaryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailStatSummaryRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commseq_email_uuids': !exists(json, 'commseq_email_uuids') ? undefined : json['commseq_email_uuids'],
        'commseq_step_uuids': !exists(json, 'commseq_step_uuids') ? undefined : json['commseq_step_uuids'],
        'days': !exists(json, 'days') ? undefined : json['days'],
    };
}

export function EmailStatSummaryRequestToJSON(value?: EmailStatSummaryRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'commseq_email_uuids': value.commseq_email_uuids,
        'commseq_step_uuids': value.commseq_step_uuids,
        'days': value.days,
    };
}
