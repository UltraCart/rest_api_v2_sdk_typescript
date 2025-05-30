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
 * @interface GeocodeResponse
 */
export interface GeocodeResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof GeocodeResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {number}
     * @memberof GeocodeResponse
     */
    latitude?: number;
    /**
     * 
     * @type {number}
     * @memberof GeocodeResponse
     */
    longitude?: number;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof GeocodeResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof GeocodeResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof GeocodeResponse
     */
    warning?: Warning;
}



/**
 * Check if a given object implements the GeocodeResponse interface.
 */
export function instanceOfGeocodeResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function GeocodeResponseFromJSON(json: any): GeocodeResponse {
    return GeocodeResponseFromJSONTyped(json, false);
}

export function GeocodeResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): GeocodeResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'latitude': !exists(json, 'latitude') ? undefined : json['latitude'],
        'longitude': !exists(json, 'longitude') ? undefined : json['longitude'],
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function GeocodeResponseToJSON(value?: GeocodeResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'latitude': value.latitude,
        'longitude': value.longitude,
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

