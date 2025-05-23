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
 * @interface EmailCommseqPostcard
 */
export interface EmailCommseqPostcard {
    /**
     * Deleted
     * @type {boolean}
     * @memberof EmailCommseqPostcard
     */
    deleted?: boolean;
    /**
     * Edited by user
     * @type {string}
     * @memberof EmailCommseqPostcard
     */
    edited_by_user?: string;
    /**
     * communication sequence postcard uuid
     * @type {string}
     * @memberof EmailCommseqPostcard
     */
    email_communication_sequence_postcard_uuid?: string;
    /**
     * Filter profile equation json
     * @type {string}
     * @memberof EmailCommseqPostcard
     */
    filter_profile_equation_json?: string;
    /**
     * Merchant ID
     * @type {string}
     * @memberof EmailCommseqPostcard
     */
    merchant_id?: string;
    /**
     * Postcard back container cjson
     * @type {string}
     * @memberof EmailCommseqPostcard
     */
    postcard_back_container_cjson?: string;
    /**
     * Postcard back container uuid
     * @type {string}
     * @memberof EmailCommseqPostcard
     */
    postcard_back_container_uuid?: string;
    /**
     * Timestamp the last time the container was modified.
     * @type {string}
     * @memberof EmailCommseqPostcard
     */
    postcard_container_cjson_last_modified_dts?: string;
    /**
     * Postcard front container cjson
     * @type {string}
     * @memberof EmailCommseqPostcard
     */
    postcard_front_container_cjson?: string;
    /**
     * Postcard front container uuid
     * @type {string}
     * @memberof EmailCommseqPostcard
     */
    postcard_front_container_uuid?: string;
    /**
     * URL to screenshot of the back of the postcard
     * @type {string}
     * @memberof EmailCommseqPostcard
     */
    screenshot_back_url?: string;
    /**
     * URL to screenshot of the front of the postcard
     * @type {string}
     * @memberof EmailCommseqPostcard
     */
    screenshot_front_url?: string;
    /**
     * Storefront oid
     * @type {number}
     * @memberof EmailCommseqPostcard
     */
    storefront_oid?: number;
}



/**
 * Check if a given object implements the EmailCommseqPostcard interface.
 */
export function instanceOfEmailCommseqPostcard(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailCommseqPostcardFromJSON(json: any): EmailCommseqPostcard {
    return EmailCommseqPostcardFromJSONTyped(json, false);
}

export function EmailCommseqPostcardFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailCommseqPostcard {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'deleted': !exists(json, 'deleted') ? undefined : json['deleted'],
        'edited_by_user': !exists(json, 'edited_by_user') ? undefined : json['edited_by_user'],
        'email_communication_sequence_postcard_uuid': !exists(json, 'email_communication_sequence_postcard_uuid') ? undefined : json['email_communication_sequence_postcard_uuid'],
        'filter_profile_equation_json': !exists(json, 'filter_profile_equation_json') ? undefined : json['filter_profile_equation_json'],
        'merchant_id': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'postcard_back_container_cjson': !exists(json, 'postcard_back_container_cjson') ? undefined : json['postcard_back_container_cjson'],
        'postcard_back_container_uuid': !exists(json, 'postcard_back_container_uuid') ? undefined : json['postcard_back_container_uuid'],
        'postcard_container_cjson_last_modified_dts': !exists(json, 'postcard_container_cjson_last_modified_dts') ? undefined : json['postcard_container_cjson_last_modified_dts'],
        'postcard_front_container_cjson': !exists(json, 'postcard_front_container_cjson') ? undefined : json['postcard_front_container_cjson'],
        'postcard_front_container_uuid': !exists(json, 'postcard_front_container_uuid') ? undefined : json['postcard_front_container_uuid'],
        'screenshot_back_url': !exists(json, 'screenshot_back_url') ? undefined : json['screenshot_back_url'],
        'screenshot_front_url': !exists(json, 'screenshot_front_url') ? undefined : json['screenshot_front_url'],
        'storefront_oid': !exists(json, 'storefront_oid') ? undefined : json['storefront_oid'],
    };
}

export function EmailCommseqPostcardToJSON(value?: EmailCommseqPostcard | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'deleted': value.deleted,
        'edited_by_user': value.edited_by_user,
        'email_communication_sequence_postcard_uuid': value.email_communication_sequence_postcard_uuid,
        'filter_profile_equation_json': value.filter_profile_equation_json,
        'merchant_id': value.merchant_id,
        'postcard_back_container_cjson': value.postcard_back_container_cjson,
        'postcard_back_container_uuid': value.postcard_back_container_uuid,
        'postcard_container_cjson_last_modified_dts': value.postcard_container_cjson_last_modified_dts,
        'postcard_front_container_cjson': value.postcard_front_container_cjson,
        'postcard_front_container_uuid': value.postcard_front_container_uuid,
        'screenshot_back_url': value.screenshot_back_url,
        'screenshot_front_url': value.screenshot_front_url,
        'storefront_oid': value.storefront_oid,
    };
}

