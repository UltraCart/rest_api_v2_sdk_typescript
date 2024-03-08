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
    ConversationPbxPhoneNumber,
    ConversationPbxPhoneNumberFromJSON,
    ConversationPbxPhoneNumberFromJSONTyped,
    ConversationPbxPhoneNumberToJSON,
} from './ConversationPbxPhoneNumber';
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
 * @interface ConversationPbxPhoneNumbersResponse
 */
export interface ConversationPbxPhoneNumbersResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof ConversationPbxPhoneNumbersResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ConversationPbxPhoneNumbersResponse
     */
    metadata?: ResponseMetadata;
    /**
     * 
     * @type {Array<ConversationPbxPhoneNumber>}
     * @memberof ConversationPbxPhoneNumbersResponse
     */
    phoneNumbers?: Array<ConversationPbxPhoneNumber>;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ConversationPbxPhoneNumbersResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof ConversationPbxPhoneNumbersResponse
     */
    warning?: Warning;
}

export function ConversationPbxPhoneNumbersResponseFromJSON(json: any): ConversationPbxPhoneNumbersResponse {
    return ConversationPbxPhoneNumbersResponseFromJSONTyped(json, false);
}

export function ConversationPbxPhoneNumbersResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationPbxPhoneNumbersResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'phoneNumbers': !exists(json, 'phoneNumbers') ? undefined : ((json['phoneNumbers'] as Array<any>).map(ConversationPbxPhoneNumberFromJSON)),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ConversationPbxPhoneNumbersResponseToJSON(value?: ConversationPbxPhoneNumbersResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'phoneNumbers': value.phoneNumbers === undefined ? undefined : ((value.phoneNumbers as Array<any>).map(ConversationPbxPhoneNumberToJSON)),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

