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
 * @interface EmailGlobalUnsubscribeResponse
 */
export interface EmailGlobalUnsubscribeResponse {
    /**
     * 
     * @type {number}
     * @memberof EmailGlobalUnsubscribeResponse
     */
    listsUnsubscribed?: number;
}

export function EmailGlobalUnsubscribeResponseFromJSON(json: any): EmailGlobalUnsubscribeResponse {
    return EmailGlobalUnsubscribeResponseFromJSONTyped(json, false);
}

export function EmailGlobalUnsubscribeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailGlobalUnsubscribeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'listsUnsubscribed': !exists(json, 'listsUnsubscribed') ? undefined : json['listsUnsubscribed'],
    };
}

export function EmailGlobalUnsubscribeResponseToJSON(value?: EmailGlobalUnsubscribeResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'listsUnsubscribed': value.listsUnsubscribed,
    };
}
