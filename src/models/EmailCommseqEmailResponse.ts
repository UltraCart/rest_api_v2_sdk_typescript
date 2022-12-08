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
    EmailCommseqEmail,
    EmailCommseqEmailFromJSON,
    EmailCommseqEmailFromJSONTyped,
    EmailCommseqEmailToJSON,
} from './EmailCommseqEmail';
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
 * @interface EmailCommseqEmailResponse
 */
export interface EmailCommseqEmailResponse {
    /**
     * 
     * @type {EmailCommseqEmail}
     * @memberof EmailCommseqEmailResponse
     */
    email?: EmailCommseqEmail;
    /**
     * 
     * @type {ModelError}
     * @memberof EmailCommseqEmailResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof EmailCommseqEmailResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof EmailCommseqEmailResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof EmailCommseqEmailResponse
     */
    warning?: Warning;
}

export function EmailCommseqEmailResponseFromJSON(json: any): EmailCommseqEmailResponse {
    return EmailCommseqEmailResponseFromJSONTyped(json, false);
}

export function EmailCommseqEmailResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailCommseqEmailResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email': !exists(json, 'email') ? undefined : EmailCommseqEmailFromJSON(json['email']),
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function EmailCommseqEmailResponseToJSON(value?: EmailCommseqEmailResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email': EmailCommseqEmailToJSON(value.email),
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}
