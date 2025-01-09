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
 * @interface ConversationLocationStateProvince
 */
export interface ConversationLocationStateProvince {
    /**
     * 
     * @type {string}
     * @memberof ConversationLocationStateProvince
     */
    abbreviation?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationLocationStateProvince
     */
    name?: string;
}

export function ConversationLocationStateProvinceFromJSON(json: any): ConversationLocationStateProvince {
    return ConversationLocationStateProvinceFromJSONTyped(json, false);
}

export function ConversationLocationStateProvinceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationLocationStateProvince {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'abbreviation': !exists(json, 'abbreviation') ? undefined : json['abbreviation'],
        'name': !exists(json, 'name') ? undefined : json['name'],
    };
}

export function ConversationLocationStateProvinceToJSON(value?: ConversationLocationStateProvince | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'abbreviation': value.abbreviation,
        'name': value.name,
    };
}

