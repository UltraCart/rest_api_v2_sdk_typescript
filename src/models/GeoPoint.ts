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
 * @interface GeoPoint
 */
export interface GeoPoint {
    /**
     * 
     * @type {number}
     * @memberof GeoPoint
     */
    lat?: number;
    /**
     * 
     * @type {number}
     * @memberof GeoPoint
     */
    lon?: number;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof GeoPoint)[] = ["lat", "lon"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the GeoPoint interface.
 */
export function instanceOfGeoPoint(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GeoPointFromJSON(json: any): GeoPoint {
    return GeoPointFromJSONTyped(json, false);
}

export function GeoPointFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeoPoint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'lat': !exists(json, 'lat') ? undefined : json['lat'],
        'lon': !exists(json, 'lon') ? undefined : json['lon'],
    };
}

export function GeoPointToJSON(value?: GeoPoint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'lat': value.lat,
        'lon': value.lon,
    };
}

