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
 * @interface OrderFormatResponse
 */
export interface OrderFormatResponse {
    /**
     * The URLs to any stylesheets that need to be included to properly view the markup.
     * @type {Array<string>}
     * @memberof OrderFormatResponse
     */
    css_links?: Array<string>;
    /**
     * The formatted result of the order.  This will be HTML or text depending upon the requested format.
     * @type {string}
     * @memberof OrderFormatResponse
     */
    formatted_result?: string;
}

export function OrderFormatResponseFromJSON(json: any): OrderFormatResponse {
    return OrderFormatResponseFromJSONTyped(json, false);
}

export function OrderFormatResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderFormatResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'css_links': !exists(json, 'css_links') ? undefined : json['css_links'],
        'formatted_result': !exists(json, 'formatted_result') ? undefined : json['formatted_result'],
    };
}

export function OrderFormatResponseToJSON(value?: OrderFormatResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'css_links': value.css_links,
        'formatted_result': value.formatted_result,
    };
}
