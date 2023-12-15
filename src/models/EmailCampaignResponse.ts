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
    EmailCampaign,
    EmailCampaignFromJSON,
    EmailCampaignFromJSONTyped,
    EmailCampaignToJSON,
} from './EmailCampaign';
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
 * @interface EmailCampaignResponse
 */
export interface EmailCampaignResponse {
    /**
     * 
     * @type {EmailCampaign}
     * @memberof EmailCampaignResponse
     */
    campaign?: EmailCampaign;
    /**
     * 
     * @type {ModelError}
     * @memberof EmailCampaignResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof EmailCampaignResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof EmailCampaignResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof EmailCampaignResponse
     */
    warning?: Warning;
}

export function EmailCampaignResponseFromJSON(json: any): EmailCampaignResponse {
    return EmailCampaignResponseFromJSONTyped(json, false);
}

export function EmailCampaignResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailCampaignResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'campaign': !exists(json, 'campaign') ? undefined : EmailCampaignFromJSON(json['campaign']),
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function EmailCampaignResponseToJSON(value?: EmailCampaignResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'campaign': EmailCampaignToJSON(value.campaign),
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

