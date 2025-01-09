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
    Browser,
    BrowserFromJSON,
    BrowserFromJSONTyped,
    BrowserToJSON,
} from './Browser';

/**
 * 
 * @export
 * @interface OrderCheckout
 */
export interface OrderCheckout {
    /**
     * 
     * @type {Browser}
     * @memberof OrderCheckout
     */
    browser?: Browser;
    /**
     * Comments from the customer.  Rarely used on the single page checkout.
     * @type {string}
     * @memberof OrderCheckout
     */
    comments?: string;
    /**
     * Custom field 1
     * @type {string}
     * @memberof OrderCheckout
     */
    custom_field1?: string;
    /**
     * Custom field 10
     * @type {string}
     * @memberof OrderCheckout
     */
    custom_field10?: string;
    /**
     * Custom field 2
     * @type {string}
     * @memberof OrderCheckout
     */
    custom_field2?: string;
    /**
     * Custom field 3
     * @type {string}
     * @memberof OrderCheckout
     */
    custom_field3?: string;
    /**
     * Custom field 4
     * @type {string}
     * @memberof OrderCheckout
     */
    custom_field4?: string;
    /**
     * Custom field 5
     * @type {string}
     * @memberof OrderCheckout
     */
    custom_field5?: string;
    /**
     * Custom field 6
     * @type {string}
     * @memberof OrderCheckout
     */
    custom_field6?: string;
    /**
     * Custom field 7
     * @type {string}
     * @memberof OrderCheckout
     */
    custom_field7?: string;
    /**
     * Custom field 8
     * @type {string}
     * @memberof OrderCheckout
     */
    custom_field8?: string;
    /**
     * Custom field 9
     * @type {string}
     * @memberof OrderCheckout
     */
    custom_field9?: string;
    /**
     * IP address of the customer when placing the order
     * @type {string}
     * @memberof OrderCheckout
     */
    customer_ip_address?: string;
    /**
     * Screen branding theme code associated with the order (legacy checkout)
     * @type {string}
     * @memberof OrderCheckout
     */
    screen_branding_theme_code?: string;
    /**
     * Screen size small, medium or large
     * @type {string}
     * @memberof OrderCheckout
     */
    screen_size?: string;
    /**
     * StoreFront host name associated with the order
     * @type {string}
     * @memberof OrderCheckout
     */
    storefront_host_name?: string;
    /**
     * Upsell path code assigned during the checkout that the customer went through
     * @type {string}
     * @memberof OrderCheckout
     */
    upsell_path_code?: string;
}

export function OrderCheckoutFromJSON(json: any): OrderCheckout {
    return OrderCheckoutFromJSONTyped(json, false);
}

export function OrderCheckoutFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderCheckout {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'browser': !exists(json, 'browser') ? undefined : BrowserFromJSON(json['browser']),
        'comments': !exists(json, 'comments') ? undefined : json['comments'],
        'custom_field1': !exists(json, 'custom_field1') ? undefined : json['custom_field1'],
        'custom_field10': !exists(json, 'custom_field10') ? undefined : json['custom_field10'],
        'custom_field2': !exists(json, 'custom_field2') ? undefined : json['custom_field2'],
        'custom_field3': !exists(json, 'custom_field3') ? undefined : json['custom_field3'],
        'custom_field4': !exists(json, 'custom_field4') ? undefined : json['custom_field4'],
        'custom_field5': !exists(json, 'custom_field5') ? undefined : json['custom_field5'],
        'custom_field6': !exists(json, 'custom_field6') ? undefined : json['custom_field6'],
        'custom_field7': !exists(json, 'custom_field7') ? undefined : json['custom_field7'],
        'custom_field8': !exists(json, 'custom_field8') ? undefined : json['custom_field8'],
        'custom_field9': !exists(json, 'custom_field9') ? undefined : json['custom_field9'],
        'customer_ip_address': !exists(json, 'customer_ip_address') ? undefined : json['customer_ip_address'],
        'screen_branding_theme_code': !exists(json, 'screen_branding_theme_code') ? undefined : json['screen_branding_theme_code'],
        'screen_size': !exists(json, 'screen_size') ? undefined : json['screen_size'],
        'storefront_host_name': !exists(json, 'storefront_host_name') ? undefined : json['storefront_host_name'],
        'upsell_path_code': !exists(json, 'upsell_path_code') ? undefined : json['upsell_path_code'],
    };
}

export function OrderCheckoutToJSON(value?: OrderCheckout | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'browser': BrowserToJSON(value.browser),
        'comments': value.comments,
        'custom_field1': value.custom_field1,
        'custom_field10': value.custom_field10,
        'custom_field2': value.custom_field2,
        'custom_field3': value.custom_field3,
        'custom_field4': value.custom_field4,
        'custom_field5': value.custom_field5,
        'custom_field6': value.custom_field6,
        'custom_field7': value.custom_field7,
        'custom_field8': value.custom_field8,
        'custom_field9': value.custom_field9,
        'customer_ip_address': value.customer_ip_address,
        'screen_branding_theme_code': value.screen_branding_theme_code,
        'screen_size': value.screen_size,
        'storefront_host_name': value.storefront_host_name,
        'upsell_path_code': value.upsell_path_code,
    };
}

