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
 * @interface RulerValidationRequest
 */
export interface RulerValidationRequest {
    /**
     * 
     * @type {string}
     * @memberof RulerValidationRequest
     */
    ruler?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof RulerValidationRequest)[] = ["ruler"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the RulerValidationRequest interface.
 */
export function instanceOfRulerValidationRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function RulerValidationRequestFromJSON(json: any): RulerValidationRequest {
    return RulerValidationRequestFromJSONTyped(json, false);
}

export function RulerValidationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): RulerValidationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ruler': !exists(json, 'ruler') ? undefined : json['ruler'],
    };
}

export function RulerValidationRequestToJSON(value?: RulerValidationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ruler': value.ruler,
    };
}

