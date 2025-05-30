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
    ReportDataSetPage,
    ReportDataSetPageFromJSON,
    ReportDataSetPageFromJSONTyped,
    ReportDataSetPageToJSON,
} from './ReportDataSetPage';
import {
    ReportDataSetSchema,
    ReportDataSetSchemaFromJSON,
    ReportDataSetSchemaFromJSONTyped,
    ReportDataSetSchemaToJSON,
} from './ReportDataSetSchema';

/**
 * 
 * @export
 * @interface ReportDataSet
 */
export interface ReportDataSet {
    /**
     * A unique identifier assigned to the data set query that is returned.
     * @type {string}
     * @memberof ReportDataSet
     */
    data_set_query_uuid?: string;
    /**
     * A unique identifier assigned to the data set that is returned.
     * @type {string}
     * @memberof ReportDataSet
     */
    data_set_uuid?: string;
    /**
     * The BigQuery destination table id that contains the result.
     * @type {string}
     * @memberof ReportDataSet
     */
    destination_table_id?: string;
    /**
     * Error message if the query failed.
     * @type {string}
     * @memberof ReportDataSet
     */
    error_message?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportDataSet
     */
    executed_sql?: string;
    /**
     * An identifier that can be used to help match up the returned data set
     * @type {string}
     * @memberof ReportDataSet
     */
    for_object_id?: string;
    /**
     * The type of object this data set is for
     * @type {string}
     * @memberof ReportDataSet
     */
    for_object_type?: ReportDataSetForObjectTypeEnum;
    /**
     * Initial pages returned in the dataset
     * @type {Array<ReportDataSetPage>}
     * @memberof ReportDataSet
     */
    initial_pages?: Array<ReportDataSetPage>;
    /**
     * The total number of results
     * @type {number}
     * @memberof ReportDataSet
     */
    max_results?: number;
    /**
     * Merchant that owns this data set
     * @type {string}
     * @memberof ReportDataSet
     */
    merchant_id?: string;
    /**
     * The total number of pages in the result set
     * @type {number}
     * @memberof ReportDataSet
     */
    page_count?: number;
    /**
     * The size of the pages
     * @type {number}
     * @memberof ReportDataSet
     */
    page_size?: number;
    /**
     * Date/Time of the client submitted the request.  Can be used to resolve out of order query completion results
     * @type {string}
     * @memberof ReportDataSet
     */
    request_dts?: string;
    /**
     * The schema associated with the data set.
     * @type {Array<ReportDataSetSchema>}
     * @memberof ReportDataSet
     */
    schema?: Array<ReportDataSetSchema>;
    /**
     * Security level this dataset was read from.
     * @type {string}
     * @memberof ReportDataSet
     */
    security_level?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportDataSet
     */
    timezone?: string;
    /**
     * Any other data that needs to be returned with the response to help the UI
     * @type {string}
     * @memberof ReportDataSet
     */
    user_data?: string;
}



/**
 * @export
 */
export const ReportDataSetForObjectTypeEnum = {
    Schema: 'schema',
    Filter: 'filter',
    Visualization: 'visualization'
} as const;
export type ReportDataSetForObjectTypeEnum = typeof ReportDataSetForObjectTypeEnum[keyof typeof ReportDataSetForObjectTypeEnum];


/**
 * Check if a given object implements the ReportDataSet interface.
 */
export function instanceOfReportDataSet(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReportDataSetFromJSON(json: any): ReportDataSet {
    return ReportDataSetFromJSONTyped(json, false);
}

export function ReportDataSetFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportDataSet {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data_set_query_uuid': !exists(json, 'data_set_query_uuid') ? undefined : json['data_set_query_uuid'],
        'data_set_uuid': !exists(json, 'data_set_uuid') ? undefined : json['data_set_uuid'],
        'destination_table_id': !exists(json, 'destination_table_id') ? undefined : json['destination_table_id'],
        'error_message': !exists(json, 'error_message') ? undefined : json['error_message'],
        'executed_sql': !exists(json, 'executed_sql') ? undefined : json['executed_sql'],
        'for_object_id': !exists(json, 'for_object_id') ? undefined : json['for_object_id'],
        'for_object_type': !exists(json, 'for_object_type') ? undefined : json['for_object_type'],
        'initial_pages': !exists(json, 'initial_pages') ? undefined : ((json['initial_pages'] as Array<any>).map(ReportDataSetPageFromJSON)),
        'max_results': !exists(json, 'max_results') ? undefined : json['max_results'],
        'merchant_id': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'page_count': !exists(json, 'page_count') ? undefined : json['page_count'],
        'page_size': !exists(json, 'page_size') ? undefined : json['page_size'],
        'request_dts': !exists(json, 'request_dts') ? undefined : json['request_dts'],
        'schema': !exists(json, 'schema') ? undefined : ((json['schema'] as Array<any>).map(ReportDataSetSchemaFromJSON)),
        'security_level': !exists(json, 'security_level') ? undefined : json['security_level'],
        'timezone': !exists(json, 'timezone') ? undefined : json['timezone'],
        'user_data': !exists(json, 'user_data') ? undefined : json['user_data'],
    };
}

export function ReportDataSetToJSON(value?: ReportDataSet | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data_set_query_uuid': value.data_set_query_uuid,
        'data_set_uuid': value.data_set_uuid,
        'destination_table_id': value.destination_table_id,
        'error_message': value.error_message,
        'executed_sql': value.executed_sql,
        'for_object_id': value.for_object_id,
        'for_object_type': value.for_object_type,
        'initial_pages': value.initial_pages === undefined ? undefined : ((value.initial_pages as Array<any>).map(ReportDataSetPageToJSON)),
        'max_results': value.max_results,
        'merchant_id': value.merchant_id,
        'page_count': value.page_count,
        'page_size': value.page_size,
        'request_dts': value.request_dts,
        'schema': value.schema === undefined ? undefined : ((value.schema as Array<any>).map(ReportDataSetSchemaToJSON)),
        'security_level': value.security_level,
        'timezone': value.timezone,
        'user_data': value.user_data,
    };
}

