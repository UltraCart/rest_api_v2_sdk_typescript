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
 * @interface Country
 */
export interface Country {
    /**
     * iso_2_code
     * @type {string}
     * @memberof Country
     */
    iso_2_code?: string;
    /**
     * name
     * @type {string}
     * @memberof Country
     */
    name?: string;
}

export function CountryFromJSON(json: any): Country {
    return CountryFromJSONTyped(json, false);
}

export function CountryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Country {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'iso_2_code': !exists(json, 'iso_2_code') ? undefined : json['iso_2_code'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function CountryToJSON(value?: Country | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'iso_2_code': value.iso_2_code,
        'name': value.name,
    };
}
