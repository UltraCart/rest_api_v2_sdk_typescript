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
 * @interface EmailHistogramPropertyNamesResponse
 */
export interface EmailHistogramPropertyNamesResponse {
    /**
     * 
     * @type {Array<string>}
     * @memberof EmailHistogramPropertyNamesResponse
     */
    property_names?: Array<string>;
}

export function EmailHistogramPropertyNamesResponseFromJSON(json: any): EmailHistogramPropertyNamesResponse {
    return EmailHistogramPropertyNamesResponseFromJSONTyped(json, false);
}

export function EmailHistogramPropertyNamesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailHistogramPropertyNamesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'property_names': !exists(json, 'property_names') ? undefined : json['property_names'],
    };
}

export function EmailHistogramPropertyNamesResponseToJSON(value?: EmailHistogramPropertyNamesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'property_names': value.property_names,
    };
}
