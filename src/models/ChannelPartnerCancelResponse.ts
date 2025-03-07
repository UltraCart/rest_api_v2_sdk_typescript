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
 * @interface ChannelPartnerCancelResponse
 */
export interface ChannelPartnerCancelResponse {
    /**
     * Array of errors if errors occurred
     * @type {Array<string>}
     * @memberof ChannelPartnerCancelResponse
     */
    cancel_errors?: Array<string>;
    /**
     * 
     * @type {ModelError}
     * @memberof ChannelPartnerCancelResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ChannelPartnerCancelResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ChannelPartnerCancelResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof ChannelPartnerCancelResponse
     */
    warning?: Warning;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ChannelPartnerCancelResponse)[] = ["cancel_errors", "error", "metadata", "success", "warning"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ChannelPartnerCancelResponse interface.
 */
export function instanceOfChannelPartnerCancelResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelPartnerCancelResponseFromJSON(json: any): ChannelPartnerCancelResponse {
    return ChannelPartnerCancelResponseFromJSONTyped(json, false);
}

export function ChannelPartnerCancelResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelPartnerCancelResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'cancel_errors': !exists(json, 'cancel_errors') ? undefined : json['cancel_errors'],
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ChannelPartnerCancelResponseToJSON(value?: ChannelPartnerCancelResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'cancel_errors': value.cancel_errors,
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

