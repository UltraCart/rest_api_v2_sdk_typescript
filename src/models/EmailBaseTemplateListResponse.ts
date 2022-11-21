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
 * @interface EmailBaseTemplateListResponse
 */
export interface EmailBaseTemplateListResponse {
    /**
     * 
     * @type {Array<string>}
     * @memberof EmailBaseTemplateListResponse
     */
    templatePaths?: Array<string>;
}

export function EmailBaseTemplateListResponseFromJSON(json: any): EmailBaseTemplateListResponse {
    return EmailBaseTemplateListResponseFromJSONTyped(json, false);
}

export function EmailBaseTemplateListResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailBaseTemplateListResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'templatePaths': !exists(json, 'templatePaths') ? undefined : json['templatePaths'],
    };
}

export function EmailBaseTemplateListResponseToJSON(value?: EmailBaseTemplateListResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'templatePaths': value.templatePaths,
    };
}
