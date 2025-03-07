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
    ChannelPartnerShipToPreference,
    ChannelPartnerShipToPreferenceFromJSON,
    ChannelPartnerShipToPreferenceFromJSONTyped,
    ChannelPartnerShipToPreferenceToJSON,
} from './ChannelPartnerShipToPreference';
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
 * @interface ChannelPartnerShipToPreferencesResponse
 */
export interface ChannelPartnerShipToPreferencesResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof ChannelPartnerShipToPreferencesResponse
     */
    error?: ModelError;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof ChannelPartnerShipToPreferencesResponse
     */
    metadata?: ResponseMetadata;
    /**
     * ship_to_preferences
     * @type {Array<ChannelPartnerShipToPreference>}
     * @memberof ChannelPartnerShipToPreferencesResponse
     */
    shipToPreferences?: Array<ChannelPartnerShipToPreference>;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof ChannelPartnerShipToPreferencesResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof ChannelPartnerShipToPreferencesResponse
     */
    warning?: Warning;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ChannelPartnerShipToPreferencesResponse)[] = ["error", "metadata", "shipToPreferences", "success", "warning"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ChannelPartnerShipToPreferencesResponse interface.
 */
export function instanceOfChannelPartnerShipToPreferencesResponse(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelPartnerShipToPreferencesResponseFromJSON(json: any): ChannelPartnerShipToPreferencesResponse {
    return ChannelPartnerShipToPreferencesResponseFromJSONTyped(json, false);
}

export function ChannelPartnerShipToPreferencesResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelPartnerShipToPreferencesResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'shipToPreferences': !exists(json, 'shipToPreferences') ? undefined : ((json['shipToPreferences'] as Array<any>).map(ChannelPartnerShipToPreferenceFromJSON)),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function ChannelPartnerShipToPreferencesResponseToJSON(value?: ChannelPartnerShipToPreferencesResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'shipToPreferences': value.shipToPreferences === undefined ? undefined : ((value.shipToPreferences as Array<any>).map(ChannelPartnerShipToPreferenceToJSON)),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

