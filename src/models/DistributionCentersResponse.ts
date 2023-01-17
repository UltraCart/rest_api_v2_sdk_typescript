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
    DistributionCenter,
    DistributionCenterFromJSON,
    DistributionCenterFromJSONTyped,
    DistributionCenterToJSON,
} from './DistributionCenter';
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
 * @interface DistributionCentersResponse
 */
export interface DistributionCentersResponse {
    /**
     * 
     * @type {Array<DistributionCenter>}
     * @memberof DistributionCentersResponse
     */
    distribution_centers?: Array<DistributionCenter>;
    /**
     * 
     * @type {ModelError}
     * @memberof DistributionCentersResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof DistributionCentersResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof DistributionCentersResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof DistributionCentersResponse
     */
    warning?: Warning;
}

export function DistributionCentersResponseFromJSON(json: any): DistributionCentersResponse {
    return DistributionCentersResponseFromJSONTyped(json, false);
}

export function DistributionCentersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DistributionCentersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'distribution_centers': !exists(json, 'distribution_centers') ? undefined : ((json['distribution_centers'] as Array<any>).map(DistributionCenterFromJSON)),
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function DistributionCentersResponseToJSON(value?: DistributionCentersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'distribution_centers': value.distribution_centers === undefined ? undefined : ((value.distribution_centers as Array<any>).map(DistributionCenterToJSON)),
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}
