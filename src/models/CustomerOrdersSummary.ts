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
 * @interface CustomerOrdersSummary
 */
export interface CustomerOrdersSummary {
    /**
     * First order date
     * @type {string}
     * @memberof CustomerOrdersSummary
     */
    first_order_dts?: string;
    /**
     * Last order date
     * @type {string}
     * @memberof CustomerOrdersSummary
     */
    last_order_dts?: string;
    /**
     * Total number of orders
     * @type {number}
     * @memberof CustomerOrdersSummary
     */
    order_count?: number;
    /**
     * Total amount associated with the orders
     * @type {number}
     * @memberof CustomerOrdersSummary
     */
    total?: number;
}



/**
 * Check if a given object implements the CustomerOrdersSummary interface.
 */
export function instanceOfCustomerOrdersSummary(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerOrdersSummaryFromJSON(json: any): CustomerOrdersSummary {
    return CustomerOrdersSummaryFromJSONTyped(json, false);
}

export function CustomerOrdersSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerOrdersSummary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'first_order_dts': !exists(json, 'first_order_dts') ? undefined : json['first_order_dts'],
        'last_order_dts': !exists(json, 'last_order_dts') ? undefined : json['last_order_dts'],
        'order_count': !exists(json, 'order_count') ? undefined : json['order_count'],
        'total': !exists(json, 'total') ? undefined : json['total'],
    };
}

export function CustomerOrdersSummaryToJSON(value?: CustomerOrdersSummary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'first_order_dts': value.first_order_dts,
        'last_order_dts': value.last_order_dts,
        'order_count': value.order_count,
        'total': value.total,
    };
}

