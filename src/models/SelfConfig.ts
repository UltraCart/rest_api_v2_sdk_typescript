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
 * @interface SelfConfig
 */
export interface SelfConfig {
    /**
     * True if the Colorado Retail Delivery Fee should not be collected
     * @type {boolean}
     * @memberof SelfConfig
     */
    exempt_from_colorado_retail_delivery_fee?: boolean;
    /**
     * True if the Minnesota Retail Delivery Fee should not be collected
     * @type {boolean}
     * @memberof SelfConfig
     */
    exempt_from_minnesota_retail_delivery_fee?: boolean;
    /**
     * True if sales tax should be collected based on billing address instead of shipping address
     * @type {boolean}
     * @memberof SelfConfig
     */
    tax_billing?: boolean;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof SelfConfig)[] = ["exempt_from_colorado_retail_delivery_fee", "exempt_from_minnesota_retail_delivery_fee", "tax_billing"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the SelfConfig interface.
 */
export function instanceOfSelfConfig(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function SelfConfigFromJSON(json: any): SelfConfig {
    return SelfConfigFromJSONTyped(json, false);
}

export function SelfConfigFromJSONTyped(json: any, ignoreDiscriminator: boolean): SelfConfig {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'exempt_from_colorado_retail_delivery_fee': !exists(json, 'exempt_from_colorado_retail_delivery_fee') ? undefined : json['exempt_from_colorado_retail_delivery_fee'],
        'exempt_from_minnesota_retail_delivery_fee': !exists(json, 'exempt_from_minnesota_retail_delivery_fee') ? undefined : json['exempt_from_minnesota_retail_delivery_fee'],
        'tax_billing': !exists(json, 'tax_billing') ? undefined : json['tax_billing'],
    };
}

export function SelfConfigToJSON(value?: SelfConfig | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'exempt_from_colorado_retail_delivery_fee': value.exempt_from_colorado_retail_delivery_fee,
        'exempt_from_minnesota_retail_delivery_fee': value.exempt_from_minnesota_retail_delivery_fee,
        'tax_billing': value.tax_billing,
    };
}

