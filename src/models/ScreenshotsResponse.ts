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
 * @interface ScreenshotsResponse
 */
export interface ScreenshotsResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof ScreenshotsResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ScreenshotsResponse
     */
    metadata?: ResponseMetadata;
    /**
     * List of screenshot urls related to the object (depends on which method was called).
     * @type {Array<string>}
     * @memberof ScreenshotsResponse
     */
    screenshots?: Array<string>;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ScreenshotsResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof ScreenshotsResponse
     */
    warning?: Warning;
}

export function ScreenshotsResponseFromJSON(json: any): ScreenshotsResponse {
    return ScreenshotsResponseFromJSONTyped(json, false);
}

export function ScreenshotsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenshotsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'screenshots': !exists(json, 'screenshots') ? undefined : json['screenshots'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ScreenshotsResponseToJSON(value?: ScreenshotsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'screenshots': value.screenshots,
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

