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
 * @interface CartSettingsShippingCalendar
 */
export interface CartSettingsShippingCalendar {
    /**
     * Specified dates that are blacked out on the calendar in ISO8601 format
     * @type {Array<string>}
     * @memberof CartSettingsShippingCalendar
     */
    blackouts?: Array<string>;
    /**
     * Days of week that should be enabled on the calendar (0 - Sunday through 6 - Saturday)
     * @type {Array<boolean>}
     * @memberof CartSettingsShippingCalendar
     */
    days_of_week?: Array<boolean>;
    /**
     * The earliest date that can be selected on the calendar
     * @type {string}
     * @memberof CartSettingsShippingCalendar
     */
    earliest?: string;
    /**
     * True if the customer is required to select a date
     * @type {boolean}
     * @memberof CartSettingsShippingCalendar
     */
    require?: boolean;
    /**
     * True if this calendar should be shown to the customer
     * @type {boolean}
     * @memberof CartSettingsShippingCalendar
     */
    show?: boolean;
}

export function CartSettingsShippingCalendarFromJSON(json: any): CartSettingsShippingCalendar {
    return CartSettingsShippingCalendarFromJSONTyped(json, false);
}

export function CartSettingsShippingCalendarFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartSettingsShippingCalendar {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'blackouts': !exists(json, 'blackouts') ? undefined : json['blackouts'],
        'days_of_week': !exists(json, 'days_of_week') ? undefined : json['days_of_week'],
        'earliest': !exists(json, 'earliest') ? undefined : json['earliest'],
        'require': !exists(json, 'require') ? undefined : json['require'],
        'show': !exists(json, 'show') ? undefined : json['show'],
    };
}

export function CartSettingsShippingCalendarToJSON(value?: CartSettingsShippingCalendar | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'blackouts': value.blackouts,
        'days_of_week': value.days_of_week,
        'earliest': value.earliest,
        'require': value.require,
        'show': value.show,
    };
}
