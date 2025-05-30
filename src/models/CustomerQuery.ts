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
 * @interface CustomerQuery
 */
export interface CustomerQuery {
    /**
     * All tags the customer must have
     * @type {Array<string>}
     * @memberof CustomerQuery
     */
    all_tags?: Array<string>;
    /**
     * Any of these tags the customer must have
     * @type {Array<string>}
     * @memberof CustomerQuery
     */
    any_tags?: Array<string>;
    /**
     * Billing city
     * @type {string}
     * @memberof CustomerQuery
     */
    billing_city?: string;
    /**
     * Billing company
     * @type {string}
     * @memberof CustomerQuery
     */
    billing_company?: string;
    /**
     * Billing country code
     * @type {string}
     * @memberof CustomerQuery
     */
    billing_country_code?: string;
    /**
     * Billing day phone
     * @type {string}
     * @memberof CustomerQuery
     */
    billing_day_phone?: string;
    /**
     * Billing evening phone
     * @type {string}
     * @memberof CustomerQuery
     */
    billing_evening_phone?: string;
    /**
     * Billing first name
     * @type {string}
     * @memberof CustomerQuery
     */
    billing_first_name?: string;
    /**
     * Billing last name
     * @type {string}
     * @memberof CustomerQuery
     */
    billing_last_name?: string;
    /**
     * Billing postal code
     * @type {string}
     * @memberof CustomerQuery
     */
    billing_postal_code?: string;
    /**
     * Billing state
     * @type {string}
     * @memberof CustomerQuery
     */
    billing_state?: string;
    /**
     * Email address of this customer profile
     * @type {string}
     * @memberof CustomerQuery
     */
    email?: string;
    /**
     * Emails allows for searching on multiple email addresses and work with our without the single email variable.  You may specify a single email address here or use the email property.
     * @type {Array<string>}
     * @memberof CustomerQuery
     */
    emails?: Array<string>;
    /**
     * Last modified date end
     * @type {string}
     * @memberof CustomerQuery
     */
    last_modified_dts_end?: string;
    /**
     * Last modified date start
     * @type {string}
     * @memberof CustomerQuery
     */
    last_modified_dts_start?: string;
    /**
     * Pricing tier name
     * @type {string}
     * @memberof CustomerQuery
     */
    pricing_tier_name?: string;
    /**
     * Pricing tier oid
     * @type {number}
     * @memberof CustomerQuery
     */
    pricing_tier_oid?: number;
    /**
     * QuickBooks class to import this customer as
     * @type {string}
     * @memberof CustomerQuery
     */
    qb_class?: string;
    /**
     * QuickBooks name to import this customer as
     * @type {string}
     * @memberof CustomerQuery
     */
    quickbooks_code?: string;
    /**
     * Billing city
     * @type {string}
     * @memberof CustomerQuery
     */
    shipping_city?: string;
    /**
     * Billing company
     * @type {string}
     * @memberof CustomerQuery
     */
    shipping_company?: string;
    /**
     * Billing country code
     * @type {string}
     * @memberof CustomerQuery
     */
    shipping_country_code?: string;
    /**
     * Billing day phone
     * @type {string}
     * @memberof CustomerQuery
     */
    shipping_day_phone?: string;
    /**
     * Billing evening phone
     * @type {string}
     * @memberof CustomerQuery
     */
    shipping_evening_phone?: string;
    /**
     * Billing first name
     * @type {string}
     * @memberof CustomerQuery
     */
    shipping_first_name?: string;
    /**
     * Billing last name
     * @type {string}
     * @memberof CustomerQuery
     */
    shipping_last_name?: string;
    /**
     * Billing postal code
     * @type {string}
     * @memberof CustomerQuery
     */
    shipping_postal_code?: string;
    /**
     * Billing state
     * @type {string}
     * @memberof CustomerQuery
     */
    shipping_state?: string;
    /**
     * Signup date end
     * @type {string}
     * @memberof CustomerQuery
     */
    signup_dts_end?: string;
    /**
     * Signup date start
     * @type {string}
     * @memberof CustomerQuery
     */
    signup_dts_start?: string;
}



/**
 * Check if a given object implements the CustomerQuery interface.
 */
export function instanceOfCustomerQuery(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerQueryFromJSON(json: any): CustomerQuery {
    return CustomerQueryFromJSONTyped(json, false);
}

export function CustomerQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'all_tags': !exists(json, 'all_tags') ? undefined : json['all_tags'],
        'any_tags': !exists(json, 'any_tags') ? undefined : json['any_tags'],
        'billing_city': !exists(json, 'billing_city') ? undefined : json['billing_city'],
        'billing_company': !exists(json, 'billing_company') ? undefined : json['billing_company'],
        'billing_country_code': !exists(json, 'billing_country_code') ? undefined : json['billing_country_code'],
        'billing_day_phone': !exists(json, 'billing_day_phone') ? undefined : json['billing_day_phone'],
        'billing_evening_phone': !exists(json, 'billing_evening_phone') ? undefined : json['billing_evening_phone'],
        'billing_first_name': !exists(json, 'billing_first_name') ? undefined : json['billing_first_name'],
        'billing_last_name': !exists(json, 'billing_last_name') ? undefined : json['billing_last_name'],
        'billing_postal_code': !exists(json, 'billing_postal_code') ? undefined : json['billing_postal_code'],
        'billing_state': !exists(json, 'billing_state') ? undefined : json['billing_state'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'emails': !exists(json, 'emails') ? undefined : json['emails'],
        'last_modified_dts_end': !exists(json, 'last_modified_dts_end') ? undefined : json['last_modified_dts_end'],
        'last_modified_dts_start': !exists(json, 'last_modified_dts_start') ? undefined : json['last_modified_dts_start'],
        'pricing_tier_name': !exists(json, 'pricing_tier_name') ? undefined : json['pricing_tier_name'],
        'pricing_tier_oid': !exists(json, 'pricing_tier_oid') ? undefined : json['pricing_tier_oid'],
        'qb_class': !exists(json, 'qb_class') ? undefined : json['qb_class'],
        'quickbooks_code': !exists(json, 'quickbooks_code') ? undefined : json['quickbooks_code'],
        'shipping_city': !exists(json, 'shipping_city') ? undefined : json['shipping_city'],
        'shipping_company': !exists(json, 'shipping_company') ? undefined : json['shipping_company'],
        'shipping_country_code': !exists(json, 'shipping_country_code') ? undefined : json['shipping_country_code'],
        'shipping_day_phone': !exists(json, 'shipping_day_phone') ? undefined : json['shipping_day_phone'],
        'shipping_evening_phone': !exists(json, 'shipping_evening_phone') ? undefined : json['shipping_evening_phone'],
        'shipping_first_name': !exists(json, 'shipping_first_name') ? undefined : json['shipping_first_name'],
        'shipping_last_name': !exists(json, 'shipping_last_name') ? undefined : json['shipping_last_name'],
        'shipping_postal_code': !exists(json, 'shipping_postal_code') ? undefined : json['shipping_postal_code'],
        'shipping_state': !exists(json, 'shipping_state') ? undefined : json['shipping_state'],
        'signup_dts_end': !exists(json, 'signup_dts_end') ? undefined : json['signup_dts_end'],
        'signup_dts_start': !exists(json, 'signup_dts_start') ? undefined : json['signup_dts_start'],
    };
}

export function CustomerQueryToJSON(value?: CustomerQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'all_tags': value.all_tags,
        'any_tags': value.any_tags,
        'billing_city': value.billing_city,
        'billing_company': value.billing_company,
        'billing_country_code': value.billing_country_code,
        'billing_day_phone': value.billing_day_phone,
        'billing_evening_phone': value.billing_evening_phone,
        'billing_first_name': value.billing_first_name,
        'billing_last_name': value.billing_last_name,
        'billing_postal_code': value.billing_postal_code,
        'billing_state': value.billing_state,
        'email': value.email,
        'emails': value.emails,
        'last_modified_dts_end': value.last_modified_dts_end,
        'last_modified_dts_start': value.last_modified_dts_start,
        'pricing_tier_name': value.pricing_tier_name,
        'pricing_tier_oid': value.pricing_tier_oid,
        'qb_class': value.qb_class,
        'quickbooks_code': value.quickbooks_code,
        'shipping_city': value.shipping_city,
        'shipping_company': value.shipping_company,
        'shipping_country_code': value.shipping_country_code,
        'shipping_day_phone': value.shipping_day_phone,
        'shipping_evening_phone': value.shipping_evening_phone,
        'shipping_first_name': value.shipping_first_name,
        'shipping_last_name': value.shipping_last_name,
        'shipping_postal_code': value.shipping_postal_code,
        'shipping_state': value.shipping_state,
        'signup_dts_end': value.signup_dts_end,
        'signup_dts_start': value.signup_dts_start,
    };
}

