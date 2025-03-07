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
 * @interface TaxStateCode
 */
export interface TaxStateCode {
    /**
     * Accounting code for programs such as QuickBooks
     * @type {string}
     * @memberof TaxStateCode
     */
    accounting_code?: string;
    /**
     * State code (2 characters
     * @type {string}
     * @memberof TaxStateCode
     */
    state_code?: string;
    /**
     * State name
     * @type {string}
     * @memberof TaxStateCode
     */
    state_name?: string;
    /**
     * Tax Rate
     * @type {number}
     * @memberof TaxStateCode
     */
    tax_rate?: number;
    /**
     * Tax rate formatted
     * @type {string}
     * @memberof TaxStateCode
     */
    tax_rate_formatted?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof TaxStateCode)[] = ["accounting_code", "state_code", "state_name", "tax_rate", "tax_rate_formatted"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the TaxStateCode interface.
 */
export function instanceOfTaxStateCode(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TaxStateCodeFromJSON(json: any): TaxStateCode {
    return TaxStateCodeFromJSONTyped(json, false);
}

export function TaxStateCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxStateCode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accounting_code': !exists(json, 'accounting_code') ? undefined : json['accounting_code'],
        'state_code': !exists(json, 'state_code') ? undefined : json['state_code'],
        'state_name': !exists(json, 'state_name') ? undefined : json['state_name'],
        'tax_rate': !exists(json, 'tax_rate') ? undefined : json['tax_rate'],
        'tax_rate_formatted': !exists(json, 'tax_rate_formatted') ? undefined : json['tax_rate_formatted'],
    };
}

export function TaxStateCodeToJSON(value?: TaxStateCode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accounting_code': value.accounting_code,
        'state_code': value.state_code,
        'state_name': value.state_name,
        'tax_rate': value.tax_rate,
        'tax_rate_formatted': value.tax_rate_formatted,
    };
}

