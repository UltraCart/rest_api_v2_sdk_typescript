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
 * @interface ScreenRecordingSettings
 */
export interface ScreenRecordingSettings {
    /**
     * Cost per one thousand sessions
     * @type {number}
     * @memberof ScreenRecordingSettings
     */
    cost_per_thousand?: number;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenRecordingSettings
     */
    enabled?: boolean;
    /**
     * How long screen recording data is retained
     * @type {string}
     * @memberof ScreenRecordingSettings
     */
    retention_interval?: string;
    /**
     * 
     * @type {number}
     * @memberof ScreenRecordingSettings
     */
    sessions_current_billing_period?: number;
    /**
     * 
     * @type {number}
     * @memberof ScreenRecordingSettings
     */
    sessions_last_billing_period?: number;
    /**
     * 
     * @type {number}
     * @memberof ScreenRecordingSettings
     */
    sessions_trial_billing_period?: number;
    /**
     * 
     * @type {string}
     * @memberof ScreenRecordingSettings
     */
    trial_expiration?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenRecordingSettings
     */
    trial_expired?: boolean;
}



/**
 * Check if a given object implements the ScreenRecordingSettings interface.
 */
export function instanceOfScreenRecordingSettings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ScreenRecordingSettingsFromJSON(json: any): ScreenRecordingSettings {
    return ScreenRecordingSettingsFromJSONTyped(json, false);
}

export function ScreenRecordingSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenRecordingSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cost_per_thousand': !exists(json, 'cost_per_thousand') ? undefined : json['cost_per_thousand'],
        'enabled': !exists(json, 'enabled') ? undefined : json['enabled'],
        'retention_interval': !exists(json, 'retention_interval') ? undefined : json['retention_interval'],
        'sessions_current_billing_period': !exists(json, 'sessions_current_billing_period') ? undefined : json['sessions_current_billing_period'],
        'sessions_last_billing_period': !exists(json, 'sessions_last_billing_period') ? undefined : json['sessions_last_billing_period'],
        'sessions_trial_billing_period': !exists(json, 'sessions_trial_billing_period') ? undefined : json['sessions_trial_billing_period'],
        'trial_expiration': !exists(json, 'trial_expiration') ? undefined : json['trial_expiration'],
        'trial_expired': !exists(json, 'trial_expired') ? undefined : json['trial_expired'],
    };
}

export function ScreenRecordingSettingsToJSON(value?: ScreenRecordingSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cost_per_thousand': value.cost_per_thousand,
        'enabled': value.enabled,
        'retention_interval': value.retention_interval,
        'sessions_current_billing_period': value.sessions_current_billing_period,
        'sessions_last_billing_period': value.sessions_last_billing_period,
        'sessions_trial_billing_period': value.sessions_trial_billing_period,
        'trial_expiration': value.trial_expiration,
        'trial_expired': value.trial_expired,
    };
}

