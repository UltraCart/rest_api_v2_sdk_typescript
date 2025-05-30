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
/**
 * 
 * @export
 * @interface ReportDataSetSchema
 */
export interface ReportDataSetSchema {
    /**
     * A JSON representation of the configuration for this visualization
     * @type {string}
     * @memberof ReportDataSetSchema
     */
    config?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportDataSetSchema
     */
    name?: string;
    /**
     * Type of the column.
     * @type {string}
     * @memberof ReportDataSetSchema
     */
    type?: ReportDataSetSchemaTypeEnum;
}



/**
 * @export
 */
export const ReportDataSetSchemaTypeEnum = {
    Bignumeric: 'BIGNUMERIC',
    Bool: 'BOOL',
    Date: 'DATE',
    Datetime: 'DATETIME',
    Float64: 'FLOAT64',
    Int64: 'INT64',
    Json: 'JSON',
    Numeric: 'NUMERIC',
    String: 'STRING',
    Time: 'TIME',
    Timestamp: 'TIMESTAMP'
} as const;
export type ReportDataSetSchemaTypeEnum = typeof ReportDataSetSchemaTypeEnum[keyof typeof ReportDataSetSchemaTypeEnum];


/**
 * Check if a given object implements the ReportDataSetSchema interface.
 */
export function instanceOfReportDataSetSchema(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReportDataSetSchemaFromJSON(json: any): ReportDataSetSchema {
    return ReportDataSetSchemaFromJSONTyped(json, false);
}

export function ReportDataSetSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportDataSetSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'config': !exists(json, 'config') ? undefined : json['config'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ReportDataSetSchemaToJSON(value?: ReportDataSetSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'config': value.config,
        'name': value.name,
        'type': value.type,
    };
}

