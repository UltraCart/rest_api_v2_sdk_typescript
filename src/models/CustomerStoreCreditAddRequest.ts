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
 * @interface CustomerStoreCreditAddRequest
 */
export interface CustomerStoreCreditAddRequest {
    /**
     * Amount of store credit
     * @type {number}
     * @memberof CustomerStoreCreditAddRequest
     */
    amount?: number;
    /**
     * Description or reason for the store credit
     * @type {string}
     * @memberof CustomerStoreCreditAddRequest
     */
    description?: string;
    /**
     * Optional days for store credit to expire or zero for no expiration
     * @type {number}
     * @memberof CustomerStoreCreditAddRequest
     */
    expiration_days?: number;
    /**
     * Optional days for store credit to vesting or zero for immediately available
     * @type {number}
     * @memberof CustomerStoreCreditAddRequest
     */
    vesting_days?: number;
}



/**
 * Check if a given object implements the CustomerStoreCreditAddRequest interface.
 */
export function instanceOfCustomerStoreCreditAddRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerStoreCreditAddRequestFromJSON(json: any): CustomerStoreCreditAddRequest {
    return CustomerStoreCreditAddRequestFromJSONTyped(json, false);
}

export function CustomerStoreCreditAddRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerStoreCreditAddRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'amount': !exists(json, 'amount') ? undefined : json['amount'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'expiration_days': !exists(json, 'expiration_days') ? undefined : json['expiration_days'],
        'vesting_days': !exists(json, 'vesting_days') ? undefined : json['vesting_days'],
    };
}

export function CustomerStoreCreditAddRequestToJSON(value?: CustomerStoreCreditAddRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'amount': value.amount,
        'description': value.description,
        'expiration_days': value.expiration_days,
        'vesting_days': value.vesting_days,
    };
}

