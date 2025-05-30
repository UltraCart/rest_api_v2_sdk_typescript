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
 * @interface AccountsReceivableRetryStatRevenue
 */
export interface AccountsReceivableRetryStatRevenue {
    /**
     * 
     * @type {string}
     * @memberof AccountsReceivableRetryStatRevenue
     */
    label?: string;
    /**
     * 
     * @type {number}
     * @memberof AccountsReceivableRetryStatRevenue
     */
    revenue?: number;
}



/**
 * Check if a given object implements the AccountsReceivableRetryStatRevenue interface.
 */
export function instanceOfAccountsReceivableRetryStatRevenue(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountsReceivableRetryStatRevenueFromJSON(json: any): AccountsReceivableRetryStatRevenue {
    return AccountsReceivableRetryStatRevenueFromJSONTyped(json, false);
}

export function AccountsReceivableRetryStatRevenueFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountsReceivableRetryStatRevenue {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'label': !exists(json, 'label') ? undefined : json['label'],
        'revenue': !exists(json, 'revenue') ? undefined : json['revenue'],
    };
}

export function AccountsReceivableRetryStatRevenueToJSON(value?: AccountsReceivableRetryStatRevenue | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'label': value.label,
        'revenue': value.revenue,
    };
}

