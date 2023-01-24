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
 * @interface ItemShippingPackageRequirement
 */
export interface ItemShippingPackageRequirement {
    /**
     * Package name
     * @type {string}
     * @memberof ItemShippingPackageRequirement
     */
    package_name?: string;
    /**
     * Package object identifier
     * @type {number}
     * @memberof ItemShippingPackageRequirement
     */
    package_oid?: number;
}

export function ItemShippingPackageRequirementFromJSON(json: any): ItemShippingPackageRequirement {
    return ItemShippingPackageRequirementFromJSONTyped(json, false);
}

export function ItemShippingPackageRequirementFromJSONTyped(json: any, ignoreDiscriminator: boolean): ItemShippingPackageRequirement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'package_name': !exists(json, 'package_name') ? undefined : json['package_name'],
        'package_oid': !exists(json, 'package_oid') ? undefined : json['package_oid'],
    };
}

export function ItemShippingPackageRequirementToJSON(value?: ItemShippingPackageRequirement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'package_name': value.package_name,
        'package_oid': value.package_oid,
    };
}
