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
 * @interface OrderFormat
 */
export interface OrderFormat {
    /**
     * The context to generate the order view for.
     * @type {string}
     * @memberof OrderFormat
     */
    context?: string;
    /**
     * True to not link the email address to the order search
     * @type {boolean}
     * @memberof OrderFormat
     */
    dont_link_email_to_search?: boolean;
    /**
     * True to make the email address a clickable mailto link
     * @type {boolean}
     * @memberof OrderFormat
     */
    email_as_link?: boolean;
    /**
     * Specify a distribution center oid to filter the items displayed to that particular distribution center.
     * @type {number}
     * @memberof OrderFormat
     */
    filter_distribution_center_oid?: number;
    /**
     * The container oid to filter items to.
     * @type {number}
     * @memberof OrderFormat
     */
    filter_to_items_in_container_oid?: number;
    /**
     * The desired format.
     * @type {string}
     * @memberof OrderFormat
     */
    format?: OrderFormatFormatEnum;
    /**
     * True to ide the bill to address
     * @type {boolean}
     * @memberof OrderFormat
     */
    hide_bill_to_address?: boolean;
    /**
     * True to hide price information
     * @type {boolean}
     * @memberof OrderFormat
     */
    hide_price_information?: boolean;
    /**
     * True to link file attachments for download
     * @type {boolean}
     * @memberof OrderFormat
     */
    link_file_attachments?: boolean;
    /**
     * True to show contact information
     * @type {boolean}
     * @memberof OrderFormat
     */
    show_contact_info?: boolean;
    /**
     * True to show the order in the merchant currency
     * @type {boolean}
     * @memberof OrderFormat
     */
    show_in_merchant_currency?: boolean;
    /**
     * True to show internal information about the order
     * @type {boolean}
     * @memberof OrderFormat
     */
    show_internal_information?: boolean;
    /**
     * True to show merchant notes
     * @type {boolean}
     * @memberof OrderFormat
     */
    show_merchant_notes?: boolean;
    /**
     * True to show non-sensitive payment information
     * @type {boolean}
     * @memberof OrderFormat
     */
    show_non_sensitive_payment_info?: boolean;
    /**
     * True to show payment information
     * @type {boolean}
     * @memberof OrderFormat
     */
    show_payment_info?: boolean;
    /**
     * True to translate the order into the native language of the customer
     * @type {boolean}
     * @memberof OrderFormat
     */
    translate?: boolean;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof OrderFormat)[] = ["context", "dont_link_email_to_search", "email_as_link", "filter_distribution_center_oid", "filter_to_items_in_container_oid", "format", "hide_bill_to_address", "hide_price_information", "link_file_attachments", "show_contact_info", "show_in_merchant_currency", "show_internal_information", "show_merchant_notes", "show_non_sensitive_payment_info", "show_payment_info", "translate"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * @export
 */
export const OrderFormatFormatEnum = {
    Text: 'text',
    Div: 'div',
    Table: 'table',
    Email: 'email'
} as const;
export type OrderFormatFormatEnum = typeof OrderFormatFormatEnum[keyof typeof OrderFormatFormatEnum];


/**
 * Check if a given object implements the OrderFormat interface.
 */
export function instanceOfOrderFormat(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderFormatFromJSON(json: any): OrderFormat {
    return OrderFormatFromJSONTyped(json, false);
}

export function OrderFormatFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderFormat {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'context': !exists(json, 'context') ? undefined : json['context'],
        'dont_link_email_to_search': !exists(json, 'dont_link_email_to_search') ? undefined : json['dont_link_email_to_search'],
        'email_as_link': !exists(json, 'email_as_link') ? undefined : json['email_as_link'],
        'filter_distribution_center_oid': !exists(json, 'filter_distribution_center_oid') ? undefined : json['filter_distribution_center_oid'],
        'filter_to_items_in_container_oid': !exists(json, 'filter_to_items_in_container_oid') ? undefined : json['filter_to_items_in_container_oid'],
        'format': !exists(json, 'format') ? undefined : json['format'],
        'hide_bill_to_address': !exists(json, 'hide_bill_to_address') ? undefined : json['hide_bill_to_address'],
        'hide_price_information': !exists(json, 'hide_price_information') ? undefined : json['hide_price_information'],
        'link_file_attachments': !exists(json, 'link_file_attachments') ? undefined : json['link_file_attachments'],
        'show_contact_info': !exists(json, 'show_contact_info') ? undefined : json['show_contact_info'],
        'show_in_merchant_currency': !exists(json, 'show_in_merchant_currency') ? undefined : json['show_in_merchant_currency'],
        'show_internal_information': !exists(json, 'show_internal_information') ? undefined : json['show_internal_information'],
        'show_merchant_notes': !exists(json, 'show_merchant_notes') ? undefined : json['show_merchant_notes'],
        'show_non_sensitive_payment_info': !exists(json, 'show_non_sensitive_payment_info') ? undefined : json['show_non_sensitive_payment_info'],
        'show_payment_info': !exists(json, 'show_payment_info') ? undefined : json['show_payment_info'],
        'translate': !exists(json, 'translate') ? undefined : json['translate'],
    };
}

export function OrderFormatToJSON(value?: OrderFormat | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'context': value.context,
        'dont_link_email_to_search': value.dont_link_email_to_search,
        'email_as_link': value.email_as_link,
        'filter_distribution_center_oid': value.filter_distribution_center_oid,
        'filter_to_items_in_container_oid': value.filter_to_items_in_container_oid,
        'format': value.format,
        'hide_bill_to_address': value.hide_bill_to_address,
        'hide_price_information': value.hide_price_information,
        'link_file_attachments': value.link_file_attachments,
        'show_contact_info': value.show_contact_info,
        'show_in_merchant_currency': value.show_in_merchant_currency,
        'show_internal_information': value.show_internal_information,
        'show_merchant_notes': value.show_merchant_notes,
        'show_non_sensitive_payment_info': value.show_non_sensitive_payment_info,
        'show_payment_info': value.show_payment_info,
        'translate': value.translate,
    };
}

