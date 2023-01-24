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
    TaxPostalCode,
    TaxPostalCodeFromJSON,
    TaxPostalCodeFromJSONTyped,
    TaxPostalCodeToJSON,
} from './TaxPostalCode';

/**
 * 
 * @export
 * @interface TaxCity
 */
export interface TaxCity {
    /**
     * Accounting code for programs such as QuickBooks
     * @type {string}
     * @memberof TaxCity
     */
    accounting_code?: string;
    /**
     * City
     * @type {string}
     * @memberof TaxCity
     */
    city?: string;
    /**
     * Tax record object identifier used internally by database
     * @type {number}
     * @memberof TaxCity
     */
    city_oid?: number;
    /**
     * Tax record object identifier used internally by database
     * @type {number}
     * @memberof TaxCity
     */
    county_oid?: number;
    /**
     * Flag instructing engine to not collect city tax for this city
     * @type {boolean}
     * @memberof TaxCity
     */
    dont_collect_city?: boolean;
    /**
     * Flag instructing engine to not collect postal code tax for this city
     * @type {boolean}
     * @memberof TaxCity
     */
    dont_collect_postal_code?: boolean;
    /**
     * Postal Codes within this city
     * @type {Array<TaxPostalCode>}
     * @memberof TaxCity
     */
    postal_codes?: Array<TaxPostalCode>;
    /**
     * Tax Rate
     * @type {number}
     * @memberof TaxCity
     */
    tax_rate?: number;
    /**
     * Tax rate formatted
     * @type {string}
     * @memberof TaxCity
     */
    tax_rate_formatted?: string;
}

export function TaxCityFromJSON(json: any): TaxCity {
    return TaxCityFromJSONTyped(json, false);
}

export function TaxCityFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxCity {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accounting_code': !exists(json, 'accounting_code') ? undefined : json['accounting_code'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'city_oid': !exists(json, 'city_oid') ? undefined : json['city_oid'],
        'county_oid': !exists(json, 'county_oid') ? undefined : json['county_oid'],
        'dont_collect_city': !exists(json, 'dont_collect_city') ? undefined : json['dont_collect_city'],
        'dont_collect_postal_code': !exists(json, 'dont_collect_postal_code') ? undefined : json['dont_collect_postal_code'],
        'postal_codes': !exists(json, 'postal_codes') ? undefined : ((json['postal_codes'] as Array<any>).map(TaxPostalCodeFromJSON)),
        'tax_rate': !exists(json, 'tax_rate') ? undefined : json['tax_rate'],
        'tax_rate_formatted': !exists(json, 'tax_rate_formatted') ? undefined : json['tax_rate_formatted'],
    };
}

export function TaxCityToJSON(value?: TaxCity | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accounting_code': value.accounting_code,
        'city': value.city,
        'city_oid': value.city_oid,
        'county_oid': value.county_oid,
        'dont_collect_city': value.dont_collect_city,
        'dont_collect_postal_code': value.dont_collect_postal_code,
        'postal_codes': value.postal_codes === undefined ? undefined : ((value.postal_codes as Array<any>).map(TaxPostalCodeToJSON)),
        'tax_rate': value.tax_rate,
        'tax_rate_formatted': value.tax_rate_formatted,
    };
}
