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
    TaxState,
    TaxStateFromJSON,
    TaxStateFromJSONTyped,
    TaxStateToJSON,
} from './TaxState';

/**
 * 
 * @export
 * @interface TaxCountry
 */
export interface TaxCountry {
    /**
     * Accounting code for programs such as QuickBooks
     * @type {string}
     * @memberof TaxCountry
     */
    accounting_code?: string;
    /**
     * Country code (2 characters
     * @type {string}
     * @memberof TaxCountry
     */
    country_code?: string;
    /**
     * Tax record object identifier used internally by database
     * @type {number}
     * @memberof TaxCountry
     */
    country_oid?: number;
    /**
     * States (or regions or territories) within this country
     * @type {Array<TaxState>}
     * @memberof TaxCountry
     */
    states?: Array<TaxState>;
    /**
     * True if taxation within this jurisdiction should charge tax on gift charge
     * @type {boolean}
     * @memberof TaxCountry
     */
    tax_gift_charge?: boolean;
    /**
     * True if taxation within this jurisdiction should charge tax on gift wrap
     * @type {boolean}
     * @memberof TaxCountry
     */
    tax_gift_wrap?: boolean;
    /**
     * Tax Rate
     * @type {number}
     * @memberof TaxCountry
     */
    tax_rate?: number;
    /**
     * Tax rate formatted
     * @type {string}
     * @memberof TaxCountry
     */
    tax_rate_formatted?: string;
    /**
     * True if taxation within this jurisdiction should charge tax on shipping
     * @type {boolean}
     * @memberof TaxCountry
     */
    tax_shipping?: boolean;
}

export function TaxCountryFromJSON(json: any): TaxCountry {
    return TaxCountryFromJSONTyped(json, false);
}

export function TaxCountryFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxCountry {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'accounting_code': !exists(json, 'accounting_code') ? undefined : json['accounting_code'],
        'country_code': !exists(json, 'country_code') ? undefined : json['country_code'],
        'country_oid': !exists(json, 'country_oid') ? undefined : json['country_oid'],
        'states': !exists(json, 'states') ? undefined : ((json['states'] as Array<any>).map(TaxStateFromJSON)),
        'tax_gift_charge': !exists(json, 'tax_gift_charge') ? undefined : json['tax_gift_charge'],
        'tax_gift_wrap': !exists(json, 'tax_gift_wrap') ? undefined : json['tax_gift_wrap'],
        'tax_rate': !exists(json, 'tax_rate') ? undefined : json['tax_rate'],
        'tax_rate_formatted': !exists(json, 'tax_rate_formatted') ? undefined : json['tax_rate_formatted'],
        'tax_shipping': !exists(json, 'tax_shipping') ? undefined : json['tax_shipping'],
    };
}

export function TaxCountryToJSON(value?: TaxCountry | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'accounting_code': value.accounting_code,
        'country_code': value.country_code,
        'country_oid': value.country_oid,
        'states': value.states === undefined ? undefined : ((value.states as Array<any>).map(TaxStateToJSON)),
        'tax_gift_charge': value.tax_gift_charge,
        'tax_gift_wrap': value.tax_gift_wrap,
        'tax_rate': value.tax_rate,
        'tax_rate_formatted': value.tax_rate_formatted,
        'tax_shipping': value.tax_shipping,
    };
}

