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
 * @interface EmailListSubscribeResponse
 */
export interface EmailListSubscribeResponse {
    /**
     * 
     * @type {number}
     * @memberof EmailListSubscribeResponse
     */
    added?: number;
    /**
     * 
     * @type {number}
     * @memberof EmailListSubscribeResponse
     */
    memberCount?: number;
}



/**
 * Check if a given object implements the EmailListSubscribeResponse interface.
 */
export function instanceOfEmailListSubscribeResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailListSubscribeResponseFromJSON(json: any): EmailListSubscribeResponse {
    return EmailListSubscribeResponseFromJSONTyped(json, false);
}

export function EmailListSubscribeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailListSubscribeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'added': !exists(json, 'added') ? undefined : json['added'],
        'memberCount': !exists(json, 'memberCount') ? undefined : json['memberCount'],
    };
}

export function EmailListSubscribeResponseToJSON(value?: EmailListSubscribeResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'added': value.added,
        'memberCount': value.memberCount,
    };
}

