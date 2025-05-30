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
    EmailDashboardActivity,
    EmailDashboardActivityFromJSON,
    EmailDashboardActivityFromJSONTyped,
    EmailDashboardActivityToJSON,
} from './EmailDashboardActivity';
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
 * @interface EmailDashboardActivityResponse
 */
export interface EmailDashboardActivityResponse {
    /**
     * 
     * @type {Array<EmailDashboardActivity>}
     * @memberof EmailDashboardActivityResponse
     */
    activity?: Array<EmailDashboardActivity>;
    /**
     * 
     * @type {ModelError}
     * @memberof EmailDashboardActivityResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof EmailDashboardActivityResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof EmailDashboardActivityResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof EmailDashboardActivityResponse
     */
    warning?: Warning;
}



/**
 * Check if a given object implements the EmailDashboardActivityResponse interface.
 */
export function instanceOfEmailDashboardActivityResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailDashboardActivityResponseFromJSON(json: any): EmailDashboardActivityResponse {
    return EmailDashboardActivityResponseFromJSONTyped(json, false);
}

export function EmailDashboardActivityResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailDashboardActivityResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'activity': !exists(json, 'activity') ? undefined : ((json['activity'] as Array<any>).map(EmailDashboardActivityFromJSON)),
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function EmailDashboardActivityResponseToJSON(value?: EmailDashboardActivityResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'activity': value.activity === undefined ? undefined : ((value.activity as Array<any>).map(EmailDashboardActivityToJSON)),
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

