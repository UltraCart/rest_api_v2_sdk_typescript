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
 * @interface TaxProviderActivateResult
 */
export interface TaxProviderActivateResult {
    /**
     * 
     * @type {string}
     * @memberof TaxProviderActivateResult
     */
    details?: string;
    /**
     * True if the connection was successful
     * @type {boolean}
     * @memberof TaxProviderActivateResult
     */
    success?: boolean;
}

export function TaxProviderActivateResultFromJSON(json: any): TaxProviderActivateResult {
    return TaxProviderActivateResultFromJSONTyped(json, false);
}

export function TaxProviderActivateResultFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxProviderActivateResult {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'details': !exists(json, 'details') ? undefined : json['details'],
        'success': !exists(json, 'success') ? undefined : json['success'],
    };
}

export function TaxProviderActivateResultToJSON(value?: TaxProviderActivateResult | null): any {
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
