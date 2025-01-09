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
    EmailCommseq,
    EmailCommseqFromJSON,
    EmailCommseqFromJSONTyped,
    EmailCommseqToJSON,
} from './EmailCommseq';
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
 * @interface EmailCommseqResponse
 */
export interface EmailCommseqResponse {
    /**
     * 
     * @type {EmailCommseq}
     * @memberof EmailCommseqResponse
     */
    communication_sequence?: EmailCommseq;
    /**
     * 
     * @type {ModelError}
     * @memberof EmailCommseqResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof EmailCommseqResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof EmailCommseqResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof EmailCommseqResponse
     */
    warning?: Warning;
}

export function EmailCommseqResponseFromJSON(json: any): EmailCommseqResponse {
    return EmailCommseqResponseFromJSONTyped(json, false);
}

export function EmailCommseqResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailCommseqResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'communication_sequence': !exists(json, 'communication_sequence') ? undefined : EmailCommseqFromJSON(json['communication_sequence']),
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function EmailCommseqResponseToJSON(value?: EmailCommseqResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'communication_sequence': EmailCommseqToJSON(value.communication_sequence),
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

