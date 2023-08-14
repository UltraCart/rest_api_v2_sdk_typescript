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
 * @interface EmailSettings
 */
export interface EmailSettings {
    /**
     * Emails per day allowed
     * @type {number}
     * @memberof EmailSettings
     */
    emails_per_day?: number;
    /**
     * Emails per hour allowed
     * @type {number}
     * @memberof EmailSettings
     */
    emails_per_hour?: number;
    /**
     * Emails per month allowed
     * @type {number}
     * @memberof EmailSettings
     */
    emails_per_month?: number;
    /**
     * 
     * @type {string}
     * @memberof EmailSettings
     */
    marketing_esp_domain_user?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailSettings
     */
    marketing_esp_domain_uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailSettings
     */
    marketing_esp_friendly_name?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailSettings
     */
    postcard_from_address1?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailSettings
     */
    postcard_from_address2?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailSettings
     */
    postcard_from_city?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailSettings
     */
    postcard_from_name?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailSettings
     */
    postcard_from_postal_code?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailSettings
     */
    postcard_from_state?: string;
    /**
     * True if the Reviews.io integration is configured
     * @type {boolean}
     * @memberof EmailSettings
     */
    reviews_io_configured?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EmailSettings
     */
    sms_esp_twilio_uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailSettings
     */
    sms_phone_number?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailSettings
     */
    transactional_esp_domain_user?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailSettings
     */
    transactional_esp_domain_uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailSettings
     */
    transactional_esp_friendly_name?: string;
}

export function EmailSettingsFromJSON(json: any): EmailSettings {
    return EmailSettingsFromJSONTyped(json, false);
}

export function EmailSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'emails_per_day': !exists(json, 'emails_per_day') ? undefined : json['emails_per_day'],
        'emails_per_hour': !exists(json, 'emails_per_hour') ? undefined : json['emails_per_hour'],
        'emails_per_month': !exists(json, 'emails_per_month') ? undefined : json['emails_per_month'],
        'marketing_esp_domain_user': !exists(json, 'marketing_esp_domain_user') ? undefined : json['marketing_esp_domain_user'],
        'marketing_esp_domain_uuid': !exists(json, 'marketing_esp_domain_uuid') ? undefined : json['marketing_esp_domain_uuid'],
        'marketing_esp_friendly_name': !exists(json, 'marketing_esp_friendly_name') ? undefined : json['marketing_esp_friendly_name'],
        'postcard_from_address1': !exists(json, 'postcard_from_address1') ? undefined : json['postcard_from_address1'],
        'postcard_from_address2': !exists(json, 'postcard_from_address2') ? undefined : json['postcard_from_address2'],
        'postcard_from_city': !exists(json, 'postcard_from_city') ? undefined : json['postcard_from_city'],
        'postcard_from_name': !exists(json, 'postcard_from_name') ? undefined : json['postcard_from_name'],
        'postcard_from_postal_code': !exists(json, 'postcard_from_postal_code') ? undefined : json['postcard_from_postal_code'],
        'postcard_from_state': !exists(json, 'postcard_from_state') ? undefined : json['postcard_from_state'],
        'reviews_io_configured': !exists(json, 'reviews_io_configured') ? undefined : json['reviews_io_configured'],
        'sms_esp_twilio_uuid': !exists(json, 'sms_esp_twilio_uuid') ? undefined : json['sms_esp_twilio_uuid'],
        'sms_phone_number': !exists(json, 'sms_phone_number') ? undefined : json['sms_phone_number'],
        'transactional_esp_domain_user': !exists(json, 'transactional_esp_domain_user') ? undefined : json['transactional_esp_domain_user'],
        'transactional_esp_domain_uuid': !exists(json, 'transactional_esp_domain_uuid') ? undefined : json['transactional_esp_domain_uuid'],
        'transactional_esp_friendly_name': !exists(json, 'transactional_esp_friendly_name') ? undefined : json['transactional_esp_friendly_name'],
    };
}

export function EmailSettingsToJSON(value?: EmailSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'emails_per_day': value.emails_per_day,
        'emails_per_hour': value.emails_per_hour,
        'emails_per_month': value.emails_per_month,
        'marketing_esp_domain_user': value.marketing_esp_domain_user,
        'marketing_esp_domain_uuid': value.marketing_esp_domain_uuid,
        'marketing_esp_friendly_name': value.marketing_esp_friendly_name,
        'postcard_from_address1': value.postcard_from_address1,
        'postcard_from_address2': value.postcard_from_address2,
        'postcard_from_city': value.postcard_from_city,
        'postcard_from_name': value.postcard_from_name,
        'postcard_from_postal_code': value.postcard_from_postal_code,
        'postcard_from_state': value.postcard_from_state,
        'reviews_io_configured': value.reviews_io_configured,
        'sms_esp_twilio_uuid': value.sms_esp_twilio_uuid,
        'sms_phone_number': value.sms_phone_number,
        'transactional_esp_domain_user': value.transactional_esp_domain_user,
        'transactional_esp_domain_uuid': value.transactional_esp_domain_uuid,
        'transactional_esp_friendly_name': value.transactional_esp_friendly_name,
    };
}

