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
 * @interface ScreenRecordingFilterIpSearch
 */
export interface ScreenRecordingFilterIpSearch {
    /**
     * 
     * @type {boolean}
     * @memberof ScreenRecordingFilterIpSearch
     */
    does_not_exist?: boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ScreenRecordingFilterIpSearch
     */
    _exists?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ScreenRecordingFilterIpSearch
     */
    is?: string;
    /**
     * 
     * @type {string}
     * @memberof ScreenRecordingFilterIpSearch
     */
    is_not?: string;
}

export function ScreenRecordingFilterIpSearchFromJSON(json: any): ScreenRecordingFilterIpSearch {
    return ScreenRecordingFilterIpSearchFromJSONTyped(json, false);
}

export function ScreenRecordingFilterIpSearchFromJSONTyped(json: any, ignoreDiscriminator: boolean): ScreenRecordingFilterIpSearch {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'does_not_exist': !exists(json, 'does_not_exist') ? undefined : json['does_not_exist'],
        '_exists': !exists(json, 'exists') ? undefined : json['exists'],
        'is': !exists(json, 'is') ? undefined : json['is'],
        'is_not': !exists(json, 'is_not') ? undefined : json['is_not'],
    };
}

export function ScreenRecordingFilterIpSearchToJSON(value?: ScreenRecordingFilterIpSearch | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'does_not_exist': value.does_not_exist,
        'exists': value._exists,
        'is': value.is,
        'is_not': value.is_not,
    };
}
