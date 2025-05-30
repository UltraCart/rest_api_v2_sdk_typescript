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
    EmailSmsOrder,
    EmailSmsOrderFromJSON,
    EmailSmsOrderFromJSONTyped,
    EmailSmsOrderToJSON,
} from './EmailSmsOrder';
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
 * @interface EmailSmsOrdersResponse
 */
export interface EmailSmsOrdersResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof EmailSmsOrdersResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof EmailSmsOrdersResponse
     */
    metadata?: ResponseMetadata;
    /**
     * 
     * @type {Array<EmailSmsOrder>}
     * @memberof EmailSmsOrdersResponse
     */
    orders?: Array<EmailSmsOrder>;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof EmailSmsOrdersResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof EmailSmsOrdersResponse
     */
    warning?: Warning;
}



/**
 * Check if a given object implements the EmailSmsOrdersResponse interface.
 */
export function instanceOfEmailSmsOrdersResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailSmsOrdersResponseFromJSON(json: any): EmailSmsOrdersResponse {
    return EmailSmsOrdersResponseFromJSONTyped(json, false);
}

export function EmailSmsOrdersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailSmsOrdersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'orders': !exists(json, 'orders') ? undefined : ((json['orders'] as Array<any>).map(EmailSmsOrderFromJSON)),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function EmailSmsOrdersResponseToJSON(value?: EmailSmsOrdersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'orders': value.orders === undefined ? undefined : ((value.orders as Array<any>).map(EmailSmsOrderToJSON)),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

