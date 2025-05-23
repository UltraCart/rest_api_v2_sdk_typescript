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
    ScreenRecordingHeatmapUrl,
    ScreenRecordingHeatmapUrlFromJSON,
    ScreenRecordingHeatmapUrlFromJSONTyped,
    ScreenRecordingHeatmapUrlToJSON,
} from './ScreenRecordingHeatmapUrl';
import {
    Warning,
    WarningFromJSON,
    WarningFromJSONTyped,
    WarningToJSON,
} from './Warning';

/**
 * 
 * @export
 * @interface ScreenRecordingHeatmapIndexResponse
 */
export interface ScreenRecordingHeatmapIndexResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof ScreenRecordingHeatmapIndexResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {Array<ScreenRecordingHeatmapUrl>}
     * @memberof ScreenRecordingHeatmapIndexResponse
     */
    heatmap_urls?: Array<ScreenRecordingHeatmapUrl>;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ScreenRecordingHeatmapIndexResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ScreenRecordingHeatmapIndexResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof ScreenRecordingHeatmapIndexResponse
     */
    warning?: Warning;
}



/**
 * Check if a given object implements the ScreenRecordingHeatmapIndexResponse interface.
 */
export function instanceOfScreenRecordingHeatmapIndexResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ScreenRecordingHeatmapIndexResponseFromJSON(json: any): ScreenRecordingHeatmapIndexResponse {
    return ScreenRecordingHeatmapIndexResponseFromJSONTyped(json, false);
}

export function ScreenRecordingHeatmapIndexResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenRecordingHeatmapIndexResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'heatmap_urls': !exists(json, 'heatmap_urls') ? undefined : ((json['heatmap_urls'] as Array<any>).map(ScreenRecordingHeatmapUrlFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ScreenRecordingHeatmapIndexResponseToJSON(value?: ScreenRecordingHeatmapIndexResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'heatmap_urls': value.heatmap_urls === undefined ? undefined : ((value.heatmap_urls as Array<any>).map(ScreenRecordingHeatmapUrlToJSON)),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

