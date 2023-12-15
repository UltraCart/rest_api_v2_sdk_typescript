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
    Order,
    OrderFromJSON,
    OrderFromJSONTyped,
    OrderToJSON,
} from './Order';

/**
 * 
 * @export
 * @interface OrderValidationRequest
 */
export interface OrderValidationRequest {
    /**
     * Checks to perform
     * @type {Array<string>}
     * @memberof OrderValidationRequest
     */
    checks?: Array<string>;
    /**
     * 
     * @type {Order}
     * @memberof OrderValidationRequest
     */
    order?: Order;
}

export function OrderValidationRequestFromJSON(json: any): OrderValidationRequest {
    return OrderValidationRequestFromJSONTyped(json, false);
}

export function OrderValidationRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderValidationRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'checks': !exists(json, 'checks') ? undefined : json['checks'],
        'order': !exists(json, 'order') ? undefined : OrderFromJSON(json['order']),
    };
}

export function OrderValidationRequestToJSON(value?: OrderValidationRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'checks': value.checks,
        'order': OrderToJSON(value.order),
    };
}

