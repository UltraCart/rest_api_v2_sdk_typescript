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
 * @interface AutoOrderAddonItemOption
 */
export interface AutoOrderAddonItemOption {
    /**
     * Label
     * @type {string}
     * @memberof AutoOrderAddonItemOption
     */
    label?: string;
    /**
     * Value
     * @type {string}
     * @memberof AutoOrderAddonItemOption
     */
    value?: string;
}

export function AutoOrderAddonItemOptionFromJSON(json: any): AutoOrderAddonItemOption {
    return AutoOrderAddonItemOptionFromJSONTyped(json, false);
}

export function AutoOrderAddonItemOptionFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoOrderAddonItemOption {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'label': !exists(json, 'label') ? undefined : json['label'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function AutoOrderAddonItemOptionToJSON(value?: AutoOrderAddonItemOption | null): any {
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

