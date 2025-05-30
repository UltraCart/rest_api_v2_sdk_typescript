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
    TempMultimedia,
    TempMultimediaFromJSON,
    TempMultimediaFromJSONTyped,
    TempMultimediaToJSON,
} from './TempMultimedia';
import {
    Warning,
    WarningFromJSON,
    WarningFromJSONTyped,
    WarningToJSON,
} from './Warning';

/**
 * 
 * @export
 * @interface TempMultimediaResponse
 */
export interface TempMultimediaResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof TempMultimediaResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof TempMultimediaResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof TempMultimediaResponse
     */
    success?: boolean;
    /**
     * 
     * @type {TempMultimedia}
     * @memberof TempMultimediaResponse
     */
    temp_multimedia?: TempMultimedia;
    /**
     * 
     * @type {Warning}
     * @memberof TempMultimediaResponse
     */
    warning?: Warning;
}



/**
 * Check if a given object implements the TempMultimediaResponse interface.
 */
export function instanceOfTempMultimediaResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TempMultimediaResponseFromJSON(json: any): TempMultimediaResponse {
    return TempMultimediaResponseFromJSONTyped(json, false);
}

export function TempMultimediaResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): TempMultimediaResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'temp_multimedia': !exists(json, 'temp_multimedia') ? undefined : TempMultimediaFromJSON(json['temp_multimedia']),
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function TempMultimediaResponseToJSON(value?: TempMultimediaResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'temp_multimedia': TempMultimediaToJSON(value.temp_multimedia),
        'warning': WarningToJSON(value.warning),
    };
}

