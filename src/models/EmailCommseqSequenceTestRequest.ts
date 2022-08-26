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
 * @interface EmailCommseqSequenceTestRequest
 */
export interface EmailCommseqSequenceTestRequest {
    /**
     * 
     * @type {string}
     * @memberof EmailCommseqSequenceTestRequest
     */
    address_1?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailCommseqSequenceTestRequest
     */
    address_2?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailCommseqSequenceTestRequest
     */
    cart_id?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof EmailCommseqSequenceTestRequest
     */
    cart_item_ids?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof EmailCommseqSequenceTestRequest
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailCommseqSequenceTestRequest
     */
    esp_commseq_uuid?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EmailCommseqSequenceTestRequest
     */
    mail_card?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EmailCommseqSequenceTestRequest
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailCommseqSequenceTestRequest
     */
    order_id?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EmailCommseqSequenceTestRequest
     */
    please_review?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EmailCommseqSequenceTestRequest
     */
    postal_code?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailCommseqSequenceTestRequest
     */
    send_to_email?: string;
    /**
     * 
     * @type {boolean}
     * @memberof EmailCommseqSequenceTestRequest
     */
    send_to_logged_in_user?: boolean;
    /**
     * 
     * @type {string}
     * @memberof EmailCommseqSequenceTestRequest
     */
    state?: string;
}

export function EmailCommseqSequenceTestRequestFromJSON(json: any): EmailCommseqSequenceTestRequest {
    return EmailCommseqSequenceTestRequestFromJSONTyped(json, false);
}

export function EmailCommseqSequenceTestRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailCommseqSequenceTestRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'address_1': !exists(json, 'address_1') ? undefined : json['address_1'],
        'address_2': !exists(json, 'address_2') ? undefined : json['address_2'],
        'cart_id': !exists(json, 'cart_id') ? undefined : json['cart_id'],
        'cart_item_ids': !exists(json, 'cart_item_ids') ? undefined : json['cart_item_ids'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'esp_commseq_uuid': !exists(json, 'esp_commseq_uuid') ? undefined : json['esp_commseq_uuid'],
        'mail_card': !exists(json, 'mail_card') ? undefined : json['mail_card'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'order_id': !exists(json, 'order_id') ? undefined : json['order_id'],
        'please_review': !exists(json, 'please_review') ? undefined : json['please_review'],
        'postal_code': !exists(json, 'postal_code') ? undefined : json['postal_code'],
        'send_to_email': !exists(json, 'send_to_email') ? undefined : json['send_to_email'],
        'send_to_logged_in_user': !exists(json, 'send_to_logged_in_user') ? undefined : json['send_to_logged_in_user'],
        'state': !exists(json, 'state') ? undefined : json['state'],
    };
}

export function EmailCommseqSequenceTestRequestToJSON(value?: EmailCommseqSequenceTestRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'address_1': value.address_1,
        'address_2': value.address_2,
        'cart_id': value.cart_id,
        'cart_item_ids': value.cart_item_ids,
        'city': value.city,
        'esp_commseq_uuid': value.esp_commseq_uuid,
        'mail_card': value.mail_card,
        'name': value.name,
        'order_id': value.order_id,
        'please_review': value.please_review,
        'postal_code': value.postal_code,
        'send_to_email': value.send_to_email,
        'send_to_logged_in_user': value.send_to_logged_in_user,
        'state': value.state,
    };
}

