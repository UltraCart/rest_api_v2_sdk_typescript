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
 * @interface ConversationAutocompleteRequest
 */
export interface ConversationAutocompleteRequest {
    /**
     * 
     * @type {string}
     * @memberof ConversationAutocompleteRequest
     */
    field?: string;
    /**
     * 
     * @type {string}
     * @memberof ConversationAutocompleteRequest
     */
    term?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ConversationAutocompleteRequest)[] = ["field", "term"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ConversationAutocompleteRequest interface.
 */
export function instanceOfConversationAutocompleteRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConversationAutocompleteRequestFromJSON(json: any): ConversationAutocompleteRequest {
    return ConversationAutocompleteRequestFromJSONTyped(json, false);
}

export function ConversationAutocompleteRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationAutocompleteRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'field': !exists(json, 'field') ? undefined : json['field'],
        'term': !exists(json, 'term') ? undefined : json['term'],
    };
}

export function ConversationAutocompleteRequestToJSON(value?: ConversationAutocompleteRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'field': value.field,
        'term': value.term,
    };
}

