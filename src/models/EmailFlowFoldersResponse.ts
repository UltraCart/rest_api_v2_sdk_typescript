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
    EmailFlowFolder,
    EmailFlowFolderFromJSON,
    EmailFlowFolderFromJSONTyped,
    EmailFlowFolderToJSON,
} from './EmailFlowFolder';
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
 * @interface EmailFlowFoldersResponse
 */
export interface EmailFlowFoldersResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof EmailFlowFoldersResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {Array<EmailFlowFolder>}
     * @memberof EmailFlowFoldersResponse
     */
    flow_folders?: Array<EmailFlowFolder>;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof EmailFlowFoldersResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof EmailFlowFoldersResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof EmailFlowFoldersResponse
     */
    warning?: Warning;
}

export function EmailFlowFoldersResponseFromJSON(json: any): EmailFlowFoldersResponse {
    return EmailFlowFoldersResponseFromJSONTyped(json, false);
}

export function EmailFlowFoldersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailFlowFoldersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'flow_folders': !exists(json, 'flow_folders') ? undefined : ((json['flow_folders'] as Array<any>).map(EmailFlowFolderFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function EmailFlowFoldersResponseToJSON(value?: EmailFlowFoldersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'flow_folders': value.flow_folders === undefined ? undefined : ((value.flow_folders as Array<any>).map(EmailFlowFolderToJSON)),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}
