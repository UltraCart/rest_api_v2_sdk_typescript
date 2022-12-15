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
    ModelError,
    ModelErrorFromJSON,
    ModelErrorFromJSONTyped,
    ModelErrorToJSON,
} from './ModelError';
import {
    ResponseMetadata,
    ResponseMetadataFromJSON,
    ResponseMetadataFromJSONTyped,
    ResponseMetadataToJSON,
} from './ResponseMetadata';
import {
    Warning,
    WarningFromJSON,
    WarningFromJSONTyped,
    WarningToJSON,
} from './Warning';

/**
 * 
 * @export
 * @interface ConversationAutocompleteResponse
 */
export interface ConversationAutocompleteResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof ConversationAutocompleteResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {string}
     * @memberof ConversationAutocompleteResponse
     */
    field?: string;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ConversationAutocompleteResponse
     */
    metadata?: ResponseMetadata;
    /**
     * 
     * @type {Array<string>}
     * @memberof ConversationAutocompleteResponse
     */
    results?: Array<string>;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ConversationAutocompleteResponse
     */
    success?: boolean;
    /**
     * 
     * @type {string}
     * @memberof ConversationAutocompleteResponse
     */
    term?: string;
    /**
     * 
     * @type {Warning}
     * @memberof ConversationAutocompleteResponse
     */
    warning?: Warning;
}

export function ConversationAutocompleteResponseFromJSON(json: any): ConversationAutocompleteResponse {
    return ConversationAutocompleteResponseFromJSONTyped(json, false);
}

export function ConversationAutocompleteResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationAutocompleteResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'field': !exists(json, 'field') ? undefined : json['field'],
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'results': !exists(json, 'results') ? undefined : json['results'],
        'success': !exists(json, 'success') ? undefined : json['success'],
        'term': !exists(json, 'term') ? undefined : json['term'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ConversationAutocompleteResponseToJSON(value?: ConversationAutocompleteResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'field': value.field,
        'metadata': ResponseMetadataToJSON(value.metadata),
        'results': value.results,
        'success': value.success,
        'term': value.term,
        'warning': WarningToJSON(value.warning),
    };
}

