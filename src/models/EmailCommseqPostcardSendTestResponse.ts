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
 * @interface EmailCommseqPostcardSendTestResponse
 */
export interface EmailCommseqPostcardSendTestResponse {
    /**
     * 
     * @type {string}
     * @memberof EmailCommseqPostcardSendTestResponse
     */
    backThumbnail?: string;
    /**
     * 
     * @type {ModelError}
     * @memberof EmailCommseqPostcardSendTestResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {string}
     * @memberof EmailCommseqPostcardSendTestResponse
     */
    frontThumbnail?: string;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof EmailCommseqPostcardSendTestResponse
     */
    metadata?: ResponseMetadata;
    /**
     * 
     * @type {string}
     * @memberof EmailCommseqPostcardSendTestResponse
     */
    renderedPdf?: string;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof EmailCommseqPostcardSendTestResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof EmailCommseqPostcardSendTestResponse
     */
    warning?: Warning;
}

export function EmailCommseqPostcardSendTestResponseFromJSON(json: any): EmailCommseqPostcardSendTestResponse {
    return EmailCommseqPostcardSendTestResponseFromJSONTyped(json, false);
}

export function EmailCommseqPostcardSendTestResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailCommseqPostcardSendTestResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'backThumbnail': !exists(json, 'backThumbnail') ? undefined : json['backThumbnail'],
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'frontThumbnail': !exists(json, 'frontThumbnail') ? undefined : json['frontThumbnail'],
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'renderedPdf': !exists(json, 'renderedPdf') ? undefined : json['renderedPdf'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function EmailCommseqPostcardSendTestResponseToJSON(value?: EmailCommseqPostcardSendTestResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'backThumbnail': value.backThumbnail,
        'error': ModelErrorToJSON(value.error),
        'frontThumbnail': value.frontThumbnail,
        'metadata': ResponseMetadataToJSON(value.metadata),
        'renderedPdf': value.renderedPdf,
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

