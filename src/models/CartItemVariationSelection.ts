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
 * @interface CartItemVariationSelection
 */
export interface CartItemVariationSelection {
    /**
     * Variation name
     * @type {string}
     * @memberof CartItemVariationSelection
     */
    variation_name?: string;
    /**
     * Variation value
     * @type {string}
     * @memberof CartItemVariationSelection
     */
    variation_value?: string;
}

export function CartItemVariationSelectionFromJSON(json: any): CartItemVariationSelection {
    return CartItemVariationSelectionFromJSONTyped(json, false);
}

export function CartItemVariationSelectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartItemVariationSelection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'variation_name': !exists(json, 'variation_name') ? undefined : json['variation_name'],
        'variation_value': !exists(json, 'variation_value') ? undefined : json['variation_value'],
    };
}

export function CartItemVariationSelectionToJSON(value?: CartItemVariationSelection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'variation_name': value.variation_name,
        'variation_value': value.variation_value,
    };
}
