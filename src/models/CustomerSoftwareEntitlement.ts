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
 * @interface CustomerSoftwareEntitlement
 */
export interface CustomerSoftwareEntitlement {
    /**
     * Activation Code Associated with the software
     * @type {string}
     * @memberof CustomerSoftwareEntitlement
     */
    activation_code?: string;
    /**
     * Date/time when the activation code was created
     * @type {string}
     * @memberof CustomerSoftwareEntitlement
     */
    activation_dts?: string;
    /**
     * Customer profile software entitlement object identifier
     * @type {number}
     * @memberof CustomerSoftwareEntitlement
     */
    customer_software_entitlement_oid?: number;
    /**
     * Date/time when the activation code will expire
     * @type {string}
     * @memberof CustomerSoftwareEntitlement
     */
    expiration_dts?: string;
    /**
     * Item description used to purchase this software.
     * @type {string}
     * @memberof CustomerSoftwareEntitlement
     */
    purchased_via_item_description?: string;
    /**
     * Item ID used to purchase this software.
     * @type {string}
     * @memberof CustomerSoftwareEntitlement
     */
    purchased_via_item_id?: string;
    /**
     * Order ID used to purchase this software.
     * @type {string}
     * @memberof CustomerSoftwareEntitlement
     */
    purchased_via_order_id?: string;
    /**
     * SKU of the software
     * @type {string}
     * @memberof CustomerSoftwareEntitlement
     */
    software_sku?: string;
}

export function CustomerSoftwareEntitlementFromJSON(json: any): CustomerSoftwareEntitlement {
    return CustomerSoftwareEntitlementFromJSONTyped(json, false);
}

export function CustomerSoftwareEntitlementFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerSoftwareEntitlement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activation_code': !exists(json, 'activation_code') ? undefined : json['activation_code'],
        'activation_dts': !exists(json, 'activation_dts') ? undefined : json['activation_dts'],
        'customer_software_entitlement_oid': !exists(json, 'customer_software_entitlement_oid') ? undefined : json['customer_software_entitlement_oid'],
        'expiration_dts': !exists(json, 'expiration_dts') ? undefined : json['expiration_dts'],
        'purchased_via_item_description': !exists(json, 'purchased_via_item_description') ? undefined : json['purchased_via_item_description'],
        'purchased_via_item_id': !exists(json, 'purchased_via_item_id') ? undefined : json['purchased_via_item_id'],
        'purchased_via_order_id': !exists(json, 'purchased_via_order_id') ? undefined : json['purchased_via_order_id'],
        'software_sku': !exists(json, 'software_sku') ? undefined : json['software_sku'],
    };
}

export function CustomerSoftwareEntitlementToJSON(value?: CustomerSoftwareEntitlement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activation_code': value.activation_code,
        'activation_dts': value.activation_dts,
        'customer_software_entitlement_oid': value.customer_software_entitlement_oid,
        'expiration_dts': value.expiration_dts,
        'purchased_via_item_description': value.purchased_via_item_description,
        'purchased_via_item_id': value.purchased_via_item_id,
        'purchased_via_order_id': value.purchased_via_order_id,
        'software_sku': value.software_sku,
    };
}
