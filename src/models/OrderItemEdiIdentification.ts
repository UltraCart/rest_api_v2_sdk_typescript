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
 * @interface OrderItemEdiIdentification
 */
export interface OrderItemEdiIdentification {
    /**
     * Identification value
     * @type {string}
     * @memberof OrderItemEdiIdentification
     */
    identification?: string;
    /**
     * Quantity associated with this identifier
     * @type {number}
     * @memberof OrderItemEdiIdentification
     */
    quantity?: number;
}



/**
 * Check if a given object implements the OrderItemEdiIdentification interface.
 */
export function instanceOfOrderItemEdiIdentification(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderItemEdiIdentificationFromJSON(json: any): OrderItemEdiIdentification {
    return OrderItemEdiIdentificationFromJSONTyped(json, false);
}

export function OrderItemEdiIdentificationFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderItemEdiIdentification {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'identification': !exists(json, 'identification') ? undefined : json['identification'],
        'quantity': !exists(json, 'quantity') ? undefined : json['quantity'],
    };
}

export function OrderItemEdiIdentificationToJSON(value?: OrderItemEdiIdentification | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'identification': value.identification,
        'quantity': value.quantity,
    };
}

