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
 * @interface AutoOrderManagement
 */
export interface AutoOrderManagement {
    /**
     * URL where the customer can go to update their billing information.
     * @type {string}
     * @memberof AutoOrderManagement
     */
    update_billing_url?: string;
}

export function AutoOrderManagementFromJSON(json: any): AutoOrderManagement {
    return AutoOrderManagementFromJSONTyped(json, false);
}

export function AutoOrderManagementFromJSONTyped(json: any, ignoreDiscriminator: boolean): AutoOrderManagement {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'update_billing_url': !exists(json, 'update_billing_url') ? undefined : json['update_billing_url'],
    };
}

export function AutoOrderManagementToJSON(value?: AutoOrderManagement | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'update_billing_url': value.update_billing_url,
    };
}
