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
    EmailPerformance,
    EmailPerformanceFromJSON,
    EmailPerformanceFromJSONTyped,
    EmailPerformanceToJSON,
} from './EmailPerformance';
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
 * @interface EmailPerformanceResponse
 */
export interface EmailPerformanceResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof EmailPerformanceResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof EmailPerformanceResponse
     */
    metadata?: ResponseMetadata;
    /**
     * 
     * @type {EmailPerformance}
     * @memberof EmailPerformanceResponse
     */
    performance?: EmailPerformance;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof EmailPerformanceResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof EmailPerformanceResponse
     */
    warning?: Warning;
}

export function EmailPerformanceResponseFromJSON(json: any): EmailPerformanceResponse {
    return EmailPerformanceResponseFromJSONTyped(json, false);
}

export function EmailPerformanceResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailPerformanceResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'performance': !exists(json, 'performance') ? undefined : EmailPerformanceFromJSON(json['performance']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function EmailPerformanceResponseToJSON(value?: EmailPerformanceResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'performance': EmailPerformanceToJSON(value.performance),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

