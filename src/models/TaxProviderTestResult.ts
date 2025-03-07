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
 * @interface TaxProviderTestResult
 */
export interface TaxProviderTestResult {
    /**
     * 
     * @type {string}
     * @memberof TaxProviderTestResult
     */
    details?: string;
    /**
     * True if the connection was successful
     * @type {boolean}
     * @memberof TaxProviderTestResult
     */
    success?: boolean;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof TaxProviderTestResult)[] = ["details", "success"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the TaxProviderTestResult interface.
 */
export function instanceOfTaxProviderTestResult(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TaxProviderTestResultFromJSON(json: any): TaxProviderTestResult {
    return TaxProviderTestResultFromJSONTyped(json, false);
}

export function TaxProviderTestResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxProviderTestResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'details': !exists(json, 'details') ? undefined : json['details'],
        'success': !exists(json, 'success') ? undefined : json['success'],
    };
}

export function TaxProviderTestResultToJSON(value?: TaxProviderTestResult | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'details': value.details,
        'success': value.success,
    };
}

