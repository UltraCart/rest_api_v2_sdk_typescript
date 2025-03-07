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
    ReportDryRunQueryResult,
    ReportDryRunQueryResultFromJSON,
    ReportDryRunQueryResultFromJSONTyped,
    ReportDryRunQueryResultToJSON,
} from './ReportDryRunQueryResult';

/**
 * 
 * @export
 * @interface ReportDryRunQueriesResponse
 */
export interface ReportDryRunQueriesResponse {
    /**
     * 
     * @type {Array<ReportDryRunQueryResult>}
     * @memberof ReportDryRunQueriesResponse
     */
    dry_run_query_results?: Array<ReportDryRunQueryResult>;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ReportDryRunQueriesResponse)[] = ["dry_run_query_results"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ReportDryRunQueriesResponse interface.
 */
export function instanceOfReportDryRunQueriesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReportDryRunQueriesResponseFromJSON(json: any): ReportDryRunQueriesResponse {
    return ReportDryRunQueriesResponseFromJSONTyped(json, false);
}

export function ReportDryRunQueriesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportDryRunQueriesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'dry_run_query_results': !exists(json, 'dry_run_query_results') ? undefined : ((json['dry_run_query_results'] as Array<any>).map(ReportDryRunQueryResultFromJSON)),
    };
}

export function ReportDryRunQueriesResponseToJSON(value?: ReportDryRunQueriesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'dry_run_query_results': value.dry_run_query_results === undefined ? undefined : ((value.dry_run_query_results as Array<any>).map(ReportDryRunQueryResultToJSON)),
    };
}

