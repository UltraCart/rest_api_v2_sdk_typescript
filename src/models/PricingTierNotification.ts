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
 * @interface PricingTierNotification
 */
export interface PricingTierNotification {
    /**
     * Notification format
     * @type {string}
     * @memberof PricingTierNotification
     */
    format?: string;
    /**
     * Notification subject
     * @type {string}
     * @memberof PricingTierNotification
     */
    subject?: string;
    /**
     * Notification text
     * @type {string}
     * @memberof PricingTierNotification
     */
    text?: string;
}



/**
 * Check if a given object implements the PricingTierNotification interface.
 */
export function instanceOfPricingTierNotification(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PricingTierNotificationFromJSON(json: any): PricingTierNotification {
    return PricingTierNotificationFromJSONTyped(json, false);
}

export function PricingTierNotificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PricingTierNotification {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'format': !exists(json, 'format') ? undefined : json['format'],
        'subject': !exists(json, 'subject') ? undefined : json['subject'],
        'text': !exists(json, 'text') ? undefined : json['text'],
    };
}

export function PricingTierNotificationToJSON(value?: PricingTierNotification | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'format': value.format,
        'subject': value.subject,
        'text': value.text,
    };
}

