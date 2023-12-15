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
    ScreenRecordingHeatmap,
    ScreenRecordingHeatmapFromJSON,
    ScreenRecordingHeatmapFromJSONTyped,
    ScreenRecordingHeatmapToJSON,
} from './ScreenRecordingHeatmap';
import {
    Warning,
    WarningFromJSON,
    WarningFromJSONTyped,
    WarningToJSON,
} from './Warning';

/**
 * 
 * @export
 * @interface ScreenRecordingHeatmapResponse
 */
export interface ScreenRecordingHeatmapResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof ScreenRecordingHeatmapResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ScreenRecordingHeatmap}
     * @memberof ScreenRecordingHeatmapResponse
     */
    heatmap?: ScreenRecordingHeatmap;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ScreenRecordingHeatmapResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ScreenRecordingHeatmapResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof ScreenRecordingHeatmapResponse
     */
    warning?: Warning;
}

export function ScreenRecordingHeatmapResponseFromJSON(json: any): ScreenRecordingHeatmapResponse {
    return ScreenRecordingHeatmapResponseFromJSONTyped(json, false);
}

export function ScreenRecordingHeatmapResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenRecordingHeatmapResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'heatmap': !exists(json, 'heatmap') ? undefined : ScreenRecordingHeatmapFromJSON(json['heatmap']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ScreenRecordingHeatmapResponseToJSON(value?: ScreenRecordingHeatmapResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'heatmap': ScreenRecordingHeatmapToJSON(value.heatmap),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

