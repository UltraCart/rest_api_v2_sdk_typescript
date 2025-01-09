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
 * @interface OrderByTokenQuery
 */
export interface OrderByTokenQuery {
    /**
     * Order Token
     * @type {string}
     * @memberof OrderByTokenQuery
     */
    order_token?: string;
}

export function OrderByTokenQueryFromJSON(json: any): OrderByTokenQuery {
    return OrderByTokenQueryFromJSONTyped(json, false);
}

export function OrderByTokenQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderByTokenQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'order_token': !exists(json, 'order_token') ? undefined : json['order_token'],
    };
}

export function OrderByTokenQueryToJSON(value?: OrderByTokenQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'order_token': value.order_token,
    };
}

