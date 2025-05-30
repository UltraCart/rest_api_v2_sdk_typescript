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
 * @interface OrderPaymentPurchaseOrder
 */
export interface OrderPaymentPurchaseOrder {
    /**
     * Purchase order number
     * @type {string}
     * @memberof OrderPaymentPurchaseOrder
     */
    purchase_order_number?: string;
}



/**
 * Check if a given object implements the OrderPaymentPurchaseOrder interface.
 */
export function instanceOfOrderPaymentPurchaseOrder(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderPaymentPurchaseOrderFromJSON(json: any): OrderPaymentPurchaseOrder {
    return OrderPaymentPurchaseOrderFromJSONTyped(json, false);
}

export function OrderPaymentPurchaseOrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderPaymentPurchaseOrder {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'purchase_order_number': !exists(json, 'purchase_order_number') ? undefined : json['purchase_order_number'],
    };
}

export function OrderPaymentPurchaseOrderToJSON(value?: OrderPaymentPurchaseOrder | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'purchase_order_number': value.purchase_order_number,
    };
}

