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
 * @interface EmailSegmentDownloadPrepareResponse
 */
export interface EmailSegmentDownloadPrepareResponse {
    /**
     * 
     * @type {string}
     * @memberof EmailSegmentDownloadPrepareResponse
     */
    email_segment_rebuild_uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof EmailSegmentDownloadPrepareResponse
     */
    email_segment_uuid?: string;
    /**
     * 
     * @type {ModelError}
     * @memberof EmailSegmentDownloadPrepareResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof EmailSegmentDownloadPrepareResponse
     */
    metadata?: ResponseMetadata;
    /**
     * 
     * @type {number}
     * @memberof EmailSegmentDownloadPrepareResponse
     */
    percentage_complete?: number;
    /**
     * 
     * @type {boolean}
     * @memberof EmailSegmentDownloadPrepareResponse
     */
    proceed?: boolean;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof EmailSegmentDownloadPrepareResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof EmailSegmentDownloadPrepareResponse
     */
    warning?: Warning;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof EmailSegmentDownloadPrepareResponse)[] = ["email_segment_rebuild_uuid", "email_segment_uuid", "error", "metadata", "percentage_complete", "proceed", "success", "warning"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the EmailSegmentDownloadPrepareResponse interface.
 */
export function instanceOfEmailSegmentDownloadPrepareResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailSegmentDownloadPrepareResponseFromJSON(json: any): EmailSegmentDownloadPrepareResponse {
    return EmailSegmentDownloadPrepareResponseFromJSONTyped(json, false);
}

export function EmailSegmentDownloadPrepareResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailSegmentDownloadPrepareResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'email_segment_rebuild_uuid': !exists(json, 'email_segment_rebuild_uuid') ? undefined : json['email_segment_rebuild_uuid'],
        'email_segment_uuid': !exists(json, 'email_segment_uuid') ? undefined : json['email_segment_uuid'],
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'percentage_complete': !exists(json, 'percentage_complete') ? undefined : json['percentage_complete'],
        'proceed': !exists(json, 'proceed') ? undefined : json['proceed'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function EmailSegmentDownloadPrepareResponseToJSON(value?: EmailSegmentDownloadPrepareResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'email_segment_rebuild_uuid': value.email_segment_rebuild_uuid,
        'email_segment_uuid': value.email_segment_uuid,
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'percentage_complete': value.percentage_complete,
        'proceed': value.proceed,
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

