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
 * @interface FulfillmentShipment
 */
export interface FulfillmentShipment {
    /**
     * Fees charged by the fulfillment company other than the shipping cost to process the order.
     * @type {number}
     * @memberof FulfillmentShipment
     */
    fulfillment_fee?: number;
    /**
     * Order ID that was shipped
     * @type {string}
     * @memberof FulfillmentShipment
     */
    order_id?: string;
    /**
     * The cost of the packaging used to sent this shipment
     * @type {number}
     * @memberof FulfillmentShipment
     */
    package_cost?: number;
    /**
     * The actual total cost of shipping this order
     * @type {number}
     * @memberof FulfillmentShipment
     */
    shipping_cost?: number;
    /**
     * Tracking numbers associated with the shipment
     * @type {Array<string>}
     * @memberof FulfillmentShipment
     */
    tracking_numbers?: Array<string>;
}



/**
 * Check if a given object implements the FulfillmentShipment interface.
 */
export function instanceOfFulfillmentShipment(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function FulfillmentShipmentFromJSON(json: any): FulfillmentShipment {
    return FulfillmentShipmentFromJSONTyped(json, false);
}

export function FulfillmentShipmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): FulfillmentShipment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'fulfillment_fee': !exists(json, 'fulfillment_fee') ? undefined : json['fulfillment_fee'],
        'order_id': !exists(json, 'order_id') ? undefined : json['order_id'],
        'package_cost': !exists(json, 'package_cost') ? undefined : json['package_cost'],
        'shipping_cost': !exists(json, 'shipping_cost') ? undefined : json['shipping_cost'],
        'tracking_numbers': !exists(json, 'tracking_numbers') ? undefined : json['tracking_numbers'],
    };
}

export function FulfillmentShipmentToJSON(value?: FulfillmentShipment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'fulfillment_fee': value.fulfillment_fee,
        'order_id': value.order_id,
        'package_cost': value.package_cost,
        'shipping_cost': value.shipping_cost,
        'tracking_numbers': value.tracking_numbers,
    };
}

