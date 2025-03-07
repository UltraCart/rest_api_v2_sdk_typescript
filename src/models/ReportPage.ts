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
    ReportPageFilter,
    ReportPageFilterFromJSON,
    ReportPageFilterFromJSONTyped,
    ReportPageFilterToJSON,
} from './ReportPageFilter';
import {
    ReportPageVisualization,
    ReportPageVisualizationFromJSON,
    ReportPageVisualizationFromJSONTyped,
    ReportPageVisualizationToJSON,
} from './ReportPageVisualization';

/**
 * 
 * @export
 * @interface ReportPage
 */
export interface ReportPage {
    /**
     * 
     * @type {Array<ReportPageFilter>}
     * @memberof ReportPage
     */
    filters?: Array<ReportPageFilter>;
    /**
     * Height of the report page in inches
     * @type {number}
     * @memberof ReportPage
     */
    height?: number;
    /**
     * A JSON representation of the settings for this report
     * @type {string}
     * @memberof ReportPage
     */
    settings?: string;
    /**
     * 
     * @type {string}
     * @memberof ReportPage
     */
    title?: string;
    /**
     * Visualizations on the report page.
     * @type {Array<ReportPageVisualization>}
     * @memberof ReportPage
     */
    visualizations?: Array<ReportPageVisualization>;
    /**
     * Width of the report page in inches
     * @type {number}
     * @memberof ReportPage
     */
    width?: number;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ReportPage)[] = ["filters", "height", "settings", "title", "visualizations", "width"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ReportPage interface.
 */
export function instanceOfReportPage(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ReportPageFromJSON(json: any): ReportPage {
    return ReportPageFromJSONTyped(json, false);
}

export function ReportPageFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReportPage {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'filters': !exists(json, 'filters') ? undefined : ((json['filters'] as Array<any>).map(ReportPageFilterFromJSON)),
        'height': !exists(json, 'height') ? undefined : json['height'],
        'settings': !exists(json, 'settings') ? undefined : json['settings'],
        'title': !exists(json, 'title') ? undefined : json['title'],
        'visualizations': !exists(json, 'visualizations') ? undefined : ((json['visualizations'] as Array<any>).map(ReportPageVisualizationFromJSON)),
        'width': !exists(json, 'width') ? undefined : json['width'],
    };
}

export function ReportPageToJSON(value?: ReportPage | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'filters': value.filters === undefined ? undefined : ((value.filters as Array<any>).map(ReportPageFilterToJSON)),
        'height': value.height,
        'settings': value.settings,
        'title': value.title,
        'visualizations': value.visualizations === undefined ? undefined : ((value.visualizations as Array<any>).map(ReportPageVisualizationToJSON)),
        'width': value.width,
    };
}

