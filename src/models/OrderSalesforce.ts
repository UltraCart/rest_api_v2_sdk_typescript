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
 * @interface OrderSalesforce
 */
export interface OrderSalesforce {
    /**
     * Salesforce.com opportunity id
     * @type {string}
     * @memberof OrderSalesforce
     */
    salesforce_opportunity_id?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof OrderSalesforce)[] = ["salesforce_opportunity_id"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the OrderSalesforce interface.
 */
export function instanceOfOrderSalesforce(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderSalesforceFromJSON(json: any): OrderSalesforce {
    return OrderSalesforceFromJSONTyped(json, false);
}

export function OrderSalesforceFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderSalesforce {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'salesforce_opportunity_id': !exists(json, 'salesforce_opportunity_id') ? undefined : json['salesforce_opportunity_id'],
    };
}

export function OrderSalesforceToJSON(value?: OrderSalesforce | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'salesforce_opportunity_id': value.salesforce_opportunity_id,
    };
}

