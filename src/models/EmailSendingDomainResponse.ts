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
    EmailDomain,
    EmailDomainFromJSON,
    EmailDomainFromJSONTyped,
    EmailDomainToJSON,
} from './EmailDomain';
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
 * @interface EmailSendingDomainResponse
 */
export interface EmailSendingDomainResponse {
    /**
     * 
     * @type {EmailDomain}
     * @memberof EmailSendingDomainResponse
     */
    domain?: EmailDomain;
    /**
     * 
     * @type {ModelError}
     * @memberof EmailSendingDomainResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof EmailSendingDomainResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof EmailSendingDomainResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof EmailSendingDomainResponse
     */
    warning?: Warning;
}



/**
 * Check if a given object implements the EmailSendingDomainResponse interface.
 */
export function instanceOfEmailSendingDomainResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailSendingDomainResponseFromJSON(json: any): EmailSendingDomainResponse {
    return EmailSendingDomainResponseFromJSONTyped(json, false);
}

export function EmailSendingDomainResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailSendingDomainResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'domain': !exists(json, 'domain') ? undefined : EmailDomainFromJSON(json['domain']),
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function EmailSendingDomainResponseToJSON(value?: EmailSendingDomainResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'domain': EmailDomainToJSON(value.domain),
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

