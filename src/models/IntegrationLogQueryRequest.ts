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
 * @interface IntegrationLogQueryRequest
 */
export interface IntegrationLogQueryRequest {
    /**
     * 
     * @type {string}
     * @memberof IntegrationLogQueryRequest
     */
    action?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof IntegrationLogQueryRequest
     */
    auto_order_ids?: Array<string>;
    /**
     * 
     * @type {Array<number>}
     * @memberof IntegrationLogQueryRequest
     */
    auto_order_oids?: Array<number>;
    /**
     * 
     * @type {string}
     * @memberof IntegrationLogQueryRequest
     */
    direction?: string;
    /**
     * 
     * @type {string}
     * @memberof IntegrationLogQueryRequest
     */
    email?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof IntegrationLogQueryRequest
     */
    file_names?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof IntegrationLogQueryRequest
     */
    item_id?: string;
    /**
     * 
     * @type {number}
     * @memberof IntegrationLogQueryRequest
     */
    item_ipn_oid?: number;
    /**
     * Log date/time begin
     * @type {string}
     * @memberof IntegrationLogQueryRequest
     */
    log_dts_begin?: string;
    /**
     * Log date/time end
     * @type {string}
     * @memberof IntegrationLogQueryRequest
     */
    log_dts_end?: string;
    /**
     * 
     * @type {string}
     * @memberof IntegrationLogQueryRequest
     */
    log_type?: string;
    /**
     * 
     * @type {string}
     * @memberof IntegrationLogQueryRequest
     */
    logger_id?: string;
    /**
     * 
     * @type {string}
     * @memberof IntegrationLogQueryRequest
     */
    logger_name?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof IntegrationLogQueryRequest
     */
    order_ids?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof IntegrationLogQueryRequest
     */
    status?: string;
}

export function IntegrationLogQueryRequestFromJSON(json: any): IntegrationLogQueryRequest {
    return IntegrationLogQueryRequestFromJSONTyped(json, false);
}

export function IntegrationLogQueryRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntegrationLogQueryRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'action': !exists(json, 'action') ? undefined : json['action'],
        'auto_order_ids': !exists(json, 'auto_order_ids') ? undefined : json['auto_order_ids'],
        'auto_order_oids': !exists(json, 'auto_order_oids') ? undefined : json['auto_order_oids'],
        'direction': !exists(json, 'direction') ? undefined : json['direction'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'file_names': !exists(json, 'file_names') ? undefined : json['file_names'],
        'item_id': !exists(json, 'item_id') ? undefined : json['item_id'],
        'item_ipn_oid': !exists(json, 'item_ipn_oid') ? undefined : json['item_ipn_oid'],
        'log_dts_begin': !exists(json, 'log_dts_begin') ? undefined : json['log_dts_begin'],
        'log_dts_end': !exists(json, 'log_dts_end') ? undefined : json['log_dts_end'],
        'log_type': !exists(json, 'log_type') ? undefined : json['log_type'],
        'logger_id': !exists(json, 'logger_id') ? undefined : json['logger_id'],
        'logger_name': !exists(json, 'logger_name') ? undefined : json['logger_name'],
        'order_ids': !exists(json, 'order_ids') ? undefined : json['order_ids'],
        'status': !exists(json, 'status') ? undefined : json['status'],
    };
}

export function IntegrationLogQueryRequestToJSON(value?: IntegrationLogQueryRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'action': value.action,
        'auto_order_ids': value.auto_order_ids,
        'auto_order_oids': value.auto_order_oids,
        'direction': value.direction,
        'email': value.email,
        'file_names': value.file_names,
        'item_id': value.item_id,
        'item_ipn_oid': value.item_ipn_oid,
        'log_dts_begin': value.log_dts_begin,
        'log_dts_end': value.log_dts_end,
        'log_type': value.log_type,
        'logger_id': value.logger_id,
        'logger_name': value.logger_name,
        'order_ids': value.order_ids,
        'status': value.status,
    };
}

