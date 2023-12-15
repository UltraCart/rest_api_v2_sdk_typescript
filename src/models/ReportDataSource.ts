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
    ReportDataSourceSchema,
    ReportDataSourceSchemaFromJSON,
    ReportDataSourceSchemaFromJSONTyped,
    ReportDataSourceSchemaToJSON,
} from './ReportDataSourceSchema';

/**
 * 
 * @export
 * @interface ReportDataSource
 */
export interface ReportDataSource {
    /**
     * A unique identifier assigned to the data source.
     * @type {string}
     * @memberof ReportDataSource
     */
    data_source_uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportDataSource
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportDataSource
     */
    partition_date_column?: string;
    /**
     * 
     * @type {number}
     * @memberof ReportDataSource
     */
    partition_date_safety_days?: number;
    /**
     * The partition date strategy, defaults to weekly sunday
     * @type {string}
     * @memberof ReportDataSource
     */
    partition_date_strategy?: string;
    /**
     * 
     * @type {Array<ReportDataSourceSchema>}
     * @memberof ReportDataSource
     */
    schema?: Array<ReportDataSourceSchema>;
    /**
     * 
     * @type {string}
     * @memberof ReportDataSource
     */
    sql?: string;
}

export function ReportDataSourceFromJSON(json: any): ReportDataSource {
    return ReportDataSourceFromJSONTyped(json, false);
}

export function ReportDataSourceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportDataSource {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data_source_uuid': !exists(json, 'data_source_uuid') ? undefined : json['data_source_uuid'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'partition_date_column': !exists(json, 'partition_date_column') ? undefined : json['partition_date_column'],
        'partition_date_safety_days': !exists(json, 'partition_date_safety_days') ? undefined : json['partition_date_safety_days'],
        'partition_date_strategy': !exists(json, 'partition_date_strategy') ? undefined : json['partition_date_strategy'],
        'schema': !exists(json, 'schema') ? undefined : ((json['schema'] as Array<any>).map(ReportDataSourceSchemaFromJSON)),
        'sql': !exists(json, 'sql') ? undefined : json['sql'],
    };
}

export function ReportDataSourceToJSON(value?: ReportDataSource | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data_source_uuid': value.data_source_uuid,
        'name': value.name,
        'partition_date_column': value.partition_date_column,
        'partition_date_safety_days': value.partition_date_safety_days,
        'partition_date_strategy': value.partition_date_strategy,
        'schema': value.schema === undefined ? undefined : ((value.schema as Array<any>).map(ReportDataSourceSchemaToJSON)),
        'sql': value.sql,
    };
}

