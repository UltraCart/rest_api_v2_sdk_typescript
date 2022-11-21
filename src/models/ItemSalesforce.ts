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
 * @interface ItemSalesforce
 */
export interface ItemSalesforce {
    /**
     * Salesforce.com pricebook id
     * @type {string}
     * @memberof ItemSalesforce
     */
    sfdc_pricebook_id?: string;
    /**
     * Salesforce.com product id
     * @type {string}
     * @memberof ItemSalesforce
     */
    sfdc_product_id?: string;
}

export function ItemSalesforceFromJSON(json: any): ItemSalesforce {
    return ItemSalesforceFromJSONTyped(json, false);
}

export function ItemSalesforceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemSalesforce {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'sfdc_pricebook_id': !exists(json, 'sfdc_pricebook_id') ? undefined : json['sfdc_pricebook_id'],
        'sfdc_product_id': !exists(json, 'sfdc_product_id') ? undefined : json['sfdc_product_id'],
    };
}

export function ItemSalesforceToJSON(value?: ItemSalesforce | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'sfdc_pricebook_id': value.sfdc_pricebook_id,
        'sfdc_product_id': value.sfdc_product_id,
    };
}
