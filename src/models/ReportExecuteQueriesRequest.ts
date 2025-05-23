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
    ReportDataSetQuery,
    ReportDataSetQueryFromJSON,
    ReportDataSetQueryFromJSONTyped,
    ReportDataSetQueryToJSON,
} from './ReportDataSetQuery';

/**
 * 
 * @export
 * @interface ReportExecuteQueriesRequest
 */
export interface ReportExecuteQueriesRequest {
    /**
     * Unique UUID assigned to this client during the auth.  This will be used to locate the websocket connect id.
     * @type {string}
     * @memberof ReportExecuteQueriesRequest
     */
    client_uuid?: string;
    /**
     * The websocket connection id that should receive back notices of query completion.
     * @type {string}
     * @memberof ReportExecuteQueriesRequest
     */
    connection_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportExecuteQueriesRequest
     */
    default_dataset_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportExecuteQueriesRequest
     */
    default_project_id?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportExecuteQueriesRequest
     */
    merchant_id?: string;
    /**
     * An array of queries that we want the lambda function to execute.
     * @type {Array<ReportDataSetQuery>}
     * @memberof ReportExecuteQueriesRequest
     */
    queries?: Array<ReportDataSetQuery>;
    /**
     * Date/Time of the client submitted the request.  Can be used to resolve out of order query completion results
     * @type {string}
     * @memberof ReportExecuteQueriesRequest
     */
    request_dts?: string;
    /**
     * Security level to execute report under
     * @type {string}
     * @memberof ReportExecuteQueriesRequest
     */
    security_level?: ReportExecuteQueriesRequestSecurityLevelEnum;
}



/**
 * @export
 */
export const ReportExecuteQueriesRequestSecurityLevelEnum = {
    Standard: 'standard',
    Low: 'low',
    Medium: 'medium',
    High: 'high'
} as const;
export type ReportExecuteQueriesRequestSecurityLevelEnum = typeof ReportExecuteQueriesRequestSecurityLevelEnum[keyof typeof ReportExecuteQueriesRequestSecurityLevelEnum];


/**
 * Check if a given object implements the ReportExecuteQueriesRequest interface.
 */
export function instanceOfReportExecuteQueriesRequest(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReportExecuteQueriesRequestFromJSON(json: any): ReportExecuteQueriesRequest {
    return ReportExecuteQueriesRequestFromJSONTyped(json, false);
}

export function ReportExecuteQueriesRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportExecuteQueriesRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'client_uuid': !exists(json, 'client_uuid') ? undefined : json['client_uuid'],
        'connection_id': !exists(json, 'connection_id') ? undefined : json['connection_id'],
        'default_dataset_id': !exists(json, 'default_dataset_id') ? undefined : json['default_dataset_id'],
        'default_project_id': !exists(json, 'default_project_id') ? undefined : json['default_project_id'],
        'merchant_id': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'queries': !exists(json, 'queries') ? undefined : ((json['queries'] as Array<any>).map(ReportDataSetQueryFromJSON)),
        'request_dts': !exists(json, 'request_dts') ? undefined : json['request_dts'],
        'security_level': !exists(json, 'security_level') ? undefined : json['security_level'],
    };
}

export function ReportExecuteQueriesRequestToJSON(value?: ReportExecuteQueriesRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'client_uuid': value.client_uuid,
        'connection_id': value.connection_id,
        'default_dataset_id': value.default_dataset_id,
        'default_project_id': value.default_project_id,
        'merchant_id': value.merchant_id,
        'queries': value.queries === undefined ? undefined : ((value.queries as Array<any>).map(ReportDataSetQueryToJSON)),
        'request_dts': value.request_dts,
        'security_level': value.security_level,
    };
}

