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
 * @interface EmailSmsStat
 */
export interface EmailSmsStat {
    /**
     * Count of clicked emails
     * @type {number}
     * @memberof EmailSmsStat
     */
    click_count?: number;
    /**
     * Count of clicked emails, formatted
     * @type {string}
     * @memberof EmailSmsStat
     */
    click_count_formatted?: string;
    /**
     * Count of conversions
     * @type {number}
     * @memberof EmailSmsStat
     */
    conversion_count?: number;
    /**
     * Count of conversions, formatted
     * @type {string}
     * @memberof EmailSmsStat
     */
    conversion_count_formatted?: string;
    /**
     * True if campaign/flow has been archived
     * @type {boolean}
     * @memberof EmailSmsStat
     */
    deleted?: boolean;
    /**
     * Count of delivered emails
     * @type {number}
     * @memberof EmailSmsStat
     */
    delivered_count?: number;
    /**
     * Count of delivered emails, formatted
     * @type {string}
     * @memberof EmailSmsStat
     */
    delivered_count_formatted?: string;
    /**
     * Merchant ID
     * @type {string}
     * @memberof EmailSmsStat
     */
    merchant_id?: string;
    /**
     * List or segment name
     * @type {string}
     * @memberof EmailSmsStat
     */
    name?: string;
    /**
     * Count of orders
     * @type {number}
     * @memberof EmailSmsStat
     */
    order_count?: number;
    /**
     * Count of orders, formatted
     * @type {string}
     * @memberof EmailSmsStat
     */
    order_count_formatted?: string;
    /**
     * Profit
     * @type {number}
     * @memberof EmailSmsStat
     */
    profit?: number;
    /**
     * Profit, formatted
     * @type {string}
     * @memberof EmailSmsStat
     */
    profit_formatted?: string;
    /**
     * Revenue
     * @type {number}
     * @memberof EmailSmsStat
     */
    revenue?: number;
    /**
     * Revenue, formatted
     * @type {string}
     * @memberof EmailSmsStat
     */
    revenue_formatted?: string;
    /**
     * Count of emails sent
     * @type {number}
     * @memberof EmailSmsStat
     */
    send_count?: number;
    /**
     * Count of emails sent, formatted
     * @type {string}
     * @memberof EmailSmsStat
     */
    send_count_formatted?: string;
    /**
     * Count of skipped emails
     * @type {number}
     * @memberof EmailSmsStat
     */
    skipped_count?: number;
    /**
     * Count of skipped emails, formatted
     * @type {string}
     * @memberof EmailSmsStat
     */
    skipped_count_formatted?: string;
    /**
     * Campaign, Flow or None (for anything else)
     * @type {string}
     * @memberof EmailSmsStat
     */
    stat_type?: string;
    /**
     * Status of campaign or flow
     * @type {string}
     * @memberof EmailSmsStat
     */
    status?: string;
    /**
     * Status dts of campaign or flow
     * @type {string}
     * @memberof EmailSmsStat
     */
    status_dts?: string;
    /**
     * Step UUID if the statistics are at the step/email level
     * @type {string}
     * @memberof EmailSmsStat
     */
    step_uuid?: string;
    /**
     * 
     * @type {Array<EmailSmsStat>}
     * @memberof EmailSmsStat
     */
    steps?: Array<EmailSmsStat>;
    /**
     * Storefront oid
     * @type {number}
     * @memberof EmailSmsStat
     */
    storefront_oid?: number;
    /**
     * Count of emails classified as unsubscribe
     * @type {number}
     * @memberof EmailSmsStat
     */
    unsubscribe_count?: number;
    /**
     * Count of emails classified as unsubscribe, formatted
     * @type {string}
     * @memberof EmailSmsStat
     */
    unsubscribe_count_formatted?: string;
    /**
     * List/Segment uuid, or Flow/Campaign uuid depending on level of stat aggregation.
     * @type {string}
     * @memberof EmailSmsStat
     */
    uuid?: string;
    /**
     * Count of views
     * @type {number}
     * @memberof EmailSmsStat
     */
    view_count?: number;
    /**
     * Count of views, formatted
     * @type {string}
     * @memberof EmailSmsStat
     */
    view_count_formatted?: string;
}



/**
 * Check if a given object implements the EmailSmsStat interface.
 */
export function instanceOfEmailSmsStat(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailSmsStatFromJSON(json: any): EmailSmsStat {
    return EmailSmsStatFromJSONTyped(json, false);
}

export function EmailSmsStatFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailSmsStat {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'click_count': !exists(json, 'click_count') ? undefined : json['click_count'],
        'click_count_formatted': !exists(json, 'click_count_formatted') ? undefined : json['click_count_formatted'],
        'conversion_count': !exists(json, 'conversion_count') ? undefined : json['conversion_count'],
        'conversion_count_formatted': !exists(json, 'conversion_count_formatted') ? undefined : json['conversion_count_formatted'],
        'deleted': !exists(json, 'deleted') ? undefined : json['deleted'],
        'delivered_count': !exists(json, 'delivered_count') ? undefined : json['delivered_count'],
        'delivered_count_formatted': !exists(json, 'delivered_count_formatted') ? undefined : json['delivered_count_formatted'],
        'merchant_id': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'order_count': !exists(json, 'order_count') ? undefined : json['order_count'],
        'order_count_formatted': !exists(json, 'order_count_formatted') ? undefined : json['order_count_formatted'],
        'profit': !exists(json, 'profit') ? undefined : json['profit'],
        'profit_formatted': !exists(json, 'profit_formatted') ? undefined : json['profit_formatted'],
        'revenue': !exists(json, 'revenue') ? undefined : json['revenue'],
        'revenue_formatted': !exists(json, 'revenue_formatted') ? undefined : json['revenue_formatted'],
        'send_count': !exists(json, 'send_count') ? undefined : json['send_count'],
        'send_count_formatted': !exists(json, 'send_count_formatted') ? undefined : json['send_count_formatted'],
        'skipped_count': !exists(json, 'skipped_count') ? undefined : json['skipped_count'],
        'skipped_count_formatted': !exists(json, 'skipped_count_formatted') ? undefined : json['skipped_count_formatted'],
        'stat_type': !exists(json, 'stat_type') ? undefined : json['stat_type'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'status_dts': !exists(json, 'status_dts') ? undefined : json['status_dts'],
        'step_uuid': !exists(json, 'step_uuid') ? undefined : json['step_uuid'],
        'steps': !exists(json, 'steps') ? undefined : ((json['steps'] as Array<any>).map(EmailSmsStatFromJSON)),
        'storefront_oid': !exists(json, 'storefront_oid') ? undefined : json['storefront_oid'],
        'unsubscribe_count': !exists(json, 'unsubscribe_count') ? undefined : json['unsubscribe_count'],
        'unsubscribe_count_formatted': !exists(json, 'unsubscribe_count_formatted') ? undefined : json['unsubscribe_count_formatted'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'view_count': !exists(json, 'view_count') ? undefined : json['view_count'],
        'view_count_formatted': !exists(json, 'view_count_formatted') ? undefined : json['view_count_formatted'],
    };
}

export function EmailSmsStatToJSON(value?: EmailSmsStat | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'click_count': value.click_count,
        'click_count_formatted': value.click_count_formatted,
        'conversion_count': value.conversion_count,
        'conversion_count_formatted': value.conversion_count_formatted,
        'deleted': value.deleted,
        'delivered_count': value.delivered_count,
        'delivered_count_formatted': value.delivered_count_formatted,
        'merchant_id': value.merchant_id,
        'name': value.name,
        'order_count': value.order_count,
        'order_count_formatted': value.order_count_formatted,
        'profit': value.profit,
        'profit_formatted': value.profit_formatted,
        'revenue': value.revenue,
        'revenue_formatted': value.revenue_formatted,
        'send_count': value.send_count,
        'send_count_formatted': value.send_count_formatted,
        'skipped_count': value.skipped_count,
        'skipped_count_formatted': value.skipped_count_formatted,
        'stat_type': value.stat_type,
        'status': value.status,
        'status_dts': value.status_dts,
        'step_uuid': value.step_uuid,
        'steps': value.steps === undefined ? undefined : ((value.steps as Array<any>).map(EmailSmsStatToJSON)),
        'storefront_oid': value.storefront_oid,
        'unsubscribe_count': value.unsubscribe_count,
        'unsubscribe_count_formatted': value.unsubscribe_count_formatted,
        'uuid': value.uuid,
        'view_count': value.view_count,
        'view_count_formatted': value.view_count_formatted,
    };
}

