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
    PointOfSaleLocation,
    PointOfSaleLocationFromJSON,
    PointOfSaleLocationFromJSONTyped,
    PointOfSaleLocationToJSON,
} from './PointOfSaleLocation';
import {
    PointOfSaleReader,
    PointOfSaleReaderFromJSON,
    PointOfSaleReaderFromJSONTyped,
    PointOfSaleReaderToJSON,
} from './PointOfSaleReader';
import {
    PointOfSaleRegister,
    PointOfSaleRegisterFromJSON,
    PointOfSaleRegisterFromJSONTyped,
    PointOfSaleRegisterToJSON,
} from './PointOfSaleRegister';

/**
 * 
 * @export
 * @interface OrderPointOfSale
 */
export interface OrderPointOfSale {
    /**
     * 
     * @type {PointOfSaleLocation}
     * @memberof OrderPointOfSale
     */
    location?: PointOfSaleLocation;
    /**
     * 
     * @type {PointOfSaleReader}
     * @memberof OrderPointOfSale
     */
    reader?: PointOfSaleReader;
    /**
     * 
     * @type {PointOfSaleRegister}
     * @memberof OrderPointOfSale
     */
    register?: PointOfSaleRegister;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof OrderPointOfSale)[] = ["location", "reader", "register"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the OrderPointOfSale interface.
 */
export function instanceOfOrderPointOfSale(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderPointOfSaleFromJSON(json: any): OrderPointOfSale {
    return OrderPointOfSaleFromJSONTyped(json, false);
}

export function OrderPointOfSaleFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderPointOfSale {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'location': !exists(json, 'location') ? undefined : PointOfSaleLocationFromJSON(json['location']),
        'reader': !exists(json, 'reader') ? undefined : PointOfSaleReaderFromJSON(json['reader']),
        'register': !exists(json, 'register') ? undefined : PointOfSaleRegisterFromJSON(json['register']),
    };
}

export function OrderPointOfSaleToJSON(value?: OrderPointOfSale | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'location': PointOfSaleLocationToJSON(value.location),
        'reader': PointOfSaleReaderToJSON(value.reader),
        'register': PointOfSaleRegisterToJSON(value.register),
    };
}

