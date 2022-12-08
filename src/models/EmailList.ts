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
    EmailListSegmentUsedBy,
    EmailListSegmentUsedByFromJSON,
    EmailListSegmentUsedByFromJSONTyped,
    EmailListSegmentUsedByToJSON,
} from './EmailListSegmentUsedBy';

/**
 * 
 * @export
 * @interface EmailList
 */
export interface EmailList {
    /**
     * True if the current user has the rights to download this list.
     * @type {boolean}
     * @memberof EmailList
     */
    allow_csv_download?: boolean;
    /**
     * Created date
     * @type {string}
     * @memberof EmailList
     */
    created_dts?: string;
    /**
     * True if this campaign was deleted
     * @type {boolean}
     * @memberof EmailList
     */
    deleted?: boolean;
    /**
     * Email list UUID
     * @type {string}
     * @memberof EmailList
     */
    email_list_uuid?: string;
    /**
     * List/Segment folder UUID
     * @type {string}
     * @memberof EmailList
     */
    esp_list_segment_folder_uuid?: string;
    /**
     * Count of members in this list
     * @type {number}
     * @memberof EmailList
     */
    member_count?: number;
    /**
     * Merchant ID
     * @type {string}
     * @memberof EmailList
     */
    merchant_id?: string;
    /**
     * Name of email list
     * @type {string}
     * @memberof EmailList
     */
    name?: string;
    /**
     * Description of list shown to customer.
     * @type {string}
     * @memberof EmailList
     */
    public_description?: string;
    /**
     * True if this list is public
     * @type {boolean}
     * @memberof EmailList
     */
    public_list?: boolean;
    /**
     * Storefront oid
     * @type {number}
     * @memberof EmailList
     */
    storefront_oid?: number;
    /**
     * Details on the flows or campaigns that use this list.
     * @type {Array<EmailListSegmentUsedBy>}
     * @memberof EmailList
     */
    used_by?: Array<EmailListSegmentUsedBy>;
}

export function EmailListFromJSON(json: any): EmailList {
    return EmailListFromJSONTyped(json, false);
}

export function EmailListFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailList {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'allow_csv_download': !exists(json, 'allow_csv_download') ? undefined : json['allow_csv_download'],
        'created_dts': !exists(json, 'created_dts') ? undefined : json['created_dts'],
        'deleted': !exists(json, 'deleted') ? undefined : json['deleted'],
        'email_list_uuid': !exists(json, 'email_list_uuid') ? undefined : json['email_list_uuid'],
        'esp_list_segment_folder_uuid': !exists(json, 'esp_list_segment_folder_uuid') ? undefined : json['esp_list_segment_folder_uuid'],
        'member_count': !exists(json, 'member_count') ? undefined : json['member_count'],
        'merchant_id': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'public_description': !exists(json, 'public_description') ? undefined : json['public_description'],
        'public_list': !exists(json, 'public_list') ? undefined : json['public_list'],
        'storefront_oid': !exists(json, 'storefront_oid') ? undefined : json['storefront_oid'],
        'used_by': !exists(json, 'used_by') ? undefined : ((json['used_by'] as Array<any>).map(EmailListSegmentUsedByFromJSON)),
    };
}

export function EmailListToJSON(value?: EmailList | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'allow_csv_download': value.allow_csv_download,
        'created_dts': value.created_dts,
        'deleted': value.deleted,
        'email_list_uuid': value.email_list_uuid,
        'esp_list_segment_folder_uuid': value.esp_list_segment_folder_uuid,
        'member_count': value.member_count,
        'merchant_id': value.merchant_id,
        'name': value.name,
        'public_description': value.public_description,
        'public_list': value.public_list,
        'storefront_oid': value.storefront_oid,
        'used_by': value.used_by === undefined ? undefined : ((value.used_by as Array<any>).map(EmailListSegmentUsedByToJSON)),
    };
}
