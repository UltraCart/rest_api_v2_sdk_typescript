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
 * @interface EmailListCustomer
 */
export interface EmailListCustomer {
    /**
     * Added timestamp
     * @type {string}
     * @memberof EmailListCustomer
     */
    add_dts?: string;
    /**
     * Email
     * @type {string}
     * @memberof EmailListCustomer
     */
    email?: string;
    /**
     * Email customer UUID
     * @type {string}
     * @memberof EmailListCustomer
     */
    email_customer_uuid?: string;
    /**
     * Email list member UUID
     * @type {string}
     * @memberof EmailListCustomer
     */
    email_list_member_uuid?: string;
}

export function EmailListCustomerFromJSON(json: any): EmailListCustomer {
    return EmailListCustomerFromJSONTyped(json, false);
}

export function EmailListCustomerFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailListCustomer {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'add_dts': !exists(json, 'add_dts') ? undefined : json['add_dts'],
        'email': !exists(json, 'email') ? undefined : json['email'],
        'email_customer_uuid': !exists(json, 'email_customer_uuid') ? undefined : json['email_customer_uuid'],
        'email_list_member_uuid': !exists(json, 'email_list_member_uuid') ? undefined : json['email_list_member_uuid'],
    };
}

export function EmailListCustomerToJSON(value?: EmailListCustomer | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'add_dts': value.add_dts,
        'email': value.email,
        'email_customer_uuid': value.email_customer_uuid,
        'email_list_member_uuid': value.email_list_member_uuid,
    };
}
