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
    IntegrationLog,
    IntegrationLogFromJSON,
    IntegrationLogFromJSONTyped,
    IntegrationLogToJSON,
} from './IntegrationLog';
import {
    IntegrationLogQueryFilterValues,
    IntegrationLogQueryFilterValuesFromJSON,
    IntegrationLogQueryFilterValuesFromJSONTyped,
    IntegrationLogQueryFilterValuesToJSON,
} from './IntegrationLogQueryFilterValues';
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
 * @interface IntegrationLogQueryResponse
 */
export interface IntegrationLogQueryResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof IntegrationLogQueryResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {IntegrationLogQueryFilterValues}
     * @memberof IntegrationLogQueryResponse
     */
    filter_values?: IntegrationLogQueryFilterValues;
    /**
     * 
     * @type {Array<IntegrationLog>}
     * @memberof IntegrationLogQueryResponse
     */
    integration_logs?: Array<IntegrationLog>;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof IntegrationLogQueryResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof IntegrationLogQueryResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof IntegrationLogQueryResponse
     */
    warning?: Warning;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof IntegrationLogQueryResponse)[] = ["error", "filter_values", "integration_logs", "metadata", "success", "warning"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the IntegrationLogQueryResponse interface.
 */
export function instanceOfIntegrationLogQueryResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function IntegrationLogQueryResponseFromJSON(json: any): IntegrationLogQueryResponse {
    return IntegrationLogQueryResponseFromJSONTyped(json, false);
}

export function IntegrationLogQueryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): IntegrationLogQueryResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'filter_values': !exists(json, 'filter_values') ? undefined : IntegrationLogQueryFilterValuesFromJSON(json['filter_values']),
        'integration_logs': !exists(json, 'integration_logs') ? undefined : ((json['integration_logs'] as Array<any>).map(IntegrationLogFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function IntegrationLogQueryResponseToJSON(value?: IntegrationLogQueryResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'filter_values': IntegrationLogQueryFilterValuesToJSON(value.filter_values),
        'integration_logs': value.integration_logs === undefined ? undefined : ((value.integration_logs as Array<any>).map(IntegrationLogToJSON)),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

