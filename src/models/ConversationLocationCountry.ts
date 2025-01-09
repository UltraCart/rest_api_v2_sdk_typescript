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
    ConversationLocationStateProvince,
    ConversationLocationStateProvinceFromJSON,
    ConversationLocationStateProvinceFromJSONTyped,
    ConversationLocationStateProvinceToJSON,
} from './ConversationLocationStateProvince';

/**
 * 
 * @export
 * @interface ConversationLocationCountry
 */
export interface ConversationLocationCountry {
    /**
     * 
     * @type {string}
     * @memberof ConversationLocationCountry
     */
    iso2?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationLocationCountry
     */
    name?: string;
    /**
     * 
     * @type {Array<ConversationLocationStateProvince>}
     * @memberof ConversationLocationCountry
     */
    state_provinces?: Array<ConversationLocationStateProvince>;
}

export function ConversationLocationCountryFromJSON(json: any): ConversationLocationCountry {
    return ConversationLocationCountryFromJSONTyped(json, false);
}

export function ConversationLocationCountryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationLocationCountry {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'iso2': !exists(json, 'iso2') ? undefined : json['iso2'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'state_provinces': !exists(json, 'state_provinces') ? undefined : ((json['state_provinces'] as Array<any>).map(ConversationLocationStateProvinceFromJSON)),
    };
}

export function ConversationLocationCountryToJSON(value?: ConversationLocationCountry | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'iso2': value.iso2,
        'name': value.name,
        'state_provinces': value.state_provinces === undefined ? undefined : ((value.state_provinces as Array<any>).map(ConversationLocationStateProvinceToJSON)),
    };
}

