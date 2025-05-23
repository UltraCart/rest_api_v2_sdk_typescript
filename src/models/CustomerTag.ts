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
 * @interface CustomerTag
 */
export interface CustomerTag {
    /**
     * Tag Value
     * @type {string}
     * @memberof CustomerTag
     */
    tag_value?: string;
}



/**
 * Check if a given object implements the CustomerTag interface.
 */
export function instanceOfCustomerTag(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerTagFromJSON(json: any): CustomerTag {
    return CustomerTagFromJSONTyped(json, false);
}

export function CustomerTagFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerTag {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'tag_value': !exists(json, 'tag_value') ? undefined : json['tag_value'],
    };
}

export function CustomerTagToJSON(value?: CustomerTag | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'tag_value': value.tag_value,
    };
}

