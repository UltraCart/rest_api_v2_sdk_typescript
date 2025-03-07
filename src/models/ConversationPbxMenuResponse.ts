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
    ConversationPbxMenu,
    ConversationPbxMenuFromJSON,
    ConversationPbxMenuFromJSONTyped,
    ConversationPbxMenuToJSON,
} from './ConversationPbxMenu';
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
 * @interface ConversationPbxMenuResponse
 */
export interface ConversationPbxMenuResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof ConversationPbxMenuResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ConversationPbxMenu}
     * @memberof ConversationPbxMenuResponse
     */
    menu?: ConversationPbxMenu;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ConversationPbxMenuResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ConversationPbxMenuResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof ConversationPbxMenuResponse
     */
    warning?: Warning;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ConversationPbxMenuResponse)[] = ["error", "menu", "metadata", "success", "warning"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ConversationPbxMenuResponse interface.
 */
export function instanceOfConversationPbxMenuResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ConversationPbxMenuResponseFromJSON(json: any): ConversationPbxMenuResponse {
    return ConversationPbxMenuResponseFromJSONTyped(json, false);
}

export function ConversationPbxMenuResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ConversationPbxMenuResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'menu': !exists(json, 'menu') ? undefined : ConversationPbxMenuFromJSON(json['menu']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ConversationPbxMenuResponseToJSON(value?: ConversationPbxMenuResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'menu': ConversationPbxMenuToJSON(value.menu),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

