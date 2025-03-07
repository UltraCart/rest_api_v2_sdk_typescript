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
    ChannelPartnerShippingEstimate,
    ChannelPartnerShippingEstimateFromJSON,
    ChannelPartnerShippingEstimateFromJSONTyped,
    ChannelPartnerShippingEstimateToJSON,
} from './ChannelPartnerShippingEstimate';
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
 * @interface ChannelPartnerEstimateShippingResponse
 */
export interface ChannelPartnerEstimateShippingResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof ChannelPartnerEstimateShippingResponse
     */
    error?: ModelError;
    /**
     * An array of shipping methods and their costs
     * @type {Array<ChannelPartnerShippingEstimate>}
     * @memberof ChannelPartnerEstimateShippingResponse
     */
    estimates?: Array<ChannelPartnerShippingEstimate>;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ChannelPartnerEstimateShippingResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ChannelPartnerEstimateShippingResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof ChannelPartnerEstimateShippingResponse
     */
    warning?: Warning;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ChannelPartnerEstimateShippingResponse)[] = ["error", "estimates", "metadata", "success", "warning"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ChannelPartnerEstimateShippingResponse interface.
 */
export function instanceOfChannelPartnerEstimateShippingResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelPartnerEstimateShippingResponseFromJSON(json: any): ChannelPartnerEstimateShippingResponse {
    return ChannelPartnerEstimateShippingResponseFromJSONTyped(json, false);
}

export function ChannelPartnerEstimateShippingResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelPartnerEstimateShippingResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'estimates': !exists(json, 'estimates') ? undefined : ((json['estimates'] as Array<any>).map(ChannelPartnerShippingEstimateFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ChannelPartnerEstimateShippingResponseToJSON(value?: ChannelPartnerEstimateShippingResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'estimates': value.estimates === undefined ? undefined : ((value.estimates as Array<any>).map(ChannelPartnerShippingEstimateToJSON)),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

