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
    EmailPostcardStat,
    EmailPostcardStatFromJSON,
    EmailPostcardStatFromJSONTyped,
    EmailPostcardStatToJSON,
} from './EmailPostcardStat';
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
 * @interface EmailStatPostcardSummaryResponse
 */
export interface EmailStatPostcardSummaryResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof EmailStatPostcardSummaryResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof EmailStatPostcardSummaryResponse
     */
    metadata?: ResponseMetadata;
    /**
     * 
     * @type {Array<EmailPostcardStat>}
     * @memberof EmailStatPostcardSummaryResponse
     */
    stats?: Array<EmailPostcardStat>;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof EmailStatPostcardSummaryResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof EmailStatPostcardSummaryResponse
     */
    warning?: Warning;
}

export function EmailStatPostcardSummaryResponseFromJSON(json: any): EmailStatPostcardSummaryResponse {
    return EmailStatPostcardSummaryResponseFromJSONTyped(json, false);
}

export function EmailStatPostcardSummaryResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailStatPostcardSummaryResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'stats': !exists(json, 'stats') ? undefined : ((json['stats'] as Array<any>).map(EmailPostcardStatFromJSON)),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function EmailStatPostcardSummaryResponseToJSON(value?: EmailStatPostcardSummaryResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'stats': value.stats === undefined ? undefined : ((value.stats as Array<any>).map(EmailPostcardStatToJSON)),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

