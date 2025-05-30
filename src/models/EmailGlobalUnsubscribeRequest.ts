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
 * @interface EmailGlobalUnsubscribeRequest
 */
export interface EmailGlobalUnsubscribeRequest {
    /**
     * 
     * @type {string}
     * @memberof EmailGlobalUnsubscribeRequest
     */
    email?: string;
}



/**
 * Check if a given object implements the EmailGlobalUnsubscribeRequest interface.
 */
export function instanceOfEmailGlobalUnsubscribeRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailGlobalUnsubscribeRequestFromJSON(json: any): EmailGlobalUnsubscribeRequest {
    return EmailGlobalUnsubscribeRequestFromJSONTyped(json, false);
}

export function EmailGlobalUnsubscribeRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailGlobalUnsubscribeRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : json['email'],
    };
}

export function EmailGlobalUnsubscribeRequestToJSON(value?: EmailGlobalUnsubscribeRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': value.email,
    };
}

