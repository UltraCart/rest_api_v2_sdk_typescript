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
    EmailFlow,
    EmailFlowFromJSON,
    EmailFlowFromJSONTyped,
    EmailFlowToJSON,
} from './EmailFlow';
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
 * @interface EmailFlowResponse
 */
export interface EmailFlowResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof EmailFlowResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {EmailFlow}
     * @memberof EmailFlowResponse
     */
    flow?: EmailFlow;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof EmailFlowResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof EmailFlowResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof EmailFlowResponse
     */
    warning?: Warning;
}



/**
 * Check if a given object implements the EmailFlowResponse interface.
 */
export function instanceOfEmailFlowResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function EmailFlowResponseFromJSON(json: any): EmailFlowResponse {
    return EmailFlowResponseFromJSONTyped(json, false);
}

export function EmailFlowResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmailFlowResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'flow': !exists(json, 'flow') ? undefined : EmailFlowFromJSON(json['flow']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function EmailFlowResponseToJSON(value?: EmailFlowResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'flow': EmailFlowToJSON(value.flow),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

