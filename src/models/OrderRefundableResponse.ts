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
    OrderReason,
    OrderReasonFromJSON,
    OrderReasonFromJSONTyped,
    OrderReasonToJSON,
} from './OrderReason';
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
 * @interface OrderRefundableResponse
 */
export interface OrderRefundableResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof OrderRefundableResponse
     */
    error?: ModelError;
    /**
     * True if the item level refund reason is required
     * @type {boolean}
     * @memberof OrderRefundableResponse
     */
    item_level_refund_reason_required?: boolean;
    /**
     * Reason codes available at the item level.
     * @type {Array<OrderReason>}
     * @memberof OrderRefundableResponse
     */
    item_level_refund_reasons?: Array<OrderReason>;
    /**
     * Return codes available at the item level.
     * @type {Array<OrderReason>}
     * @memberof OrderRefundableResponse
     */
    item_level_return_reasons?: Array<OrderReason>;
    /**
     * If true, this refund will have to be manually done because of additional charges with the virtual terminal were made
     * @type {boolean}
     * @memberof OrderRefundableResponse
     */
    manual_because_multiple_charges?: boolean;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof OrderRefundableResponse
     */
    metadata?: ResponseMetadata;
    /**
     * True if the order level refund reason is required
     * @type {boolean}
     * @memberof OrderRefundableResponse
     */
    order_level_refund_reason_required?: boolean;
    /**
     * Reason codes available at the order level.
     * @type {Array<OrderReason>}
     * @memberof OrderRefundableResponse
     */
    order_level_refund_reasons?: Array<OrderReason>;
    /**
     * True if the order level reject reason is required
     * @type {boolean}
     * @memberof OrderRefundableResponse
     */
    order_level_reject_reason_required?: boolean;
    /**
     * Reject codes available at the order level.
     * @type {Array<OrderReason>}
     * @memberof OrderRefundableResponse
     */
    order_level_reject_reasons?: Array<OrderReason>;
    /**
     * Whether the order is refundable or not.  Null should be interpreted as false.
     * @type {boolean}
     * @memberof OrderRefundableResponse
     */
    refundable?: boolean;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof OrderRefundableResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof OrderRefundableResponse
     */
    warning?: Warning;
}



/**
 * Check if a given object implements the OrderRefundableResponse interface.
 */
export function instanceOfOrderRefundableResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderRefundableResponseFromJSON(json: any): OrderRefundableResponse {
    return OrderRefundableResponseFromJSONTyped(json, false);
}

export function OrderRefundableResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderRefundableResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'item_level_refund_reason_required': !exists(json, 'item_level_refund_reason_required') ? undefined : json['item_level_refund_reason_required'],
        'item_level_refund_reasons': !exists(json, 'item_level_refund_reasons') ? undefined : ((json['item_level_refund_reasons'] as Array<any>).map(OrderReasonFromJSON)),
        'item_level_return_reasons': !exists(json, 'item_level_return_reasons') ? undefined : ((json['item_level_return_reasons'] as Array<any>).map(OrderReasonFromJSON)),
        'manual_because_multiple_charges': !exists(json, 'manual_because_multiple_charges') ? undefined : json['manual_because_multiple_charges'],
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'order_level_refund_reason_required': !exists(json, 'order_level_refund_reason_required') ? undefined : json['order_level_refund_reason_required'],
        'order_level_refund_reasons': !exists(json, 'order_level_refund_reasons') ? undefined : ((json['order_level_refund_reasons'] as Array<any>).map(OrderReasonFromJSON)),
        'order_level_reject_reason_required': !exists(json, 'order_level_reject_reason_required') ? undefined : json['order_level_reject_reason_required'],
        'order_level_reject_reasons': !exists(json, 'order_level_reject_reasons') ? undefined : ((json['order_level_reject_reasons'] as Array<any>).map(OrderReasonFromJSON)),
        'refundable': !exists(json, 'refundable') ? undefined : json['refundable'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function OrderRefundableResponseToJSON(value?: OrderRefundableResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'item_level_refund_reason_required': value.item_level_refund_reason_required,
        'item_level_refund_reasons': value.item_level_refund_reasons === undefined ? undefined : ((value.item_level_refund_reasons as Array<any>).map(OrderReasonToJSON)),
        'item_level_return_reasons': value.item_level_return_reasons === undefined ? undefined : ((value.item_level_return_reasons as Array<any>).map(OrderReasonToJSON)),
        'manual_because_multiple_charges': value.manual_because_multiple_charges,
        'metadata': ResponseMetadataToJSON(value.metadata),
        'order_level_refund_reason_required': value.order_level_refund_reason_required,
        'order_level_refund_reasons': value.order_level_refund_reasons === undefined ? undefined : ((value.order_level_refund_reasons as Array<any>).map(OrderReasonToJSON)),
        'order_level_reject_reason_required': value.order_level_reject_reason_required,
        'order_level_reject_reasons': value.order_level_reject_reasons === undefined ? undefined : ((value.order_level_reject_reasons as Array<any>).map(OrderReasonToJSON)),
        'refundable': value.refundable,
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

