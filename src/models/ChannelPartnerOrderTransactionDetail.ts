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
 * @interface ChannelPartnerOrderTransactionDetail
 */
export interface ChannelPartnerOrderTransactionDetail {
    /**
     * The name of the item option.
     * @type {string}
     * @memberof ChannelPartnerOrderTransactionDetail
     */
    name?: string;
    /**
     * The value of the item option.
     * @type {string}
     * @memberof ChannelPartnerOrderTransactionDetail
     */
    value?: string;
}



/**
 * Check if a given object implements the ChannelPartnerOrderTransactionDetail interface.
 */
export function instanceOfChannelPartnerOrderTransactionDetail(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelPartnerOrderTransactionDetailFromJSON(json: any): ChannelPartnerOrderTransactionDetail {
    return ChannelPartnerOrderTransactionDetailFromJSONTyped(json, false);
}

export function ChannelPartnerOrderTransactionDetailFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelPartnerOrderTransactionDetail {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'name': !exists(json, 'name') ? undefined : json['name'],
        'value': !exists(json, 'value') ? undefined : json['value'],
    };
}

export function ChannelPartnerOrderTransactionDetailToJSON(value?: ChannelPartnerOrderTransactionDetail | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'name': value.name,
        'value': value.value,
    };
}

