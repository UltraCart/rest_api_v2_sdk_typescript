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
 * @interface OrderUtm
 */
export interface OrderUtm {
    /**
     * 
     * @type {number}
     * @memberof OrderUtm
     */
    attribution_first_click_subtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderUtm
     */
    attribution_first_click_total?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderUtm
     */
    attribution_last_click_subtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderUtm
     */
    attribution_last_click_total?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderUtm
     */
    attribution_linear_subtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderUtm
     */
    attribution_linear_total?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderUtm
     */
    attribution_position_based_subtotal?: number;
    /**
     * 
     * @type {number}
     * @memberof OrderUtm
     */
    attribution_position_based_total?: number;
    /**
     * Date/time that the click happened
     * @type {string}
     * @memberof OrderUtm
     */
    click_dts?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderUtm
     */
    facebook_ad_id?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderUtm
     */
    fbclid?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderUtm
     */
    gbraid?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderUtm
     */
    glcid?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderUtm
     */
    itm_campaign?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderUtm
     */
    itm_content?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderUtm
     */
    itm_id?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderUtm
     */
    itm_medium?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderUtm
     */
    itm_source?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderUtm
     */
    itm_term?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderUtm
     */
    msclkid?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderUtm
     */
    short_code?: string;
    /**
     * 
     * @type {boolean}
     * @memberof OrderUtm
     */
    short_code_backup?: boolean;
    /**
     * 
     * @type {string}
     * @memberof OrderUtm
     */
    ttclid?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderUtm
     */
    uc_message_id?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderUtm
     */
    utm_campaign?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderUtm
     */
    utm_content?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderUtm
     */
    utm_id?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderUtm
     */
    utm_medium?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderUtm
     */
    utm_source?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderUtm
     */
    utm_term?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderUtm
     */
    vmcid?: string;
    /**
     * 
     * @type {string}
     * @memberof OrderUtm
     */
    wbraid?: string;
}

// Define the constant array of keys
const MY_INTERFACE_KEYS: (keyof OrderUtm)[] = ["attribution_first_click_subtotal", "attribution_first_click_total", "attribution_last_click_subtotal", "attribution_last_click_total", "attribution_linear_subtotal", "attribution_linear_total", "attribution_position_based_subtotal", "attribution_position_based_total", "click_dts", "facebook_ad_id", "fbclid", "gbraid", "glcid", "itm_campaign", "itm_content", "itm_id", "itm_medium", "itm_source", "itm_term", "msclkid", "short_code", "short_code_backup", "ttclid", "uc_message_id", "utm_campaign", "utm_content", "utm_id", "utm_medium", "utm_source", "utm_term", "vmcid", "wbraid"];

// Exported function to check for excess properties
export function hasExcessProperties(obj: any): boolean {
  const objKeys = Object.keys(obj);
  return objKeys.some(key => !MY_INTERFACE_KEYS.includes(key as keyof MyInterface));
}



/**
 * Check if a given object implements the OrderUtm interface.
 */
export function instanceOfOrderUtm(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OrderUtmFromJSON(json: any): OrderUtm {
    return OrderUtmFromJSONTyped(json, false);
}

export function OrderUtmFromJSONTyped(json: any, ignoreDiscriminator: boolean): OrderUtm {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'attribution_first_click_subtotal': !exists(json, 'attribution_first_click_subtotal') ? undefined : json['attribution_first_click_subtotal'],
        'attribution_first_click_total': !exists(json, 'attribution_first_click_total') ? undefined : json['attribution_first_click_total'],
        'attribution_last_click_subtotal': !exists(json, 'attribution_last_click_subtotal') ? undefined : json['attribution_last_click_subtotal'],
        'attribution_last_click_total': !exists(json, 'attribution_last_click_total') ? undefined : json['attribution_last_click_total'],
        'attribution_linear_subtotal': !exists(json, 'attribution_linear_subtotal') ? undefined : json['attribution_linear_subtotal'],
        'attribution_linear_total': !exists(json, 'attribution_linear_total') ? undefined : json['attribution_linear_total'],
        'attribution_position_based_subtotal': !exists(json, 'attribution_position_based_subtotal') ? undefined : json['attribution_position_based_subtotal'],
        'attribution_position_based_total': !exists(json, 'attribution_position_based_total') ? undefined : json['attribution_position_based_total'],
        'click_dts': !exists(json, 'click_dts') ? undefined : json['click_dts'],
        'facebook_ad_id': !exists(json, 'facebook_ad_id') ? undefined : json['facebook_ad_id'],
        'fbclid': !exists(json, 'fbclid') ? undefined : json['fbclid'],
        'gbraid': !exists(json, 'gbraid') ? undefined : json['gbraid'],
        'glcid': !exists(json, 'glcid') ? undefined : json['glcid'],
        'itm_campaign': !exists(json, 'itm_campaign') ? undefined : json['itm_campaign'],
        'itm_content': !exists(json, 'itm_content') ? undefined : json['itm_content'],
        'itm_id': !exists(json, 'itm_id') ? undefined : json['itm_id'],
        'itm_medium': !exists(json, 'itm_medium') ? undefined : json['itm_medium'],
        'itm_source': !exists(json, 'itm_source') ? undefined : json['itm_source'],
        'itm_term': !exists(json, 'itm_term') ? undefined : json['itm_term'],
        'msclkid': !exists(json, 'msclkid') ? undefined : json['msclkid'],
        'short_code': !exists(json, 'short_code') ? undefined : json['short_code'],
        'short_code_backup': !exists(json, 'short_code_backup') ? undefined : json['short_code_backup'],
        'ttclid': !exists(json, 'ttclid') ? undefined : json['ttclid'],
        'uc_message_id': !exists(json, 'uc_message_id') ? undefined : json['uc_message_id'],
        'utm_campaign': !exists(json, 'utm_campaign') ? undefined : json['utm_campaign'],
        'utm_content': !exists(json, 'utm_content') ? undefined : json['utm_content'],
        'utm_id': !exists(json, 'utm_id') ? undefined : json['utm_id'],
        'utm_medium': !exists(json, 'utm_medium') ? undefined : json['utm_medium'],
        'utm_source': !exists(json, 'utm_source') ? undefined : json['utm_source'],
        'utm_term': !exists(json, 'utm_term') ? undefined : json['utm_term'],
        'vmcid': !exists(json, 'vmcid') ? undefined : json['vmcid'],
        'wbraid': !exists(json, 'wbraid') ? undefined : json['wbraid'],
    };
}

export function OrderUtmToJSON(value?: OrderUtm | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'attribution_first_click_subtotal': value.attribution_first_click_subtotal,
        'attribution_first_click_total': value.attribution_first_click_total,
        'attribution_last_click_subtotal': value.attribution_last_click_subtotal,
        'attribution_last_click_total': value.attribution_last_click_total,
        'attribution_linear_subtotal': value.attribution_linear_subtotal,
        'attribution_linear_total': value.attribution_linear_total,
        'attribution_position_based_subtotal': value.attribution_position_based_subtotal,
        'attribution_position_based_total': value.attribution_position_based_total,
        'click_dts': value.click_dts,
        'facebook_ad_id': value.facebook_ad_id,
        'fbclid': value.fbclid,
        'gbraid': value.gbraid,
        'glcid': value.glcid,
        'itm_campaign': value.itm_campaign,
        'itm_content': value.itm_content,
        'itm_id': value.itm_id,
        'itm_medium': value.itm_medium,
        'itm_source': value.itm_source,
        'itm_term': value.itm_term,
        'msclkid': value.msclkid,
        'short_code': value.short_code,
        'short_code_backup': value.short_code_backup,
        'ttclid': value.ttclid,
        'uc_message_id': value.uc_message_id,
        'utm_campaign': value.utm_campaign,
        'utm_content': value.utm_content,
        'utm_id': value.utm_id,
        'utm_medium': value.utm_medium,
        'utm_source': value.utm_source,
        'utm_term': value.utm_term,
        'vmcid': value.vmcid,
        'wbraid': value.wbraid,
    };
}

