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
 * @interface EmailCommseqsResponse
 */
export interface EmailCommseqsResponse {
    /**
     * 
     * @type {Array<EmailCommseq>}
     * @memberof EmailCommseqsResponse
     */
    communication_sequences?: Array<EmailCommseq>;
    /**
     * 
     * @type {ModelError}
     * @memberof EmailCommseqsResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof EmailCommseqsResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof EmailCommseqsResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof EmailCommseqsResponse
     */
    warning?: Warning;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof EmailCommseqsResponse)[] = ["communication_sequences", "error", "metadata", "success", "warning"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the EmailCommseqsResponse interface.
 */
export function instanceOfEmailCommseqsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailCommseqsResponseFromJSON(json: any): EmailCommseqsResponse {
    return EmailCommseqsResponseFromJSONTyped(json, false);
}

export function EmailCommseqsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailCommseqsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'communication_sequences': !exists(json, 'communication_sequences') ? undefined : ((json['communication_sequences'] as Array<any>).map(EmailCommseqFromJSON)),
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function EmailCommseqsResponseToJSON(value?: EmailCommseqsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'communication_sequences': value.communication_sequences === undefined ? undefined : ((value.communication_sequences as Array<any>).map(EmailCommseqToJSON)),
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

