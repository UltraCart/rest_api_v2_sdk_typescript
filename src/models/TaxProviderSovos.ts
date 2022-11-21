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
    SovosConfig,
    SovosConfigFromJSON,
    SovosConfigFromJSONTyped,
    SovosConfigToJSON,
} from './SovosConfig';

/**
 * 
 * @export
 * @interface TaxProviderSovos
 */
export interface TaxProviderSovos {
    /**
     * 
     * @type {SovosConfig}
     * @memberof TaxProviderSovos
     */
    _configuration?: SovosConfig;
    /**
     * Description
     * @type {string}
     * @memberof TaxProviderSovos
     */
    description?: string;
    /**
     * Selected
     * @type {boolean}
     * @memberof TaxProviderSovos
     */
    selected?: boolean;
    /**
     * Title
     * @type {string}
     * @memberof TaxProviderSovos
     */
    title?: string;
}

export function TaxProviderSovosFromJSON(json: any): TaxProviderSovos {
    return TaxProviderSovosFromJSONTyped(json, false);
}

export function TaxProviderSovosFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxProviderSovos {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_configuration': !exists(json, 'configuration') ? undefined : SovosConfigFromJSON(json['configuration']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'selected': !exists(json, 'selected') ? undefined : json['selected'],
        'title': !exists(json, 'title') ? undefined : json['title'],
    };
}

export function TaxProviderSovosToJSON(value?: TaxProviderSovos | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'configuration': SovosConfigToJSON(value._configuration),
        'description': value.description,
        'selected': value.selected,
        'title': value.title,
    };
}
