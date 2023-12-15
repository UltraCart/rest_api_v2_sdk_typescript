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
 * @interface EmailPostcardTracking
 */
export interface EmailPostcardTracking {
    /**
     * 
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    commseq_postcard_uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    commseq_step_uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    commseq_uuid?: string;
    /**
     * Conversion date time.
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    conversion_dts?: string;
    /**
     * 
     * @type {number}
     * @memberof EmailPostcardTracking
     */
    cost?: number;
    /**
     * 
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    customer_uuid?: string;
    /**
     * Delivered date time.
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    delivered_dts?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    from_address_line1?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    from_address_line2?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    from_city?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    from_name?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    from_state?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    from_zip?: string;
    /**
     * Mailed date time.
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    mailed_dts?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    order_id?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    postcard_tracking_uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    status?: string;
    /**
     * Submit date time.
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    submit_dts?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    to_address_line1?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    to_address_line2?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    to_city?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    to_name?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    to_state?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    to_zip?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailPostcardTracking
     */
    tracking_description?: string;
}

export function EmailPostcardTrackingFromJSON(json: any): EmailPostcardTracking {
    return EmailPostcardTrackingFromJSONTyped(json, false);
}

export function EmailPostcardTrackingFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailPostcardTracking {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'commseq_postcard_uuid': !exists(json, 'commseq_postcard_uuid') ? undefined : json['commseq_postcard_uuid'],
        'commseq_step_uuid': !exists(json, 'commseq_step_uuid') ? undefined : json['commseq_step_uuid'],
        'commseq_uuid': !exists(json, 'commseq_uuid') ? undefined : json['commseq_uuid'],
        'conversion_dts': !exists(json, 'conversion_dts') ? undefined : json['conversion_dts'],
        'cost': !exists(json, 'cost') ? undefined : json['cost'],
        'customer_uuid': !exists(json, 'customer_uuid') ? undefined : json['customer_uuid'],
        'delivered_dts': !exists(json, 'delivered_dts') ? undefined : json['delivered_dts'],
        'from_address_line1': !exists(json, 'from_address_line1') ? undefined : json['from_address_line1'],
        'from_address_line2': !exists(json, 'from_address_line2') ? undefined : json['from_address_line2'],
        'from_city': !exists(json, 'from_city') ? undefined : json['from_city'],
        'from_name': !exists(json, 'from_name') ? undefined : json['from_name'],
        'from_state': !exists(json, 'from_state') ? undefined : json['from_state'],
        'from_zip': !exists(json, 'from_zip') ? undefined : json['from_zip'],
        'mailed_dts': !exists(json, 'mailed_dts') ? undefined : json['mailed_dts'],
        'order_id': !exists(json, 'order_id') ? undefined : json['order_id'],
        'postcard_tracking_uuid': !exists(json, 'postcard_tracking_uuid') ? undefined : json['postcard_tracking_uuid'],
        'status': !exists(json, 'status') ? undefined : json['status'],
        'submit_dts': !exists(json, 'submit_dts') ? undefined : json['submit_dts'],
        'to_address_line1': !exists(json, 'to_address_line1') ? undefined : json['to_address_line1'],
        'to_address_line2': !exists(json, 'to_address_line2') ? undefined : json['to_address_line2'],
        'to_city': !exists(json, 'to_city') ? undefined : json['to_city'],
        'to_name': !exists(json, 'to_name') ? undefined : json['to_name'],
        'to_state': !exists(json, 'to_state') ? undefined : json['to_state'],
        'to_zip': !exists(json, 'to_zip') ? undefined : json['to_zip'],
        'tracking_description': !exists(json, 'tracking_description') ? undefined : json['tracking_description'],
    };
}

export function EmailPostcardTrackingToJSON(value?: EmailPostcardTracking | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'commseq_postcard_uuid': value.commseq_postcard_uuid,
        'commseq_step_uuid': value.commseq_step_uuid,
        'commseq_uuid': value.commseq_uuid,
        'conversion_dts': value.conversion_dts,
        'cost': value.cost,
        'customer_uuid': value.customer_uuid,
        'delivered_dts': value.delivered_dts,
        'from_address_line1': value.from_address_line1,
        'from_address_line2': value.from_address_line2,
        'from_city': value.from_city,
        'from_name': value.from_name,
        'from_state': value.from_state,
        'from_zip': value.from_zip,
        'mailed_dts': value.mailed_dts,
        'order_id': value.order_id,
        'postcard_tracking_uuid': value.postcard_tracking_uuid,
        'status': value.status,
        'submit_dts': value.submit_dts,
        'to_address_line1': value.to_address_line1,
        'to_address_line2': value.to_address_line2,
        'to_city': value.to_city,
        'to_name': value.to_name,
        'to_state': value.to_state,
        'to_zip': value.to_zip,
        'tracking_description': value.tracking_description,
    };
}

