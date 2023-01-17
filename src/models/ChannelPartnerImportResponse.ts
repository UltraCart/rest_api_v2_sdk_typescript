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
 * @interface ChannelPartnerImportResponse
 */
export interface ChannelPartnerImportResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof ChannelPartnerImportResponse
     */
    error?: ModelError;
    /**
     * Array of errors if errors occurred
     * @type {Array<string>}
     * @memberof ChannelPartnerImportResponse
     */
    import_errors?: Array<string>;
    /**
     * Array of warnings if warnings occurred
     * @type {Array<string>}
     * @memberof ChannelPartnerImportResponse
     */
    import_warnings?: Array<string>;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ChannelPartnerImportResponse
     */
    metadata?: ResponseMetadata;
    /**
     * The order id of the newly imported order if successful
     * @type {string}
     * @memberof ChannelPartnerImportResponse
     */
    order_id?: string;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ChannelPartnerImportResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof ChannelPartnerImportResponse
     */
    warning?: Warning;
}

export function ChannelPartnerImportResponseFromJSON(json: any): ChannelPartnerImportResponse {
    return ChannelPartnerImportResponseFromJSONTyped(json, false);
}

export function ChannelPartnerImportResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelPartnerImportResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'import_errors': !exists(json, 'import_errors') ? undefined : json['import_errors'],
        'import_warnings': !exists(json, 'import_warnings') ? undefined : json['import_warnings'],
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'order_id': !exists(json, 'order_id') ? undefined : json['order_id'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ChannelPartnerImportResponseToJSON(value?: ChannelPartnerImportResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'import_errors': value.import_errors,
        'import_warnings': value.import_warnings,
        'metadata': ResponseMetadataToJSON(value.metadata),
        'order_id': value.order_id,
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}
