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
 * @interface ChannelPartnerShipToPreference
 */
export interface ChannelPartnerShipToPreference {
    /**
     * Additional item ids to add as kit components to the order with a zero price.
     * @type {Array<string>}
     * @memberof ChannelPartnerShipToPreference
     */
    additional_kit_component_item_ids?: Array<string>;
    /**
     * The channel partner object identifier this preference is associated with
     * @type {number}
     * @memberof ChannelPartnerShipToPreference
     */
    channel_partner_oid?: number;
    /**
     * Object identifier for the ship to preference
     * @type {number}
     * @memberof ChannelPartnerShipToPreference
     */
    channel_partner_ship_to_preference_oid?: number;
    /**
     * A description that is meaningful to the merchant.
     * @type {string}
     * @memberof ChannelPartnerShipToPreference
     */
    description?: string;
    /**
     * The merchant id that owns the channel partner
     * @type {string}
     * @memberof ChannelPartnerShipToPreference
     */
    merchant_id?: string;
    /**
     * Alternate return policy to print on the packing slip.
     * @type {string}
     * @memberof ChannelPartnerShipToPreference
     */
    return_policy?: string;
    /**
     * The ship to EDI code that the preferences are for
     * @type {string}
     * @memberof ChannelPartnerShipToPreference
     */
    ship_to_edi_code?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof ChannelPartnerShipToPreference)[] = ["additional_kit_component_item_ids", "channel_partner_oid", "channel_partner_ship_to_preference_oid", "description", "merchant_id", "return_policy", "ship_to_edi_code"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the ChannelPartnerShipToPreference interface.
 */
export function instanceOfChannelPartnerShipToPreference(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function ChannelPartnerShipToPreferenceFromJSON(json: any): ChannelPartnerShipToPreference {
    return ChannelPartnerShipToPreferenceFromJSONTyped(json, false);
}

export function ChannelPartnerShipToPreferenceFromJSONTyped(json: any, ignoreDiscriminator: boolean): ChannelPartnerShipToPreference {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'additional_kit_component_item_ids': !exists(json, 'additional_kit_component_item_ids') ? undefined : json['additional_kit_component_item_ids'],
        'channel_partner_oid': !exists(json, 'channel_partner_oid') ? undefined : json['channel_partner_oid'],
        'channel_partner_ship_to_preference_oid': !exists(json, 'channel_partner_ship_to_preference_oid') ? undefined : json['channel_partner_ship_to_preference_oid'],
        'description': !exists(json, 'description') ? undefined : json['description'],
        'merchant_id': !exists(json, 'merchant_id') ? undefined : json['merchant_id'],
        'return_policy': !exists(json, 'return_policy') ? undefined : json['return_policy'],
        'ship_to_edi_code': !exists(json, 'ship_to_edi_code') ? undefined : json['ship_to_edi_code'],
    };
}

export function ChannelPartnerShipToPreferenceToJSON(value?: ChannelPartnerShipToPreference | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'additional_kit_component_item_ids': value.additional_kit_component_item_ids,
        'channel_partner_oid': value.channel_partner_oid,
        'channel_partner_ship_to_preference_oid': value.channel_partner_ship_to_preference_oid,
        'description': value.description,
        'merchant_id': value.merchant_id,
        'return_policy': value.return_policy,
        'ship_to_edi_code': value.ship_to_edi_code,
    };
}

