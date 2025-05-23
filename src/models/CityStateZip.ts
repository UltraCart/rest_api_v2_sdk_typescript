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
 * @interface CityStateZip
 */
export interface CityStateZip {
    /**
     * 
     * @type {string}
     * @memberof CityStateZip
     */
    city?: string;
    /**
     * 
     * @type {string}
     * @memberof CityStateZip
     */
    error?: string;
    /**
     * 
     * @type {string}
     * @memberof CityStateZip
     */
    state?: string;
    /**
     * 
     * @type {boolean}
     * @memberof CityStateZip
     */
    validZip?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CityStateZip
     */
    zip?: string;
}



/**
 * Check if a given object implements the CityStateZip interface.
 */
export function instanceOfCityStateZip(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CityStateZipFromJSON(json: any): CityStateZip {
    return CityStateZipFromJSONTyped(json, false);
}

export function CityStateZipFromJSONTyped(json: any, ignoreDiscriminator: boolean): CityStateZip {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'city': !exists(json, 'city') ? undefined : json['city'],
        'error': !exists(json, 'error') ? undefined : json['error'],
        'state': !exists(json, 'state') ? undefined : json['state'],
        'validZip': !exists(json, 'validZip') ? undefined : json['validZip'],
        'zip': !exists(json, 'zip') ? undefined : json['zip'],
    };
}

export function CityStateZipToJSON(value?: CityStateZip | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'city': value.city,
        'error': value.error,
        'state': value.state,
        'validZip': value.validZip,
        'zip': value.zip,
    };
}

