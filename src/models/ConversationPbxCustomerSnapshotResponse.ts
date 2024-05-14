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
    AutoOrder,
    AutoOrderFromJSON,
    AutoOrderFromJSONTyped,
    AutoOrderToJSON,
} from './AutoOrder';
import {
    Customer,
    CustomerFromJSON,
    CustomerFromJSONTyped,
    CustomerToJSON,
} from './Customer';
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
 * @interface ConversationPbxCustomerSnapshotResponse
 */
export interface ConversationPbxCustomerSnapshotResponse {
    /**
     * 
     * @type {Array<AutoOrder>}
     * @memberof ConversationPbxCustomerSnapshotResponse
     */
    auto_orders?: Array<AutoOrder>;
    /**
     * 
     * @type {Array<Customer>}
     * @memberof ConversationPbxCustomerSnapshotResponse
     */
    customers?: Array<Customer>;
    /**
     * 
     * @type {ModelError}
     * @memberof ConversationPbxCustomerSnapshotResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ConversationPbxCustomerSnapshotResponse
     */
    metadata?: ResponseMetadata;
    /**
     * 
     * @type {Array<Order>}
     * @memberof ConversationPbxCustomerSnapshotResponse
     */
    orders?: Array<Order>;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ConversationPbxCustomerSnapshotResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof ConversationPbxCustomerSnapshotResponse
     */
    warning?: Warning;
}

export function ConversationPbxCustomerSnapshotResponseFromJSON(json: any): ConversationPbxCustomerSnapshotResponse {
    return ConversationPbxCustomerSnapshotResponseFromJSONTyped(json, false);
}

export function ConversationPbxCustomerSnapshotResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationPbxCustomerSnapshotResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'auto_orders': !exists(json, 'auto_orders') ? undefined : ((json['auto_orders'] as Array<any>).map(AutoOrderFromJSON)),
        'customers': !exists(json, 'customers') ? undefined : ((json['customers'] as Array<any>).map(CustomerFromJSON)),
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'orders': !exists(json, 'orders') ? undefined : ((json['orders'] as Array<any>).map(OrderFromJSON)),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ConversationPbxCustomerSnapshotResponseToJSON(value?: ConversationPbxCustomerSnapshotResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'auto_orders': value.auto_orders === undefined ? undefined : ((value.auto_orders as Array<any>).map(AutoOrderToJSON)),
        'customers': value.customers === undefined ? undefined : ((value.customers as Array<any>).map(CustomerToJSON)),
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'orders': value.orders === undefined ? undefined : ((value.orders as Array<any>).map(OrderToJSON)),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}
