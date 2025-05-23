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
 * @interface CustomerPrivacy
 */
export interface CustomerPrivacy {
    /**
     * Last update date
     * @type {string}
     * @memberof CustomerPrivacy
     */
    last_update_dts?: string;
    /**
     * The customer has opted in to marketing
     * @type {boolean}
     * @memberof CustomerPrivacy
     */
    marketing?: boolean;
    /**
     * The customer has opted in to preference tracking
     * @type {boolean}
     * @memberof CustomerPrivacy
     */
    preference?: boolean;
    /**
     * The customer has opted in to statistics collection
     * @type {boolean}
     * @memberof CustomerPrivacy
     */
    statistics?: boolean;
}



/**
 * Check if a given object implements the CustomerPrivacy interface.
 */
export function instanceOfCustomerPrivacy(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerPrivacyFromJSON(json: any): CustomerPrivacy {
    return CustomerPrivacyFromJSONTyped(json, false);
}

export function CustomerPrivacyFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerPrivacy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'last_update_dts': !exists(json, 'last_update_dts') ? undefined : json['last_update_dts'],
        'marketing': !exists(json, 'marketing') ? undefined : json['marketing'],
        'preference': !exists(json, 'preference') ? undefined : json['preference'],
        'statistics': !exists(json, 'statistics') ? undefined : json['statistics'],
    };
}

export function CustomerPrivacyToJSON(value?: CustomerPrivacy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'last_update_dts': value.last_update_dts,
        'marketing': value.marketing,
        'preference': value.preference,
        'statistics': value.statistics,
    };
}

