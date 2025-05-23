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
 * @interface LinkedAccount
 */
export interface LinkedAccount {
    /**
     * The company name of this linked account.
     * @type {string}
     * @memberof LinkedAccount
     */
    company?: string;
    /**
     * A merchant id that is linked to this account.
     * @type {string}
     * @memberof LinkedAccount
     */
    merchant_id?: string;
    /**
     * If true, this user configuration (permissions, notifications, everything) is cascaded to this linked account.
     * @type {boolean}
     * @memberof LinkedAccount
     */
    selected?: boolean;
}



/**
 * Check if a given object implements the LinkedAccount interface.
 */
export function instanceOfLinkedAccount(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function LinkedAccountFromJSON(json: any): LinkedAccount {
    return LinkedAccountFromJSONTyped(json, false);
}

export function LinkedAccountFromJSONTyped(json: any, ignoreDiscriminator: boolean): LinkedAccount {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'company': !exists(json, 'company') ? undefined : json['company'],
        'merchant_id': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'selected': !exists(json, 'selected') ? undefined : json['selected'],
    };
}

export function LinkedAccountToJSON(value?: LinkedAccount | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'company': value.company,
        'merchant_id': value.merchant_id,
        'selected': value.selected,
    };
}

