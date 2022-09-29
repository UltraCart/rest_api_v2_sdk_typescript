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
    FileManagerPage,
    FileManagerPageFromJSON,
    FileManagerPageFromJSONTyped,
    FileManagerPageToJSON,
} from './FileManagerPage';
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
 * @interface FileManagerPageResponse
 */
export interface FileManagerPageResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof FileManagerPageResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {FileManagerPage}
     * @memberof FileManagerPageResponse
     */
    file_manager_page?: FileManagerPage;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof FileManagerPageResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof FileManagerPageResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof FileManagerPageResponse
     */
    warning?: Warning;
}

export function FileManagerPageResponseFromJSON(json: any): FileManagerPageResponse {
    return FileManagerPageResponseFromJSONTyped(json, false);
}

export function FileManagerPageResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): FileManagerPageResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'file_manager_page': !exists(json, 'file_manager_page') ? undefined : FileManagerPageFromJSON(json['file_manager_page']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function FileManagerPageResponseToJSON(value?: FileManagerPageResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'file_manager_page': FileManagerPageToJSON(value.file_manager_page),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

