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
    Country,
    CountryFromJSON,
    CountryFromJSONTyped,
    CountryToJSON,
} from './Country';

/**
 * 
 * @export
 * @interface CountriesResponse
 */
export interface CountriesResponse {
    /**
     * 
     * @type {Array<Country>}
     * @memberof CountriesResponse
     */
    countries?: Array<Country>;
}



/**
 * Check if a given object implements the CountriesResponse interface.
 */
export function instanceOfCountriesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CountriesResponseFromJSON(json: any): CountriesResponse {
    return CountriesResponseFromJSONTyped(json, false);
}

export function CountriesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CountriesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'countries': !exists(json, 'countries') ? undefined : ((json['countries'] as Array<any>).map(CountryFromJSON)),
    };
}

export function CountriesResponseToJSON(value?: CountriesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'countries': value.countries === undefined ? undefined : ((value.countries as Array<any>).map(CountryToJSON)),
    };
}

