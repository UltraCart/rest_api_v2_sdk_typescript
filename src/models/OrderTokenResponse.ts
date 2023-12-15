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
 * @interface OrderTokenResponse
 */
export interface OrderTokenResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof OrderTokenResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof OrderTokenResponse
     */
    metadata?: ResponseMetadata;
    /**
     * An order token that securely represents an order id
     * @type {string}
     * @memberof OrderTokenResponse
     */
    order_token?: string;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof OrderTokenResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof OrderTokenResponse
     */
    warning?: Warning;
}

export function OrderTokenResponseFromJSON(json: any): OrderTokenResponse {
    return OrderTokenResponseFromJSONTyped(json, false);
}

export function OrderTokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderTokenResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'order_token': !exists(json, 'order_token') ? undefined : json['order_token'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function OrderTokenResponseToJSON(value?: OrderTokenResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'order_token': value.order_token,
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

