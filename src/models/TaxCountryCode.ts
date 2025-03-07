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
 * @interface TaxCountryCode
 */
export interface TaxCountryCode {
    /**
     * Accounting code for programs such as QuickBooks
     * @type {string}
     * @memberof TaxCountryCode
     */
    accounting_code?: string;
    /**
     * Country code (2 characters
     * @type {string}
     * @memberof TaxCountryCode
     */
    country_code?: string;
    /**
     * Country name
     * @type {string}
     * @memberof TaxCountryCode
     */
    country_name?: string;
    /**
     * Tax Rate
     * @type {number}
     * @memberof TaxCountryCode
     */
    tax_rate?: number;
    /**
     * Tax rate formatted
     * @type {string}
     * @memberof TaxCountryCode
     */
    tax_rate_formatted?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof TaxCountryCode)[] = ["accounting_code", "country_code", "country_name", "tax_rate", "tax_rate_formatted"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the TaxCountryCode interface.
 */
export function instanceOfTaxCountryCode(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TaxCountryCodeFromJSON(json: any): TaxCountryCode {
    return TaxCountryCodeFromJSONTyped(json, false);
}

export function TaxCountryCodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxCountryCode {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accounting_code': !exists(json, 'accounting_code') ? undefined : json['accounting_code'],
        'country_code': !exists(json, 'country_code') ? undefined : json['country_code'],
        'country_name': !exists(json, 'country_name') ? undefined : json['country_name'],
        'tax_rate': !exists(json, 'tax_rate') ? undefined : json['tax_rate'],
        'tax_rate_formatted': !exists(json, 'tax_rate_formatted') ? undefined : json['tax_rate_formatted'],
    };
}

export function TaxCountryCodeToJSON(value?: TaxCountryCode | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accounting_code': value.accounting_code,
        'country_code': value.country_code,
        'country_name': value.country_name,
        'tax_rate': value.tax_rate,
        'tax_rate_formatted': value.tax_rate_formatted,
    };
}

