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
    AccountsReceivableRetryDayActivity,
    AccountsReceivableRetryDayActivityFromJSON,
    AccountsReceivableRetryDayActivityFromJSONTyped,
    AccountsReceivableRetryDayActivityToJSON,
} from './AccountsReceivableRetryDayActivity';

/**
 * 
 * @export
 * @interface AccountsReceivableRetryConfig
 */
export interface AccountsReceivableRetryConfig {
    /**
     * True if the retry should run daily.  False puts the retry service into an inactive state for this merchant.
     * @type {boolean}
     * @memberof AccountsReceivableRetryConfig
     */
    active?: boolean;
    /**
     * True if this account has linked accounts that it can process.
     * @type {boolean}
     * @memberof AccountsReceivableRetryConfig
     */
    allow_process_linked_accounts?: boolean;
    /**
     * If true also cancel the auto order if the order is rejected at the end
     * @type {boolean}
     * @memberof AccountsReceivableRetryConfig
     */
    cancel_auto_order?: boolean;
    /**
     * The current service plan that the account is on.
     * @type {string}
     * @memberof AccountsReceivableRetryConfig
     */
    current_service_plan?: string;
    /**
     * A list of days and what actions should take place on those days after an order reaches accounts receivable
     * @type {Array<AccountsReceivableRetryDayActivity>}
     * @memberof AccountsReceivableRetryConfig
     */
    daily_activity_list?: Array<AccountsReceivableRetryDayActivity>;
    /**
     * If not null, this account is managed by the specified parent merchant id.
     * @type {boolean}
     * @memberof AccountsReceivableRetryConfig
     */
    managed_by_linked_account_merchant_id?: boolean;
    /**
     * UltraCart merchant ID
     * @type {string}
     * @memberof AccountsReceivableRetryConfig
     */
    merchant_id?: string;
    /**
     * A list of email addresses to receive summary notifications from the retry service.
     * @type {Array<string>}
     * @memberof AccountsReceivableRetryConfig
     */
    notify_emails?: Array<string>;
    /**
     * If true, email addresses are notified of rejections.
     * @type {boolean}
     * @memberof AccountsReceivableRetryConfig
     */
    notify_rejections?: boolean;
    /**
     * If true, email addresses are notified of successful charges.
     * @type {boolean}
     * @memberof AccountsReceivableRetryConfig
     */
    notify_successes?: boolean;
    /**
     * If true, all linked accounts are also processed using the same rules.
     * @type {boolean}
     * @memberof AccountsReceivableRetryConfig
     */
    process_linked_accounts?: boolean;
    /**
     * The percentage rate charged for the service.
     * @type {string}
     * @memberof AccountsReceivableRetryConfig
     */
    processing_percentage?: string;
    /**
     * If true, the order is rejected the day after the last configured activity day
     * @type {boolean}
     * @memberof AccountsReceivableRetryConfig
     */
    reject_at_end?: boolean;
    /**
     * True if the account is currently in trial mode.  Set to false to exit trial mode.
     * @type {boolean}
     * @memberof AccountsReceivableRetryConfig
     */
    trial_mode?: boolean;
    /**
     * The date when trial mode expires.  If this date is reached without exiting trial mode, the service will de-activate.
     * @type {string}
     * @memberof AccountsReceivableRetryConfig
     */
    trial_mode_expiration_dts?: string;
}

export function AccountsReceivableRetryConfigFromJSON(json: any): AccountsReceivableRetryConfig {
    return AccountsReceivableRetryConfigFromJSONTyped(json, false);
}

export function AccountsReceivableRetryConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountsReceivableRetryConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'active': !exists(json, 'active') ? undefined : json['active'],
        'allow_process_linked_accounts': !exists(json, 'allow_process_linked_accounts') ? undefined : json['allow_process_linked_accounts'],
        'cancel_auto_order': !exists(json, 'cancel_auto_order') ? undefined : json['cancel_auto_order'],
        'current_service_plan': !exists(json, 'current_service_plan') ? undefined : json['current_service_plan'],
        'daily_activity_list': !exists(json, 'daily_activity_list') ? undefined : ((json['daily_activity_list'] as Array<any>).map(AccountsReceivableRetryDayActivityFromJSON)),
        'managed_by_linked_account_merchant_id': !exists(json, 'managed_by_linked_account_merchant_id') ? undefined : json['managed_by_linked_account_merchant_id'],
        'merchant_id': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'notify_emails': !exists(json, 'notify_emails') ? undefined : json['notify_emails'],
        'notify_rejections': !exists(json, 'notify_rejections') ? undefined : json['notify_rejections'],
        'notify_successes': !exists(json, 'notify_successes') ? undefined : json['notify_successes'],
        'process_linked_accounts': !exists(json, 'process_linked_accounts') ? undefined : json['process_linked_accounts'],
        'processing_percentage': !exists(json, 'processing_percentage') ? undefined : json['processing_percentage'],
        'reject_at_end': !exists(json, 'reject_at_end') ? undefined : json['reject_at_end'],
        'trial_mode': !exists(json, 'trial_mode') ? undefined : json['trial_mode'],
        'trial_mode_expiration_dts': !exists(json, 'trial_mode_expiration_dts') ? undefined : json['trial_mode_expiration_dts'],
    };
}

export function AccountsReceivableRetryConfigToJSON(value?: AccountsReceivableRetryConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'active': value.active,
        'allow_process_linked_accounts': value.allow_process_linked_accounts,
        'cancel_auto_order': value.cancel_auto_order,
        'current_service_plan': value.current_service_plan,
        'daily_activity_list': value.daily_activity_list === undefined ? undefined : ((value.daily_activity_list as Array<any>).map(AccountsReceivableRetryDayActivityToJSON)),
        'managed_by_linked_account_merchant_id': value.managed_by_linked_account_merchant_id,
        'merchant_id': value.merchant_id,
        'notify_emails': value.notify_emails,
        'notify_rejections': value.notify_rejections,
        'notify_successes': value.notify_successes,
        'process_linked_accounts': value.process_linked_accounts,
        'processing_percentage': value.processing_percentage,
        'reject_at_end': value.reject_at_end,
        'trial_mode': value.trial_mode,
        'trial_mode_expiration_dts': value.trial_mode_expiration_dts,
    };
}
