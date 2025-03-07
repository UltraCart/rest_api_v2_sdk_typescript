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
 * @interface UserLogin
 */
export interface UserLogin {
    /**
     * IP Address
     * @type {string}
     * @memberof UserLogin
     */
    ip_address?: string;
    /**
     * login
     * @type {string}
     * @memberof UserLogin
     */
    login?: string;
    /**
     * Login date/time
     * @type {string}
     * @memberof UserLogin
     */
    login_dts?: string;
    /**
     * User Agent
     * @type {string}
     * @memberof UserLogin
     */
    user_agent?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof UserLogin)[] = ["ip_address", "login", "login_dts", "user_agent"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the UserLogin interface.
 */
export function instanceOfUserLogin(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function UserLoginFromJSON(json: any): UserLogin {
    return UserLoginFromJSONTyped(json, false);
}

export function UserLoginFromJSONTyped(json: any, ignoreDiscriminator: boolean): UserLogin {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'ip_address': !exists(json, 'ip_address') ? undefined : json['ip_address'],
        'login': !exists(json, 'login') ? undefined : json['login'],
        'login_dts': !exists(json, 'login_dts') ? undefined : json['login_dts'],
        'user_agent': !exists(json, 'user_agent') ? undefined : json['user_agent'],
    };
}

export function UserLoginToJSON(value?: UserLogin | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'ip_address': value.ip_address,
        'login': value.login,
        'login_dts': value.login_dts,
        'user_agent': value.user_agent,
    };
}

