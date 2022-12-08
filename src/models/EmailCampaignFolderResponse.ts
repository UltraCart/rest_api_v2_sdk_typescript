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
    EmailCampaignFolder,
    EmailCampaignFolderFromJSON,
    EmailCampaignFolderFromJSONTyped,
    EmailCampaignFolderToJSON,
} from './EmailCampaignFolder';
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
 * @interface EmailCampaignFolderResponse
 */
export interface EmailCampaignFolderResponse {
    /**
     * 
     * @type {EmailCampaignFolder}
     * @memberof EmailCampaignFolderResponse
     */
    campaign_folder?: EmailCampaignFolder;
    /**
     * 
     * @type {ModelError}
     * @memberof EmailCampaignFolderResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof EmailCampaignFolderResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof EmailCampaignFolderResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof EmailCampaignFolderResponse
     */
    warning?: Warning;
}

export function EmailCampaignFolderResponseFromJSON(json: any): EmailCampaignFolderResponse {
    return EmailCampaignFolderResponseFromJSONTyped(json, false);
}

export function EmailCampaignFolderResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailCampaignFolderResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'campaign_folder': !exists(json, 'campaign_folder') ? undefined : EmailCampaignFolderFromJSON(json['campaign_folder']),
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function EmailCampaignFolderResponseToJSON(value?: EmailCampaignFolderResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'campaign_folder': EmailCampaignFolderToJSON(value.campaign_folder),
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}
