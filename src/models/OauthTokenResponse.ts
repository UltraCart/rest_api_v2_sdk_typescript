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
/**
 * 
 * @export
 * @interface OauthTokenResponse
 */
export interface OauthTokenResponse {
    /**
     * Access token to use in OAuth authenticated API call
     * @type {string}
     * @memberof OauthTokenResponse
     */
    access_token?: string;
    /**
     * 
     * @type {string}
     * @memberof OauthTokenResponse
     */
    error?: string;
    /**
     * 
     * @type {string}
     * @memberof OauthTokenResponse
     */
    error_description?: string;
    /**
     * 
     * @type {string}
     * @memberof OauthTokenResponse
     */
    error_uri?: string;
    /**
     * The number of seconds since issuance when the access token will expire and need to be refreshed using the refresh token
     * @type {string}
     * @memberof OauthTokenResponse
     */
    expires_in?: string;
    /**
     * The refresh token that should be used to fetch a new access token when the expiration occurs
     * @type {string}
     * @memberof OauthTokenResponse
     */
    refresh_token?: string;
    /**
     * The scope of permissions associated with teh access token
     * @type {string}
     * @memberof OauthTokenResponse
     */
    scope?: string;
    /**
     * Type of token
     * @type {string}
     * @memberof OauthTokenResponse
     */
    token_type?: OauthTokenResponseTokenTypeEnum;
}


/**
 * @export
 */
export const OauthTokenResponseTokenTypeEnum = {
    Bearer: 'bearer'
} as const;
export type OauthTokenResponseTokenTypeEnum = typeof OauthTokenResponseTokenTypeEnum[keyof typeof OauthTokenResponseTokenTypeEnum];


export function OauthTokenResponseFromJSON(json: any): OauthTokenResponse {
    return OauthTokenResponseFromJSONTyped(json, false);
}

export function OauthTokenResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): OauthTokenResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'access_token': !exists(json, 'access_token') ? undefined : json['access_token'],
        'error': !exists(json, 'error') ? undefined : json['error'],
        'error_description': !exists(json, 'error_description') ? undefined : json['error_description'],
        'error_uri': !exists(json, 'error_uri') ? undefined : json['error_uri'],
        'expires_in': !exists(json, 'expires_in') ? undefined : json['expires_in'],
        'refresh_token': !exists(json, 'refresh_token') ? undefined : json['refresh_token'],
        'scope': !exists(json, 'scope') ? undefined : json['scope'],
        'token_type': !exists(json, 'token_type') ? undefined : json['token_type'],
    };
}

export function OauthTokenResponseToJSON(value?: OauthTokenResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'access_token': value.access_token,
        'error': value.error,
        'error_description': value.error_description,
        'error_uri': value.error_uri,
        'expires_in': value.expires_in,
        'refresh_token': value.refresh_token,
        'scope': value.scope,
        'token_type': value.token_type,
    };
}
