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
    TaxProviderUltraCartState,
    TaxProviderUltraCartStateFromJSON,
    TaxProviderUltraCartStateFromJSONTyped,
    TaxProviderUltraCartStateToJSON,
} from './TaxProviderUltraCartState';
import {
    UltraCartConfig,
    UltraCartConfigFromJSON,
    UltraCartConfigFromJSONTyped,
    UltraCartConfigToJSON,
} from './UltraCartConfig';

/**
 * 
 * @export
 * @interface TaxProviderUltraCart
 */
export interface TaxProviderUltraCart {
    /**
     * 
     * @type {UltraCartConfig}
     * @memberof TaxProviderUltraCart
     */
    _configuration?: UltraCartConfig;
    /**
     * Description
     * @type {string}
     * @memberof TaxProviderUltraCart
     */
    description?: string;
    /**
     * Selected
     * @type {boolean}
     * @memberof TaxProviderUltraCart
     */
    selected?: boolean;
    /**
     * States in the union showing their management status
     * @type {Array<TaxProviderUltraCartState>}
     * @memberof TaxProviderUltraCart
     */
    states?: Array<TaxProviderUltraCartState>;
    /**
     * Title
     * @type {string}
     * @memberof TaxProviderUltraCart
     */
    title?: string;
}

export function TaxProviderUltraCartFromJSON(json: any): TaxProviderUltraCart {
    return TaxProviderUltraCartFromJSONTyped(json, false);
}

export function TaxProviderUltraCartFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaxProviderUltraCart {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        '_configuration': !exists(json, 'configuration') ? undefined : UltraCartConfigFromJSON(json['configuration']),
        'description': !exists(json, 'description') ? undefined : json['description'],
        'selected': !exists(json, 'selected') ? undefined : json['selected'],
        'states': !exists(json, 'states') ? undefined : ((json['states'] as Array<any>).map(TaxProviderUltraCartStateFromJSON)),
        'title': !exists(json, 'title') ? undefined : json['title'],
    };
}

export function TaxProviderUltraCartToJSON(value?: TaxProviderUltraCart | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'configuration': UltraCartConfigToJSON(value._configuration),
        'description': value.description,
        'selected': value.selected,
        'states': value.states === undefined ? undefined : ((value.states as Array<any>).map(TaxProviderUltraCartStateToJSON)),
        'title': value.title,
    };
}
