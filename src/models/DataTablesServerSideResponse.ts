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
    Customer,
    CustomerFromJSON,
    CustomerFromJSONTyped,
    CustomerToJSON,
} from './Customer';

/**
 * 
 * @export
 * @interface DataTablesServerSideResponse
 */
export interface DataTablesServerSideResponse {
    /**
     * 
     * @type {Array<Customer>}
     * @memberof DataTablesServerSideResponse
     */
    data?: Array<Customer>;
    /**
     * 
     * @type {number}
     * @memberof DataTablesServerSideResponse
     */
    draw?: number;
    /**
     * 
     * @type {number}
     * @memberof DataTablesServerSideResponse
     */
    recordsFiltered?: number;
    /**
     * 
     * @type {number}
     * @memberof DataTablesServerSideResponse
     */
    recordsTotal?: number;
}

export function DataTablesServerSideResponseFromJSON(json: any): DataTablesServerSideResponse {
    return DataTablesServerSideResponseFromJSONTyped(json, false);
}

export function DataTablesServerSideResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): DataTablesServerSideResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'data': !exists(json, 'data') ? undefined : ((json['data'] as Array<any>).map(CustomerFromJSON)),
        'draw': !exists(json, 'draw') ? undefined : json['draw'],
        'recordsFiltered': !exists(json, 'recordsFiltered') ? undefined : json['recordsFiltered'],
        'recordsTotal': !exists(json, 'recordsTotal') ? undefined : json['recordsTotal'],
    };
}

export function DataTablesServerSideResponseToJSON(value?: DataTablesServerSideResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'data': value.data === undefined ? undefined : ((value.data as Array<any>).map(CustomerToJSON)),
        'draw': value.draw,
        'recordsFiltered': value.recordsFiltered,
        'recordsTotal': value.recordsTotal,
    };
}

