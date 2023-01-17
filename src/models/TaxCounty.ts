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
    TaxCity,
    TaxCityFromJSON,
    TaxCityFromJSONTyped,
    TaxCityToJSON,
} from './TaxCity';

/**
 * 
 * @export
 * @interface TaxCounty
 */
export interface TaxCounty {
    /**
     * Accounting code for programs such as QuickBooks
     * @type {string}
     * @memberof TaxCounty
     */
    accounting_code?: string;
    /**
     * Cities within this city
     * @type {Array<TaxCity>}
     * @memberof TaxCounty
     */
    cities?: Array<TaxCity>;
    /**
     * County
     * @type {string}
     * @memberof TaxCounty
     */
    county?: string;
    /**
     * Tax record object identifier used internally by database
     * @type {number}
     * @memberof TaxCounty
     */
    county_oid?: number;
    /**
     * Flag instructing engine to not collect city tax for this county
     * @type {boolean}
     * @memberof TaxCounty
     */
    dont_collect_city?: boolean;
    /**
     * Flag instructing engine to not collect county tax for this county
     * @type {boolean}
     * @memberof TaxCounty
     */
    dont_collect_county?: boolean;
    /**
     * Flag instructing engine to not collect postal code tax for this county
     * @type {boolean}
     * @memberof TaxCounty
     */
    dont_collect_postal_code?: boolean;
    /**
     * Tax record object identifier used internally by database
     * @type {number}
     * @memberof TaxCounty
     */
    state_oid?: number;
    /**
     * Tax Rate
     * @type {number}
     * @memberof TaxCounty
     */
    tax_rate?: number;
    /**
     * Tax rate formatted
     * @type {string}
     * @memberof TaxCounty
     */
    tax_rate_formatted?: string;
}

export function TaxCountyFromJSON(json: any): TaxCounty {
    return TaxCountyFromJSONTyped(json, false);
}

export function TaxCountyFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxCounty {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accounting_code': !exists(json, 'accounting_code') ? undefined : json['accounting_code'],
        'cities': !exists(json, 'cities') ? undefined : ((json['cities'] as Array<any>).map(TaxCityFromJSON)),
        'county': !exists(json, 'county') ? undefined : json['county'],
        'county_oid': !exists(json, 'county_oid') ? undefined : json['county_oid'],
        'dont_collect_city': !exists(json, 'dont_collect_city') ? undefined : json['dont_collect_city'],
        'dont_collect_county': !exists(json, 'dont_collect_county') ? undefined : json['dont_collect_county'],
        'dont_collect_postal_code': !exists(json, 'dont_collect_postal_code') ? undefined : json['dont_collect_postal_code'],
        'state_oid': !exists(json, 'state_oid') ? undefined : json['state_oid'],
        'tax_rate': !exists(json, 'tax_rate') ? undefined : json['tax_rate'],
        'tax_rate_formatted': !exists(json, 'tax_rate_formatted') ? undefined : json['tax_rate_formatted'],
    };
}

export function TaxCountyToJSON(value?: TaxCounty | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accounting_code': value.accounting_code,
        'cities': value.cities === undefined ? undefined : ((value.cities as Array<any>).map(TaxCityToJSON)),
        'county': value.county,
        'county_oid': value.county_oid,
        'dont_collect_city': value.dont_collect_city,
        'dont_collect_county': value.dont_collect_county,
        'dont_collect_postal_code': value.dont_collect_postal_code,
        'state_oid': value.state_oid,
        'tax_rate': value.tax_rate,
        'tax_rate_formatted': value.tax_rate_formatted,
    };
}
