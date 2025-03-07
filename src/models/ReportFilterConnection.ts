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
 * @interface ReportFilterConnection
 */
export interface ReportFilterConnection {
    /**
     * 
     * @type {string}
     * @memberof ReportFilterConnection
     */
    column?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportFilterConnection
     */
    data_source_name?: string;
    /**
     * A unique identifier assigned to the data source.
     * @type {string}
     * @memberof ReportFilterConnection
     */
    data_source_uuid?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ReportFilterConnection)[] = ["column", "data_source_name", "data_source_uuid"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ReportFilterConnection interface.
 */
export function instanceOfReportFilterConnection(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReportFilterConnectionFromJSON(json: any): ReportFilterConnection {
    return ReportFilterConnectionFromJSONTyped(json, false);
}

export function ReportFilterConnectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportFilterConnection {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'column': !exists(json, 'column') ? undefined : json['column'],
        'data_source_name': !exists(json, 'data_source_name') ? undefined : json['data_source_name'],
        'data_source_uuid': !exists(json, 'data_source_uuid') ? undefined : json['data_source_uuid'],
    };
}

export function ReportFilterConnectionToJSON(value?: ReportFilterConnection | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'column': value.column,
        'data_source_name': value.data_source_name,
        'data_source_uuid': value.data_source_uuid,
    };
}

