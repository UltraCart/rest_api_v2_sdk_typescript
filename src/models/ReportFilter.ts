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
    ReportFilterConnection,
    ReportFilterConnectionFromJSON,
    ReportFilterConnectionFromJSONTyped,
    ReportFilterConnectionToJSON,
} from './ReportFilterConnection';

/**
 * 
 * @export
 * @interface ReportFilter
 */
export interface ReportFilter {
    /**
     * How this filter connects to the data sources and columns
     * @type {Array<ReportFilterConnection>}
     * @memberof ReportFilter
     */
    connections?: Array<ReportFilterConnection>;
    /**
     * 
     * @type {string}
     * @memberof ReportFilter
     */
    name?: string;
    /**
     * The timezone that the date range is querying on.
     * @type {string}
     * @memberof ReportFilter
     */
    timezone?: string;
    /**
     * Type of filter
     * @type {string}
     * @memberof ReportFilter
     */
    type?: ReportFilterTypeEnum;
    /**
     * Unique UUID assigned to the filter.  Assists when returning values that the filter can use.
     * @type {string}
     * @memberof ReportFilter
     */
    uuid?: string;
    /**
     * The selected values for the filter.  When used, some type conversion will need to occur.
     * @type {Array<string>}
     * @memberof ReportFilter
     */
    values?: Array<string>;
}


/**
 * @export
 */
export const ReportFilterTypeEnum = {
    DateRange: 'date range',
    DateComparison: 'date comparison',
    SingleValue: 'single value',
    MultipleValues: 'multiple values'
} as const;
export type ReportFilterTypeEnum = typeof ReportFilterTypeEnum[keyof typeof ReportFilterTypeEnum];


export function ReportFilterFromJSON(json: any): ReportFilter {
    return ReportFilterFromJSONTyped(json, false);
}

export function ReportFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportFilter {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'connections': !exists(json, 'connections') ? undefined : ((json['connections'] as Array<any>).map(ReportFilterConnectionFromJSON)),
        'name': !exists(json, 'name') ? undefined : json['name'],
        'timezone': !exists(json, 'timezone') ? undefined : json['timezone'],
        'type': !exists(json, 'type') ? undefined : json['type'],
        'uuid': !exists(json, 'uuid') ? undefined : json['uuid'],
        'values': !exists(json, 'values') ? undefined : json['values'],
    };
}

export function ReportFilterToJSON(value?: ReportFilter | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'connections': value.connections === undefined ? undefined : ((value.connections as Array<any>).map(ReportFilterConnectionToJSON)),
        'name': value.name,
        'timezone': value.timezone,
        'type': value.type,
        'uuid': value.uuid,
        'values': value.values,
    };
}

