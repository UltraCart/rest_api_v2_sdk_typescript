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
    OrderPaymentTransaction,
    OrderPaymentTransactionFromJSON,
    OrderPaymentTransactionFromJSONTyped,
    OrderPaymentTransactionToJSON,
} from './OrderPaymentTransaction';
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
 * @interface OrderProcessPaymentResponse
 */
export interface OrderProcessPaymentResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof OrderProcessPaymentResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof OrderProcessPaymentResponse
     */
    metadata?: ResponseMetadata;
    /**
     * 
     * @type {OrderPaymentTransaction}
     * @memberof OrderProcessPaymentResponse
     */
    payment_transaction?: OrderPaymentTransaction;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof OrderProcessPaymentResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof OrderProcessPaymentResponse
     */
    warning?: Warning;
}



/**
 * Check if a given object implements the OrderProcessPaymentResponse interface.
 */
export function instanceOfOrderProcessPaymentResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderProcessPaymentResponseFromJSON(json: any): OrderProcessPaymentResponse {
    return OrderProcessPaymentResponseFromJSONTyped(json, false);
}

export function OrderProcessPaymentResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderProcessPaymentResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'payment_transaction': !exists(json, 'payment_transaction') ? undefined : OrderPaymentTransactionFromJSON(json['payment_transaction']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function OrderProcessPaymentResponseToJSON(value?: OrderProcessPaymentResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'payment_transaction': OrderPaymentTransactionToJSON(value.payment_transaction),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

