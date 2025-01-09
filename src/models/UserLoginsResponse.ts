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
    UserLogin,
    UserLoginFromJSON,
    UserLoginFromJSONTyped,
    UserLoginToJSON,
} from './UserLogin';
import {
    Warning,
    WarningFromJSON,
    WarningFromJSONTyped,
    WarningToJSON,
} from './Warning';

/**
 * 
 * @export
 * @interface UserLoginsResponse
 */
export interface UserLoginsResponse {
    /**
     * 
     * @type {ModelError}
     * @memberof UserLoginsResponse
     */
    error?: ModelError;
    /**
     * Logins
     * @type {Array<UserLogin>}
     * @memberof UserLoginsResponse
     */
    logins?: Array<UserLogin>;
    /**
     * 
     * @type {ResponseMetadata}
     * @memberof UserLoginsResponse
     */
    metadata?: ResponseMetadata;
    /**
     * Indicates if API call was successful
     * @type {boolean}
     * @memberof UserLoginsResponse
     */
    success?: boolean;
    /**
     * 
     * @type {Warning}
     * @memberof UserLoginsResponse
     */
    warning?: Warning;
}

export function UserLoginsResponseFromJSON(json: any): UserLoginsResponse {
    return UserLoginsResponseFromJSONTyped(json, false);
}

export function UserLoginsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserLoginsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'error': !exists(json, 'error') ? undefined : ModelErrorFromJSON(json['error']),
        'logins': !exists(json, 'logins') ? undefined : ((json['logins'] as Array<any>).map(UserLoginFromJSON)),
        'metadata': !exists(json, 'metadata') ? undefined : ResponseMetadataFromJSON(json['metadata']),
        'success': !exists(json, 'success') ? undefined : json['success'],
        'warning': !exists(json, 'warning') ? undefined : WarningFromJSON(json['warning']),
    };
}

export function UserLoginsResponseToJSON(value?: UserLoginsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'error': ModelErrorToJSON(value.error),
        'logins': value.logins === undefined ? undefined : ((value.logins as Array<any>).map(UserLoginToJSON)),
        'metadata': ResponseMetadataToJSON(value.metadata),
        'success': value.success,
        'warning': WarningToJSON(value.warning),
    };
}

