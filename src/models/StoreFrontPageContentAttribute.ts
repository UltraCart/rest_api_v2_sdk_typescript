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
 * @interface StoreFrontPageContentAttribute
 */
export interface StoreFrontPageContentAttribute {
    /**
     * Attribute name
     * @type {string}
     * @memberof StoreFrontPageContentAttribute
     */
    name?: string;
    /**
     * Attribute translated text instance identifier
     * @type {number}
     * @memberof StoreFrontPageContentAttribute
     */
    translated_text_instance_oid?: number;
    /**
     * Attribute type
     * @type {string}
     * @memberof StoreFrontPageContentAttribute
     */
    type?: string;
    /**
     * Attribute value
     * @type {string}
     * @memberof StoreFrontPageContentAttribute
     */
    value?: string;
}

export function StoreFrontPageContentAttributeFromJSON(json: any): StoreFrontPageContentAttribute {
    return StoreFrontPageContentAttributeFromJSONTyped(json, false);
}

export function StoreFrontPageContentAttributeFromJSONTyped(json: any, ignoreDiscriminator: boolean): StoreFrontPageContentAttribute {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'translated_text_instance_oid': !exists(json, 'translated_text_instance_oid') ? undefined : json['translated_text_instance_oid'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function StoreFrontPageContentAttributeToJSON(value?: StoreFrontPageContentAttribute | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'translated_text_instance_oid': value.translated_text_instance_oid,
        'type': value.type,
        'value': value.value,
    };
}

