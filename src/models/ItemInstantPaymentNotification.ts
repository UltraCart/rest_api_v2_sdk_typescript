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
 * @interface ItemInstantPaymentNotification
 */
export interface ItemInstantPaymentNotification {
    /**
     * True for HTTP POST instead of GET
     * @type {boolean}
     * @memberof ItemInstantPaymentNotification
     */
    post_operation?: boolean;
    /**
     * Successful response text
     * @type {string}
     * @memberof ItemInstantPaymentNotification
     */
    successful_response_text?: string;
    /**
     * URL
     * @type {string}
     * @memberof ItemInstantPaymentNotification
     */
    url?: string;
}

export function ItemInstantPaymentNotificationFromJSON(json: any): ItemInstantPaymentNotification {
    return ItemInstantPaymentNotificationFromJSONTyped(json, false);
}

export function ItemInstantPaymentNotificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemInstantPaymentNotification {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'post_operation': !exists(json, 'post_operation') ? undefined : json['post_operation'],
        'successful_response_text': !exists(json, 'successful_response_text') ? undefined : json['successful_response_text'],
        'url': !exists(json, 'url') ? undefined : json['url'],
    };
}

export function ItemInstantPaymentNotificationToJSON(value?: ItemInstantPaymentNotification | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'post_operation': value.post_operation,
        'successful_response_text': value.successful_response_text,
        'url': value.url,
    };
}

