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
 * @interface CustomerMagicLinkResponse
 */
export interface CustomerMagicLinkResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof CustomerMagicLinkResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof CustomerMagicLinkResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof CustomerMagicLinkResponse
     */
    success?: boolean;
    /**
     * URL
     * @type {string}
     * @memberof CustomerMagicLinkResponse
     */
    url?: string;
    /**
     * 
     * @type {Warning}
     * @memberof CustomerMagicLinkResponse
     */
    warning?: Warning;
}



/**
 * Check if a given object implements the CustomerMagicLinkResponse interface.
 */
export function instanceOfCustomerMagicLinkResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function CustomerMagicLinkResponseFromJSON(json: any): CustomerMagicLinkResponse {
    return CustomerMagicLinkResponseFromJSONTyped(json, false);
}

export function CustomerMagicLinkResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomerMagicLinkResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'url': !exists(json, 'url') ? undefined : json['url'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function CustomerMagicLinkResponseToJSON(value?: CustomerMagicLinkResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'url': value.url,
        'warning': WarningToJSON(value.warning),
    };
}

