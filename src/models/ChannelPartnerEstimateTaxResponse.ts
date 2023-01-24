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
 * @interface ChannelPartnerEstimateTaxResponse
 */
export interface ChannelPartnerEstimateTaxResponse {
    /**
     * 
     * @type {number}
     * @memberof ChannelPartnerEstimateTaxResponse
     */
    arbitrary_tax?: number;
    /**
     * 
     * @type {ModelError}
     * @memberof ChannelPartnerEstimateTaxResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ChannelPartnerEstimateTaxResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ChannelPartnerEstimateTaxResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof ChannelPartnerEstimateTaxResponse
     */
    warning?: Warning;
}

export function ChannelPartnerEstimateTaxResponseFromJSON(json: any): ChannelPartnerEstimateTaxResponse {
    return ChannelPartnerEstimateTaxResponseFromJSONTyped(json, false);
}

export function ChannelPartnerEstimateTaxResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelPartnerEstimateTaxResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'arbitrary_tax': !exists(json, 'arbitrary_tax') ? undefined : json['arbitrary_tax'],
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ChannelPartnerEstimateTaxResponseToJSON(value?: ChannelPartnerEstimateTaxResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'arbitrary_tax': value.arbitrary_tax,
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}
