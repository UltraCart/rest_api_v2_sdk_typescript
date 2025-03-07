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
    EmailCommseqPostcard,
    EmailCommseqPostcardFromJSON,
    EmailCommseqPostcardFromJSONTyped,
    EmailCommseqPostcardToJSON,
} from './EmailCommseqPostcard';
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
 * @interface EmailCommseqPostcardsResponse
 */
export interface EmailCommseqPostcardsResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof EmailCommseqPostcardsResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof EmailCommseqPostcardsResponse
     */
    metadata?: ResponseMetadata;
    /**
     * 
     * @type {Array<EmailCommseqPostcard>}
     * @memberof EmailCommseqPostcardsResponse
     */
    postcards?: Array<EmailCommseqPostcard>;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof EmailCommseqPostcardsResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof EmailCommseqPostcardsResponse
     */
    warning?: Warning;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof EmailCommseqPostcardsResponse)[] = ["error", "metadata", "postcards", "success", "warning"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the EmailCommseqPostcardsResponse interface.
 */
export function instanceOfEmailCommseqPostcardsResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailCommseqPostcardsResponseFromJSON(json: any): EmailCommseqPostcardsResponse {
    return EmailCommseqPostcardsResponseFromJSONTyped(json, false);
}

export function EmailCommseqPostcardsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailCommseqPostcardsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'postcards': !exists(json, 'postcards') ? undefined : ((json['postcards'] as Array<any>).map(EmailCommseqPostcardFromJSON)),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function EmailCommseqPostcardsResponseToJSON(value?: EmailCommseqPostcardsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'postcards': value.postcards === undefined ? undefined : ((value.postcards as Array<any>).map(EmailCommseqPostcardToJSON)),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

