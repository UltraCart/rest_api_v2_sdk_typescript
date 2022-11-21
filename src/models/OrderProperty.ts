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
 * @interface OrderProperty
 */
export interface OrderProperty {
    /**
     * True if this property is displayed to the customer
     * @type {boolean}
     * @memberof OrderProperty
     */
    display?: boolean;
    /**
     * The date/time that the property expires and is deleted
     * @type {string}
     * @memberof OrderProperty
     */
    expiration_dts?: string;
    /**
     * Name
     * @type {string}
     * @memberof OrderProperty
     */
    name?: string;
    /**
     * Value
     * @type {string}
     * @memberof OrderProperty
     */
    value?: string;
}

export function OrderPropertyFromJSON(json: any): OrderProperty {
    return OrderPropertyFromJSONTyped(json, false);
}

export function OrderPropertyFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderProperty {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'display': !exists(json, 'display') ? undefined : json['display'],
        'expiration_dts': !exists(json, 'expiration_dts') ? undefined : json['expiration_dts'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function OrderPropertyToJSON(value?: OrderProperty | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'display': value.display,
        'expiration_dts': value.expiration_dts,
        'name': value.name,
        'value': value.value,
    };
}
