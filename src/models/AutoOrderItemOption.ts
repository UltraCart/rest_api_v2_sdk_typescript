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
 * @interface AutoOrderItemOption
 */
export interface AutoOrderItemOption {
    /**
     * Label
     * @type {string}
     * @memberof AutoOrderItemOption
     */
    label?: string;
    /**
     * Value
     * @type {string}
     * @memberof AutoOrderItemOption
     */
    value?: string;
}

export function AutoOrderItemOptionFromJSON(json: any): AutoOrderItemOption {
    return AutoOrderItemOptionFromJSONTyped(json, false);
}

export function AutoOrderItemOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoOrderItemOption {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'label': !exists(json, 'label') ? undefined : json['label'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function AutoOrderItemOptionToJSON(value?: AutoOrderItemOption | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'label': value.label,
        'value': value.value,
    };
}
