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
    ConversationSummary,
    ConversationSummaryFromJSON,
    ConversationSummaryFromJSONTyped,
    ConversationSummaryToJSON,
} from './ConversationSummary';

/**
 * 
 * @export
 * @interface ConversationSearchResponse
 */
export interface ConversationSearchResponse {
    /**
     * 
     * @type {number}
     * @memberof ConversationSearchResponse
     */
    range_begin?: number;
    /**
     * 
     * @type {number}
     * @memberof ConversationSearchResponse
     */
    range_end?: number;
    /**
     * 
     * @type {Array<ConversationSummary>}
     * @memberof ConversationSearchResponse
     */
    records?: Array<ConversationSummary>;
    /**
     * 
     * @type {number}
     * @memberof ConversationSearchResponse
     */
    total?: number;
}



/**
 * Check if a given object implements the ConversationSearchResponse interface.
 */
export function instanceOfConversationSearchResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConversationSearchResponseFromJSON(json: any): ConversationSearchResponse {
    return ConversationSearchResponseFromJSONTyped(json, false);
}

export function ConversationSearchResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationSearchResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'range_begin': !exists(json, 'range_begin') ? undefined : json['range_begin'],
        'range_end': !exists(json, 'range_end') ? undefined : json['range_end'],
        'records': !exists(json, 'records') ? undefined : ((json['records'] as Array<any>).map(ConversationSummaryFromJSON)),
        'total': !exists(json, 'total') ? undefined : json['total'],
    };
}

export function ConversationSearchResponseToJSON(value?: ConversationSearchResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'range_begin': value.range_begin,
        'range_end': value.range_end,
        'records': value.records === undefined ? undefined : ((value.records as Array<any>).map(ConversationSummaryToJSON)),
        'total': value.total,
    };
}

