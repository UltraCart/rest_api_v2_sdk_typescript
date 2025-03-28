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
    EmailClick,
    EmailClickFromJSON,
    EmailClickFromJSONTyped,
    EmailClickToJSON,
} from './EmailClick';
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
 * @interface EmailClicksResponse
 */
export interface EmailClicksResponse {
    /**
     * 
     * @type {Array<EmailClick>}
     * @memberof EmailClicksResponse
     */
    clicks?: Array<EmailClick>;
    /**
     * 
     * @type {ModelError}
     * @memberof EmailClicksResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof EmailClicksResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof EmailClicksResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof EmailClicksResponse
     */
    warning?: Warning;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof EmailClicksResponse)[] = ["clicks", "error", "metadata", "success", "warning"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the EmailClicksResponse interface.
 */
export function instanceOfEmailClicksResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailClicksResponseFromJSON(json: any): EmailClicksResponse {
    return EmailClicksResponseFromJSONTyped(json, false);
}

export function EmailClicksResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailClicksResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'clicks': !exists(json, 'clicks') ? undefined : ((json['clicks'] as Array<any>).map(EmailClickFromJSON)),
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function EmailClicksResponseToJSON(value?: EmailClicksResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'clicks': value.clicks === undefined ? undefined : ((value.clicks as Array<any>).map(EmailClickToJSON)),
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

