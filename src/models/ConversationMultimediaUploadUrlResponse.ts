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
    ConversationMultimediaUploadUrl,
    ConversationMultimediaUploadUrlFromJSON,
    ConversationMultimediaUploadUrlFromJSONTyped,
    ConversationMultimediaUploadUrlToJSON,
} from './ConversationMultimediaUploadUrl';
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
 * @interface ConversationMultimediaUploadUrlResponse
 */
export interface ConversationMultimediaUploadUrlResponse {
    /**
     * 
     * @type {ConversationMultimediaUploadUrl}
     * @memberof ConversationMultimediaUploadUrlResponse
     */
    conversation_multimedia_upload_url?: ConversationMultimediaUploadUrl;
    /**
     * 
     * @type {ModelError}
     * @memberof ConversationMultimediaUploadUrlResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ConversationMultimediaUploadUrlResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ConversationMultimediaUploadUrlResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof ConversationMultimediaUploadUrlResponse
     */
    warning?: Warning;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ConversationMultimediaUploadUrlResponse)[] = ["conversation_multimedia_upload_url", "error", "metadata", "success", "warning"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ConversationMultimediaUploadUrlResponse interface.
 */
export function instanceOfConversationMultimediaUploadUrlResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConversationMultimediaUploadUrlResponseFromJSON(json: any): ConversationMultimediaUploadUrlResponse {
    return ConversationMultimediaUploadUrlResponseFromJSONTyped(json, false);
}

export function ConversationMultimediaUploadUrlResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationMultimediaUploadUrlResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'conversation_multimedia_upload_url': !exists(json, 'conversation_multimedia_upload_url') ? undefined : ConversationMultimediaUploadUrlFromJSON(json['conversation_multimedia_upload_url']),
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ConversationMultimediaUploadUrlResponseToJSON(value?: ConversationMultimediaUploadUrlResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'conversation_multimedia_upload_url': ConversationMultimediaUploadUrlToJSON(value.conversation_multimedia_upload_url),
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

