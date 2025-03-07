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
 * @interface ReportDataSourceSchema
 */
export interface ReportDataSourceSchema {
    /**
     * A JSON representation of the configuration for this visualization
     * @type {string}
     * @memberof ReportDataSourceSchema
     */
    config?: string;
    /**
     * Whether or not this column can be used as a dimension within a visualization
     * @type {boolean}
     * @memberof ReportDataSourceSchema
     */
    dimension?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ReportDataSourceSchema
     */
    name?: string;
    /**
     * Type of the column.  Only supporting the allowed values.  Any other types will be ignored.
     * @type {string}
     * @memberof ReportDataSourceSchema
     */
    type?: ReportDataSourceSchemaTypeEnum;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ReportDataSourceSchema)[] = ["config", "dimension", "name", "type"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * @export
 */
export const ReportDataSourceSchemaTypeEnum = {
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
export type ReportDataSourceSchemaTypeEnum = typeof ReportDataSourceSchemaTypeEnum[keyof typeof ReportDataSourceSchemaTypeEnum];


/**
 * Check if a given object implements the ReportDataSourceSchema interface.
 */
export function instanceOfReportDataSourceSchema(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReportDataSourceSchemaFromJSON(json: any): ReportDataSourceSchema {
    return ReportDataSourceSchemaFromJSONTyped(json, false);
}

export function ReportDataSourceSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportDataSourceSchema {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'config': !exists(json, 'config') ? undefined : json['config'],
        'dimension': !exists(json, 'dimension') ? undefined : json['dimension'],
        'name': !exists(json, 'name') ? undefined : json['name'],
        'type': !exists(json, 'type') ? undefined : json['type'],
    };
}

export function ReportDataSourceSchemaToJSON(value?: ReportDataSourceSchema | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'config': value.config,
        'dimension': value.dimension,
        'name': value.name,
        'type': value.type,
    };
}

