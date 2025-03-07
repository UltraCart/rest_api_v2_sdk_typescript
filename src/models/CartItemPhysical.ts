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
import {
    Distance,
    DistanceFromJSON,
    DistanceFromJSONTyped,
    DistanceToJSON,
} from './Distance';
import {
    Weight,
    WeightFromJSON,
    WeightFromJSONTyped,
    WeightToJSON,
} from './Weight';

/**
 * 
 * @export
 * @interface CartItemPhysical
 */
export interface CartItemPhysical {
    /**
     * 
     * @type {Distance}
     * @memberof CartItemPhysical
     */
    height?: Distance;
    /**
     * 
     * @type {Distance}
     * @memberof CartItemPhysical
     */
    length?: Distance;
    /**
     * 
     * @type {Weight}
     * @memberof CartItemPhysical
     */
    weight?: Weight;
    /**
     * 
     * @type {Distance}
     * @memberof CartItemPhysical
     */
    width?: Distance;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof CartItemPhysical)[] = ["height", "length", "weight", "width"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the CartItemPhysical interface.
 */
export function instanceOfCartItemPhysical(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CartItemPhysicalFromJSON(json: any): CartItemPhysical {
    return CartItemPhysicalFromJSONTyped(json, false);
}

export function CartItemPhysicalFromJSONTyped(json: any, ignoreDiscriminator: boolean): CartItemPhysical {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'height': !exists(json, 'height') ? undefined : DistanceFromJSON(json['height']),
        'length': !exists(json, 'length') ? undefined : DistanceFromJSON(json['length']),
        'weight': !exists(json, 'weight') ? undefined : WeightFromJSON(json['weight']),
        'width': !exists(json, 'width') ? undefined : DistanceFromJSON(json['width']),
    };
}

export function CartItemPhysicalToJSON(value?: CartItemPhysical | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'height': DistanceToJSON(value.height),
        'length': DistanceToJSON(value.length),
        'weight': WeightToJSON(value.weight),
        'width': DistanceToJSON(value.width),
    };
}

