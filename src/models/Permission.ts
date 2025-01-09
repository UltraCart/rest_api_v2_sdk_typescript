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
 * @interface Permission
 */
export interface Permission {
    /**
     * A group for this permission.  This name is only used for visual grouping within interfaces.
     * @type {string}
     * @memberof Permission
     */
    permission_group?: string;
    /**
     * The name of this permission.
     * @type {string}
     * @memberof Permission
     */
    permission_Name?: string;
    /**
     * True if this user has this permission.
     * @type {boolean}
     * @memberof Permission
     */
    selected?: boolean;
}

export function PermissionFromJSON(json: any): Permission {
    return PermissionFromJSONTyped(json, false);
}

export function PermissionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Permission {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'permission_group': !exists(json, 'permission_group') ? undefined : json['permission_group'],
        'permission_Name': !exists(json, 'permission_Name') ? undefined : json['permission_Name'],
        'selected': !exists(json, 'selected') ? undefined : json['selected'],
    };
}

export function PermissionToJSON(value?: Permission | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'permission_group': value.permission_group,
        'permission_Name': value.permission_Name,
        'selected': value.selected,
    };
}

