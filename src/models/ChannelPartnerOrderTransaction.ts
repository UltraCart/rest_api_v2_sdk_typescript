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
    ChannelPartnerOrderTransactionDetail,
    ChannelPartnerOrderTransactionDetailFromJSON,
    ChannelPartnerOrderTransactionDetailFromJSONTyped,
    ChannelPartnerOrderTransactionDetailToJSON,
} from './ChannelPartnerOrderTransactionDetail';

/**
 * 
 * @export
 * @interface ChannelPartnerOrderTransaction
 */
export interface ChannelPartnerOrderTransaction {
    /**
     * Transaction gateway details
     * @type {Array<ChannelPartnerOrderTransactionDetail>}
     * @memberof ChannelPartnerOrderTransaction
     */
    details?: Array<ChannelPartnerOrderTransactionDetail>;
    /**
     * True if the transaction was successfully charged
     * @type {boolean}
     * @memberof ChannelPartnerOrderTransaction
     */
    successful?: boolean;
}

export function ChannelPartnerOrderTransactionFromJSON(json: any): ChannelPartnerOrderTransaction {
    return ChannelPartnerOrderTransactionFromJSONTyped(json, false);
}

export function ChannelPartnerOrderTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelPartnerOrderTransaction {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'details': !exists(json, 'details') ? undefined : ((json['details'] as Array<any>).map(ChannelPartnerOrderTransactionDetailFromJSON)),
        'successful': !exists(json, 'successful') ? undefined : json['successful'],
    };
}

export function ChannelPartnerOrderTransactionToJSON(value?: ChannelPartnerOrderTransaction | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'details': value.details === undefined ? undefined : ((value.details as Array<any>).map(ChannelPartnerOrderTransactionDetailToJSON)),
        'successful': value.successful,
    };
}

