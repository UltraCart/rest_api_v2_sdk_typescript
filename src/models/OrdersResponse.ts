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
import {
    ModelError,
    ModelErrorFromJSON,
    ModelErrorFromJSONTyped,
    ModelErrorToJSON,
} from './ModelError';
import {
    Order,
    OrderFromJSON,
    OrderFromJSONTyped,
    OrderToJSON,
} from './Order';
import {
    ResponseMetadata,
    ResponseMetadataFromJSON,
    ResponseMetadataFromJSONTyped,
    ResponseMetadataToJSON,
} from './ResponseMetadata';
import {
    Warning,
    WarningFromJSON,
    WarningFromJSONTyped,
    WarningToJSON,
} from './Warning';

/**
 * 
 * @export
 * @interface OrdersResponse
 */
export interface OrdersResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof OrdersResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof OrdersResponse
     */
    metadata?: ResponseMetadata;
    /**
     * orders
     * @type {Array<Order>}
     * @memberof OrdersResponse
     */
    orders?: Array<Order>;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof OrdersResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof OrdersResponse
     */
    warning?: Warning;
}

export function OrdersResponseFromJSON(json: any): OrdersResponse {
    return OrdersResponseFromJSONTyped(json, false);
}

export function OrdersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrdersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'orders': !exists(json, 'orders') ? undefined : ((json['orders'] as Array<any>).map(OrderFromJSON)),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function OrdersResponseToJSON(value?: OrdersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'orders': value.orders === undefined ? undefined : ((value.orders as Array<any>).map(OrderToJSON)),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}
