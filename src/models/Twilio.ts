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
 * @interface Twilio
 */
export interface Twilio {
    /**
     * 
     * @type {string}
     * @memberof Twilio
     */
    account_sid?: string;
    /**
     * 
     * @type {string}
     * @memberof Twilio
     */
    api_key_id?: string;
    /**
     * 
     * @type {string}
     * @memberof Twilio
     */
    api_key_name?: string;
    /**
     * 
     * @type {string}
     * @memberof Twilio
     */
    auth_token?: string;
    /**
     * 
     * @type {string}
     * @memberof Twilio
     */
    esp_twilio_uuid?: string;
    /**
     * 
     * @type {string}
     * @memberof Twilio
     */
    inbound_twiml_app_sid?: string;
    /**
     * 
     * @type {string}
     * @memberof Twilio
     */
    outbound_twiml_app_sid?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof Twilio
     */
    phone_numbers?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof Twilio
     */
    twilio_workspace_sid?: string;
}



/**
 * Check if a given object implements the Twilio interface.
 */
export function instanceOfTwilio(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TwilioFromJSON(json: any): Twilio {
    return TwilioFromJSONTyped(json, false);
}

export function TwilioFromJSONTyped(json: any, ignoreDiscriminator: boolean): Twilio {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'account_sid': !exists(json, 'account_sid') ? undefined : json['account_sid'],
        'api_key_id': !exists(json, 'api_key_id') ? undefined : json['api_key_id'],
        'api_key_name': !exists(json, 'api_key_name') ? undefined : json['api_key_name'],
        'auth_token': !exists(json, 'auth_token') ? undefined : json['auth_token'],
        'esp_twilio_uuid': !exists(json, 'esp_twilio_uuid') ? undefined : json['esp_twilio_uuid'],
        'inbound_twiml_app_sid': !exists(json, 'inbound_twiml_app_sid') ? undefined : json['inbound_twiml_app_sid'],
        'outbound_twiml_app_sid': !exists(json, 'outbound_twiml_app_sid') ? undefined : json['outbound_twiml_app_sid'],
        'phone_numbers': !exists(json, 'phone_numbers') ? undefined : json['phone_numbers'],
        'twilio_workspace_sid': !exists(json, 'twilio_workspace_sid') ? undefined : json['twilio_workspace_sid'],
    };
}

export function TwilioToJSON(value?: Twilio | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'account_sid': value.account_sid,
        'api_key_id': value.api_key_id,
        'api_key_name': value.api_key_name,
        'auth_token': value.auth_token,
        'esp_twilio_uuid': value.esp_twilio_uuid,
        'inbound_twiml_app_sid': value.inbound_twiml_app_sid,
        'outbound_twiml_app_sid': value.outbound_twiml_app_sid,
        'phone_numbers': value.phone_numbers,
        'twilio_workspace_sid': value.twilio_workspace_sid,
    };
}

