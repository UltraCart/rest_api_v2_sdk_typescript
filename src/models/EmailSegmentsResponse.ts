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
    EmailSegment,
    EmailSegmentFromJSON,
    EmailSegmentFromJSONTyped,
    EmailSegmentToJSON,
} from './EmailSegment';
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
 * @interface EmailSegmentsResponse
 */
export interface EmailSegmentsResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof EmailSegmentsResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof EmailSegmentsResponse
     */
    metadata?: ResponseMetadata;
    /**
     * 
     * @type {Array<EmailSegment>}
     * @memberof EmailSegmentsResponse
     */
    segments?: Array<EmailSegment>;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof EmailSegmentsResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof EmailSegmentsResponse
     */
    warning?: Warning;
}

export function EmailSegmentsResponseFromJSON(json: any): EmailSegmentsResponse {
    return EmailSegmentsResponseFromJSONTyped(json, false);
}

export function EmailSegmentsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailSegmentsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'segments': !exists(json, 'segments') ? undefined : ((json['segments'] as Array<any>).map(EmailSegmentFromJSON)),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function EmailSegmentsResponseToJSON(value?: EmailSegmentsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'segments': value.segments === undefined ? undefined : ((value.segments as Array<any>).map(EmailSegmentToJSON)),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}
