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
 * @interface PointOfSaleLocation
 */
export interface PointOfSaleLocation {
    /**
     * Address line 2
     * @type {string}
     * @memberof PointOfSaleLocation
     */
    adddress2?: string;
    /**
     * Address line 1
     * @type {string}
     * @memberof PointOfSaleLocation
     */
    address1?: string;
    /**
     * City
     * @type {string}
     * @memberof PointOfSaleLocation
     */
    city?: string;
    /**
     * Country
     * @type {string}
     * @memberof PointOfSaleLocation
     */
    country?: string;
    /**
     * The distribution center code where inventory is reduced from for this sale.
     * @type {string}
     * @memberof PointOfSaleLocation
     */
    distribution_center_code?: string;
    /**
     * External Id useful for syncing with a remote filesystem, this may be an MD5 hash or whatever suits your needs.
     * @type {string}
     * @memberof PointOfSaleLocation
     */
    external_id?: string;
    /**
     * Merchant ID that owns this location
     * @type {string}
     * @memberof PointOfSaleLocation
     */
    merchant_id?: string;
    /**
     * Object identifier of the point of sale location.
     * @type {number}
     * @memberof PointOfSaleLocation
     */
    pos_location_oid?: number;
    /**
     * Postal code
     * @type {string}
     * @memberof PointOfSaleLocation
     */
    postal_code?: string;
    /**
     * State/province
     * @type {string}
     * @memberof PointOfSaleLocation
     */
    state_province?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof PointOfSaleLocation)[] = ["adddress2", "address1", "city", "country", "distribution_center_code", "external_id", "merchant_id", "pos_location_oid", "postal_code", "state_province"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the PointOfSaleLocation interface.
 */
export function instanceOfPointOfSaleLocation(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function PointOfSaleLocationFromJSON(json: any): PointOfSaleLocation {
    return PointOfSaleLocationFromJSONTyped(json, false);
}

export function PointOfSaleLocationFromJSONTyped(json: any, ignoreDiscriminator: boolean): PointOfSaleLocation {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'adddress2': !exists(json, 'adddress2') ? undefined : json['adddress2'],
        'address1': !exists(json, 'address1') ? undefined : json['address1'],
        'city': !exists(json, 'city') ? undefined : json['city'],
        'country': !exists(json, 'country') ? undefined : json['country'],
        'distribution_center_code': !exists(json, 'distribution_center_code') ? undefined : json['distribution_center_code'],
        'external_id': !exists(json, 'external_id') ? undefined : json['external_id'],
        'merchant_id': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'pos_location_oid': !exists(json, 'pos_location_oid') ? undefined : json['pos_location_oid'],
        'postal_code': !exists(json, 'postal_code') ? undefined : json['postal_code'],
        'state_province': !exists(json, 'state_province') ? undefined : json['state_province'],
    };
}

export function PointOfSaleLocationToJSON(value?: PointOfSaleLocation | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'adddress2': value.adddress2,
        'address1': value.address1,
        'city': value.city,
        'country': value.country,
        'distribution_center_code': value.distribution_center_code,
        'external_id': value.external_id,
        'merchant_id': value.merchant_id,
        'pos_location_oid': value.pos_location_oid,
        'postal_code': value.postal_code,
        'state_province': value.state_province,
    };
}

