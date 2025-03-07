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
    IntegrationLogSummary,
    IntegrationLogSummaryFromJSON,
    IntegrationLogSummaryFromJSONTyped,
    IntegrationLogSummaryToJSON,
} from './IntegrationLogSummary';
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
 * @interface IntegrationLogSummaryQueryResponse
 */
export interface IntegrationLogSummaryQueryResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof IntegrationLogSummaryQueryResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {Array<IntegrationLogSummary>}
     * @memberof IntegrationLogSummaryQueryResponse
     */
    integration_log_summaries?: Array<IntegrationLogSummary>;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof IntegrationLogSummaryQueryResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof IntegrationLogSummaryQueryResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof IntegrationLogSummaryQueryResponse
     */
    warning?: Warning;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof IntegrationLogSummaryQueryResponse)[] = ["error", "integration_log_summaries", "metadata", "success", "warning"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the IntegrationLogSummaryQueryResponse interface.
 */
export function instanceOfIntegrationLogSummaryQueryResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IntegrationLogSummaryQueryResponseFromJSON(json: any): IntegrationLogSummaryQueryResponse {
    return IntegrationLogSummaryQueryResponseFromJSONTyped(json, false);
}

export function IntegrationLogSummaryQueryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntegrationLogSummaryQueryResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'integration_log_summaries': !exists(json, 'integration_log_summaries') ? undefined : ((json['integration_log_summaries'] as Array<any>).map(IntegrationLogSummaryFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function IntegrationLogSummaryQueryResponseToJSON(value?: IntegrationLogSummaryQueryResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'integration_log_summaries': value.integration_log_summaries === undefined ? undefined : ((value.integration_log_summaries as Array<any>).map(IntegrationLogSummaryToJSON)),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

