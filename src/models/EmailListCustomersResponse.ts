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
    EmailListCustomer,
    EmailListCustomerFromJSON,
    EmailListCustomerFromJSONTyped,
    EmailListCustomerToJSON,
} from './EmailListCustomer';

/**
 * 
 * @export
 * @interface EmailListCustomersResponse
 */
export interface EmailListCustomersResponse {
    /**
     * Customers on the page
     * @type {Array<EmailListCustomer>}
     * @memberof EmailListCustomersResponse
     */
    customers?: Array<EmailListCustomer>;
    /**
     * Page number (one based offset)
     * @type {number}
     * @memberof EmailListCustomersResponse
     */
    page_number?: number;
    /**
     * Number of records per page
     * @type {number}
     * @memberof EmailListCustomersResponse
     */
    page_size?: number;
    /**
     * Total customers
     * @type {number}
     * @memberof EmailListCustomersResponse
     */
    total_customers?: number;
    /**
     * Total number of pages
     * @type {number}
     * @memberof EmailListCustomersResponse
     */
    total_pages?: number;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof EmailListCustomersResponse)[] = ["customers", "page_number", "page_size", "total_customers", "total_pages"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the EmailListCustomersResponse interface.
 */
export function instanceOfEmailListCustomersResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailListCustomersResponseFromJSON(json: any): EmailListCustomersResponse {
    return EmailListCustomersResponseFromJSONTyped(json, false);
}

export function EmailListCustomersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailListCustomersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'customers': !exists(json, 'customers') ? undefined : ((json['customers'] as Array<any>).map(EmailListCustomerFromJSON)),
        'page_number': !exists(json, 'page_number') ? undefined : json['page_number'],
        'page_size': !exists(json, 'page_size') ? undefined : json['page_size'],
        'total_customers': !exists(json, 'total_customers') ? undefined : json['total_customers'],
        'total_pages': !exists(json, 'total_pages') ? undefined : json['total_pages'],
    };
}

export function EmailListCustomersResponseToJSON(value?: EmailListCustomersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'customers': value.customers === undefined ? undefined : ((value.customers as Array<any>).map(EmailListCustomerToJSON)),
        'page_number': value.page_number,
        'page_size': value.page_size,
        'total_customers': value.total_customers,
        'total_pages': value.total_pages,
    };
}

