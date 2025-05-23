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
import {
    EmailPlanAdditional,
    EmailPlanAdditionalFromJSON,
    EmailPlanAdditionalFromJSONTyped,
    EmailPlanAdditionalToJSON,
} from './EmailPlanAdditional';

/**
 * 
 * @export
 * @interface EmailPlan
 */
export interface EmailPlan {
    /**
     * 
     * @type {number}
     * @memberof EmailPlan
     */
    additional_customers?: number;
    /**
     * 
     * @type {number}
     * @memberof EmailPlan
     */
    additional_emails?: number;
    /**
     * 
     * @type {number}
     * @memberof EmailPlan
     */
    additional_fee?: number;
    /**
     * 
     * @type {boolean}
     * @memberof EmailPlan
     */
    allow_list_import?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof EmailPlan
     */
    allow_tracking_emails?: boolean;
    /**
     * 
     * @type {Array<EmailPlanAdditional>}
     * @memberof EmailPlan
     */
    customer_tiers?: Array<EmailPlanAdditional>;
    /**
     * 
     * @type {number}
     * @memberof EmailPlan
     */
    initial_sending_limits?: number;
    /**
     * 
     * @type {number}
     * @memberof EmailPlan
     */
    plan_customers?: number;
    /**
     * 
     * @type {number}
     * @memberof EmailPlan
     */
    plan_emails?: number;
    /**
     * 
     * @type {string}
     * @memberof EmailPlan
     */
    plan_name?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailPlan
     */
    plan_name_formatted?: string;
    /**
     * 
     * @type {number}
     * @memberof EmailPlan
     */
    require_order_within_last_days?: number;
    /**
     * 
     * @type {number}
     * @memberof EmailPlan
     */
    revenue_percent?: number;
    /**
     * 
     * @type {number}
     * @memberof EmailPlan
     */
    spam_percent_limit?: number;
    /**
     * 
     * @type {number}
     * @memberof EmailPlan
     */
    total_customers?: number;
    /**
     * 
     * @type {number}
     * @memberof EmailPlan
     */
    total_emails?: number;
    /**
     * 
     * @type {number}
     * @memberof EmailPlan
     */
    upgrade_to?: number;
}



/**
 * Check if a given object implements the EmailPlan interface.
 */
export function instanceOfEmailPlan(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailPlanFromJSON(json: any): EmailPlan {
    return EmailPlanFromJSONTyped(json, false);
}

export function EmailPlanFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailPlan {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additional_customers': !exists(json, 'additional_customers') ? undefined : json['additional_customers'],
        'additional_emails': !exists(json, 'additional_emails') ? undefined : json['additional_emails'],
        'additional_fee': !exists(json, 'additional_fee') ? undefined : json['additional_fee'],
        'allow_list_import': !exists(json, 'allow_list_import') ? undefined : json['allow_list_import'],
        'allow_tracking_emails': !exists(json, 'allow_tracking_emails') ? undefined : json['allow_tracking_emails'],
        'customer_tiers': !exists(json, 'customer_tiers') ? undefined : ((json['customer_tiers'] as Array<any>).map(EmailPlanAdditionalFromJSON)),
        'initial_sending_limits': !exists(json, 'initial_sending_limits') ? undefined : json['initial_sending_limits'],
        'plan_customers': !exists(json, 'plan_customers') ? undefined : json['plan_customers'],
        'plan_emails': !exists(json, 'plan_emails') ? undefined : json['plan_emails'],
        'plan_name': !exists(json, 'plan_name') ? undefined : json['plan_name'],
        'plan_name_formatted': !exists(json, 'plan_name_formatted') ? undefined : json['plan_name_formatted'],
        'require_order_within_last_days': !exists(json, 'require_order_within_last_days') ? undefined : json['require_order_within_last_days'],
        'revenue_percent': !exists(json, 'revenue_percent') ? undefined : json['revenue_percent'],
        'spam_percent_limit': !exists(json, 'spam_percent_limit') ? undefined : json['spam_percent_limit'],
        'total_customers': !exists(json, 'total_customers') ? undefined : json['total_customers'],
        'total_emails': !exists(json, 'total_emails') ? undefined : json['total_emails'],
        'upgrade_to': !exists(json, 'upgrade_to') ? undefined : json['upgrade_to'],
    };
}

export function EmailPlanToJSON(value?: EmailPlan | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additional_customers': value.additional_customers,
        'additional_emails': value.additional_emails,
        'additional_fee': value.additional_fee,
        'allow_list_import': value.allow_list_import,
        'allow_tracking_emails': value.allow_tracking_emails,
        'customer_tiers': value.customer_tiers === undefined ? undefined : ((value.customer_tiers as Array<any>).map(EmailPlanAdditionalToJSON)),
        'initial_sending_limits': value.initial_sending_limits,
        'plan_customers': value.plan_customers,
        'plan_emails': value.plan_emails,
        'plan_name': value.plan_name,
        'plan_name_formatted': value.plan_name_formatted,
        'require_order_within_last_days': value.require_order_within_last_days,
        'revenue_percent': value.revenue_percent,
        'spam_percent_limit': value.spam_percent_limit,
        'total_customers': value.total_customers,
        'total_emails': value.total_emails,
        'upgrade_to': value.upgrade_to,
    };
}

