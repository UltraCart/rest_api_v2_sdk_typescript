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
    ReportDataSetQueryOrderByColumn,
    ReportDataSetQueryOrderByColumnFromJSON,
    ReportDataSetQueryOrderByColumnFromJSONTyped,
    ReportDataSetQueryOrderByColumnToJSON,
} from './ReportDataSetQueryOrderByColumn';
import {
    ReportDataSource,
    ReportDataSourceFromJSON,
    ReportDataSourceFromJSONTyped,
    ReportDataSourceToJSON,
} from './ReportDataSource';
import {
    ReportFilter,
    ReportFilterFromJSON,
    ReportFilterFromJSONTyped,
    ReportFilterToJSON,
} from './ReportFilter';
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
 * @interface ReportDataSetQuery
 */
export interface ReportDataSetQuery {
    /**
     * True if a date range filter is provided with comparison date ranges and two results should be returned for the query.
     * @type {boolean}
     * @memberof ReportDataSetQuery
     */
    comparison_results?: boolean;
    /**
     * A unique identifier assigned to the data set query that is returned.
     * @type {string}
     * @memberof ReportDataSetQuery
     */
    data_set_query_uuid?: string;
    /**
     * 
     * @type {ReportDataSource}
     * @memberof ReportDataSetQuery
     */
    data_source?: ReportDataSource;
    /**
     * 
     * @type {Array<ReportPageVisualizationDimension>}
     * @memberof ReportDataSetQuery
     */
    dimensions?: Array<ReportPageVisualizationDimension>;
    /**
     * 
     * @type {ReportFilter}
     * @memberof ReportDataSetQuery
     */
    filter?: ReportFilter;
    /**
     * An identifier that can be used to help match up the returned data set
     * @type {string}
     * @memberof ReportDataSetQuery
     */
    for_object_id?: string;
    /**
     * The type of object this data set is for
     * @type {string}
     * @memberof ReportDataSetQuery
     */
    for_object_type?: ReportDataSetQueryForObjectTypeEnum;
    /**
     * 
     * @type {Array<ReportPageVisualizationMetric>}
     * @memberof ReportDataSetQuery
     */
    metrics?: Array<ReportPageVisualizationMetric>;
    /**
     * The columns to order by in the final result.  If not specified the dimensions will be used
     * @type {Array<ReportDataSetQueryOrderByColumn>}
     * @memberof ReportDataSetQuery
     */
    order_by_columns?: Array<ReportDataSetQueryOrderByColumn>;
    /**
     * Result set page size.  The default value is 200 records.  Max is 10000.
     * @type {number}
     * @memberof ReportDataSetQuery
     */
    page_size?: number;
    /**
     * 
     * @type {Array<ReportFilter>}
     * @memberof ReportDataSetQuery
     */
    selected_filters?: Array<ReportFilter>;
    /**
     * True if the 15 minute cache should be skipped.
     * @type {boolean}
     * @memberof ReportDataSetQuery
     */
    skip_cache?: boolean;
    /**
     * Any other data that needs to be returned with the response to help the UI
     * @type {string}
     * @memberof ReportDataSetQuery
     */
    user_data?: string;
}


/**
 * @export
 */
export const ReportDataSetQueryForObjectTypeEnum = {
    Schema: 'schema',
    Filter: 'filter',
    Visualization: 'visualization'
} as const;
export type ReportDataSetQueryForObjectTypeEnum = typeof ReportDataSetQueryForObjectTypeEnum[keyof typeof ReportDataSetQueryForObjectTypeEnum];


export function ReportDataSetQueryFromJSON(json: any): ReportDataSetQuery {
    return ReportDataSetQueryFromJSONTyped(json, false);
}

export function ReportDataSetQueryFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportDataSetQuery {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'comparison_results': !exists(json, 'comparison_results') ? undefined : json['comparison_results'],
        'data_set_query_uuid': !exists(json, 'data_set_query_uuid') ? undefined : json['data_set_query_uuid'],
        'data_source': !exists(json, 'data_source') ? undefined : ReportDataSourceFromJSON(json['data_source']),
        'dimensions': !exists(json, 'dimensions') ? undefined : ((json['dimensions'] as Array<any>).map(ReportPageVisualizationDimensionFromJSON)),
        'filter': !exists(json, 'filter') ? undefined : ReportFilterFromJSON(json['filter']),
        'for_object_id': !exists(json, 'for_object_id') ? undefined : json['for_object_id'],
        'for_object_type': !exists(json, 'for_object_type') ? undefined : json['for_object_type'],
        'metrics': !exists(json, 'metrics') ? undefined : ((json['metrics'] as Array<any>).map(ReportPageVisualizationMetricFromJSON)),
        'order_by_columns': !exists(json, 'order_by_columns') ? undefined : ((json['order_by_columns'] as Array<any>).map(ReportDataSetQueryOrderByColumnFromJSON)),
        'page_size': !exists(json, 'page_size') ? undefined : json['page_size'],
        'selected_filters': !exists(json, 'selected_filters') ? undefined : ((json['selected_filters'] as Array<any>).map(ReportFilterFromJSON)),
        'skip_cache': !exists(json, 'skip_cache') ? undefined : json['skip_cache'],
        'user_data': !exists(json, 'user_data') ? undefined : json['user_data'],
    };
}

export function ReportDataSetQueryToJSON(value?: ReportDataSetQuery | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'comparison_results': value.comparison_results,
        'data_set_query_uuid': value.data_set_query_uuid,
        'data_source': ReportDataSourceToJSON(value.data_source),
        'dimensions': value.dimensions === undefined ? undefined : ((value.dimensions as Array<any>).map(ReportPageVisualizationDimensionToJSON)),
        'filter': ReportFilterToJSON(value.filter),
        'for_object_id': value.for_object_id,
        'for_object_type': value.for_object_type,
        'metrics': value.metrics === undefined ? undefined : ((value.metrics as Array<any>).map(ReportPageVisualizationMetricToJSON)),
        'order_by_columns': value.order_by_columns === undefined ? undefined : ((value.order_by_columns as Array<any>).map(ReportDataSetQueryOrderByColumnToJSON)),
        'page_size': value.page_size,
        'selected_filters': value.selected_filters === undefined ? undefined : ((value.selected_filters as Array<any>).map(ReportFilterToJSON)),
        'skip_cache': value.skip_cache,
        'user_data': value.user_data,
    };
}
