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
    ReportPageVisualizationDimension,
    ReportPageVisualizationDimensionFromJSON,
    ReportPageVisualizationDimensionFromJSONTyped,
    ReportPageVisualizationDimensionToJSON,
} from './ReportPageVisualizationDimension';
import {
    ReportPageVisualizationMetric,
    ReportPageVisualizationMetricFromJSON,
    ReportPageVisualizationMetricFromJSONTyped,
    ReportPageVisualizationMetricToJSON,
} from './ReportPageVisualizationMetric';

/**
 * 
 * @export
 * @interface ReportPageVisualization
 */
export interface ReportPageVisualization {
    /**
     * A JSON representation of the configuration for this visualization
     * @type {string}
     * @memberof ReportPageVisualization
     */
    config?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportPageVisualization
     */
    data_source_name?: string;
    /**
     * 
     * @type {Array<ReportPageVisualizationDimension>}
     * @memberof ReportPageVisualization
     */
    dimensions?: Array<ReportPageVisualizationDimension>;
    /**
     * 
     * @type {Array<ReportPageVisualizationMetric>}
     * @memberof ReportPageVisualization
     */
    metrics?: Array<ReportPageVisualizationMetric>;
    /**
     * 
     * @type {string}
     * @memberof ReportPageVisualization
     */
    name?: string;
    /**
     * True if the visualization should show a comparison based upon the date range
     * @type {boolean}
     * @memberof ReportPageVisualization
     */
    show_comparison?: boolean;
    /**
     * A JSON representation of the style configuration for this visualization
     * @type {string}
     * @memberof ReportPageVisualization
     */
    styles?: string;
    /**
     * Type of visualization
     * @type {string}
     * @memberof ReportPageVisualization
     */
    type?: ReportPageVisualizationTypeEnum;
    /**
     * A UUID for the visualization
     * @type {string}
     * @memberof ReportPageVisualization
     */
    visualization_uuid?: string;
}


/**
 * @export
 */
export const ReportPageVisualizationTypeEnum = {
    ScoreCard: 'score card',
    LineChart: 'line chart',
    BarChart: 'bar chart',
    Text: 'text',
    Table: 'table'
} as const;
export type ReportPageVisualizationTypeEnum = typeof ReportPageVisualizationTypeEnum[keyof typeof ReportPageVisualizationTypeEnum];


export function ReportPageVisualizationFromJSON(json: any): ReportPageVisualization {
    return ReportPageVisualizationFromJSONTyped(json, false);
}

export function ReportPageVisualizationFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportPageVisualization {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'config': !exists(json, 'config') ? undefined : json['config'],
        'data_source_name': !exists(json, 'data_source_name') ? undefined : json['data_source_name'],
        'dimensions': !exists(json, 'dimensions') ? undefined : ((json['dimensions'] as Array<any>).map(ReportPageVisualizationDimensionFromJSON)),
        'metrics': !exists(json, 'metrics') ? undefined : ((json['metrics'] as Array<any>).map(ReportPageVisualizationMetricFromJSON)),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'show_comparison': !exists(json, 'show_comparison') ? undefined : json['show_comparison'],
        'styles': !exists(json, 'styles') ? undefined : json['styles'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'visualization_uuid': !exists(json, 'visualization_uuid') ? undefined : json['visualization_uuid'],
    };
}

export function ReportPageVisualizationToJSON(value?: ReportPageVisualization | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'config': value.config,
        'data_source_name': value.data_source_name,
        'dimensions': value.dimensions === undefined ? undefined : ((value.dimensions as Array<any>).map(ReportPageVisualizationDimensionToJSON)),
        'metrics': value.metrics === undefined ? undefined : ((value.metrics as Array<any>).map(ReportPageVisualizationMetricToJSON)),
        'name': value.name,
        'show_comparison': value.show_comparison,
        'styles': value.styles,
        'type': value.type,
        'visualization_uuid': value.visualization_uuid,
    };
}
