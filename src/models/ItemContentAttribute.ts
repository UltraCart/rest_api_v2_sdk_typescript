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
 * @interface ItemContentAttribute
 */
export interface ItemContentAttribute {
    /**
     * Attribute name
     * @type {string}
     * @memberof ItemContentAttribute
     */
    name?: string;
    /**
     * Attribute translated text instance identifier
     * @type {number}
     * @memberof ItemContentAttribute
     */
    translated_text_instance_oid?: number;
    /**
     * Attribute type
     * @type {string}
     * @memberof ItemContentAttribute
     */
    type?: string;
    /**
     * Attribute value
     * @type {string}
     * @memberof ItemContentAttribute
     */
    value?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ItemContentAttribute)[] = ["name", "translated_text_instance_oid", "type", "value"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ItemContentAttribute interface.
 */
export function instanceOfItemContentAttribute(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ItemContentAttributeFromJSON(json: any): ItemContentAttribute {
    return ItemContentAttributeFromJSONTyped(json, false);
}

export function ItemContentAttributeFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemContentAttribute {
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

export function ItemContentAttributeToJSON(value?: ItemContentAttribute | null): any {
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

